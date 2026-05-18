## Context

The existing `tabs` component is a pure Radix UI primitive wrapper (`Tabs`, `TabsList`, `TabsTrigger`, `TabsContent`). It requires consumers to manually manage tab state, render each trigger, and wire up content panels.

The `dynamic-tree` component recently established a pattern for data-driven components with default context menus: items array → render loop → context menu wrapping. This change applies the same pattern to tabs.

## Goals / Non-Goals

**Goals:**
- Data-driven tab bar: consumer passes `items: DynamicTabItem[]`, component renders triggers
- Per-tab context menu, default ON, same API pattern as `dynamic-tree`
- Pin/unpin support: pinned tabs protected from close actions, show pin icon instead of ×
- Close-range actions (Close Others, Close Left, Close Right) skip pinned tabs
- Content rendering stays consumer-controlled (Path B) — zero magic, zero re-render risk
- Reuse existing `context-menu` component and `tabs` styling

**Non-Goals:**
- Content panel management or keep-alive logic (consumer responsibility)
- Drag-and-drop tab reordering
- Tab overflow / scrollable tab bar
- Split tabs or tab groups
- Custom tab trigger rendering (deferred — can add `item` prop later like dynamic-tree)

## Decisions

### 1. Component only manages the tab bar (Path B)

**Decision**: `DynamicTabsList` renders only the tab bar. Content rendering is entirely consumer-controlled.

**Rationale**: Consumer has heavy content (editors, tables) that must not accidentally unmount or re-render. By not managing content, we avoid hidden keep-alive logic that could break editor state. Consumer uses `display: none` + `React.memo` for zero-cost tab switching.

**Alternative considered**: Built-in keep-alive with `renderContent` prop. Rejected because `renderContent` creates new JSX on every parent re-render, requiring internal memoization that's fragile and hard to debug.

### 2. `closeTabs` receives ID array, not single ID

**Decision**: `closeTabs?: (tabIds: string[]) => void` — always an array.

**Rationale**: "Close Others", "Close Left", "Close Right" all close multiple tabs. A single callback for all close actions is simpler than separate `closeTab`, `closeOthers`, `closeLeft`, `closeRight` props. Consumer writes one filter: `setTabs(prev => prev.filter(t => !ids.includes(t.id)))`.

### 3. Component computes which IDs to close internally

**Decision**: The actions object (`close`, `closeOthers`, `closeLeft`, `closeRight`) is constructed inside the component. Each action filters by position and pinned status, then calls `closeTabs(ids)`.

**Rationale**: Consumer doesn't need to know about tab positions or pinned logic. They just remove IDs from their state.

### 4. Context menu API mirrors dynamic-tree

**Decision**: `contextMenu?: DynamicTabContextMenuFn | null` where `(tab, index, actions) => ReactNode`.

**Rationale**: Same mental model as `dynamic-tree`. `null` disables. Undefined = default menu. Custom function receives pre-built actions.

**Difference from dynamic-tree**: Actions are scoped per-tab but computed from the full items array (because close-range actions need index/neighbors). The `actions` memo depends on `items`, `closeTabs`, `togglePin`.

### 5. Pinned tab visual: × → pin icon

**Decision**: Unpinned tabs show × (close button). Pinned tabs show 📌 (pin icon). Both are clickable — × closes, 📌 unpins.

**Rationale**: User explicitly requested this behavior. Pin icon communicates "this tab is protected" while still providing a way to unpin.

### 6. No Radix Tabs dependency for the list

**Decision**: `DynamicTabsList` does NOT use Radix `TabsList`/`TabsTrigger` internally. It renders its own buttons with the same styling.

**Rationale**: Radix `Tabs` manages active state via `value`/`onValueChange` with DOM attributes (`data-state`, `aria-selected`). Our component manages active state via `activeTab`/`onActiveChange`. Using Radix would add an unnecessary abstraction layer — we'd fight its state model. Instead, we apply the same Tailwind classes directly to our buttons and add `role="tablist"` / `role="tab"` for accessibility.

### 7. File structure follows tree pattern

**Decision**: `registry/components/tabs/dynamic-tabs/` with `index.tsx` (component) and `registry-item.json`.

**Rationale**: Same pattern as `tree/dynamic-tree/`. No separate `feature.ts` needed — tabs don't have async data loading.

## Risks / Trade-offs

- **[No built-in keep-alive]** → Consumer must implement `display: none` + `React.memo` themselves. Mitigated by clear docs and demo example.
- **[Tab bar overflow]** → Not handled. Many tabs will overflow the container. Can be addressed in a follow-up change with horizontal scrolling.
- **[No custom trigger rendering]** → Consumers can't customize tab button content (e.g., status indicators). Can add `item` prop later following dynamic-tree pattern.
- **[Active tab auto-management]** → If the active tab is closed, the component does NOT auto-select another tab. Consumer must handle this in their `closeTabs` callback. Documented in demo.
