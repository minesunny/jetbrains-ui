## ADDED Requirements

### Requirement: useStorageSessionPool manages session lifecycle
`useStorageSessionPool` SHALL return methods to create, retrieve, switch, close, and serialize `StorageSession` instances. Sessions SHALL be stored in a `Map<id, StorageSession>` via `useRef` to avoid unnecessary re-renders.

#### Scenario: Create and retrieve session
- **WHEN** `pool.getOrCreate('app.tsx', { content: 'hello', mode: 'typescript' })` is called
- **THEN** a new `StorageSession` SHALL be created and stored; subsequent calls with the same id SHALL return the same instance

#### Scenario: getOrCreate returns existing session
- **WHEN** `pool.getOrCreate('app.tsx', ...)` is called after a session with id 'app.tsx' already exists
- **THEN** the existing session SHALL be returned without re-creation

### Requirement: switchTo swaps editor session
`pool.switchTo(editor, tabId)` SHALL call `editor.setSession(session)` to swap the active session. It SHALL also restore scroll position from the session's stored scroll values.

#### Scenario: Switch to different tab
- **WHEN** `pool.switchTo(editor, 'styles.css')` is called while 'app.tsx' is active
- **THEN** the editor SHALL display the content and state of 'styles.css' session

#### Scenario: Scroll position restored after switch
- **WHEN** a session was scrolled to y=300 before switching away, and `pool.switchTo(editor, tabId)` is called to switch back
- **THEN** the editor SHALL be scrolled to y=300 after the switch completes

### Requirement: close removes session
`pool.close(tabId)` SHALL remove the session from the pool. It SHALL return the removed session's snapshot (via `toJSON()`) so the consumer can persist it if desired, or `undefined` if the session didn't exist.

#### Scenario: Close existing session
- **WHEN** `pool.close('app.tsx')` is called on an existing session
- **THEN** the session SHALL be removed from the pool and its snapshot SHALL be returned

#### Scenario: Close non-existent session
- **WHEN** `pool.close('missing.ts')` is called
- **THEN** `undefined` SHALL be returned

### Requirement: serializeAll returns all snapshots
`pool.serializeAll()` SHALL return an array of `StorageSessionSnapshot` for all sessions currently in the pool.

#### Scenario: Serialize all sessions
- **WHEN** the pool has 3 sessions and `pool.serializeAll()` is called
- **THEN** an array of 3 `StorageSessionSnapshot` objects SHALL be returned

### Requirement: restoreFromSnapshots bulk-creates sessions
`pool.restoreFromSnapshots(snapshots)` SHALL create `StorageSession` instances from an array of snapshots and populate the pool.

#### Scenario: Restore from saved snapshots
- **WHEN** `pool.restoreFromSnapshots([snapshot1, snapshot2])` is called
- **THEN** the pool SHALL contain 2 sessions with state matching the snapshots
