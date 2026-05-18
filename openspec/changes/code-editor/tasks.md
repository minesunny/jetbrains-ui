## 1. Setup & Dependencies

- [x] **1.1** Install `ace-builds` npm package to the www app
- [x] **1.2** Create `registry/components/code-editor/` directory structure with `registry-item.json`

## 2. Custom Ace Theme

- [x] **2.1** Create `ace-jetbrains` theme CSS file mapping Ace token classes (`.ace_keyword`, `.ace_string`, `.ace_comment`, `.ace_function`, `.ace_numeric`, `.ace_constant`, `.ace_variable`, `.ace_type`, `.ace_tag`, `.ace_attribute`, `.ace_operator`, etc.) to `--jb-*` CSS variables
- [x] **2.2** Add light mode variants (`.ace-jetbrains` with `--jb-*` light tokens)
- [x] **2.3** Add dark mode variants (`.dark .ace-jetbrains` with `--jb-*` dark tokens)
- [x] **2.4** Style gutter, active line, selection, cursor using `--jb-*` tokens
- [x] **2.5** Create `theme.ts` module that registers the theme with Ace's theme system

## 3. `useAceEditor` Hook

- [x] **3.1** Create `use-ace-editor.ts` hook with editor lifecycle management (create on mount, destroy on unmount)
- [x] **3.2** Implement `value` prop sync — update editor content when prop changes
- [x] **3.3** Implement `onChange` callback — fire on editor `change` event
- [x] **3.4** Implement `mode` prop — load and set Ace mode (language highlighting)
- [x] **3.5** Implement `readOnly`, `options` props
- [x] **3.6** Handle SSR safety — ensure editor creation only in `useEffect` (client-side)

## 4. Extend DynamicTabItem (Modified Indicator)

- [x] **4.1** Add `modified?: boolean` field to `DynamicTabItem` interface in `dynamic-tabs.tsx`
- [x] **4.2** Update `DynamicTabItemButton` to render `●` dot when `modified` is true (before close/pin button, styled with `--jb-blue-8`)
- [x] **4.3** Rendering rules: `modified=true && !pinned` → show `●` + `×`; `modified=false && !pinned` → show `×` only; `pinned` → show pin icon (unchanged)

## 5. Compound Component

- [x] **5.1** Create `CodeEditor` root component — vertical flex container with tabs, pane, status bar slots
- [x] **5.2** Create `CodeEditorTabs` — wraps `DynamicTabsList` with editor-specific tab item type (`EditorTabItem extends DynamicTabItem`)
- [x] **5.3** Create `CodeEditorPane` — uses `useAceEditor` hook, renders editor in a div, applies JetBrains styling
- [x] **5.4** Create `CodeEditorStatusBar` — subscribes to editor events, displays cursor position (`Ln X, Col Y`), language mode, encoding, indentation info
- [x] **5.5** Add `data-slot` attributes to all sub-components for styling hooks

## 6. Registry

- [x] **6.1** Create `registry/components/code-editor/registry-item.json` with `ace-builds` dependency and registry deps (`dynamic-tabs`, `scroll-area`, `separator`)
- [x] **6.2** Create barrel `index.tsx` export

## 7. Demo

- [x] **7.1** Create `registry/demo/components/code-editor/index.tsx` demo with sample TypeScript code, tab switching, modified state toggling, and status bar

## 8. Tests

- [x] **8.1** Add test for `useAceEditor` hook — editor creation and cleanup
- [x] **8.2** Add test for `useAceEditor` hook — `onChange` fires on edit
- [x] **8.3** Add test for `useAceEditor` hook — `value` prop sync
- [x] **8.4** Add test for `DynamicTabItem` modified indicator — renders `●` when `modified=true`
- [x] **8.5** Add test for `CodeEditorStatusBar` — displays cursor position info

## 9. Documentation

- [x] **9.1** Create English docs at `content/docs/components/code-editor/index.mdx`
- [x] **9.2** Create Chinese docs at `content/docs-zh/components/code-editor/index.mdx`

## 10. Registry Build

- [x] **10.1** Run `pnpm registry:build` to regenerate registry artifacts
