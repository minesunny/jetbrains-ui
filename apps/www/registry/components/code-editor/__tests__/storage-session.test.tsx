import { renderHook, act } from '@testing-library/react';
import ace from 'ace-builds/src-noconflict/ace';

import {
  StorageSession,
  isStorageSession,
  type StorageSessionSnapshot,
} from '@/registry/components/code-editor/storage-session';
import { useStorageSessionPool } from '@/registry/components/code-editor/use-session-pool';

// ---------------------------------------------------------------------------
// Helper: create a minimal editor for pool tests
// ---------------------------------------------------------------------------
function createTestEditor() {
  const div = document.createElement('div');
  div.style.cssText = 'width:400px;height:300px;';
  document.body.appendChild(div);
  const editor = ace.edit(div);
  return { editor, div };
}

function cleanupEditor(
  editor: InstanceType<typeof ace.Editor>,
  div: HTMLDivElement,
) {
  editor.destroy();
  div.remove();
}

// ---------------------------------------------------------------------------
// 6.1 StorageSession extends EditSession
// ---------------------------------------------------------------------------
describe('StorageSession', () => {
  it('is instanceof EditSession', () => {
    const session = new StorageSession('hello', undefined, { id: 'test' });
    // EditSession from ace.require
    const EditSession = ace.require('ace/edit_session').EditSession;
    expect(session).toBeInstanceOf(EditSession);
  });

  it('is identified by isStorageSession type guard', () => {
    const session = new StorageSession('hello', undefined, { id: 'test' });
    expect(isStorageSession(session)).toBe(true);

    const plainSession = ace.createEditSession('hello', 'ace/mode/text');
    expect(isStorageSession(plainSession)).toBe(false);
  });

  // -------------------------------------------------------------------------
  // 6.2 toJSON returns all expected fields
  // -------------------------------------------------------------------------
  it('toJSON returns complete snapshot', () => {
    const session = new StorageSession('line1\nline2\nline3', 'ace/mode/text', {
      id: 'app.tsx',
    });
    // Move cursor to line 2, col 3
    session.selection.moveCursorTo(1, 3);

    // Make an edit so undo stack has data
    session.insert({ row: 0, column: 0 }, 'x');

    const snapshot = session.toJSON();

    expect(snapshot.id).toBe('app.tsx');
    expect(snapshot.content).toBe('xline1\nline2\nline3');
    expect(snapshot.scrollTop).toBe(0);
    expect(snapshot.scrollLeft).toBe(0);
    expect(snapshot.mode).toBe('ace/mode/text');
    expect(snapshot.lastAccessed).toBeGreaterThan(0);
    expect(snapshot.selection).toBeDefined();
    expect(snapshot.undoStack).toBeDefined();
    expect(snapshot.undoStack.$undoStack).toBeDefined();
    expect(snapshot.folds).toEqual([]);
  });

  it('toJSON returns JSON-serializable plain object', () => {
    const session = new StorageSession('hello', undefined, { id: 'test' });
    const snapshot = session.toJSON();
    expect(() => JSON.stringify(snapshot)).not.toThrow();
  });

  // -------------------------------------------------------------------------
  // 6.3 fromJSON restores content, selection, mode
  // -------------------------------------------------------------------------
  it('fromJSON restores content', () => {
    const snapshot: StorageSessionSnapshot = {
      id: 'app.tsx',
      content: 'restored content',
      selection: { start: { row: 0, column: 0 }, end: { row: 0, column: 0 } },
      undoStack: { $redoStack: [], $undoStack: [] },
      scrollTop: 0,
      scrollLeft: 0,
      folds: [],
      mode: 'ace/mode/typescript',
      lastAccessed: Date.now(),
    };

    const session = StorageSession.fromJSON(snapshot);
    expect(session.getValue()).toBe('restored content');
    expect(session.id).toBe('app.tsx');
  });

  // -------------------------------------------------------------------------
  // 6.4 Round-trip preserves state
  // -------------------------------------------------------------------------
  it('round-trip toJSON → fromJSON preserves content and id', () => {
    const original = new StorageSession('hello world', 'ace/mode/text', {
      id: 'roundtrip.ts',
    });
    original.insert({ row: 0, column: 0 }, '/* start */\n');

    const snapshot = original.toJSON();
    const restored = StorageSession.fromJSON(snapshot);

    expect(restored.getValue()).toBe(original.getValue());
    expect(restored.id).toBe('roundtrip.ts');
    expect(restored.toJSON().folds).toEqual([]);
  });

  // -------------------------------------------------------------------------
  // touch updates lastAccessed
  // -------------------------------------------------------------------------
  it('touch updates lastAccessed', () => {
    const session = new StorageSession('hello', undefined, { id: 'test' });
    const before = session.lastAccessed;
    // Advance time conceptually
    session.touch();
    expect(session.lastAccessed).toBeGreaterThanOrEqual(before);
  });
});

