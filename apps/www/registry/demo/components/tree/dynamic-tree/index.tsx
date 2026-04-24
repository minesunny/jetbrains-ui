'use client';

import {
  type ComponentPropsWithoutRef,
  useCallback,
  useMemo,
  useRef,
} from 'react';
import {
  hotkeysCoreFeature,
  selectionFeature,
  type TreeDataLoader,
} from '@headless-tree/core';
import { useTree } from '@headless-tree/react';
import {
  DynamicTree,
  asyncDataLoaderFeature,
  type DynamicTreeItemData,
} from '@/registry/components/tree/dynamic-tree';

const DEMO_ROOT_ID = 'dynamic-root';

type DemoTreeItem = DynamicTreeItemData & {
  kind: 'file' | 'folder';
  path: string;
  isFolder?: boolean;
};

type DemoLoadedItem = {
  id: string;
  data: DemoTreeItem;
};

type DemoTreeItems = Record<string, Omit<DemoTreeItem, 'endContent'>>;
type DemoTreeChildren = Record<string, string[]>;

const initialItems: DemoTreeItems = {
  [DEMO_ROOT_ID]: {
    label: 'jetbrains-ui',
    kind: 'folder',
    path: '/jetbrains-ui',
    isFolder: true,
    icon: 'folder',
  },
  'dynamic-src': {
    label: 'src',
    kind: 'folder',
    path: '/jetbrains-ui/src',
    isFolder: true,
    icon: 'folder',
  },
  'dynamic-components': {
    label: 'components',
    kind: 'folder',
    path: '/jetbrains-ui/src/components',
    isFolder: true,
    icon: 'folder',
  },
  'dynamic-tree-file': {
    label: 'tree.tsx',
    kind: 'file',
    path: '/jetbrains-ui/src/components/tree.tsx',
    icon: 'react',
  },
  'dynamic-dynamic-tree-file': {
    label: 'dynamic-tree.tsx',
    kind: 'file',
    path: '/jetbrains-ui/src/components/dynamic-tree.tsx',
    icon: 'react',
  },
  'dynamic-lib': {
    label: 'lib',
    kind: 'folder',
    path: '/jetbrains-ui/src/lib',
    isFolder: true,
    icon: 'folder',
  },
  'dynamic-utils-file': {
    label: 'utils.ts',
    kind: 'file',
    path: '/jetbrains-ui/src/lib/utils.ts',
    icon: 'react',
  },
  'dynamic-readme': {
    label: 'README.md',
    kind: 'file',
    path: '/jetbrains-ui/README.md',
    icon: 'markdown',
  },
  'dynamic-package': {
    label: 'package.json',
    kind: 'file',
    path: '/jetbrains-ui/package.json',
    icon: 'react',
  },
};

const initialChildren: DemoTreeChildren = {
  [DEMO_ROOT_ID]: ['dynamic-src', 'dynamic-readme', 'dynamic-package'],
  'dynamic-src': ['dynamic-components', 'dynamic-lib'],
  'dynamic-components': ['dynamic-tree-file', 'dynamic-dynamic-tree-file'],
  'dynamic-lib': ['dynamic-utils-file'],
};

function countDescendants(
  children: DemoTreeChildren,
  itemId: string,
  visited?: Set<string>,
) {
  const seen = visited ?? new Set<string>();
  const queue = [...(children[itemId] ?? [])];
  let count = 0;

  while (queue.length > 0) {
    const currentId = queue.shift();

    if (!currentId || seen.has(currentId)) {
      continue;
    }

    seen.add(currentId);
    count += 1;
    queue.push(...(children[currentId] ?? []));
  }

  return count;
}

function wait(ms: number) {
  return new Promise<void>((resolve) => {
    setTimeout(resolve, ms);
  });
}

function resolveDemoItemData(
  itemsById: DemoTreeItems,
  childrenById: DemoTreeChildren,
  itemId: string,
): DemoTreeItem {
  const item = itemsById[itemId];

  if (!item) {
    return {
      label: itemId,
      kind: 'file',
      path: itemId,
    };
  }

  if (!item.isFolder) {
    return item;
  }

  const descendantCount = countDescendants(childrenById, itemId);

  return {
    ...item,
    endContent: descendantCount > 0 ? String(descendantCount) : undefined,
  };
}

export default function DynamicTreeDemo() {
  const loadedItemsRef = useRef<Record<string, DemoTreeItem>>({});

  const loadData = useCallback(
    async (itemId: string | null): Promise<DemoLoadedItem[]> => {
      await wait(120);

      const parentId = itemId ?? DEMO_ROOT_ID;

      return (initialChildren[parentId] ?? []).map(
        (childId): DemoLoadedItem => ({
          id: childId,
          data: resolveDemoItemData(initialItems, initialChildren, childId),
        }),
      );
    },
    [],
  );
  const dataLoader = useMemo<TreeDataLoader<DemoTreeItem>>(
    () => ({
      getItem: async (itemId: string) => {
        const [realItemId] = itemId.split('@');

        if (realItemId === DEMO_ROOT_ID) {
          return {
            label: 'jetbrains-ui',
            isFolder: true,
          } as DemoTreeItem;
        }

        return (
          loadedItemsRef.current[realItemId] ??
          ({
            label: realItemId,
            kind: 'file',
            path: realItemId,
          } as DemoTreeItem)
        );
      },
      getChildrenWithData: async (itemId: string) => {
        const [realItemId] = itemId.split('@');

        return loadData(realItemId === DEMO_ROOT_ID ? null : realItemId);
      },
    }),
    [loadData],
  );
  const tree = useTree<DemoTreeItem>({
    rootItemId: DEMO_ROOT_ID,
    dataLoader,
    isItemFolder: (item) => Boolean(item.getItemData()?.isFolder),
    getItemName: (item) => item.getItemData()?.label ?? item.getId(),
    onLoadedItem: (itemId, item) => {
      loadedItemsRef.current[itemId] = item;
    },
    createLoadingItemData: () => ({}) as DemoTreeItem,
    features: [asyncDataLoaderFeature, selectionFeature, hotkeysCoreFeature],
  });

  return (
    <div className="w-[280px] rounded border">
      <DynamicTree<DemoTreeItem>
        containerProps={
          tree.getContainerProps(
            'Tree',
          ) as ComponentPropsWithoutRef<'div'>
        }
        items={tree.getItems()}
        height="400px"
      />
    </div>
  );
}
