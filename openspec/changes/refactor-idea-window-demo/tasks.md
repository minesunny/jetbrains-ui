## 1. Build-Time Data Generator

- [x] **1.1** Create `apps/www/scripts/generate-project-data.ts` script with recursive directory scanner
- [x] **1.2** Scan only `packages/` directory (not entire project), with exclusion rules (node_modules, .next, .git, etc.)
- [x] **1.3** Implement file content reader with 30KB size limit and text-only extension allowlist
- [x] **1.4** Implement file extension → Ace mode mapping (ts/tsx→typescript, js/mjs→javascript, css→css, json→json, md/mdx→markdown, html→html, yaml/yml→yaml, sh→sh, xml→xml, default→text)
- [x] **1.5** Generate output TypeScript module at `apps/www/registry/demo/components/idea-window/project-data.ts` with typed exports: `treeNodes`, `fileContents`, `rootId`
- [x] **1.6** Add `generate-project-data` script to `apps/www/package.json` and integrate into `pnpm registry:build` pipeline (run before registry build)

## 2. Demo Rewrite — State & Types

- [x] **2.1** Define demo state types: `OpenFile` (content, originalContent, mode), `LogEntry` (time, action, path)
- [x] **2.2** Implement `useDemoState` hook managing `openFiles`, `activeFile`, `logs`, and `treeData` state
- [x] **2.3** Implement `addLog` helper that pushes timestamped entries
- [x] **2.4** Implement `openFile` action — loads from project-data, adds to openFiles, sets activeFile
- [x] **2.5** Implement `closeFile` action — removes from openFiles, handles active tab auto-switch
- [x] **2.6** Implement `handleEditorChange` action — updates content, marks modified on first change

## 3. Demo Rewrite — Tree Panel

- [x] **3.1** Create `ProjectTreePanel` sub-component using `DynamicTree` with real project data from `project-data.ts`
- [x] **3.2** Wire tree item click → `openFile` action (only for files, not folders) — added `onItemClick` prop to DynamicTree
- [x] **3.3** Support in-memory add/delete on the tree (mutates local treeData copy, no filesystem)
- [x] **3.4** Map tree node icons by file extension / folder status

## 4. Demo Rewrite — Editor Panel

- [x] **4.1** Create `EditorPanel` sub-component using `CodeEditor`, `CodeEditorTabs`, `CodeEditorPane`, `CodeEditorStatusBar`
- [x] **4.2** Build tab items from `openFiles` state — label from filename, modified indicator, mode from file extension
- [x] **4.3** Wire tab click → `switchFile`, tab close → `closeFile`
- [x] **4.4** Wire editor onChange → `handleEditorChange`
- [x] **4.5** Handle `key={activeFile}` for editor remount on tab switch

## 5. Demo Rewrite — Bottom Panel (Operation Log)

- [x] **5.1** Create `OperationLogPanel` sub-component rendering scrollable log list inside `IdeaBottomPanel`
- [x] **5.2** Format each log entry as `[HH:mm:ss] Action: path`
- [x] **5.3** Auto-scroll to bottom on new log entries
- [x] **5.4** Style with monospace font and JetBrains color tokens

## 6. Demo Rewrite — Layout Assembly

- [x] **6.1** Remove `RightBarButtons` component and right panel
- [x] **6.2** Update `IdeaWindowDemo` to use 2-panel layout: left tree (20%) + center editor (80%)
- [x] **6.3** Remove old `buildProjectData()` function and all related types/data
- [x] **6.4** Remove old `ProjectTreePanel` (the one with hardcoded data)
- [x] **6.5** Remove old `EditorPanel` (the one with sample EDITOR_FILES)
- [x] **6.6** Wire all sub-components together with `useDemoState`

## 7. Cleanup

- [x] **7.1** Remove `@headless-tree/core` and `@headless-tree/react` from demo registry-item.json dependencies (no longer needed if DynamicTree handles it internally)
- [x] **7.2** Verify registry-item.json dependencies are correct (ace-builds, code-editor, dynamic-tree, idea-window)
- [x] **7.3** Run `pnpm registry:build` to verify generated data and build pipeline
- [x] **7.4** Run `pnpm test` to verify all tests pass
