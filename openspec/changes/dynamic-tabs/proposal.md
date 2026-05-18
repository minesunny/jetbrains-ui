## Why

The existing `tabs` component is a pure UI primitive (Radix UI wrapper) with no data-driven API. Consumers must manually wire up tab items, manage tab state, and implement close/pin behavior. This is verbose and inconsistent — every consumer reinvents the same patterns. A `dynamic-tabs` component provides a data-driven tab bar with built-in context menu, close, and pin support, following the same "default ON" philosophy established by `dynamic-tree`.

## What Changes

- Add new `DynamicTabsList` component at `registry/components/tabs/dynamic-tabs/`
- Each tab item renders with a close button (×) or pin icon (📌) when pinned
- Right-click context menu on each tab, default ON with 5 actions:
  - Pin / Unpin Tab (toggle)
  - Close, Close Others, Close Left Tabs, Close Right Tabs
- Close-range actions skip pinned tabs
- Pinned tabs: close actions disabled (grayed out) in context menu
- Custom context menu via `contextMenu={(tab, index, actions) => ReactNode}` render function
- Disable context menu with `contextMenu={null}`
- Content rendering is consumer-controlled (Path B) — component only manages the tab bar
- Follows same API pattern as `dynamic-tree` (actions object, imperative prop names, default ON)
- Demo, tests, and docs included

## Capabilities

### New Capabilities
- `dynamic-tabs`: Data-driven tab bar component with per-tab context menu, close/pin actions, pinned tab protection, and custom menu render function

### Modified Capabilities

_(none — existing `tabs` primitive remains unchanged)_

## Impact

- **New files**: `registry/components/tabs/dynamic-tabs/` (component, feature, registry-item), demo, tests, docs
- **Registry dependencies**: `tabs` (base styling), `context-menu`, `svg` (icons)
- **No breaking changes**: existing `tabs` component is untouched
