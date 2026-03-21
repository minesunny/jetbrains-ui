import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { Tree, TreeItem, type TreeContextMenuNode } from '../index';

describe('Tree', () => {
  it('renders root items and keeps nested items collapsed by default', () => {
    render(
      <Tree>
        <TreeItem value="root" label="Root">
          <TreeItem value="child" label="Child" />
        </TreeItem>
      </Tree>,
    );

    expect(screen.getByText('Root')).toBeInTheDocument();
    expect(screen.queryByText('Child')).not.toBeInTheDocument();
  });

  it('expands nested items when disclosure is clicked', async () => {
    const user = userEvent.setup();

    render(
      <Tree>
        <TreeItem value="root" label="Root">
          <TreeItem value="child" label="Child" />
        </TreeItem>
      </Tree>,
    );

    const disclosure = document.querySelector(
      '[data-slot="jb-tree-item-disclosure"][data-value="root"]',
    ) as HTMLButtonElement;

    await user.click(disclosure);

    expect(screen.getByText('Child')).toBeInTheDocument();
  });

  it('calls onSelectedIdChange when selecting an item', async () => {
    const user = userEvent.setup();
    const onSelectedIdChange = vi.fn();

    render(
      <Tree
        defaultExpandedIds={['root']}
        onSelectedIdChange={onSelectedIdChange}
      >
        <TreeItem value="root" label="Root">
          <TreeItem value="child" label="Child" />
        </TreeItem>
      </Tree>,
    );

    const item = document.querySelector(
      '[data-slot="jb-tree-item-button"][data-value="child"]',
    ) as HTMLDivElement;

    await user.click(item);

    expect(onSelectedIdChange).toHaveBeenCalledWith('child');
  });

  it('does not select disabled items', async () => {
    const user = userEvent.setup();
    const onSelectedIdChange = vi.fn();

    render(
      <Tree onSelectedIdChange={onSelectedIdChange}>
        <TreeItem value="root" label="Root" disabled />
      </Tree>,
    );

    const item = document.querySelector(
      '[data-slot="jb-tree-item-button"][data-value="root"]',
    ) as HTMLDivElement;

    await user.click(item);

    expect(item).toHaveAttribute('data-disabled', 'true');
    expect(onSelectedIdChange).not.toHaveBeenCalled();
  });

  it('supports keyboard expand and collapse on parent item', async () => {
    const user = userEvent.setup();

    render(
      <Tree>
        <TreeItem value="root" label="Root">
          <TreeItem value="child" label="Child" />
        </TreeItem>
      </Tree>,
    );

    const parent = document.querySelector(
      '[data-slot="jb-tree-item-button"][data-value="root"]',
    ) as HTMLDivElement;

    parent.focus();
    await user.keyboard('{ArrowRight}');

    expect(screen.getByText('Child')).toBeInTheDocument();

    await user.keyboard('{ArrowLeft}');

    await waitFor(() => {
      expect(screen.queryByText('Child')).not.toBeInTheDocument();
    });
  });

  it('builds shared context menu items from the current tree node', async () => {
    const contextMenu = vi.fn((node: TreeContextMenuNode) => [
      {
        key: 'rename',
        label: `Rename ${node.label}`,
        iconName: 'edit' as const,
      },
    ]);

    render(
      <Tree contextMenu={contextMenu}>
        <TreeItem value="root" label="Root">
          <TreeItem value="child" label="Child" />
        </TreeItem>
      </Tree>,
    );

    const rootItem = document.querySelector(
      '[data-slot="jb-tree-item-button"][data-value="root"]',
    ) as HTMLDivElement;

    fireEvent.contextMenu(rootItem);

    expect(contextMenu).toHaveBeenCalledWith(
      expect.objectContaining({
        id: 'root',
        value: 'root',
        label: 'Root',
        hasChildren: true,
        selected: false,
      }),
    );
    expect(await screen.findByText('Rename Root')).toBeInTheDocument();
  });

  it('renders disabled items, separators and submenus from context menu config', async () => {
    const user = userEvent.setup();

    render(
      <Tree
        contextMenu={(node) => [
          {
            key: 'delete',
            label: 'Delete',
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
      >
        <TreeItem value="root" label="Root" disabled />
      </Tree>,
    );

    const rootItem = document.querySelector(
      '[data-slot="jb-tree-item-button"][data-value="root"]',
    ) as HTMLDivElement;

    fireEvent.contextMenu(rootItem);

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

  it('invokes context menu item handlers with current tree node info', async () => {
    const user = userEvent.setup();
    const onRename = vi.fn();

    render(
      <Tree
        contextMenu={() => [
          {
            key: 'rename',
            label: 'Rename',
            iconName: 'edit',
            onSelect: onRename,
          },
        ]}
      >
        <TreeItem value="root" label="Root" />
      </Tree>,
    );

    const rootItem = document.querySelector(
      '[data-slot="jb-tree-item-button"][data-value="root"]',
    ) as HTMLDivElement;

    fireEvent.contextMenu(rootItem);
    await user.click(await screen.findByText('Rename'));

    expect(onRename).toHaveBeenCalledWith(
      expect.objectContaining({
        id: 'root',
        label: 'Root',
      }),
    );
  });
});
