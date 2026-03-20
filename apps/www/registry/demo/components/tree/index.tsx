import { Tree, type TreeItemData } from '@/registry/components/tree';

const items: TreeItemData[] = [
  {
    id: 'src',
    label: 'src',
    children: [
      {
        id: 'src-components',
        label: 'components',
        children: [
          { id: 'src-components-tree', label: 'tree.tsx' },
          { id: 'src-components-context-menu', label: 'context-menu.tsx' },
        ],
      },
      {
        id: 'src-styles',
        label: 'styles',
        children: [{ id: 'src-styles-tree', label: 'tree.css' }],
      },
    ],
  },
  {
    id: 'docs',
    label: 'docs',
    children: [
      { id: 'docs-tree', label: 'tree.mdx' },
      { id: 'docs-context-menu', label: 'context-menu.mdx' },
    ],
  },
  {
    id: 'package-json',
    label: 'package.json',
  },
];

export default function TreeDemo() {
  return (
    <div className="w-full max-w-[360px] rounded-md border border-border p-2">
      <Tree
        items={items}
        defaultExpandedIds={['src', 'src-components', 'docs']}
        defaultSelectedId="src-components-tree"
      />
    </div>
  );
}
