import * as React from 'react';
import {
  act,
  fireEvent,
  render,
  screen,
  waitFor,
} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import {
  hotkeysCoreFeature,
  selectionFeature,
  type TreeDataLoader,
} from '@headless-tree/core';
import { useTree } from '@headless-tree/react';
import { ContextMenuItem } from '@/registry/components/context-menu';

import {
  DynamicTree,
  type DynamicTreeContextMenuComponent,
  asyncDataLoaderFeature,
  type DynamicTreeItemComponent,
  type DynamicTreeItemProps,
  type DynamicTreeItemData,
} from '../index';

type TreeFixture = {
  items: Record<string, DynamicTreeItemData>;
  children: Record<string, string[]>;
};

type DynamicTreeLoadedItem<
  TItem extends DynamicTreeItemData = DynamicTreeItemData,
> = {
  id: string;
  data: TItem;
};

const DYNAMIC_TREE_ROOT_ITEM_ID = '__dynamic-tree-test-root__';

function createLoadData(fixture: TreeFixture) {
  return vi.fn(
    async (
      itemId: string | null,
    ): Promise<DynamicTreeLoadedItem<DynamicTreeItemData>[]> => {
      await Promise.resolve();

      return (fixture.children[itemId ?? 'root'] ?? []).map((childId) => ({
        id: childId,
        data: fixture.items[childId] ?? {
          label: childId,
        },
      }));
    },
  );
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

function DynamicTreeTestHarness({
  loadData,
  width,
  height,
  item,
  contextMenu,
}: {
  loadData: (
    itemId: string | null,
  ) =>
    | DynamicTreeLoadedItem<DynamicTreeItemData>[]
    | Promise<DynamicTreeLoadedItem<DynamicTreeItemData>[]>;
  width?: React.CSSProperties['width'];
  height?: React.CSSProperties['height'];
  item?: DynamicTreeItemComponent<DynamicTreeItemData>;
  contextMenu?: DynamicTreeContextMenuComponent<DynamicTreeItemData>;
}) {
  const loadedItemsRef = React.useRef<Record<string, DynamicTreeItemData>>({});
  const dataLoader = React.useMemo<TreeDataLoader<DynamicTreeItemData>>(
    () => ({
      getItem: async (itemId: string) => {
        const [realItemId] = itemId.split('@');

        if (realItemId === DYNAMIC_TREE_ROOT_ITEM_ID) {
          return {
            label: 'Tree',
          };
        }

        return (
          loadedItemsRef.current[realItemId] ??
          ({
            label: realItemId,
          } satisfies DynamicTreeItemData)
        );
      },
      getChildrenWithData: async (itemId: string) =>
        loadData(
          itemId.split('@')[0] === DYNAMIC_TREE_ROOT_ITEM_ID
            ? null
            : itemId.split('@')[0],
        ),
    }),
    [loadData],
  );
  const tree = useTree<DynamicTreeItemData>({
    rootItemId: DYNAMIC_TREE_ROOT_ITEM_ID,
    dataLoader,
    isItemFolder: (item) => Boolean(item.getItemData()?.isFolder),
    getItemName: (item) => item.getItemData()?.label ?? item.getId(),
    onLoadedItem: (itemId, item) => {
      loadedItemsRef.current[itemId] = item;
    },
    createLoadingItemData: () => ({}),
    features: [asyncDataLoaderFeature, selectionFeature, hotkeysCoreFeature],
  });

  return (
    <DynamicTree
      containerProps={
        tree.getContainerProps('Tree') as React.ComponentPropsWithoutRef<'div'>
      }
      items={tree.getItems()}
      item={item}
      contextMenu={contextMenu}
      width={width}
      height={height}
    />
  );
}

describe('DynamicTree', () => {
  it('applies width and height constraints to the scroll area wrapper', () => {
    const loadData = createLoadData(fixture);

    render(
      <DynamicTreeTestHarness
        loadData={loadData}
        width="260px"
        height="140px"
      />,
    );

    const scrollArea = document.querySelector(
      '[data-slot="tree-scroll-area"]',
    ) as HTMLElement;

    expect(scrollArea.style.width).toBe('260px');
    expect(scrollArea.style.height).toBe('140px');
  });

  it('loads and renders root nodes from loadData', async () => {
    const loadData = createLoadData(fixture);

    render(<DynamicTreeTestHarness loadData={loadData} />);

    expect(await screen.findByText('src')).toBeInTheDocument();
    expect(screen.getByText('README.md')).toBeInTheDocument();
    expect(screen.queryByText('index.tsx')).not.toBeInTheDocument();
    expect(loadData).toHaveBeenCalledWith(null);
  });

  it('loads nested nodes when a folder is expanded', async () => {
    const user = userEvent.setup();
    const loadData = createLoadData(fixture);

    render(<DynamicTreeTestHarness loadData={loadData} />);

    await screen.findByText('src');

    const disclosure = await waitFor(() => {
      const element = document.querySelector(
        '[data-slot="tree-item-disclosure"][data-value="src"]',
      ) as HTMLButtonElement | null;

      expect(element).toBeTruthy();
      return element as HTMLButtonElement;
    });

    await user.click(disclosure);

    expect(await screen.findByText('index.tsx')).toBeInTheDocument();
    expect(loadData).toHaveBeenCalledWith('src');
  });

  it('shows a loading icon in the disclosure while loading children', async () => {
    const user = userEvent.setup();
    let resolveChildrenLoad:
      | ((items: DynamicTreeLoadedItem<DynamicTreeItemData>[]) => void)
      | null = null;
    const loadData = vi.fn(
      async (
        itemId: string | null,
      ): Promise<DynamicTreeLoadedItem<DynamicTreeItemData>[]> => {
        await Promise.resolve();

        if (itemId === null) {
          return (fixture.children.root ?? []).map((childId) => ({
            id: childId,
            data: fixture.items[childId] ?? {
              label: childId,
            },
          }));
        }

        if (itemId === 'src') {
          return new Promise((resolve) => {
            resolveChildrenLoad = resolve;
          });
        }

        return [];
      },
    );

    render(<DynamicTreeTestHarness loadData={loadData} />);

    await screen.findByText('src');

    const disclosure = document.querySelector(
      '[data-slot="tree-item-disclosure"][data-value="src"]',
    ) as HTMLButtonElement;

    await user.click(disclosure);

    await waitFor(() => {
      expect(disclosure).toHaveAttribute('data-loading', 'true');
      expect(disclosure).toHaveAttribute('aria-label', 'Loading src');
      expect(disclosure.querySelector('svg.animate-spin')).toBeTruthy();
    });

    await act(async () => {
      resolveChildrenLoad?.([]);
      await Promise.resolve();
    });
  });

  it('selects items from row click when using item.getProps handlers', async () => {
    const user = userEvent.setup();
    const loadData = createLoadData(fixture);

    render(<DynamicTreeTestHarness loadData={loadData} />);

    await screen.findByText('src');

    const disclosure = document.querySelector(
      '[data-slot="tree-item-disclosure"][data-value="src"]',
    ) as HTMLButtonElement;

    await user.click(disclosure);

    await screen.findByText('index.tsx');

    const indexItem = document.querySelector(
      '[data-slot="tree-item-button"][data-value="index"]',
    ) as HTMLDivElement;

    await user.click(indexItem);

    expect(indexItem).toHaveAttribute('data-selected', 'true');
  });

  it('renders items with a custom item', async () => {
    const loadData = createLoadData(fixture);

    const CustomItem = ({
      item,
    }: DynamicTreeItemProps<DynamicTreeItemData>) => (
      <div data-testid={`custom-item-${item.getId()}`}>
        {item.getItemMeta().level}:{item.getItemData()?.label ?? item.getId()}
      </div>
    );

    render(<DynamicTreeTestHarness loadData={loadData} item={CustomItem} />);

    expect(await screen.findByTestId('custom-item-src')).toHaveTextContent(
      '0:src',
    );
    expect(screen.getByTestId('custom-item-readme')).toHaveTextContent(
      '0:README.md',
    );
  });

  it('renders disabled items with disabled state', async () => {
    const loadData = createLoadData(fixture);

    render(<DynamicTreeTestHarness loadData={loadData} />);

    await screen.findByText('README.md');

    const readmeItem = document.querySelector(
      '[data-slot="tree-item-button"][data-value="readme"]',
    ) as HTMLDivElement;

    expect(readmeItem).toHaveAttribute('data-disabled', 'true');
  });

  it('opens a shared context menu for the right-clicked item', async () => {
    const user = userEvent.setup();
    const loadData = createLoadData(fixture);
    const onAction = vi.fn();

    render(
      <DynamicTreeTestHarness
        loadData={loadData}
        contextMenu={({ item }) => (
          <ContextMenuItem
            onSelect={() => {
              onAction(item.getId());
            }}
          >
            Reveal {item.getId()}
          </ContextMenuItem>
        )}
      />,
    );

    await screen.findByText('src');

    const srcItem = document.querySelector(
      '[data-slot="tree-item-button"][data-value="src"]',
    ) as HTMLDivElement;

    fireEvent.contextMenu(srcItem);

    expect(await screen.findByText('Reveal src')).toBeInTheDocument();
    expect(srcItem).toHaveAttribute('data-selected', 'true');

    await user.click(screen.getByText('Reveal src'));

    expect(onAction).toHaveBeenCalledWith('src');
  });

  it('refreshes an item from the default context menu', async () => {
    const user = userEvent.setup();
    const loadData = createLoadData(fixture);

    render(<DynamicTreeTestHarness loadData={loadData} />);

    await screen.findByText('src');

    const srcItem = document.querySelector(
      '[data-slot="tree-item-button"][data-value="src"]',
    ) as HTMLDivElement;

    fireEvent.contextMenu(srcItem);
    await user.click(await screen.findByText('Refresh'));

    await waitFor(() => {
      expect(loadData).toHaveBeenLastCalledWith('src');
    });
  });

  it('deletes an item from the default context menu', async () => {
    const user = userEvent.setup();
    const loadData = createLoadData(fixture);

    render(<DynamicTreeTestHarness loadData={loadData} />);

    await screen.findByText('src');

    const srcItem = document.querySelector(
      '[data-slot="tree-item-button"][data-value="src"]',
    ) as HTMLDivElement;

    fireEvent.contextMenu(srcItem);
    await user.click(await screen.findByText('Delete'));

    await waitFor(() => {
      expect(screen.queryByText('src')).not.toBeInTheDocument();
    });
  });

  it('clears a folder children from the default context menu', async () => {
    const user = userEvent.setup();
    const loadData = createLoadData(fixture);

    render(<DynamicTreeTestHarness loadData={loadData} />);

    await screen.findByText('src');

    const disclosure = document.querySelector(
      '[data-slot="tree-item-disclosure"][data-value="src"]',
    ) as HTMLButtonElement;

    await user.click(disclosure);
    expect(await screen.findByText('index.tsx')).toBeInTheDocument();

    const srcItem = document.querySelector(
      '[data-slot="tree-item-button"][data-value="src"]',
    ) as HTMLDivElement;

    fireEvent.contextMenu(srcItem);
    await user.click(await screen.findByText('Clear Children'));

    await waitFor(() => {
      expect(screen.queryByText('index.tsx')).not.toBeInTheDocument();
    });
  });

  it('refetches folder children after clearing and expanding again', async () => {
    const user = userEvent.setup();
    const nextFixture: TreeFixture = {
      items: {
        ...fixture.items,
        util: {
          label: 'util.ts',
        },
      },
      children: {
        ...fixture.children,
        src: ['index'],
      },
    };
    const loadData = createLoadData(nextFixture);

    render(<DynamicTreeTestHarness loadData={loadData} />);

    await screen.findByText('src');

    let disclosure = document.querySelector(
      '[data-slot="tree-item-disclosure"][data-value="src"]',
    ) as HTMLButtonElement;

    await user.click(disclosure);
    expect(await screen.findByText('index.tsx')).toBeInTheDocument();

    const srcItem = document.querySelector(
      '[data-slot="tree-item-button"][data-value="src"]',
    ) as HTMLDivElement;

    fireEvent.contextMenu(srcItem);
    await user.click(await screen.findByText('Clear Children'));

    await waitFor(() => {
      expect(screen.queryByText('index.tsx')).not.toBeInTheDocument();
    });

    nextFixture.children.src = ['util'];

    disclosure = document.querySelector(
      '[data-slot="tree-item-disclosure"][data-value="src"]',
    ) as HTMLButtonElement;

    await user.click(disclosure);

    expect(await screen.findByText('util.ts')).toBeInTheDocument();
    expect(
      loadData.mock.calls.filter(([itemId]) => itemId === 'src'),
    ).toHaveLength(2);
  });
});
