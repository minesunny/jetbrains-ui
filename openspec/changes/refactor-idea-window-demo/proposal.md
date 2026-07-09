## Why

The current idea-window demo uses a hardcoded fake project tree (~90 manually-defined items) and a static HTML mock of an editor. This doesn't showcase the real power of the component library. A demo that uses the actual project's file structure with a working Ace Editor would be far more convincing and useful for testing the component integration.

## What Changes

- Add build-time script `apps/www/scripts/generate-project-data.ts` that scans the real project directory and generates a static TypeScript module with file tree structure and file contents
- Rewrite `IdeaWindowDemo` to:
  - Display the real project file tree in the left panel (via `DynamicTree`)
  - Open files in the Ace Editor when clicked (in-memory editing only)
  - Track open files with modified/dirty state indicators in `CodeEditorTabs`
  - Log all operations (open, close, modify, tab-switch) in the bottom panel
- Remove the right panel (Debug) to keep the demo focused
- Remove the fake `buildProjectData()` function and static editor HTML

## Capabilities

### New Capabilities

- `generate-project-data`: Build-time script that scans project files and outputs a TypeScript module with tree structure and file contents

### Modified Capabilities

- `demo-idea-window`: Rewritten to use real project data, integrated CodeEditor, and operation log panel

## Impact

- **New files**: `apps/www/scripts/generate-project-data.ts`, generated output `apps/www/registry/demo/components/idea-window/project-data.ts`
- **Modified files**: `apps/www/registry/demo/components/idea-window/index.tsx` (full rewrite of demo)
- **Build integration**: Add `generate-project-data` step to `pnpm registry:build` pipeline
- **No breaking changes**: Only affects the demo component, not the idea-window component itself
