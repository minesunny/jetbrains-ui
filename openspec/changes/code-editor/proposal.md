## Why

The project lacks a code editor component. The registry already has an IDE-like layout system (`idea-window`, `resizable`, `dynamic-tabs`) but no actual code editing surface. A `CodeEditor` component built on Ace Editor fills this gap, providing a multi-tab code editing experience that looks and feels like a JetBrains IDE.

The `dynamic-tabs` component already handles tab bar rendering with close/pin/context-menu support, but lacks a modified (dirty) indicator. The editor component extends it to complete the IDE editing experience.

## What Changes

- Add new `CodeEditor` compound component at `registry/components/code-editor/`
  - `CodeEditorTabs` — wraps `DynamicTabsList`, adds `modified` indicator support via extended `EditorTabItem` interface
  - `CodeEditorPane` — renders Ace Editor instance using custom `useAceEditor` hook backed by `ace-builds`
  - `CodeEditorStatusBar` — shows cursor position, encoding, language mode, indentation info
- Add `useAceEditor` React hook wrapping `ace-builds` directly (no `react-ace` dependency)
- Add custom `ace-jetbrains` theme that reads from `--jb-*` CSS variables, supporting both light and dark modes via CSS `dark` class
- Extend `DynamicTabItem` interface with `modified?: boolean` field (shows `●` dot when dirty, `×` close when clean)

## Capabilities

### New Capabilities

- `code-editor`: Compound code editor component with tab bar (modified indicators), Ace editor pane, and status bar

### Modified Capabilities

- `dynamic-tabs`: Add `modified?: boolean` to `DynamicTabItem` interface; render `●` dot indicator for modified tabs alongside close button

## Impact

- **New files**: `registry/components/code-editor/` (component, hook, theme CSS, registry-item), demo, tests, docs
- **New dependency**: `ace-builds` npm package
- **Modified files**: `registry/components/tabs/dynamic-tabs.tsx` (add `modified` field to `DynamicTabItem`, update rendering)
- **Registry dependencies**: `dynamic-tabs`, `scroll-area`, `separator`
- **No breaking changes**: `modified` field is optional, existing `DynamicTabItem` usage unaffected
