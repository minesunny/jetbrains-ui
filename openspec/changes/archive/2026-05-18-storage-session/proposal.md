## Why

The code-editor component currently destroys and recreates the Ace editor instance on every tab switch (`key={activeTab}`). This loses all editor state — cursor position, selection, undo history, scroll offset, and code folds. Users expect IDE-like tab behavior where switching between files preserves their full editing context. We need a `StorageSession` that extends `Ace.EditSession` with built-in serialization so consumers can persist and restore editor state using any storage backend.

## What Changes

- Add `StorageSession` class extending `Ace.EditSession` with `toJSON()` / `static fromJSON()` for full state serialization
- Serialize: content, cursor/selection, undo/redo stacks, scroll position, code folds, mode, metadata (id, lastAccessed)
- Add `useStorageSessionPool` hook that manages a `Map<tabId, StorageSession>` lifecycle in React
- Update `CodeEditorPane` to support session-based rendering (reuse single editor instance, swap sessions via `editor.setSession()`)
- Update code-editor demo to use session pool instead of `key={activeTab}` remounting
- No changes to existing `DynamicTabsList` or tab-related APIs

## Capabilities

### New Capabilities

- `storage-session`: Serializable editor session extending Ace.EditSession with toJSON/fromJSON, supporting content, selection, undo history, scroll position, folds, and mode serialization
- `session-pool`: React hook (`useStorageSessionPool`) managing StorageSession lifecycle — create, switch, close, and optional batch serialization

### Modified Capabilities

## Impact

- **New files**: `registry/components/code-editor/storage-session.ts`, `registry/components/code-editor/use-session-pool.ts`
- **Modified files**: `registry/components/code-editor/use-ace-editor.ts` (add session switching support), `registry/demo/components/code-editor/index.tsx` (use session pool)
- **Dependencies**: `ace-builds` (already in project)
- **No breaking changes**: Existing `CodeEditorPane` with `key` prop continues to work; session pool is opt-in
