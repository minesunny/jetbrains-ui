'use client';

import {
  Children,
  Fragment,
  type ComponentPropsWithoutRef,
  type ReactNode,
  createContext,
  forwardRef,
  memo,
  useCallback,
  useContext,
  useId,
  useMemo,
  useRef,
  useState,
} from 'react';
import {
  useDefaultLayout,
  type LayoutStorage,
  type PanelImperativeHandle,
} from 'react-resizable-panels';
import * as ResizablePrimitive from 'react-resizable-panels';

import { cn } from '@workspace/ui/lib/utils';
import {
  ResizablePanel,
  ResizablePanelGroup,
} from '@/registry/components/resizable';

// ─── Panel Control API ───────────────────────────────────────

interface IdeaWindowApi {
  collapse: (panelId: string) => void;
  expand: (panelId: string) => void;
  toggle: (panelId: string) => void;
  isCollapsed: (panelId: string) => boolean;
}

const IdeaWindowApiContext = createContext<IdeaWindowApi | null>(null);

/**
 * Access panel control methods from any child of `<IdeaWindow>`.
 *
 * ```tsx
 * const { toggle } = useIdeaWindow();
 * <button onClick={() => toggle('left')}>Toggle</button>
 * ```
 */
function useIdeaWindow(): IdeaWindowApi {
  const api = useContext(IdeaWindowApiContext);
  if (!api) {
    throw new Error('useIdeaWindow must be used within an <IdeaWindow>');
  }
  return api;
}

// ─── Internal: panel registration ────────────────────────────

interface PanelRegistry {
  register: (id: string, handle: PanelImperativeHandle) => void;
  setCollapsed: (id: string, collapsed: boolean) => void;
}

const PanelRegistryContext = createContext<PanelRegistry | null>(null);

// ─── Persistence helpers ─────────────────────────────────────

function useMemoryStorage(): LayoutStorage {
  return useMemo(() => {
    const map = new Map<string, string>();
    return {
      getItem: (name: string) => map.get(name) ?? null,
      setItem: (name: string, value: string) => {
        map.set(name, value);
      },
    };
  }, []);
}

const safeLocalStorage: LayoutStorage = {
  getItem: (name: string) => {
    try {
      return localStorage.getItem(name);
    } catch {
      return null;
    }
  },
  setItem: (name: string, value: string) => {
    try {
      localStorage.setItem(name, value);
    } catch {
      // Ignore write errors (SSR, storage quota, etc.)
    }
  },
};

// ─── Slot matching ───────────────────────────────────────────

function isSlotType(child: ReactNode, displayName: string): boolean {
  return (
    typeof child === 'object' &&
    child !== null &&
    'type' in child &&
    (child.type as unknown as Record<string, unknown>).displayName ===
      displayName
  );
}

// ─── Bars ────────────────────────────────────────────────────

function IdeaTopBar({
  className,
  children,
  ...props
}: ComponentPropsWithoutRef<'div'>) {
  return (
    <div
      data-slot="idea-top-bar"
      className={cn('flex h-10 shrink-0 items-center px-2', className)}
      {...props}
    >
      {children}
    </div>
  );
}
IdeaTopBar.displayName = 'IdeaTopBar';

function IdeaBottomBar({
  className,
  children,
  ...props
}: ComponentPropsWithoutRef<'div'>) {
  return (
    <div
      data-slot="idea-bottom-bar"
      className={cn('flex h-7 shrink-0 items-center px-2 text-xs', className)}
      {...props}
    >
      {children}
    </div>
  );
}
IdeaBottomBar.displayName = 'IdeaBottomBar';

