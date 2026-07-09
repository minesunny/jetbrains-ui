import ace from 'ace-builds/src-noconflict/ace';

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

export interface StorageSessionSnapshot {
  id: string;
  content: string;
  selection: unknown;
  undoStack: { $redoStack: unknown[]; $undoStack: unknown[] };
  scrollTop: number;
  scrollLeft: number;
  folds: Array<{
    start: { row: number; column: number };
    end: { row: number; column: number };
    placeholder: string;
  }>;
  mode: string;
  lastAccessed: number;
}

export interface StorageSessionOptions {
  id: string;
  mode?: string;
}

// ---------------------------------------------------------------------------
// StorageSession
// ---------------------------------------------------------------------------

const EditSession = ace.require('ace/edit_session').EditSession;

export class StorageSession extends EditSession {
  id: string;
  lastAccessed: number;

  constructor(content: string, mode?: string, options?: StorageSessionOptions) {
    super(content, mode ?? 'ace/mode/text');
    this.id = options?.id ?? '';
    this.lastAccessed = Date.now();
  }

  touch(): void {
    this.lastAccessed = Date.now();
  }

  toJSON(): StorageSessionSnapshot {
    const folds = this.getAllFolds().map(
      (fold: {
        range: {
          start: { row: number; column: number };
          end: { row: number; column: number };
        };
        placeholder: string;
      }) => ({
        start: { row: fold.range.start.row, column: fold.range.start.column },
        end: { row: fold.range.end.row, column: fold.range.end.column },
        placeholder: fold.placeholder,
      }),
    );

    const undoManager = this.getUndoManager();

    return {
      id: this.id,
      content: this.getValue(),
      selection: this.selection.toJSON(),
      undoStack:
        typeof undoManager.toJSON === 'function'
          ? (undoManager.toJSON() as {
              $redoStack: unknown[];
              $undoStack: unknown[];
            })
          : { $redoStack: [], $undoStack: [] },
      scrollTop: this.getScrollTop(),
      scrollLeft: this.getScrollLeft(),
      folds,
      mode: this.getMode().$id ?? 'ace/mode/text',
      lastAccessed: this.lastAccessed,
    };
  }

  static fromJSON(snapshot: StorageSessionSnapshot): StorageSession {
    const session = new StorageSession(snapshot.content, snapshot.mode, {
      id: snapshot.id,
    });

    // Restore selection / cursor
    session.selection.fromJSON(snapshot.selection);

    // Restore undo history (if UndoManager supports serialization)
    const undoManager = session.getUndoManager();
    if (typeof undoManager.fromJSON === 'function') {
      undoManager.fromJSON(snapshot.undoStack);
    }

    // Restore folds
    const Range = ace.require('ace/range').Range;
    for (const fold of snapshot.folds) {
      const range = Range.fromPoints(fold.start, fold.end);
      session.addFold(fold.placeholder, range);
    }

    // Restore mode (constructor already set it, but ensure consistency)
    if (snapshot.mode) {
      session.setMode(snapshot.mode);
    }

    // Scroll position is stored but restored by the pool hook via editor
    session.lastAccessed = snapshot.lastAccessed;

    return session;
  }
}

// ---------------------------------------------------------------------------
// Utility
// ---------------------------------------------------------------------------

export function isStorageSession(
  session: InstanceType<typeof ace.EditSession>,
): session is StorageSession {
  return session instanceof StorageSession;
}
