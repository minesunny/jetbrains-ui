import * as React from 'react';
import { act, render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import {
  hotkeysCoreFeature,
  selectionFeature,
  type TreeDataLoader,
} from '@headless-tree/core';
import { useTree } from '@headless-tree/react';

import {
  DynamicTree,
  asyncDataLoaderFeature,
  type DynamicTreeItemComponent,
  type DynamicTreeItemProps,
  type DynamicTreeItemData,
} from '@/registry/components/tree/dynamic-tree';

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
}: {
  loadData: (
    itemId: string | null,
  ) =>
    | DynamicTreeLoadedItem<DynamicTreeItemData>[]
    | Promise<DynamicTreeLoadedItem<DynamicTreeItemData>[]>;
  width?: React.CSSProperties['width'];
  height?: React.CSSProperties['height'];
  item?: DynamicTreeItemComponent<DynamicTreeItemData>;
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

    const tree = document.querySelector(
      '[data-slot="tree"]',
    ) as HTMLElement;

    expect(tree.style.width).toBe('260px');
    expect(tree.style.height).toBe('140px');
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
      ) as HTMLElement | null;

      expect(element).toBeTruthy();
      return element as HTMLElement;
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
    ) as HTMLElement;

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
    ) as HTMLElement;

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
});
