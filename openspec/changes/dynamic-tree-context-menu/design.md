# Design: Add Context Menu Support to DynamicTree

## Component Architecture

### Rendering Structure

Each tree item is wrapped in a `ContextMenu` + `ContextMenuTrigger` pair. The context menu wraps the item renderer from the outside, keeping visual (item renderer) and interaction (context menu) concerns separate.

```
DynamicTree render loop
└── for each item:
    └── <ContextMenu>
        ├── <ContextMenuTrigger asChild>
        │       └── <DynamicTreeItem />  ← default or custom
        └── <ContextMenuContent>
                └── {menu content}       ← default built-in or custom render fn
```

When `contextMenu={null}`, the wrapping is skipped entirely and items render without `ContextMenu`.

## New Types

```tsx
/**
 * Pre-wired action helpers passed to the contextMenu render function.
 * Built-in actions (refresh, clearChildren) work automatically.
 * Consumer actions (add, delete) call the corresponding props.
 */
interface TreeItemActions<TItem extends DynamicTreeItemData> {
  /** Refresh item data and children from the data loader. Built-in. */
  refresh: (item: ItemInstance<TItem>) => void;
  /** Clear cached children and collapse the folder. Built-in. */
  clearChildren: (item: ItemInstance<TItem>) => void;
  /** Add a child item. Calls the addItem prop. No-op if not provided. */
  add: (item: ItemInstance<TItem>) => void;
  /** Delete this item. Calls the deleteItem prop. No-op if not provided. */
  delete: (item: ItemInstance<TItem>) => void;
}

/**
 * Custom context menu render function.
 * Receives the tree item instance and a pre-wired actions object.
 * Return ReactNode for the ContextMenuContent's children.
 */
type DynamicTreeContextMenuFn<TItem extends DynamicTreeItemData> = (
  item: ItemInstance<TItem>,
  actions: TreeItemActions<TItem>,
) => ReactNode;
```

## Updated Props

```tsx
interface DynamicTreeProps<
  TItem extends DynamicTreeItemData = DynamicTreeItemData,
> extends Omit<ComponentPropsWithoutRef<'div'>, 'children' | 'className' | 'style'> {
  containerProps: ComponentPropsWithoutRef<'div'>;
  items: ItemInstance<TItem>[];
  indent?: number;
  item?: DynamicTreeItemComponent<TItem>;
  width?: CSSProperties['width'];
  height?: CSSProperties['height'];

  // ── New props ──

  /**
   * Context menu configuration.
   * - undefined: use the built-in default menu (4 actions)
   * - null: disable context menu entirely
   * - render function: custom menu content, receives item + actions
   */
  contextMenu?: DynamicTreeContextMenuFn<TItem> | null;

  /**
   * Add a child to the given item. Called by the default menu's "Add" action
   * and available via `actions.add()` in custom menus.
   */
  addItem?: (item: ItemInstance<TItem>) => void;

  /**
   * Delete the given item. Called by the default menu's "Delete" action
   * and available via `actions.delete()` in custom menus.
   */
  deleteItem?: (item: ItemInstance<TItem>) => void;
}
```

## Built-in Default Context Menu

The default `DynamicTreeItemContextMenu` is an internal component rendered when `contextMenu` is `undefined`. It composes with the existing `context-menu` registry component.

### Actions and Availability

| Action         | Folder | Leaf | Implementation                       | Requires Prop |
| -------------- | ------ | ---- | ------------------------------------ | ------------- |
| Add            | Yes    | No   | Calls `addItem` prop                 | `addItem`     |
| Delete         | Yes    | Yes  | Calls `deleteItem` prop              | `deleteItem`  |
| Clear Children | Yes    | No   | `item.clearCachedChildren()` + collapse | —          |
| Refresh        | Yes    | Yes  | `item.invalidateItemData()` + `item.invalidateChildrenIds()` | — |

- Actions that require a prop but none is provided render as **disabled** menu items.
- Separator between destructive (Delete) and non-destructive actions.

### Default Menu Layout (Folder)

```
┌──────────────────────┐
│ Add                  │  ← disabled if no addItem
│ Refresh              │
│ Clear Children       │
│ ──────────────────── │
│ Delete               │  ← disabled if no deleteItem, destructive variant
└──────────────────────┘
```

### Default Menu Layout (Leaf)

```
┌──────────────────────┐
│ Refresh              │
│ ──────────────────── │
│ Delete               │  ← disabled if no deleteItem, destructive variant
└──────────────────────┘
```

## Actions Object Construction

The `TreeItemActions` object is constructed inside `DynamicTree` using `useMemo`:

```tsx
const actions = useMemo<TreeItemActions<TItem>>(() => ({
  refresh: (item) => {
    item.invalidateItemData();
    item.invalidateChildrenIds();
  },
  clearChildren: (item) => {
    item.clearCachedChildren();
    if (item.isExpanded()) item.collapse();
  },
  add: (item) => {
    addItem?.(item);
  },
  delete: (item) => {
    deleteItem?.(item);
  },
}), [addItem, deleteItem]);
```

Note: `refresh` and `clearChildren` call methods from `asyncDataLoaderFeature`'s item instance directly. These methods are added to each `ItemInstance` by the feature and are always available when the feature is used.

## Render Loop Changes

Current:
```tsx
{items.map((item) => (
  <ItemComponent key={item.getKey()} item={item} indent={indent} />
))}
```

New:
```tsx
{items.map((item) => {
  const itemElement = <ItemComponent key={item.getKey()} item={item} indent={indent} />;

  if (contextMenu === null) return itemElement;

  const menuContent = contextMenu
    ? contextMenu(item, actions)
    : <DynamicTreeItemContextMenu item={item} actions={actions} addItem={addItem} deleteItem={deleteItem} />;

  return (
    <ContextMenu key={item.getKey()}>
      <ContextMenuTrigger asChild>
        {itemElement}
      </ContextMenuTrigger>
      <ContextMenuContent>
        {menuContent}
      </ContextMenuContent>
    </ContextMenu>
  );
})}
```

## Exports

The following are newly exported from the dynamic-tree module:

- `TreeItemActions<TItem>` — type for the actions object
- `DynamicTreeContextMenuFn<TItem>` — type for the context menu render function

No new component exports are needed for the default menu — it's an internal component used by `DynamicTree`.

## Demo Changes

The existing `DynamicTreeDemo` will be updated to demonstrate:

1. **Default context menu**: add `addItem` and `deleteItem` props with handlers that mutate the demo data (add a new child, remove the item from the data and children maps).
2. **Custom context menu**: a secondary example or prop toggle showing `contextMenu={(item, actions) => ...}`.

## Files Changed

| File | Change |
| --- | --- |
| `registry/components/tree/dynamic-tree/index.tsx` | Add types, props, actions memo, render loop changes, internal default menu component |
| `registry/demo/components/tree/dynamic-tree/index.tsx` | Add `addItem`/`deleteItem` handlers, demonstrate context menu |
| `content/docs/components/tree/dynamic-tree/index.mdx` | Update docs (already references `contextMenu` prop, align with implementation) |
| `content/docs-zh/components/tree/dynamic-tree/index.mdx` | Update Chinese docs |
