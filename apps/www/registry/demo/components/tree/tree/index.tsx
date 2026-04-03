'use client';

import * as React from 'react';

import { Tree, TreeItem } from '@/registry/components/tree/tree';
import {
  Ignored,
  Markdown,
  React as ReactFileType,
} from '@/registry/icons/file-types';
import { Folder } from '@/registry/icons/nodes';

type TreeDemoState = 'default' | 'selected' | 'disabled' | 'collapsed';

interface TreeDemoProps {
  state?: TreeDemoState;
}

export default function TreeDemo({ state = 'default' }: TreeDemoProps) {
  const initialSelectedId = state === 'selected' ? 'tree-file-banner' : null;
  const [selectedId, setSelectedId] = React.useState<string | null>(
    initialSelectedId,
  );

  React.useEffect(() => {
    setSelectedId(initialSelectedId);
  }, [initialSelectedId]);

  const lockBannerFile = state === 'disabled';
  const defaultExpandedIds =
    state === 'collapsed'
      ? []
      : ['tree-root', 'tree-components', 'tree-dialog'];

  return (
    <div className="w-[280px] space-y-2">
      <Tree
        className="w-full"
        width="220px"
        height="156px"
        selectedId={selectedId}
        onSelectedIdChange={setSelectedId}
        defaultExpandedIds={defaultExpandedIds}
      >
        <TreeItem
          value="tree-root"
          label="jetbrains-ui"
          icon={<Folder />}
          endContent="12"
        >
          <TreeItem value="tree-git" label=".gitignore" icon={<Ignored />} />

          <TreeItem
            value="tree-components"
            label="components"
            icon={<Folder />}
            endContent="4"
          >
            <TreeItem
              value="tree-dialog"
              label="dialog"
              icon={<Folder />}
              endContent="2"
            >
              <TreeItem
                value="tree-file-banner"
                label="banner.tsx"
                icon={<ReactFileType />}
                disabled={lockBannerFile}
              />
              <TreeItem
                value="tree-file-rd-dialog"
                label="rd-dialog.tsx"
                icon={<ReactFileType />}
              />
            </TreeItem>

            <TreeItem
              value="tree-tree"
              label="tree.tsx"
              icon={<ReactFileType />}
            />
            <TreeItem
              value="tree-toggle"
              label="toggle.tsx"
              icon={<ReactFileType />}
            />
          </TreeItem>

          <TreeItem value="tree-readme" label="README.md" icon={<Markdown />} />
        </TreeItem>
      </Tree>
    </div>
  );
}
