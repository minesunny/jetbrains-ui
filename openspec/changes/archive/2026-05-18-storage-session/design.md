## Context

The code-editor component (`registry/components/code-editor/`) uses Ace editor with a `useAceEditor` hook. The demo currently uses `key={activeTab}` to switch tabs, which unmounts/remounts the entire Ace editor — destroying all session state (cursor, undo, folds, scroll).

Ace has a built-in `EditSession` class that naturally holds all per-file state. It also has `toJSON()`/`fromJSON()` on `Selection` and `UndoManager`, plus `getAllFolds()`/`addFolds()` for fold serialization. The design leverages these existing APIs.

## Goals / Non-Goals

**Goals:**
- `StorageSession` extends `Ace.EditSession` with zero-adaptation — `editor.setSession(storageSession)` works directly
- Full serialization: content, selection/cursor, undo/redo stack, scroll position, folds, mode
- `toJSON()` returns a plain `StorageSessionSnapshot` object; `static fromJSON(snapshot)` reconstructs the session
- `useStorageSessionPool` hook manages session lifecycle in React — create, switch, close, serialize
- Storage medium is consumer-chosen (localStorage, IndexedDB, in-memory, etc.)

**Non-Goals:**
- Built-in storage backends (localStorage, IndexedDB) — consumer provides these
- Multi-editor sync or collaborative editing
- Persistence across page loads (consumer can implement via toJSON/onClose)
- Split editor support (same file in two panes)

## Decisions

### 1. Inheritance over composition

**Decision:** `StorageSession extends Ace.EditSession`

**Rationale:** `editor.setSession()` accepts `EditSession` instances. Inheritance means `StorageSession` is a drop-in replacement — no adapter layer, no wrapping. Ace internally calls methods like `session.getValue()`, `session.selection.toJSON()`, `session.getUndoManager()` — all inherited and available.

**Alternative considered:** Wrapper pattern (`class StorageSession { private session: EditSession }`) — would require proxying every method or providing a `.raw` accessor. Fragile and verbose.

### 2. Serialization as plain object, not string

**Decision:** `toJSON()` returns a `StorageSessionSnapshot` (plain object), not a JSON string. Consumer calls `JSON.stringify()` if needed.

**Rationale:** Gives consumer flexibility to inspect, transform, or diff the snapshot before persisting. Also works with structured clone (IndexedDB), MessageChannel, etc.

### 3. Scroll position restored via editor, not session

**Decision:** `scrollTop`/`scrollLeft` stored in snapshot but restored via `editor.setScrollTop()`/`editor.setScrollLeft()` after `setSession()`, not inside `fromJSON()`.

**Rationale:** `EditSession` doesn't expose scroll position as a property — scroll is managed by the `VirtualRenderer`. The session pool hook handles this after switching sessions.

### 4. Fold serialization via getAllFolds + addFolds

**Decision:** Serialize folds as `{ start: {row, column}, end: {row, column}, placeholder: string }[]` using `session.getAllFolds()`, restore via `session.addFold(placeholder, Range)`.

**Rationale:** Ace has no built-in fold serialization. `getAllFolds()` returns `Fold[]` with `range` and `placeholder` fields. These are the minimum data needed to reconstruct folds via `addFold()`.

### 5. Session pool as a React hook (useRef Map)

**Decision:** `useStorageSessionPool` uses `useRef(new Map())` to hold sessions across renders. No external state manager.

**Rationale:** Sessions are mutable Ace objects — putting them in React state causes unnecessary re-renders. A ref-based Map is stable, fast, and doesn't trigger re-renders on session content changes. The hook exposes imperative methods (`getOrCreate`, `switchTo`, `close`, `serializeAll`).

## Risks / Trade-offs

**[Ace internal API changes]** `getAllFolds()`, `selection.toJSON()`, `UndoManager.toJSON()` are stable public APIs documented in Ace docs. Low risk of breakage. → Mitigation: Pin ace-builds version; add type guards in fromJSON.

**[Large undo stacks]** `UndoManager.toJSON()` can produce large objects for long editing sessions. → Mitigation: Consumer can prune undo stack via `undoManager.reset()` before serialization, or limit serialization to recent history.

**[Scroll restore timing]** Scroll position must be set after `setSession()` and renderer layout. → Mitigation: Use `requestAnimationFrame` or `setTimeout(0)` in the hook after switching sessions.
