## Context

The registry has IDE-layout primitives (`idea-window`, `resizable`, `dynamic-tabs`) but no code editing surface. The `dynamic-tabs` component provides a data-driven tab bar with close/pin/context-menu — a solid foundation for an editor tab bar.

Ace Editor (`ace-builds`) is a battle-tested, embeddable code editor with syntax highlighting for 120+ languages, 20+ themes, code folding, multi-cursor, and extensible key bindings. It separates document state into `EditSession` objects, enabling multi-tab session management (deferred to a future change).

## Goals / Non-Goals

**Goals:**
- Compound `<CodeEditor>` component composing tab bar + editor pane + status bar
- Custom `useAceEditor` hook wrapping `ace-builds` with proper React lifecycle management
- Custom `ace-jetbrains` theme reading from `--jb-*` CSS variables (light + dark mode)
- Extend `DynamicTabItem` with `modified?: boolean` for dirty state indicator
- Status bar showing cursor position, encoding, language mode, indentation
- Full JetBrains IDE visual fidelity

**Non-Goals:**
- Multi-tab session management (swapping `EditSession` objects) — deferred to follow-up change
- Split editor panes or diff view
- Autocomplete / IntelliSense integration
- File system operations (open/save files)
- Minimap

## Decisions

### 1. Single compound component (Option A)

**Decision**: Export `<CodeEditor>` with sub-components `CodeEditorTabs`, `CodeEditorPane`, `CodeEditorStatusBar`.

**Rationale**: The user wants a ready-to-use editor that feels like a JetBrains IDE. A single compound component is simpler to consume than composing primitives. Sub-components are still individually addressable for advanced use cases.

### 2. `ace-builds` + custom hook (no `react-ace`)

**Decision**: Use `ace-builds` directly with a custom `useAceEditor` React hook instead of `react-ace`.

**Rationale**: `react-ace` is a wrapper around `ace-builds` that adds its own lifecycle management. For our needs (custom theme, future session management, status bar integration), direct control over the Ace instance is more flexible and avoids fighting the wrapper. The hook is ~50-80 lines — manageable to maintain.

**Hook API:**
```ts
const { editorRef, editor } = useAceEditor({
  mode: 'typescript',
  theme: 'jetbrains',
  value: initialCode,
  onChange?: (value: string) => void,
  readOnly?: boolean,
  options?: Ace.EditorOptions,
})
```

The hook:
- Creates editor on mount via `ace.edit(ref.current)`
- Sets mode, theme, options
- Syncs `value` prop changes to editor (`session.setValue`)
- Fires `onChange` on editor `change` event
- Destroys editor on unmount
- Returns stable `editorRef` (for DOM mounting) and `editor` (for imperative access)

### 3. Custom `ace-jetbrains` theme from CSS variables

**Decision**: Create a CSS theme class `.ace-jetbrains` that maps Ace's token classes to `--jb-*` design tokens.

**Rationale**: The project already has comprehensive `--jb-*` CSS variables including editor-specific typography tokens (`--jb-typography-editor-default-font-size: 13px`, `--jb-font-mono` for JetBrains Mono). A custom theme that reads these variables ensures visual consistency with the rest of the JetBrains UI system and automatically adapts to light/dark mode.

**Theme mapping** (key token types):
```
.ace-jetbrains .ace_keyword    → --jb-blue-8 (keywords: if, return, function)
.ace-jetbrains .ace_string     → --jb-green-7 (strings)
.ace-jetbrains .ace_comment    → --jb-gray-8, italic (comments)
.ace-jetbrains .ace_function   → --jb-purple-7 (function names)
.ace-jetbrains .ace_numeric   → --jb-blue-8 (numbers)
.ace-jetbrains .ace_constant  → --jb-orange-6 (constants: true, null)
.ace-jetbrains .ace_variable  → --jb-gray-1 / --jb-gray-12 (variables)
.ace-jetbrains .ace_type      → --jb-teal-7 (type names)
.ace-jetbrains .ace_tag       → --jb-blue-8 (HTML/XML tags)
.ace-jetbrains .ace_attribute → --jb-yellow-7 (attributes)
.ace-jetbrains .ace_operator  → --jb-gray-1 / --jb-gray-12 (operators)
```

**Background/gutter:**
- Editor background: `--jb-gray-12` (light) / `--jb-gray-2` (dark)
- Gutter background: `--jb-gray-11` (light) / `--jb-gray-3` (dark)
- Gutter text: `--jb-gray-7`
- Active line: `--jb-blue-11` (light) / `--jb-blue-2` (dark)
- Selection: `--jb-blue-9` (light) / `--jb-blue-4` (dark)

Light/dark switching is handled by Tailwind's `dark:` variant or `.dark` class on root.

### 4. Extend `DynamicTabItem` with `modified` field

**Decision**: Add `modified?: boolean` to the existing `DynamicTabItem` interface. When `modified` is true, render a `●` dot alongside the tab label (before the close/pin button).

**Rationale**: Extending the existing interface is the cleanest approach. The `modified` field is optional and backward-compatible. The visual follows JetBrains IDE convention: modified tab shows `● filename` with the dot rendered in `--jb-blue-8` color.

**Rendering change in `DynamicTabItemButton`:**
- `modified && !pinned`: show `●` dot + `×` close button
- `!modified && !pinned`: show `×` close button only
- `pinned`: show `📌` pin icon (unchanged)

### 5. Status bar components and data

**Decision**: `CodeEditorStatusBar` subscribes to Ace editor events to display live cursor position, selection range, encoding, language mode, and indentation.

**Rationale**: The status bar reads directly from the Ace editor instance via React context or ref forwarding. It listens to `changeSelection` and `changeStatus` events to update in real-time without re-rendering the editor.

**Status bar layout:**
```
┌──────────────────────────────────────────────────────────┐
│ Ln 5, Col 12  │  UTF-8  │  TypeScript  │  Spaces: 2     │
└──────────────────────────────────────────────────────────┘
```

### 6. File structure

**Decision**: Single registry item at `registry/components/code-editor/` with:
- `index.tsx` — compound component + sub-components
- `use-ace-editor.ts` — custom hook
- `theme.ts` — theme registration (imports `ace-builds` theme module)
- `registry-item.json` — registry metadata

**Rationale**: Follows the `idea-window` pattern of co-locating related parts in one registry folder. The hook and theme are internal implementation details exported for advanced consumers.

### 7. No session management in this phase

**Decision**: The initial implementation creates one Ace editor instance. Each `CodeEditorPane` renders its own editor. Multi-tab session swapping (single Ace instance + multiple `EditSession` objects) is deferred.

**Rationale**: Session management is the most complex part. Getting the basic editor + theme + tab bar + status bar working first provides immediate value and validates the architecture. Session management can be added as a follow-up change without breaking changes.

## Risks / Trade-offs

- **[`ace-builds` bundle size]** → Ace ships modes/themes as separate files. We must use `ace-builds/src-noconflict/` imports and only load needed modes to keep bundle lean. Demo loads TypeScript + CSS + JavaScript modes only.
- **[Theme maintenance]** → Custom theme must track Ace token class names. Ace is stable but new token types could appear. Mitigated by covering the ~30 most common types.
- **[SSR compatibility]** → Ace requires browser APIs (`document`, `window`). Component must use `'use client'` and dynamic imports. Hook uses `useEffect` for editor creation to avoid SSR issues.
- **[Modified indicator on DynamicTabsList]** → Extending `DynamicTabItem` means updating the existing component. Risk is low since `modified` is optional and doesn't change existing behavior.
