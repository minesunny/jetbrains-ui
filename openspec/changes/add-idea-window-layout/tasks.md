# Tasks for Add IntelliJ IDEA-style Window Layout Component

## 1. Component Implementation

- [x] **1.1** Create `registry/components/idea-window/index.tsx` — implement all 8 compound components (`IdeaWindow`, `IdeaTopBar`, `IdeaBottomBar`, `IdeaContent`, `IdeaLeftBar`, `IdeaRightBar`, `IdeaPanel`, `IdeaBottomPanel`) with correct nesting of `ResizablePanelGroup`, `ResizablePanel`, `ResizableHandle`
- [x] **1.2** Implement child distribution logic in `IdeaWindow` and `IdeaContent` using `Children.map` + component type matching to place slots into correct positions
- [x] **1.3** Add `collapsible` support on `IdeaPanel` and `IdeaBottomPanel` with `collapsedSize={0}`, `onCollapse`/`onExpand` → `onCollapsedChange` mapping
- [x] **1.4** Wire `autoSaveId` persistence: `${autoSaveId}:vertical` for outer group, `${autoSaveId}:horizontal` for inner group
- [x] **1.5** Expose `PanelImperativeHandle` ref forwarding on `IdeaPanel` and `IdeaBottomPanel` for programmatic collapse/expand

## 2. Registry & Demo

- [x] **2.1** Create `registry/components/idea-window/registry-item.json` with correct dependencies (`react-resizable-panels`, `@workspace/ui`) and `registryDependencies` (`resizable`)
- [x] **2.2** Create `registry/demo/components/idea-window/index.tsx` — demo with mock IDE content (project tree, editor, terminal, tool panels), all 4 bars populated
- [x] **2.3** Create `registry/demo/components/idea-window/registry-item.json`
- [x] **2.4** Create demo variant showing collapsible panels with toggle buttons

## 3. Documentation

- [x] **3.1** Create `content/docs/components/idea-window.mdx` (EN) with `ComponentPreview`, `ComponentInstallation`, props table, and usage examples
- [x] **3.2** Create `content/docs-zh/components/idea-window.mdx` (ZH) — bilingual mirror
- [x] **3.3** Update `content/docs/components/meta.json` — add sidebar entry
- [x] **3.4** Update `content/docs-zh/components/meta.json` — add sidebar entry

## 4. Validation

- [x] **4.1** Run `pnpm format:write && pnpm lint && pnpm build`
- [x] **4.2** Run `pnpm registry:build` and verify registry artifacts
- [ ] **4.3** Test collapse/expand behavior in browser
- [ ] **4.4** Test layout persistence: resize panels, refresh page, verify restoration
