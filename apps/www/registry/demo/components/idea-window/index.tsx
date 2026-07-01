'use client';

import {
  type ComponentPropsWithoutRef,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
import {
  hotkeysCoreFeature,
  selectionFeature,
  type ItemInstance,
  type TreeDataLoader,
} from '@headless-tree/core';
import { useTree } from '@headless-tree/react';

import {
  IdeaBottomBar,
  IdeaBottomPanel,
  IdeaLeftBar,
  IdeaPanel,
  IdeaRightBar,
  IdeaTopBar,
  IdeaWindow,
  useIdeaWindow,
} from '@/registry/components/idea-window';
import {
  DynamicTree,
  asyncDataLoaderFeature,
  type DynamicTreeItemData,
} from '@/registry/components/tree/dynamic-tree';
import {
  CodeEditor,
  CodeEditorTabs,
  CodeEditorPane,
  CodeEditorStatusBar,
  type EditorTabItem,
} from '@/registry/components/code-editor';
import {
  treeNodes,
  fileContents,
  rootId,
} from '@/registry/demo/components/idea-window/project-data';

// ─── Types ──────────────────────────────────────────────────

interface OpenFile {
  content: string;
  originalContent: string;
  mode: string;
}

type LogAction = 'open' | 'close' | 'modify' | 'switch';

interface LogEntry {
  time: string;
  action: LogAction;
  path: string;
}

type ProjectItem = DynamicTreeItemData & {
  kind: 'file' | 'folder';
  path: string;
  isFolder?: boolean;
};

type LoadedItem = { id: string; data: ProjectItem };
type ItemsMap = Record<string, Omit<ProjectItem, 'endContent'>>;
type ChildrenMap = Record<string, string[]>;

// ─── Helpers ────────────────────────────────────────────────

function formatTime(date: Date): string {
  return date.toLocaleTimeString('en-GB', {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: false,
  });
}

function logActionLabel(action: LogAction): string {
  switch (action) {
    case 'open':
      return 'Opened';
    case 'close':
      return 'Closed';
    case 'modify':
      return 'Modified';
    case 'switch':
      return 'Switched to';
  }
}

function fileNameFromPath(filePath: string): string {
  const parts = filePath.split('/');
  return parts[parts.length - 1] ?? filePath;
}

function getFileIcon(name: string, isFolder: boolean): string {
  if (isFolder) return 'folder';
  const ext = name.split('.').pop()?.toLowerCase();
  switch (ext) {
    case 'ts':
    case 'tsx':
    case 'js':
    case 'mjs':
    case 'cjs':
    case 'css':
    case 'json':
      return 'react';
    case 'md':
    case 'mdx':
      return 'markdown';
    default:
      return 'react';
  }
}

// Find a good default file to open on mount
const DEFAULT_FILE =
  Object.keys(fileContents).find((k) => k.endsWith('package.json')) ??
  Object.keys(fileContents)[0];

// ─── Demo State Hook ────────────────────────────────────────

function useDemoState() {
  const [openFiles, setOpenFiles] = useState<Map<string, OpenFile>>(() => {
    if (!DEFAULT_FILE) return new Map();
    const entry = fileContents[DEFAULT_FILE]!;
    const map = new Map<string, OpenFile>();
    map.set(DEFAULT_FILE, {
      content: entry.content,
      originalContent: entry.content,
      mode: entry.mode,
    });
    return map;
  });
  const [activeFile, setActiveFile] = useState<string | null>(
    DEFAULT_FILE ?? null,
  );
  const [logs, setLogs] = useState<LogEntry[]>([]);

  const addLog = useCallback((action: LogAction, path: string) => {
    setLogs((prev) => [
      ...prev,
      { time: formatTime(new Date()), action, path },
    ]);
  }, []);

  const openFile = useCallback(
    (filePath: string) => {
      const entry = fileContents[filePath];
      if (!entry) return;

      setOpenFiles((prev) => {
        const next = new Map(prev);
        if (!next.has(filePath)) {
          next.set(filePath, {
            content: entry.content,
            originalContent: entry.content,
            mode: entry.mode,
          });
        }
        return next;
      });
      setActiveFile(filePath);
      addLog('open', filePath);
    },
    [addLog],
  );

  const closeFile = useCallback(
    (filePath: string) => {
      setOpenFiles((prev) => {
        const next = new Map(prev);
        next.delete(filePath);
        return next;
      });
      addLog('close', filePath);

      setActiveFile((prev) => {
        if (prev !== filePath) return prev;
        const remaining = Array.from(openFiles.keys()).filter(
          (k) => k !== filePath,
        );
        return remaining.length > 0 ? remaining[remaining.length - 1]! : null;
      });
    },
    [addLog, openFiles],
  );

  const switchFile = useCallback(
    (filePath: string) => {
      setActiveFile(filePath);
      addLog('switch', filePath);
    },
    [addLog],
  );

  const handleEditorChange = useCallback(
    (value: string) => {
      if (!activeFile) return;
      setOpenFiles((prev) => {
        const next = new Map(prev);
        const file = next.get(activeFile);
        if (!file || file.content === value) return prev;

        const wasModified = file.content !== file.originalContent;
        next.set(activeFile, { ...file, content: value });

        if (!wasModified && value !== file.originalContent) {
          addLog('modify', activeFile);
        }
        return next;
      });
    },
    [activeFile, addLog],
  );

  return {
    openFiles,
    activeFile,
    logs,
    openFile,
    closeFile,
    switchFile,
    handleEditorChange,
  };
}

// ─── Tree Panel ─────────────────────────────────────────────

function ProjectTreePanel({
  onFileSelect,
}: {
  onFileSelect: (path: string) => void;
}) {
  const data = useMemo(() => {
    const items: ItemsMap = {};
    const children: ChildrenMap = {};

    for (const [id, node] of Object.entries(treeNodes)) {
      items[id] = {
        label: node.label,
        kind: node.isFolder ? 'folder' : 'file',
        path: id,
        isFolder: node.isFolder,
        icon: getFileIcon(node.label, node.isFolder),
      };
      if (node.children && node.children.length > 0) {
        children[id] = node.children;
      }
    }

    return { items, children };
  }, []);
  const loadedRef = useRef<Record<string, ProjectItem>>({});
  const nextIdRef = useRef(0);

  const loadData = useCallback(
    async (itemId: string | null): Promise<LoadedItem[]> => {
      const parentId = itemId ?? rootId;
      return (data.children[parentId] ?? []).map(
        (childId): LoadedItem => ({
          id: childId,
          data: data.items[childId] ?? {
            label: childId,
            kind: 'file',
            path: childId,
          },
        }),
      );
    },
    [data],
  );

  const dataLoader = useMemo<TreeDataLoader<ProjectItem>>(
    () => ({
      getItem: async (itemId: string) => {
        const [realItemId] = itemId.split('@');
        if (realItemId === rootId) {
          return { label: 'packages', isFolder: true } as ProjectItem;
        }
        return (
          loadedRef.current[realItemId] ??
          data.items[realItemId] ?? {
            label: realItemId,
            kind: 'file',
            path: realItemId,
          }
        );
      },
      getChildrenWithData: async (itemId: string) => {
        const [realItemId] = itemId.split('@');
        return loadData(realItemId === rootId ? null : realItemId);
      },
    }),
    [loadData, data],
  );

  const tree = useTree<ProjectItem>({
    rootItemId: rootId,
    dataLoader,
    isItemFolder: (item) => Boolean(item.getItemData()?.isFolder),
    getItemName: (item) => item.getItemData()?.label ?? item.getId(),
    onLoadedItem: (itemId, item) => {
      loadedRef.current[itemId] = item;
    },
    createLoadingItemData: () => ({}) as ProjectItem,
    features: [asyncDataLoaderFeature, selectionFeature, hotkeysCoreFeature],
  });

  const treeRef = useRef(tree);
  treeRef.current = tree;

  const addItem = useCallback(
    (item: ItemInstance<ProjectItem>) => {
      const parentId = item.getId();
      const id = `new-${nextIdRef.current++}`;
      const parentData = item.getItemData();
      data.items[id] = {
        label: 'New Item',
        kind: 'file',
        path: `${parentData?.path ?? parentId}/${id}`,
      };
      data.children[parentId] = [...(data.children[parentId] ?? []), id];
      void item.invalidateChildrenIds();
    },
    [data],
  );

  const deleteItem = useCallback(
    (item: ItemInstance<ProjectItem>) => {
      const itemId = item.getId();
      delete data.items[itemId];
      for (const [parentId, childIds] of Object.entries(data.children)) {
        const idx = childIds.indexOf(itemId);
        if (idx !== -1) {
          data.children[parentId] = childIds.filter((id) => id !== itemId);
          break;
        }
      }
      treeRef.current.rebuildTree();
    },
    [data],
  );

  // Event delegation: click on tree-item-button → open file
  const handleTreeClick = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      const target = (e.target as HTMLElement).closest<HTMLElement>(
        '[data-slot="tree-item-button"]',
      );
      if (!target) return;
      const itemId = target.getAttribute('data-value');
      if (!itemId) return;
      const node = treeNodes[itemId];
      if (node && !node.isFolder && fileContents[itemId]) {
        onFileSelect(itemId);
      }
    },
    [onFileSelect],
  );

  return (
    <div onClick={handleTreeClick} className="h-full">
      <DynamicTree<ProjectItem>
        containerProps={
          tree.getContainerProps(
            'ProjectTree',
          ) as ComponentPropsWithoutRef<'div'>
        }
        items={tree.getItems()}
        height="100%"
        addItem={addItem}
        deleteItem={deleteItem}
      />
    </div>
  );
}

