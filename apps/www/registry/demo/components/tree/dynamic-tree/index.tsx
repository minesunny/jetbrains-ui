'use client';

import * as React from 'react';

import {
  DynamicTree,
  type DynamicTreeItemData,
  type DynamicTreeLoadedItem,
  type DynamicTreeLoadData,
} from '@/registry/components/tree/dynamic-tree';
import { Markdown, React as ReactFileType } from '@/registry/icons/file-types';
import { Folder } from '@/registry/icons/nodes';

const DEMO_ROOT_ID = 'dynamic-root';

type DemoTreeItem = DynamicTreeItemData & {
  kind: 'file' | 'folder';
  path: string;
};

type DemoTreeItems = Record<string, Omit<DemoTreeItem, 'endContent'>>;
type DemoTreeChildren = Record<string, string[]>;

const dynamicItems: DemoTreeItems = {
  [DEMO_ROOT_ID]: {
    label: 'jetbrains-ui',
    kind: 'folder',
    path: '/jetbrains-ui',
    isFolder: true,
    icon: <Folder />,
  },
  'dynamic-src': {
    label: 'src',
    kind: 'folder',
    path: '/jetbrains-ui/src',
    isFolder: true,
    icon: <Folder />,
  },
  'dynamic-components': {
    label: 'components',
    kind: 'folder',
    path: '/jetbrains-ui/src/components',
    isFolder: true,
    icon: <Folder />,
  },
  'dynamic-tree-file': {
    label: 'tree.tsx',
    kind: 'file',
    path: '/jetbrains-ui/src/components/tree.tsx',
    icon: <ReactFileType />,
  },
  'dynamic-dynamic-tree-file': {
    label: 'dynamic-tree.tsx',
    kind: 'file',
    path: '/jetbrains-ui/src/components/dynamic-tree.tsx',
    icon: <ReactFileType />,
  },
  'dynamic-lib': {
    label: 'lib',
    kind: 'folder',
    path: '/jetbrains-ui/src/lib',
    isFolder: true,
    icon: <Folder />,
  },
  'dynamic-utils-file': {
    label: 'utils.ts',
    kind: 'file',
    path: '/jetbrains-ui/src/lib/utils.ts',
    icon: <ReactFileType />,
  },
  'dynamic-readme': {
    label: 'README.md',
    kind: 'file',
    path: '/jetbrains-ui/README.md',
    icon: <Markdown />,
  },
  'dynamic-package': {
    label: 'package.json',
    kind: 'file',
    path: '/jetbrains-ui/package.json',
    icon: <ReactFileType />,
  },
};

const dynamicChildren: DemoTreeChildren = {
  [DEMO_ROOT_ID]: ['dynamic-src', 'dynamic-readme', 'dynamic-package'],
  'dynamic-src': ['dynamic-components', 'dynamic-lib'],
  'dynamic-components': ['dynamic-tree-file', 'dynamic-dynamic-tree-file'],
  'dynamic-lib': ['dynamic-utils-file'],
};

function countDescendants(children: DemoTreeChildren, itemId: string) {
  const queue = [...(children[itemId] ?? [])];
  let count = 0;

  while (queue.length > 0) {
    const currentId = queue.shift();

    if (!currentId) {
      continue;
    }

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
  const loadData = React.useCallback<DynamicTreeLoadData<DemoTreeItem>>(
    async (itemId) => {
      await wait(120);

      const parentId = itemId ?? DEMO_ROOT_ID;

      return (dynamicChildren[parentId] ?? []).map(
        (childId): DynamicTreeLoadedItem<DemoTreeItem> => ({
          id: childId,
          data: resolveDemoItemData(dynamicItems, dynamicChildren, childId),
        }),
      );
    },
    [],
  );

  return (
    <div className="w-[280px]">
      <DynamicTree<DemoTreeItem>
        width="220px"
        height="120px"
        loadData={loadData}
      />
    </div>
  );
}
