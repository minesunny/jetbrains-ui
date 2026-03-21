'use client';

import * as React from 'react';

import {
  DynamicTree,
  type DynamicTreeContextMenuItem,
  type DynamicTreeContextMenuNode,
  type DynamicTreeItemData,
} from '@/registry/components/tree';
import { Markdown, React as ReactFileType } from '@/registry/icons/file-types';
import { Folder } from '@/registry/icons/nodes';

const dynamicItems: Record<string, DynamicTreeItemData> = {
  'dynamic-root': {
    label: 'jetbrains-ui',
    isFolder: true,
    icon: <Folder />,
    endContent: '7',
  },
  'dynamic-src': {
    label: 'src',
    isFolder: true,
    icon: <Folder />,
    endContent: '4',
  },
  'dynamic-components': {
    label: 'components',
    isFolder: true,
    icon: <Folder />,
    endContent: '2',
  },
  'dynamic-tree-file': {
    label: 'tree.tsx',
    icon: <ReactFileType />,
  },
  'dynamic-dynamic-tree-file': {
    label: 'dynamic-tree.tsx',
    icon: <ReactFileType />,
  },
  'dynamic-lib': {
    label: 'lib',
    isFolder: true,
    icon: <Folder />,
    endContent: '1',
  },
  'dynamic-utils-file': {
    label: 'utils.ts',
    icon: <ReactFileType />,
  },
  'dynamic-readme': {
    label: 'README.md',
    icon: <Markdown />,
  },
  'dynamic-package': {
    label: 'package.json',
    icon: <ReactFileType />,
  },
};

const dynamicChildren: Record<string, string[]> = {
  'dynamic-root': ['dynamic-src', 'dynamic-readme', 'dynamic-package'],
  'dynamic-src': ['dynamic-components', 'dynamic-lib'],
  'dynamic-components': ['dynamic-tree-file', 'dynamic-dynamic-tree-file'],
  'dynamic-lib': ['dynamic-utils-file'],
};

function wait(ms: number) {
  return new Promise<void>((resolve) => {
    setTimeout(resolve, ms);
  });
}

export default function DynamicTreeDemo() {
  const [selectedId, setSelectedId] = React.useState<string | null>(null);
  const [lastAction, setLastAction] = React.useState(
    'Right click any node to open a shared context menu.',
  );

  const dataLoader = React.useMemo(
    () => ({
      getItem: async (itemId: string) => {
        await wait(120);

        return (
          dynamicItems[itemId] ?? {
            label: itemId,
          }
        );
      },
      getChildren: async (itemId: string) => {
        await wait(120);

        return dynamicChildren[itemId] ?? [];
      },
    }),
    [],
  );

  const contextMenu = React.useCallback(
    ({
      id,
      isFolder,
      disabled,
      label,
    }: DynamicTreeContextMenuNode): DynamicTreeContextMenuItem[] => {
      const items: DynamicTreeContextMenuItem[] = [
        {
          key: 'rename',
          label: 'Rename',
          iconName: 'edit',
          disabled,
          onSelect: () => setLastAction(`Rename ${label}`),
          separator: true,
        },
      ];

      if (isFolder) {
        items.push(
          {
            key: 'new-file',
            label: 'New File',
            iconName: 'add',
            onSelect: () => setLastAction(`Create file in ${label}`),
          },
          {
            key: 'new-folder',
            label: 'New Folder',
            iconName: 'add',
            onSelect: () => setLastAction(`Create folder in ${label}`),
            separator: true,
          },
        );
      } else {
        items.push({
          key: 'copy-path',
          label: 'Copy Path',
          iconName: 'copy',
          onSelect: () => setLastAction(`Copy path for ${label}`),
          separator: true,
        });
      }

      items.push(
        {
          key: 'mark-as',
          label: 'Mark As',
          iconName: 'settings',
          children: [
            {
              key: 'favorite',
              text: 'Favorite',
              iconName: 'check',
              onSelect: () => setLastAction(`Mark ${label} as favorite`),
            },
            {
              key: 'excluded',
              text: 'Excluded',
              iconName: 'filter',
              onSelect: () => setLastAction(`Exclude ${label} from search`),
            },
          ],
        },
        {
          key: 'refresh',
          label: 'Reload Children',
          iconName: 'refresh',
          disabled: !isFolder,
          onSelect: () => setLastAction(`Reload ${label}`),
        },
        {
          key: 'delete',
          label: 'Delete',
          iconName: 'trash',
          disabled: id === 'dynamic-root',
          variant: 'destructive',
          onSelect: () => setLastAction(`Delete ${label}`),
        },
      );

      return items;
    },
    [],
  );

  return (
    <div className="w-[280px] space-y-2">
      <DynamicTree
        className="w-full"
        rootItemId="dynamic-root"
        dataLoader={dataLoader}
        selectedId={selectedId}
        onSelectedIdChange={setSelectedId}
        defaultExpandedIds={['dynamic-src']}
        contextMenu={contextMenu}
      />

      <div className="rounded-[6px] border border-[var(--jb-gray-11)] bg-[var(--jb-gray-14)] px-3 py-2 text-xs text-[var(--jb-gray-7)] dark:border-[var(--jb-gray-4)] dark:bg-[var(--jb-gray-2)] dark:text-[var(--jb-gray-8)]">
        {lastAction}
      </div>
    </div>
  );
}