// ---------------------------------------------------------------------------
// 6.5–6.7 useStorageSessionPool tests
// ---------------------------------------------------------------------------
describe('useStorageSessionPool', () => {
  it('getOrCreate creates and caches sessions', () => {
    const { result } = renderHook(() => useStorageSessionPool());
    const pool = result.current;

    const session = pool.getOrCreate('file.ts', {
      content: 'hello',
      mode: 'typescript',
    });

    expect(session).toBeDefined();
    expect(session.id).toBe('file.ts');
    expect(session.getValue()).toBe('hello');

    // Same id returns same instance
    const same = pool.getOrCreate('file.ts');
    expect(same).toBe(session);
  });

  it('switchTo calls editor.setSession', () => {
    const { result } = renderHook(() => useStorageSessionPool());
    const pool = result.current;

    pool.getOrCreate('a.ts', { content: 'aaa' });
    pool.getOrCreate('b.ts', { content: 'bbb' });

    const { editor, div } = createTestEditor();

    act(() => {
      pool.switchTo(editor, 'b.ts');
    });

    expect(editor.session.getValue()).toBe('bbb');

    cleanupEditor(editor, div);
  });

  it('close removes session and returns snapshot', () => {
    const { result } = renderHook(() => useStorageSessionPool());
    const pool = result.current;

    pool.getOrCreate('close-me.ts', { content: 'bye' });

    const snapshot = pool.close('close-me.ts');
    expect(snapshot).toBeDefined();
    expect(snapshot!.id).toBe('close-me.ts');
    expect(snapshot!.content).toBe('bye');

    // Second close returns undefined
    expect(pool.close('close-me.ts')).toBeUndefined();
  });

  it('serializeAll returns all session snapshots', () => {
    const { result } = renderHook(() => useStorageSessionPool());
    const pool = result.current;

    pool.getOrCreate('a.ts', { content: 'aaa' });
    pool.getOrCreate('b.ts', { content: 'bbb' });

    const snapshots = pool.serializeAll();
    expect(snapshots).toHaveLength(2);
    expect(snapshots.map((s) => s.id).sort()).toEqual(['a.ts', 'b.ts']);
  });

  it('restoreFromSnapshots bulk-creates sessions', () => {
    const { result } = renderHook(() => useStorageSessionPool());
    const pool = result.current;

    const snapshots: StorageSessionSnapshot[] = [
      {
        id: 'r1.ts',
        content: 'restored1',
        selection: { start: { row: 0, column: 0 }, end: { row: 0, column: 0 } },
        undoStack: { $redoStack: [], $undoStack: [] },
        scrollTop: 0,
        scrollLeft: 0,
        folds: [],
        mode: 'ace/mode/text',
        lastAccessed: Date.now(),
      },
      {
        id: 'r2.ts',
        content: 'restored2',
        selection: { start: { row: 0, column: 0 }, end: { row: 0, column: 0 } },
        undoStack: { $redoStack: [], $undoStack: [] },
        scrollTop: 0,
        scrollLeft: 0,
        folds: [],
        mode: 'ace/mode/text',
        lastAccessed: Date.now(),
      },
    ];

    pool.restoreFromSnapshots(snapshots);

    const s1 = pool.getOrCreate('r1.ts');
    const s2 = pool.getOrCreate('r2.ts');
    expect(s1.getValue()).toBe('restored1');
    expect(s2.getValue()).toBe('restored2');
  });
});
