## 1. Type Definitions

- [x] 1.1 Add `DynamicTabItem` interface (`id`, `label`, `icon?`, `pinned?`, `disabled?`) to `dynamic-tabs/index.tsx`
- [x] 1.2 Add `DynamicTabActions` interface (`close`, `closeOthers`, `closeLeft`, `closeRight`, `pin`)
- [x] 1.3 Add `DynamicTabContextMenuFn` type alias `(tab, index, actions) => ReactNode`
- [x] 1.4 Add `DynamicTabsListProps` interface with all props (`items`, `activeTab`, `defaultActiveTab`, `onActiveChange`, `closeTabs`, `togglePin`, `contextMenu`)

## 2. Tab Item Rendering

- [x] 2.1 Create internal `DynamicTabItem` component that renders a single tab trigger with `role="tab"`, label, optional icon, and close/pin button
- [x] 2.2 Apply existing `TabsTrigger` styling (Tailwind classes from `tabs.tsx`) directly to the tab button
- [x] 2.3 Implement close button (× icon) for unpinned tabs — clicking calls `closeTabs([id])`
- [x] 2.4 Implement pin icon (📌) for pinned tabs — clicking calls `togglePin(id)`
- [x] 2.5 Handle disabled tab state (`disabled?: boolean` on item)

## 3. Actions Object

- [x] 3.1 Add `actions` memo inside `DynamicTabsList` that constructs `DynamicTabActions` per tab
- [x] 3.2 Implement `close` action: calls `closeTabs([tab.id])`, disabled if tab is pinned or no `closeTabs` prop
- [x] 3.3 Implement `closeOthers` action: filters items to unpinned, excludes current tab, calls `closeTabs(ids)`
- [x] 3.4 Implement `closeLeft` action: filters items before current index to unpinned, calls `closeTabs(ids)`
- [x] 3.5 Implement `closeRight` action: filters items after current index to unpinned, calls `closeTabs(ids)`
- [x] 3.6 Implement `pin` action: calls `togglePin(tab.id)`

## 4. Context Menu

- [x] 4.1 Create internal `DynamicTabItemContextMenu` component with default menu items (Pin/Unpin, Close, Close Others, Close Left Tabs, Close Right Tabs)
- [x] 4.2 Use existing `ContextMenuItem`, `ContextMenuSeparator` from `context-menu` registry component
- [x] 4.3 Add appropriate icons to menu items
- [x] 4.4 Implement disabled state logic: pinned tab → Close disabled; no targets → range Close disabled; no `closeTabs` → all Close disabled; no `togglePin` → Pin/Unpin disabled

## 5. Render Loop & Active State

- [x] 5.1 Implement main `DynamicTabsList` render: `role="tablist"`, map items to tab triggers wrapped in `ContextMenu` + `ContextMenuTrigger` (asChild)
- [x] 5.2 Handle `contextMenu={null}` case — skip ContextMenu wrapping entirely
- [x] 5.3 Handle custom `contextMenu` function — replace default menu content
- [x] 5.4 Implement active tab state management (controlled + uncontrolled via useState)
- [x] 5.5 Apply `data-state="active"` and active styling to the active tab trigger

## 6. Registry

- [x] 6.1 Create `registry/components/tabs/dynamic-tabs/registry-item.json` with dependencies (context-menu, svg, tabs)
- [x] 6.2 Create `registry/components/tabs/dynamic-tabs/index.tsx` barrel export

## 7. Demo

- [x] 7.1 Create `registry/demo/components/tabs/dynamic-tabs/index.tsx` demo with sample tabs, closeTabs handler, togglePin handler, and content area with `display: none` pattern

## 8. Tests

- [x] 8.1 Add test for default context menu rendering (unpinned tab shows all actions enabled)
- [x] 8.2 Add test for pinned tab context menu (Close disabled, Unpin shown)
- [x] 8.3 Add test for close-range actions skipping pinned tabs
- [x] 8.4 Add test for `contextMenu={null}` (no context menu rendered)
- [x] 8.5 Add test for custom `contextMenu` render function
- [x] 8.6 Add test for close button (×) calling `closeTabs`
- [x] 8.7 Add test for pin icon click calling `togglePin`
- [x] 8.8 Add test for disabled handlers (no `closeTabs` → items disabled, no `togglePin` → Pin disabled)

## 9. Documentation

- [x] 9.1 Create English docs at `content/docs/components/tabs/dynamic-tabs/index.mdx`
- [x] 9.2 Create Chinese docs at `content/docs-zh/components/tabs/dynamic-tabs/index.mdx`

## 10. Registry Build

- [x] 10.1 Run `pnpm registry:build` to regenerate registry artifacts
