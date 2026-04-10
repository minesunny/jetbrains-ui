'use client';

import * as React from 'react';

import { Tree, TreeItem } from '@/registry/components/tree/tree';
import { SVG } from '@/registry/components/svg';

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
          icon={<SVG name="nodes/nodes/folder" />}
          endContent="12"
        >
          <TreeItem
            value="tree-git"
            label=".gitignore"
            icon={<SVG name="file-types/fileTypes/ignored" />}
          />

          <TreeItem
            value="tree-components"
            label="components"
            icon={<SVG name="nodes/nodes/folder" />}
            endContent="4"
          >
            <TreeItem
              value="tree-dialog"
              label="dialog"
              icon={<SVG name="nodes/nodes/folder" />}
              endContent="2"
            >
              <TreeItem
                value="tree-file-banner"
                label="banner.tsx"
                icon={<SVG name="file-types/fileTypes/react" />}
                disabled={lockBannerFile}
              />
              <TreeItem
                value="tree-file-rd-dialog"
                label="rd-dialog.tsx"
                icon={<SVG name="file-types/fileTypes/react" />}
              />
            </TreeItem>

            <TreeItem
              value="tree-tree"
              label="tree.tsx"
              icon={<SVG name="file-types/fileTypes/react" />}
            />
            <TreeItem
              value="tree-toggle"
              label="toggle.tsx"
              icon={<SVG name="file-types/fileTypes/react" />}
            />
          </TreeItem>

          <TreeItem
            value="tree-readme"
            label="README.md"
            icon={<SVG name="file-types/fileTypes/markdown" />}
          />
        </TreeItem>
      </Tree>
    </div>
  );
}