// ─── Editor Panel ───────────────────────────────────────────

function EditorPanel({
  openFiles,
  activeFile,
  onSwitchFile,
  onCloseFile,
  onEditorChange,
}: {
  openFiles: Map<string, OpenFile>;
  activeFile: string | null;
  onSwitchFile: (path: string) => void;
  onCloseFile: (path: string) => void;
  onEditorChange: (value: string) => void;
}) {
  const tabItems: EditorTabItem[] = useMemo(() => {
    return Array.from(openFiles.entries()).map(([path, file]) => ({
      id: path,
      label: fileNameFromPath(path),
      mode: file.mode,
      modified: file.content !== file.originalContent,
    }));
  }, [openFiles]);

  const currentFile = activeFile ? openFiles.get(activeFile) : null;

  if (openFiles.size === 0) {
    return (
      <div className="flex h-full items-center justify-center text-sm text-gray-7">
        Click a file in the project tree to open it
      </div>
    );
  }

  return (
    <CodeEditor className="h-full border-0 rounded-none">
      <CodeEditorTabs
        items={tabItems}
        activeTab={activeFile ?? undefined}
        onActive={(_prev, next) => onSwitchFile(next.id)}
        onClose={(itemOrItems) => {
          const ids = Array.isArray(itemOrItems)
            ? itemOrItems.map((t) => t.id)
            : [itemOrItems.id];
          ids.forEach((id) => onCloseFile(id));
        }}
      />
      {currentFile && (
        <CodeEditorPane
          key={activeFile}
          mode={currentFile.mode}
          value={currentFile.content}
          onChange={onEditorChange}
        />
      )}
      <CodeEditorStatusBar />
    </CodeEditor>
  );
}

