# Feature: Add IntelliJ IDEA-style Window Layout Component

## Summary

A compound component that recreates the IntelliJ IDEA window layout: fixed top/bottom bars, fixed left/right toolbar strips, and a resizable content area split into four panels (left, center, right, bottom) with collapsible support and layout persistence.

## Motivation

The project needs a layout primitive that mimics the JetBrains IDE window structure. This is the foundational container for building IDE-like interfaces with tool windows, editor areas, and status bars. The existing `Resizable` component (wrapping `react-resizable-panels@4.7.5`) provides the panel primitives, but lacks the orchestration layer for the full IDE layout pattern.

## Proposed Solution

### Layout Structure

```
┌─────────────────────────────────────────────────┐
│                    TopBar (fixed)                │
├──┬─────────┬──────────────────┬─────────┬───────┤
│  │         │                  │         │       │
│L │  Left   │    Center        │  Right  │   R   │
│B │  Panel  │    (Editor)      │  Panel  │   B   │
│  │  ◀▶     │                  │  ◀▶     │       │
├──┴─────────┴──────────────────┴─────────┴───────┤
│              Bottom Panel  ◀▶ (full width)       │
├─────────────────────────────────────────────────┤
│                   BottomBar (fixed)              │
└─────────────────────────────────────────────────┘
```

### Nesting Strategy

Uses nested `ResizablePanelGroup` from the existing Resizable component:

1. **Outer vertical group** — splits: TopBar / content-row / BottomPanel / BottomBar
2. **Content row** — a flex container with: LeftBar / horizontal panel group / RightBar
3. **Inner horizontal group** — splits: LeftPanel / CenterPanel / RightPanel

### Component API

```tsx
<IdeaWindow autoSaveId="idea-layout">
  <IdeaTopBar><MainMenu /></IdeaTopBar>

  <IdeaContent>
    <IdeaLeftBar><ToolIcons /></IdeaLeftBar>
    <IdeaPanel id="left" defaultSize={20} collapsible>
      <ProjectTree />
    </IdeaPanel>
    <IdeaPanel id="center" defaultSize={60}>
      <EditorArea />
    </IdeaPanel>
    <IdeaPanel id="right" defaultSize={20} collapsible>
      <DebugPanel />
    </IdeaPanel>
    <IdeaRightBar><ToolIcons /></IdeaRightBar>
  </IdeaContent>

  <IdeaBottomPanel id="bottom" defaultSize={25} collapsible>
    <Terminal />
  </IdeaBottomPanel>

  <IdeaBottomBar><StatusBar /></IdeaBottomBar>
</IdeaWindow>
```

### Component List

| Component | Responsibility |
|---|---|
| `IdeaWindow` | Root container, distributes children via `Children.map`, manages outer vertical `ResizablePanelGroup` |
| `IdeaTopBar` | Fixed top bar slot |
| `IdeaBottomBar` | Fixed bottom bar (status bar) slot |
| `IdeaContent` | Middle content area, manages horizontal `ResizablePanelGroup` + left/right bar slots |
| `IdeaLeftBar` | Fixed-width left toolbar strip slot |
| `IdeaRightBar` | Fixed-width right toolbar strip slot |
| `IdeaPanel` | Horizontal resizable panel (left/center/right), supports `collapsible` |
| `IdeaBottomPanel` | Vertical full-width resizable panel, supports `collapsible` |

### Key Props

**IdeaWindow:**
- `autoSaveId: string` — localStorage persistence key for both vertical and horizontal groups
- `className?: string`

**IdeaPanel / IdeaBottomPanel:**
- `id: string` — unique panel identifier
- `defaultSize?: number` — initial percentage
- `minSize?: number` — minimum percentage
- `maxSize?: number` — maximum percentage
- `collapsible?: boolean` — enable collapse/expand
- `defaultCollapsed?: boolean` — initial collapsed state
- `onCollapsedChange?: (collapsed: boolean) => void` — collapse state callback

### Collapse/Expand Control

Using `react-resizable-panels` native APIs:
- `collapsible` + `collapsedSize={0}` on panel
- `onCollapse` / `onExpand` callbacks → mapped to `onCollapsedChange`
- `PanelImperativeHandle` exposed via `ref` for programmatic control

### Persistence

```tsx
// Outer vertical group
<ResizablePanelGroup autoSaveId={`${autoSaveId}:vertical`}>
// Inner horizontal group
<ResizablePanelGroup autoSaveId={`${autoSaveId}:horizontal`}>
```

`autoSaveId` on `react-resizable-panels` automatically serializes layout to localStorage and restores on remount.

## Alternatives Considered

1. **CSS Grid layout** — cannot achieve smooth drag-to-resize without JS. Rejected.
2. **Custom resize logic** — reinventing `react-resizable-panels`. Rejected in favor of existing library.
3. **Bottom panel under center only** (IDEA default) — user requested full-width bottom panel. Chosen.

## Impact

- [x] New component in registry (`registry/components/idea-window/`)
- [ ] No breaking changes — purely additive
- [ ] No database/API changes
