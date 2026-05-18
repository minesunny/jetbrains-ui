## ADDED Requirements

### Requirement: StorageSession extends EditSession
StorageSession SHALL extend `Ace.EditSession`. An instance SHALL be accepted by `editor.setSession()` without any adapter or wrapper.

#### Scenario: Editor accepts StorageSession
- **WHEN** a `StorageSession` instance is passed to `editor.setSession()`
- **THEN** the editor SHALL switch to that session with all content and state intact

#### Scenario: StorageSession is instanceof EditSession
- **WHEN** `instanceof Ace.EditSession` is checked on a `StorageSession` instance
- **THEN** it SHALL return `true`

### Requirement: StorageSession has unique id and metadata
Each `StorageSession` SHALL have an `id: string` property identifying the file/tab, and a `lastAccessed: number` timestamp updated when the session is accessed.

#### Scenario: id is set on construction
- **WHEN** `new StorageSession(content, mode, { id: 'app.tsx' })` is called
- **THEN** `session.id` SHALL be `'app.tsx'`

#### Scenario: lastAccessed is updated on touch
- **WHEN** `session.touch()` is called
- **THEN** `session.lastAccessed` SHALL be updated to the current timestamp

### Requirement: StorageSession serializes to plain snapshot
`session.toJSON()` SHALL return a `StorageSessionSnapshot` plain object containing: `id`, `content`, `selection`, `undoStack`, `scrollTop`, `scrollLeft`, `folds`, `mode`, `lastAccessed`.

#### Scenario: toJSON returns complete snapshot
- **WHEN** `session.toJSON()` is called on a session with content, cursor at line 5 col 10, 3 undo steps, scroll at y=200, and 2 folds
- **THEN** the returned object SHALL contain `content` matching session value, `selection` with cursor position, `undoStack` with undo history, `scrollTop` of 200, `scrollLeft` of 0, `folds` array with 2 entries, and `mode` string

#### Scenario: toJSON returns serializable plain object
- **WHEN** `JSON.stringify(session.toJSON())` is called
- **THEN** it SHALL not throw and SHALL produce a valid JSON string

### Requirement: StorageSession deserializes from snapshot
`StorageSession.fromJSON(snapshot)` SHALL create a new `StorageSession` instance with all state restored from the snapshot.

#### Scenario: fromJSON restores content and selection
- **WHEN** `StorageSession.fromJSON(snapshot)` is called with a snapshot containing content "hello" and selection at row 0 col 3
- **THEN** the returned session SHALL have `getValue()` returning "hello" and cursor at row 0 col 3

#### Scenario: fromJSON restores undo history
- **WHEN** `StorageSession.fromJSON(snapshot)` is called with a snapshot containing undoStack data
- **THEN** the returned session's undo manager SHALL have the same undo/redo stack

#### Scenario: fromJSON restores folds
- **WHEN** `StorageSession.fromJSON(snapshot)` is called with a snapshot containing 2 folds
- **THEN** the returned session SHALL have those 2 folds reconstructed at the correct ranges

#### Scenario: fromJSON restores mode
- **WHEN** `StorageSession.fromJSON(snapshot)` is called with mode "ace/mode/typescript"
- **THEN** the returned session SHALL have the typescript mode set

### Requirement: Round-trip serialization preserves state
Calling `toJSON()` then `fromJSON()` SHALL produce a session with equivalent state.

#### Scenario: Full round-trip
- **WHEN** a session with content, cursor at line 3 col 5, 5 undo steps, scroll at y=100, and 1 fold is serialized via `toJSON()` then restored via `fromJSON()`
- **THEN** the restored session SHALL have identical content, cursor position, undo step count, scroll values, and fold count