// ─── Operation Log Panel ────────────────────────────────────

function OperationLogPanel({ logs }: { logs: LogEntry[] }) {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = scrollRef.current;
    if (el) {
      el.scrollTop = el.scrollHeight;
    }
  }, [logs]);

  return (
    <div ref={scrollRef} className="h-full overflow-auto font-mono text-xs">
      {logs.length === 0 ? (
        <div className="p-2 text-gray-7">No operations yet</div>
      ) : (
        logs.map((entry, i) => (
          <div
            key={i}
            className="px-2 py-0.5 hover:bg-gray-10 dark:hover:bg-gray-5"
          >
            <span className="text-gray-7">[{entry.time}]</span>{' '}
            <span className="text-blue-8 dark:text-blue-6">
              {logActionLabel(entry.action)}
            </span>
            : {entry.path}
          </div>
        ))
      )}
    </div>
  );
}

// ─── Bar buttons ────────────────────────────────────────────

function LeftBarButtons() {
  const { toggle } = useIdeaWindow();
  return (
    <>
      <button
        type="button"
        className="flex h-7 w-7 items-center justify-center rounded text-xs hover:bg-gray-9 dark:hover:bg-gray-5"
        onClick={() => toggle('left')}
        title="Toggle Project"
      >
        P
      </button>
      <button
        type="button"
        className="flex h-7 w-7 items-center justify-center rounded text-xs hover:bg-gray-9 dark:hover:bg-gray-5"
        title="Structure"
      >
        S
      </button>
      <div className="flex-1" />
      <button
        type="button"
        className="flex h-7 w-7 items-center justify-center rounded text-xs hover:bg-gray-9 dark:hover:bg-gray-5"
        onClick={() => toggle('bottom')}
        title="Toggle Log"
      >
        L
      </button>
    </>
  );
}

// ─── Main demo ──────────────────────────────────────────────

interface IdeaWindowDemoProps {
  autoSaveId?: string;
  collapsible?: boolean;
}

export default function IdeaWindowDemo({
  autoSaveId = 'idea-window-demo',
  collapsible = true,
}: IdeaWindowDemoProps) {
  const state = useDemoState();

  return (
    <div className="h-[500px] w-full overflow-hidden rounded-lg border">
      <IdeaWindow autoSaveId={autoSaveId}>
        <IdeaTopBar>
          <span className="text-xs font-medium">File</span>
          <span className="text-xs">Edit</span>
          <span className="text-xs">View</span>
          <span className="text-xs">Navigate</span>
          <span className="text-xs">Code</span>
        </IdeaTopBar>

        <IdeaLeftBar>
          <LeftBarButtons />
        </IdeaLeftBar>

        <IdeaPanel
          id="left"
          defaultSize={20}
          minSize={10}
          collapsible={collapsible}
        >
          <ProjectTreePanel onFileSelect={state.openFile} />
        </IdeaPanel>

        <IdeaPanel id="center" defaultSize={80} minSize={20}>
          <EditorPanel
            openFiles={state.openFiles}
            activeFile={state.activeFile}
            onSwitchFile={state.switchFile}
            onCloseFile={state.closeFile}
            onEditorChange={state.handleEditorChange}
          />
        </IdeaPanel>

        <IdeaRightBar />

        <IdeaBottomPanel
          id="bottom"
          defaultSize={25}
          minSize={10}
          collapsible={collapsible}
        >
          <OperationLogPanel logs={state.logs} />
        </IdeaBottomPanel>

        <IdeaBottomBar>
          <span className="text-gray-7">packages</span>
          <span className="ml-auto text-gray-7">UTF-8</span>
        </IdeaBottomBar>
      </IdeaWindow>
    </div>
  );
}
