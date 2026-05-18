# Tasks: Add Context Menu Support to DynamicTree

## 1. Type Definitions

- [x] **1.1** Add `TreeItemActions<TItem>` interface to `dynamic-tree/index.tsx`
- [x] **1.2** Add `DynamicTreeContextMenuFn<TItem>` type alias
- [x] **1.3** Add `contextMenu`, `addItem`, `deleteItem` props to `DynamicTreeProps`

## 2. Internal Default Menu Component

- [x] **2.1** Create internal `DynamicTreeItemContextMenu` component that renders the default menu items (Add, Refresh, Clear Children, Delete) with per-item availability logic (folders vs leaves, disabled state when no handler)
- [x] **2.2** Use existing `ContextMenuItem`, `ContextMenuSeparator` from the `context-menu` registry component
- [x] **2.3** Add appropriate icons to menu items (plus for Add, refresh for Refresh, trash for Clear Children, delete for Delete)

## 3. Actions Object & Render Loop

- [x] **3.1** Add `actions` memo inside `DynamicTree` that constructs `TreeItemActions` (refresh, clearChildren use item instance methods; add, delete call props)
- [x] **3.2** Update the render loop to wrap each item with `ContextMenu` + `ContextMenuTrigger` when context menu is enabled
- [x] **3.3** Handle `null` case (skip wrapping) and custom render function case

## 4. Demo

- [x] **4.1** Add `addItem` handler to `DynamicTreeDemo` that creates a new child node in the demo data
- [x] **4.2** Add `deleteItem` handler that removes the item from demo data and children maps
- [x] **4.3** Wire up the handlers to `<DynamicTree>` via `addItem` and `deleteItem` props

## 5. Tests

- [x] **5.1** Add tests for default context menu rendering (folder items show all actions, leaf items show subset)
- [x] **5.2** Add tests for disabled state when `addItem`/`deleteItem` not provided
- [x] **5.3** Add tests for `contextMenu={null}` (no context menu rendered)
- [x] **5.4** Add tests for custom `contextMenu` render function

## 6. Documentation

- [x] **6.1** Update English docs (`content/docs/components/tree/dynamic-tree/index.mdx`) to align with actual implementation
- [x] **6.2** Update Chinese docs (`content/docs-zh/components/tree/dynamic-tree/index.mdx`)

## 7. Registry Build

- [x] **7.1** Run `pnpm registry:build` to regenerate registry artifacts
