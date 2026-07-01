'use client';

import { useState, useCallback, useEffect, useRef, useContext } from 'react';

import {
  CodeEditor,
  CodeEditorTabs,
  CodeEditorPane,
  CodeEditorStatusBar,
  type EditorTabItem,
} from '@/registry/components/code-editor';
import {
  type DynamicTabsProps,
} from '@/registry/components/tabs/dynamic-tabs';
import { useStorageSessionPool } from '@/registry/components/code-editor/use-session-pool';
import type { StorageSession } from '@/registry/components/code-editor/storage-session';
import { EditorContext } from '@/registry/components/code-editor';

const SAMPLE_FILES: Record<string, { mode: string; content: string }> = {
  'app.tsx': {
    mode: 'typescript',
    content: `import React from 'react';
import { render } from 'react-dom';

interface AppProps {
  title: string;
}

function App({ title }: AppProps) {
  const [count, setCount] = React.useState(0);

  return (
    <div className="app">
      <h1>{title}</h1>
      <p>Count: {count}</p>
      <button onClick={() => setCount(c => c + 1)}>
        Increment
      </button>
    </div>
  );
}

export default App;
`,
  },
  'styles.css': {
    mode: 'css',
    content: `.app {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  font-family: var(--jb-font-sans);
}

h1 {
  color: var(--jb-blue-8);
  font-size: var(--jb-text-2xl);
}

button {
  padding: var(--jb-space-2) var(--jb-space-4);
  border-radius: var(--jb-radius-md);
  cursor: pointer;
}
`,
  },
  'index.ts': {
    mode: 'typescript',
    content: `import { render } from 'react-dom';
import App from './app';

const root = document.getElementById('root');

if (root) {
  render(<App title="JetBrains UI Editor" />, root);
}
`,
  },
};

const initialTabs: EditorTabItem[] = [
  { id: 'app.tsx', label: 'app.tsx', mode: 'typescript' },
  { id: 'styles.css', label: 'styles.css', mode: 'css' },
  { id: 'index.ts', label: 'index.ts', mode: 'typescript', pinned: true },
];

export default function CodeEditorDemo() {
  const [tabs, setTabs] = useState(initialTabs);
  const [activeTab, setActiveTab] = useState('app.tsx');
  const [modified, setModified] = useState<Record<string, boolean>>({});
  const [initialSession, setInitialSession] = useState<StorageSession | null>(
    null,
  );

  const pool = useStorageSessionPool();
  const { editor } = useContext(EditorContext);
  const editorReadyRef = useRef(false);

  // Create initial session on first render
  useEffect(() => {
    if (initialSession) return;
    const file = SAMPLE_FILES['app.tsx'];
    const session = pool.getOrCreate('app.tsx', {
      content: file.content,
      mode: file.mode,
    });
    setInitialSession(session);
  }, [initialSession, pool]);

  // Pre-create sessions for other tabs
  useEffect(() => {
    for (const tab of initialTabs) {
      if (tab.id === 'app.tsx') continue;
      const file = SAMPLE_FILES[tab.id];
      if (file && !pool.has(tab.id)) {
        pool.getOrCreate(tab.id, { content: file.content, mode: file.mode });
      }
    }
  }, [pool]);

  // Switch sessions when activeTab changes (after editor is mounted)
  useEffect(() => {
    if (!editor || !editorReadyRef.current) return;
    if (pool.has(activeTab)) {
      pool.switchTo(editor, activeTab);
    }
  }, [activeTab, editor, pool]);

  // Mark editor as ready after first render with session
  useEffect(() => {
    if (editor && initialSession) {
      editorReadyRef.current = true;
    }
  }, [editor, initialSession]);

  const handleChange = useCallback(
    (value: string) => {
      setModified((prev) => {
        if (prev[activeTab]) return prev;
        return { ...prev, [activeTab]: true };
      });
    },
    [activeTab],
  );

  const handleActiveChange = useCallback(
    (_prev: DynamicTabsProps | null, next: DynamicTabsProps) => {
      setActiveTab(next.id);
    },
    [],
  );

  const handleCloseTabs = useCallback(
    (itemOrItems: DynamicTabsProps | DynamicTabsProps[]) => {
      const ids = Array.isArray(itemOrItems)
        ? itemOrItems.map((t) => t.id)
        : [itemOrItems.id];
      setTabs((prev) => prev.filter((t) => !ids.includes(t.id)));
      setModified((prev) => {
        const next = { ...prev };
        for (const id of ids) delete next[id];
        return next;
      });
      // Close sessions from pool and log snapshots
      for (const id of ids) {
        const snapshot = pool.close(id);
        if (snapshot) {
          console.log(`[storage-session] closed ${id}`, snapshot);
        }
      }
      // If active tab is being closed, switch to first remaining
      if (ids.includes(activeTab)) {
        const remaining = tabs.filter((t) => !ids.includes(t.id));
        if (remaining.length > 0) {
          setActiveTab(remaining[0].id);
        }
      }
    },
    [activeTab, tabs, pool],
  );

  const tabItems: EditorTabItem[] = tabs.map((t) => ({
    ...t,
    modified: !!modified[t.id],
  }));

  return (
    <CodeEditor className="h-[500px]">
      <CodeEditorTabs
        items={tabItems}
        activeTab={activeTab}
        onActive={handleActiveChange}
        onClose={handleCloseTabs}
      />
      {initialSession ? (
        <CodeEditorPane session={initialSession} onChange={handleChange} />
      ) : (
        <CodeEditorPane mode="text" value="" onChange={handleChange} />
      )}
      <CodeEditorStatusBar />
    </CodeEditor>
  );
}