function IdeaLeftBar({
  className,
  children,
  ...props
}: ComponentPropsWithoutRef<'div'>) {
  return (
    <div
      data-slot="idea-left-bar"
      className={cn(
        'flex w-10 shrink-0 flex-col items-center gap-1 py-1',
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
}
IdeaLeftBar.displayName = 'IdeaLeftBar';

function IdeaRightBar({
  className,
  children,
  ...props
}: ComponentPropsWithoutRef<'div'>) {
  return (
    <div
      data-slot="idea-right-bar"
      className={cn(
        'flex w-10 shrink-0 flex-col items-center gap-1 py-1',
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
}
IdeaRightBar.displayName = 'IdeaRightBar';

// ─── Panels ──────────────────────────────────────────────────

interface IdeaPanelProps {
  id: string;
  defaultSize?: number;
  minSize?: number;
  maxSize?: number;
  collapsible?: boolean;
  defaultCollapsed?: boolean;
  onCollapsedChange?: (collapsed: boolean) => void;
  className?: string;
  children: ReactNode;
}

const IdeaPanel = memo(
  forwardRef<PanelImperativeHandle, IdeaPanelProps>(
    (
      {
        id,
        defaultSize,
        minSize,
        maxSize,
        collapsible,
        defaultCollapsed,
        onCollapsedChange,
        className,
        children,
      },
      ref,
    ) => {
      const collapsedRef = useRef(false);
      const registry = useContext(PanelRegistryContext);

      const handleRef = useMemo(
        () => (handle: PanelImperativeHandle | null) => {
          if (handle) registry?.register(id, handle);
        },
        [id, registry],
      );

      return (
        <ResizablePanel
          id={id}
          defaultSize={defaultCollapsed ? 0 : defaultSize}
          minSize={collapsible ? (minSize ?? 0) : (minSize ?? 5)}
          maxSize={maxSize}
          collapsible={collapsible}
          collapsedSize={0}
          className={cn('rounded-lg bg-gray-12 dark:bg-gray-1', className)}
          onResize={(size) => {
            const collapsed = size.asPercentage === 0;
            if (collapsedRef.current !== collapsed) {
              collapsedRef.current = collapsed;
              registry?.setCollapsed(id, collapsed);
              onCollapsedChange?.(collapsed);
            }
          }}
          ref={(handle) => {
            handleRef(handle);
            if (typeof ref === 'function') ref(handle);
            else if (ref) ref.current = handle;
          }}
        >
          <div className="h-full overflow-hidden rounded-lg border border-gray-10 dark:border-gray-5">
            {children}
          </div>
        </ResizablePanel>
      );
    },
  ),
);
IdeaPanel.displayName = 'IdeaPanel';

interface IdeaBottomPanelProps {
  id: string;
  defaultSize?: number;
  minSize?: number;
  maxSize?: number;
  collapsible?: boolean;
  defaultCollapsed?: boolean;
  onCollapsedChange?: (collapsed: boolean) => void;
  className?: string;
  children: ReactNode;
}

const IdeaBottomPanel = memo(
  forwardRef<PanelImperativeHandle, IdeaBottomPanelProps>(
    (
      {
        id,
        defaultSize,
        minSize,
        maxSize,
        collapsible,
        defaultCollapsed,
        onCollapsedChange,
        className,
        children,
      },
      ref,
    ) => {
      const collapsedRef = useRef(false);
      const registry = useContext(PanelRegistryContext);

      const handleRef = useMemo(
        () => (handle: PanelImperativeHandle | null) => {
          if (handle) registry?.register(id, handle);
        },
        [id, registry],
      );

      return (
        <ResizablePanel
          id={id}
          defaultSize={defaultCollapsed ? 0 : defaultSize}
          minSize={collapsible ? (minSize ?? 0) : (minSize ?? 5)}
          maxSize={maxSize}
          collapsible={collapsible}
          collapsedSize={0}
          className={cn('rounded-lg bg-gray-12 dark:bg-gray-1', className)}
          onResize={(size) => {
            const collapsed = size.asPercentage === 0;
            if (collapsedRef.current !== collapsed) {
              collapsedRef.current = collapsed;
              registry?.setCollapsed(id, collapsed);
              onCollapsedChange?.(collapsed);
            }
          }}
          ref={(handle) => {
            handleRef(handle);
            if (typeof ref === 'function') ref(handle);
            else if (ref) ref.current = handle;
          }}
        >
          <div className="h-full overflow-hidden rounded-lg border border-gray-10 dark:border-gray-5">
            {children}
          </div>
        </ResizablePanel>
      );
    },
  ),
);
IdeaBottomPanel.displayName = 'IdeaBottomPanel';

// ─── Gap Handle ──────────────────────────────────────────────

function IdeaGapHandle({ hidden }: { hidden?: boolean }) {
  return (
    <ResizablePrimitive.Separator
      data-slot="idea-gap-handle"
      className={cn(
        'relative flex shrink-0 items-center justify-center transition-[width,height] duration-150',
        'w-1.5 cursor-col-resize',
        "aria-[orientation='horizontal']:h-1.5 aria-[orientation='horizontal']:w-full aria-[orientation='horizontal']:cursor-row-resize",
        hidden &&
          '!w-0 !cursor-default aria-[orientation=horizontal]:!h-0 aria-[orientation=horizontal]:!cursor-default',
      )}
    />
  );
}

// ─── IdeaWindow ──────────────────────────────────────────────

interface IdeaWindowProps {
  children: ReactNode;
  autoSaveId?: string;
  className?: string;
}

function IdeaWindow({ children, autoSaveId, className }: IdeaWindowProps) {
  const shouldPersist = autoSaveId != null;
  const fallbackId = useId();
  const memoryStorage = useMemoryStorage();

  const verticalLayout = useDefaultLayout({
    id: shouldPersist ? `${autoSaveId}:vertical` : `idea-v-${fallbackId}`,
    storage: shouldPersist ? safeLocalStorage : memoryStorage,
  });

  const horizontalLayout = useDefaultLayout({
    id: shouldPersist ? `${autoSaveId}:horizontal` : `idea-h-${fallbackId}`,
    storage: shouldPersist ? safeLocalStorage : memoryStorage,
  });

  // Panel registry + collapse tracking
  const panelsMap = useRef(new Map<string, PanelImperativeHandle>());
  const [collapsedIds, setCollapsedIds] = useState<Set<string>>(new Set());

  const registry = useMemo<PanelRegistry>(
    () => ({
      register: (id, handle) => {
        panelsMap.current.set(id, handle);
      },
      setCollapsed: (id, collapsed) => {
        setCollapsedIds((prev) => {
          const next = new Set(prev);
          if (collapsed) next.add(id);
          else next.delete(id);
          return next;
        });
      },
    }),
    [],
  );

  const api = useMemo<IdeaWindowApi>(
    () => ({
      collapse: (id) => panelsMap.current.get(id)?.collapse(),
      expand: (id) => panelsMap.current.get(id)?.expand(),
      toggle: (id) => {
        const handle = panelsMap.current.get(id);
        if (!handle) return;
        if (handle.isCollapsed()) handle.expand();
        else handle.collapse();
      },
      isCollapsed: (id) => panelsMap.current.get(id)?.isCollapsed() ?? false,
    }),
    [],
  );

  // Distribute children by slot type
  const childArray = Children.toArray(children);
  const topBar = childArray.find((c) => isSlotType(c, 'IdeaTopBar'));
  const bottomBar = childArray.find((c) => isSlotType(c, 'IdeaBottomBar'));
  const leftBar = childArray.find((c) => isSlotType(c, 'IdeaLeftBar'));
  const rightBar = childArray.find((c) => isSlotType(c, 'IdeaRightBar'));
  const panels = childArray.filter((c) => isSlotType(c, 'IdeaPanel'));
  const bottomPanel = childArray.find((c) => isSlotType(c, 'IdeaBottomPanel'));

  // Extract panel IDs for gap logic
  const panelIds = panels.map(
    (p) => (p as React.ReactElement<IdeaPanelProps>).props.id,
  );
  const bottomPanelId = bottomPanel
    ? (bottomPanel as React.ReactElement<IdeaBottomPanelProps>).props.id
    : null;

  return (
    <IdeaWindowApiContext.Provider value={api}>
      <PanelRegistryContext.Provider value={registry}>
        <div
          data-slot="idea-window"
          className={cn(
            'flex h-full w-full flex-col overflow-hidden bg-gray-11 dark:bg-gray-2',
            className,
          )}
        >
          {topBar}
          <div className="flex flex-1">
            {leftBar}
            <ResizablePanelGroup
              orientation="vertical"
              className="flex-1"
              defaultLayout={verticalLayout.defaultLayout}
              onLayoutChanged={verticalLayout.onLayoutChanged}
            >
              <ResizablePanel
                id="horizontal-area"
                defaultSize={75}
                minSize={20}
              >
                <ResizablePanelGroup
                  orientation="horizontal"
                  className="h-full"
                  defaultLayout={horizontalLayout.defaultLayout}
                  onLayoutChanged={horizontalLayout.onLayoutChanged}
                >
                  {panels.map((panel, i) => {
                    const prevCollapsed =
                      i > 0 && collapsedIds.has(panelIds[i - 1]);
                    const curCollapsed = collapsedIds.has(panelIds[i]);
                    const hideGap = i > 0 && (prevCollapsed || curCollapsed);
                    return (
                      <Fragment key={panelIds[i]}>
                        {i > 0 && <IdeaGapHandle hidden={hideGap} />}
                        {panel}
                      </Fragment>
                    );
                  })}
                </ResizablePanelGroup>
              </ResizablePanel>
              {bottomPanel && (
                <IdeaGapHandle hidden={collapsedIds.has(bottomPanelId ?? '')} />
              )}
              {bottomPanel}
            </ResizablePanelGroup>
            {rightBar}
          </div>
          {bottomBar}
        </div>
      </PanelRegistryContext.Provider>
    </IdeaWindowApiContext.Provider>
  );
}
IdeaWindow.displayName = 'IdeaWindow';

export {
  IdeaWindow,
  IdeaTopBar,
  IdeaBottomBar,
  IdeaLeftBar,
  IdeaRightBar,
  IdeaPanel,
  IdeaBottomPanel,
  useIdeaWindow,
};
