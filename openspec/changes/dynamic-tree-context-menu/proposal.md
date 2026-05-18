# Feature: Add Context Menu Support to DynamicTree

## Summary

Add built-in context menu support to the `DynamicTree` component. Right-clicking any tree item shows a context menu with common tree operations. The menu is enabled by default and supports full customization via a render function that receives pre-wired action helpers.

## Motivation

The `DynamicTree` component's registry entry and documentation already reference a `contextMenu` prop and a `DynamicTreeItemContextMenu` component, but neither exists in the source code. Tree components in IDE-like UIs fundamentally need right-click context menus for item-level operations. Currently consumers must manually compose the existing `context-menu` component with the tree, creating boilerplate and inconsistency.

## Proposed Solution

Add a `contextMenu` prop and action callbacks to `DynamicTree`:

- **Default ON**: when `contextMenu` is `undefined`, a built-in menu renders with four actions — Add, Delete, Clear Children, Refresh.
- **Disable**: pass `contextMenu={null}`.
- **Custom**: pass a render function `contextMenu={(item, actions) => ...}` to provide your own menu content. The tree handles `ContextMenu` + `ContextMenuTrigger` wrapping; you only provide the inner content. The `actions` object provides pre-wired helpers (`actions.refresh(item)`, `actions.add(item)`, etc.) that the consumer can call directly.
- **Per-item differentiation**: the default menu shows Add and Clear Children only for folder items; leaf items get Delete and Refresh only.
- **Internal handling + consumer actions**: Refresh and Clear Children work internally via `asyncDataLoaderFeature` item instance methods. Add and Delete require consumer-provided implementations via `addItem`/`deleteItem` props — without them those items appear disabled.
- **Wrapping strategy**: the context menu wraps the item renderer from the outside, so both default and custom item renderers get context menu support automatically.

## Alternatives Considered

- **Consumer-side composition only**: require every consumer to manually wrap `DynamicTreeItem` with `ContextMenu`. Rejected because it creates boilerplate and inconsistency.
- **Context menu as item data field**: add a `contextMenu` field to `DynamicTreeItemData`. Rejected because context menu behavior is a tree-level concern, not per-item data.
- **`on`-prefixed event listener props** (`onItemAdd`, `onDeleteItem`): rejected because the tree is the trigger, not a listener. Action props use imperative names (`addItem`, `deleteItem`).
- **Rename action in default menu**: deferred — rename requires inline editing UX, which adds significant complexity.

## Impact

- [x] API changes: new props on `DynamicTreeProps`, new exported types
- [ ] Breaking changes: all new props are optional; existing usage is unaffected
- [ ] Database migrations
