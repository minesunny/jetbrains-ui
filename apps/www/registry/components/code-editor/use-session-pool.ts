'use client';

import { useRef, useCallback } from 'react';
import type ace from 'ace-builds';

import { StorageSession, type StorageSessionSnapshot } from './storage-session';

interface CreateSessionOptions {
  content?: string;
  mode?: string;
}

export interface StorageSessionPool {
  getOrCreate: (id: string, options?: CreateSessionOptions) => StorageSession;
  switchTo: (editor: InstanceType<typeof ace.Editor>, tabId: string) => void;
  close: (tabId: string) => StorageSessionSnapshot | undefined;
  serializeAll: () => StorageSessionSnapshot[];
  restoreFromSnapshots: (snapshots: StorageSessionSnapshot[]) => void;
  has: (id: string) => boolean;
}

export function useStorageSessionPool(): StorageSessionPool {
  const poolRef = useRef(new Map<string, StorageSession>());

  const getOrCreate = useCallback(
    (id: string, options?: CreateSessionOptions): StorageSession => {
      const pool = poolRef.current;
      const existing = pool.get(id);
      if (existing) {
        existing.touch();
        return existing;
      }

      const session = new StorageSession(
        options?.content ?? '',
        options?.mode ? `ace/mode/${options.mode}` : undefined,
        { id },
      );
      pool.set(id, session);
      return session;
    },
    [],
  );

  const switchTo = useCallback((editor: InstanceType<typeof ace.Editor>, tabId: string) => {
    const session = poolRef.current.get(tabId);
    if (!session) return;

    session.touch();
    const { scrollTop, scrollLeft } = session.toJSON();

    editor.setSession(session as unknown as InstanceType<typeof ace.EditSession>);

    // Scroll position is managed by VirtualRenderer, restore after layout
    requestAnimationFrame(() => {
      // ace-builds types are incomplete — setScrollTop/setScrollLeft exist at runtime
      (editor as unknown as { setScrollTop(v: number): void }).setScrollTop(scrollTop);
      (editor as unknown as { setScrollLeft(v: number): void }).setScrollLeft(scrollLeft);
    });
  }, []);

  const close = useCallback(
    (tabId: string): StorageSessionSnapshot | undefined => {
      const pool = poolRef.current;
      const session = pool.get(tabId);
      if (!session) return undefined;
      pool.delete(tabId);
      return session.toJSON();
    },
    [],
  );

  const serializeAll = useCallback((): StorageSessionSnapshot[] => {
    return Array.from(poolRef.current.values()).map((s) => s.toJSON());
  }, []);

  const restoreFromSnapshots = useCallback(
    (snapshots: StorageSessionSnapshot[]) => {
      const pool = poolRef.current;
      for (const snapshot of snapshots) {
        const session = StorageSession.fromJSON(snapshot);
        pool.set(snapshot.id, session);
      }
    },
    [],
  );

  const has = useCallback((id: string): boolean => {
    return poolRef.current.has(id);
  }, []);

  return {
    getOrCreate,
    switchTo,
    close,
    serializeAll,
    restoreFromSnapshots,
    has,
  };
}
