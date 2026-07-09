## 1. Type Definitions

- [x] 1.1 Add `StorageSessionSnapshot` interface to `storage-session.ts` with fields: `id`, `content`, `selection`, `undoStack`, `scrollTop`, `scrollLeft`, `folds`, `mode`, `lastAccessed`
- [x] 1.2 Add `StorageSessionOptions` interface with `id: string` and optional `mode`

## 2. StorageSession Class

- [x] 2.1 Create `StorageSession` class extending `Ace.EditSession` in `registry/components/code-editor/storage-session.ts`
- [x] 2.2 Implement constructor accepting `(content: string, mode?: string, options?: StorageSessionOptions)` — call `super(content, mode)` then set `this.id`, `this.lastAccessed`
- [x] 2.3 Implement `touch()` method that updates `this.lastAccessed = Date.now()`
- [x] 2.4 Implement `toJSON(): StorageSessionSnapshot` — serialize content via `getValue()`, selection via `selection.toJSON()`, undoStack via `getUndoManager().toJSON()`, scroll via `getScrollTop()`/`getScrollLeft()`, folds via `getAllFolds()` mapped to `{ start, end, placeholder }`, mode via `getMode().$id`
- [x] 2.5 Implement `static fromJSON(snapshot: StorageSessionSnapshot): StorageSession` — create new instance with content, restore selection via `selection.fromJSON()`, undo via `getUndoManager().fromJSON()`, folds via `addFold()`, mode via `setMode()`
- [x] 2.6 Add type guard `isStorageSession(session): session is StorageSession` utility function

## 3. Session Pool Hook

- [x] 3.1 Create `useStorageSessionPool` hook in `registry/components/code-editor/use-session-pool.ts`
- [x] 3.2 Implement pool as `useRef(new Map<string, StorageSession>())` with `getOrCreate(id, options)` — return existing or create new
- [x] 3.3 Implement `switchTo(editor, tabId)` — call `editor.setSession(pool.get(tabId))`, then restore scroll position via `requestAnimationFrame` + `editor.setScrollTop/Left`
- [x] 3.4 Implement `close(tabId)` — remove from pool, return `toJSON()` snapshot or `undefined`
- [x] 3.5 Implement `serializeAll()` — return array of all session snapshots
- [x] 3.6 Implement `restoreFromSnapshots(snapshots)` — bulk-create sessions from snapshot array

## 4. useAceEditor Update

- [x] 4.1 Add `session` option to `UseAceEditorOptions` — when provided, call `editor.setSession(session)` instead of creating a default session
- [x] 4.2 Expose `editor` instance in return value as stable ref (already done, verify it's accessible for pool's `switchTo`)

## 5. Demo Integration

- [x] 5.1 Update code-editor demo to use `useStorageSessionPool` instead of `key={activeTab}` remounting
- [x] 5.2 Use `pool.switchTo(editor, activeTab)` on tab change instead of key-based remount
- [x] 5.3 Use `pool.close(tabId)` on tab close with optional snapshot logging

## 6. Tests

- [x] 6.1 Test `StorageSession` extends `EditSession` (instanceof check)
- [x] 6.2 Test `toJSON()` returns all expected fields
- [x] 6.3 Test `fromJSON()` restores content, selection, mode
- [x] 6.4 Test round-trip: `fromJSON(toJSON(session))` preserves state
- [x] 6.5 Test `useStorageSessionPool` getOrCreate creates and caches sessions
- [x] 6.6 Test pool `switchTo` calls `editor.setSession`
- [x] 6.7 Test pool `close` removes session and returns snapshot

## 7. Registry Build

- [x] 7.1 Run `pnpm registry:build` to regenerate registry artifacts
