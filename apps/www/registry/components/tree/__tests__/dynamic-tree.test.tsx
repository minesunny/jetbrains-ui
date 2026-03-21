import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import {
  DynamicTree,
  type DynamicTreeContextMenuNode,
  type DynamicTreeItemData,
} from '../index';

type TreeFixture = {
  items: Record<string, DynamicTreeItemData>;
  children: Record<string, string[]>;
};

function createLoader(fixture: TreeFixture) {
  return {
    getItem: vi.fn(async (itemId: string) => {
      await Promise.resolve();
      const item = fixture.items[itemId];

      if (!item) {
        return {
          label: itemId,
        };
      }

      return item;
    }),
    getChildren: vi.fn(async (itemId: string) => {
      await Promise.resolve();
      return fixture.children[itemId] ?? [];
    }),
  };
}

const fixture: TreeFixture = {
  items: {
    root: {
      label: 'workspace',
      isFolder: true,
    },
    src: {
      label: 'src',
      isFolder: true,
    },
    readme: {
      label: 'README.md',
      disabled: true,
    },
    index: {
      label: 'index.tsx',
    },
  },
  children: {
    root: ['src', 'readme'],
    src: ['index'],
  },
};

describe('DynamicTree', () => {
  it('loads and renders root nodes from async loader', async () => {
    const loader = createLoader(fixture);

    render(<DynamicTree rootItemId="root" dataLoader={loader} />);

    expect(await screen.findByText('src')).toBeInTheDocument();
    expect(screen.getByText('README.md')).toBeInTheDocument();
    expect(screen.queryByText('index.tsx')).not.toBeInTheDocument();
    expect(loader.getChildren).toHaveBeenCalledWith('root');
  });

  it('loads nested nodes when folder is expanded', async () => {
    const user = userEvent.setup();
    const loader = createLoader(fixture);

    render(<DynamicTree rootItemId="root" dataLoader={loader} />);

    await screen.findByText('src');

    const disclosure = await waitFor(() => {
      const element = document.querySelector(
        '[data-slot="jb-tree-item-disclosure"][data-value="src"]',
      ) as HTMLButtonElement | null;

      expect(element).toBeTruthy();
      return element as HTMLButtonElement;
    });

    await user.click(disclosure);

    expect(await screen.findByText('index.tsx')).toBeInTheDocument();
    expect(loader.getChildren).toHaveBeenCalledWith('src');
  });

  it('emits selected id when selecting an enabled item', async () => {
    const user = userEvent.setup();
    const onSelectedIdChange = vi.fn();
    const loader = createLoader(fixture);

    render(
      <DynamicTree
        rootItemId="root"
        dataLoader={loader}
        defaultExpandedIds={['src']}
        onSelectedIdChange={onSelectedIdChange}
      />,
    );

    await screen.findByText('index.tsx');

    const indexItem = document.querySelector(
      '[data-slot="jb-tree-item-button"][data-value="index"]',
    ) as HTMLDivElement;

    await user.click(indexItem);

    expect(onSelectedIdChange).toHaveBeenCalledWith('index');
    expect(indexItem).toHaveAttribute('data-selected', 'true');
  });

  it('does not select disabled items', async () => {
    const user = userEvent.setup();
    const onSelectedIdChange = vi.fn();
    const loader = createLoader(fixture);

    render(
      <DynamicTree
        rootItemId="root"
        dataLoader={loader}
        onSelectedIdChange={onSelectedIdChange}
      />,
    );

    await screen.findByText('README.md');

    const readmeItem = document.querySelector(
      '[data-slot="jb-tree-item-button"][data-value="readme"]',
    ) as HTMLDivElement;

    await user.click(readmeItem);

    expect(readmeItem).toHaveAttribute('data-disabled', 'true');
    expect(onSelectedIdChange).not.toHaveBeenCalled();
  });

  it('builds shared context menu items from the current node', async () => {
    const contextMenu = vi.fn((node: DynamicTreeContextMenuNode) => [
      {
        key: 'rename',
        label: `Rename ${node.label}`,
        iconName: 'edit' as const,
      },
    ]);
    const loader = createLoader(fixture);

    render(
      <DynamicTree
        rootItemId="root"
        dataLoader={loader}
        contextMenu={contextMenu}
      />,
    );

    await screen.findByText('src');

    const srcItem = document.querySelector(
      '[data-slot="jb-tree-item-button"][data-value="src"]',
    ) as HTMLDivElement;

    fireEvent.contextMenu(srcItem);

    expect(contextMenu).toHaveBeenCalledWith(
      expect.objectContaining({
        id: 'src',
        label: 'src',
        isFolder: true,
        selected: false,
      }),
    );
    expect(await screen.findByText('Rename src')).toBeInTheDocument();
  });

  it('renders disabled, separator and submenu items from context menu config', async () => {
    const user = userEvent.setup();
    const loader = createLoader(fixture);

    render(
      <DynamicTree
        rootItemId="root"
        dataLoader={loader}
        contextMenu={(node) => [
          {
            key: 'delete',
            text: 'Delete',
            disabled: node.disabled,
            separator: true,
          },
          {
            key: 'more',
            label: 'More Actions',
            children: [
              {
                key: 'copy',
                label: 'Copy Path',
                iconName: 'copy',
              },
            ],
          },
        ]}
      />,
    );

    await screen.findByText('README.md');

    const readmeItem = document.querySelector(
      '[data-slot="jb-tree-item-button"][data-value="readme"]',
    ) as HTMLDivElement;

    fireEvent.contextMenu(readmeItem);

    const deleteItemLabel = await screen.findByText('Delete');
    const deleteItem = deleteItemLabel.closest(
      '[data-slot="context-menu-item"]',
    );

    expect(deleteItem).toHaveAttribute('data-disabled', '');
    expect(
      document.querySelectorAll('[data-slot="context-menu-separator"]').length,
    ).toBeGreaterThan(0);

    await user.hover(await screen.findByText('More Actions'));

    expect(await screen.findByText('Copy Path')).toBeInTheDocument();
  });

  it('invokes context menu item handlers with current node info', async () => {
    const user = userEvent.setup();
    const onRename = vi.fn();
    const loader = createLoader(fixture);

    render(
      <DynamicTree
        rootItemId="root"
        dataLoader={loader}
        contextMenu={() => [
          {
            key: 'rename',
            label: 'Rename',
            iconName: 'edit',
            onSelect: onRename,
          },
        ]}
      />,
    );

    await screen.findByText('src');

    const srcItem = document.querySelector(
      '[data-slot="jb-tree-item-button"][data-value="src"]',
    ) as HTMLDivElement;

    fireEvent.contextMenu(srcItem);
    await user.click(await screen.findByText('Rename'));

    expect(onRename).toHaveBeenCalledWith(
      expect.objectContaining({
        id: 'src',
        label: 'src',
      }),
    );
  });
});
