'use client';

import * as React from 'react';

import { cn } from '@workspace/ui/lib/utils';
import { General } from '@/registry/components/icons';
import { ScrollArea, ScrollViewport } from '@/registry/components/scroll-area';
import './index.css';

type TreeContextValue = {
  selectedId: string | null;
  setSelectedId: (nextId: string) => void;
  expandedIds: Set<string>;
  toggleExpanded: (id: string, expanded?: boolean) => void;
  indent: number;
};

interface TreeProps extends React.ComponentPropsWithoutRef<'ul'> {
  selectedId?: string | null;
  defaultSelectedId?: string | null;
  onSelectedIdChange?: (id: string) => void;
  expandedIds?: string[];
  defaultExpandedIds?: string[];
  onExpandedIdsChange?: (ids: string[]) => void;
  indent?: number;
  width?: React.CSSProperties['width'];
  height?: React.CSSProperties['height'];
  scrollAreaClassName?: string;
}

interface TreeItemProps
  extends Omit<React.ComponentProps<'li'>, 'children' | 'id'> {
  value: string;
  label: React.ReactNode;
  icon?: React.ReactNode;
  endContent?: React.ReactNode;
  disabled?: boolean;
  children?: React.ReactNode;
}

const TreeContext = React.createContext<TreeContextValue | null>(null);
const TreeLevelContext = React.createContext(1);
const GROUP_COLLAPSE_DURATION = 180;

type TreeItemButtonStyle = React.CSSProperties & {
  '--jb-tree-item-padding-left': string;
};

function useTreeContext() {
  const context = React.useContext(TreeContext);

  if (!context) {
    throw new Error('Tree components must be used within <Tree>.');
  }

  return context;
}

function mergeExpandedIds(
  current: string[],
  id: string,
  expanded: boolean,
): string[] {
  const next = new Set(current);

  if (expanded) {
    next.add(id);
  } else {
    next.delete(id);
  }

  return Array.from(next);
}

function getTreeItemLabel(label: React.ReactNode, fallback: string) {
  if (typeof label === 'string') {
    return label;
  }

  return fallback;
}

function Tree({
  children,
  className,
  style,
  selectedId,
  defaultSelectedId = null,
  onSelectedIdChange,
  expandedIds,
  defaultExpandedIds = [],
  onExpandedIdsChange,
  indent = 16,
  width,
  height,
  scrollAreaClassName,
  ...props
}: TreeProps) {
  const [uncontrolledSelectedId, setUncontrolledSelectedId] = React.useState<
    string | null
  >(defaultSelectedId);
  const [uncontrolledExpandedIds, setUncontrolledExpandedIds] =
    React.useState<string[]>(defaultExpandedIds);

  const resolvedSelectedId =
    selectedId !== undefined ? selectedId : uncontrolledSelectedId;
  const resolvedExpandedIds =
    expandedIds !== undefined ? expandedIds : uncontrolledExpandedIds;

  const setSelectedId = React.useCallback(
    (nextId: string) => {
      if (selectedId === undefined) {
        setUncontrolledSelectedId(nextId);
      }

      onSelectedIdChange?.(nextId);
    },
    [onSelectedIdChange, selectedId],
  );

  const setExpandedIds = React.useCallback(
    (nextIds: string[]) => {
      if (expandedIds === undefined) {
        setUncontrolledExpandedIds(nextIds);
      }

      onExpandedIdsChange?.(nextIds);
    },
    [expandedIds, onExpandedIdsChange],
  );

  const toggleExpanded = React.useCallback(
    (id: string, expanded?: boolean) => {
      const isExpanded = resolvedExpandedIds.includes(id);
      const nextExpanded = expanded ?? !isExpanded;
      const nextIds = mergeExpandedIds(resolvedExpandedIds, id, nextExpanded);

      setExpandedIds(nextIds);
    },
    [resolvedExpandedIds, setExpandedIds],
  );

  const contextValue = React.useMemo<TreeContextValue>(
    () => ({
      selectedId: resolvedSelectedId,
      setSelectedId,
      expandedIds: new Set(resolvedExpandedIds),
      toggleExpanded,
      indent,
    }),
    [
      indent,
      resolvedExpandedIds,
      resolvedSelectedId,
      setSelectedId,
      toggleExpanded,
    ],
  );

  const treeList = (
    <ul
      data-slot="jb-tree"
      role="tree"
      className={cn(
        'jb-tree jb-static-tree m-0 list-none p-0 block w-full min-w-[244px] box-border py-2 text-[13px] leading-4 font-medium [font-family:var(--jb-font-sans),sans-serif]',
        className,
      )}
      style={style}
      {...props}
    >
      <TreeLevelContext.Provider value={1}>
        {children}
      </TreeLevelContext.Provider>
    </ul>
  );

  return (
    <TreeContext.Provider value={contextValue}>
      <ScrollArea
        data-slot="jb-tree-scroll-area"
        className={cn('max-w-full', scrollAreaClassName)}
        style={{ width, height }}
      >
        <ScrollViewport
          data-slot="jb-tree-scroll-viewport"
          className="size-full"
        >
          {treeList}
        </ScrollViewport>
      </ScrollArea>
    </TreeContext.Provider>
  );
}

function TreeItem({
  className,
  value,
  label,
  icon,
  endContent,
  disabled = false,
  children,
  ...props
}: TreeItemProps) {
  const { selectedId, setSelectedId, expandedIds, toggleExpanded, indent } =
    useTreeContext();
  const level = React.useContext(TreeLevelContext);

  const hasChildren = React.Children.count(children) > 0;
  const expanded = hasChildren ? expandedIds.has(value) : false;
  const selected = selectedId === value;
  const textLabel = getTreeItemLabel(label, value);
  const [keepGroupMounted, setKeepGroupMounted] = React.useState(expanded);
  const [groupExpanded, setGroupExpanded] = React.useState(expanded);
  const [isCollapsing, setIsCollapsing] = React.useState(false);
  const hasMountedRef = React.useRef(false);
  const collapseTimerRef = React.useRef<number | null>(null);
  const expandRafRef = React.useRef<number | null>(null);

  const rowPaddingLeft = 16 + (level - 1) * indent + Math.max(0, level - 2) * 2;
  const resolvedItemButtonStyle: TreeItemButtonStyle = {
    '--jb-tree-item-padding-left': `${rowPaddingLeft}px`,
  };

  const clearGroupAnimationHandles = React.useCallback(() => {
    if (collapseTimerRef.current !== null) {
      window.clearTimeout(collapseTimerRef.current);
      collapseTimerRef.current = null;
    }

    if (expandRafRef.current !== null) {
      window.cancelAnimationFrame(expandRafRef.current);
      expandRafRef.current = null;
    }
  }, []);

  React.useEffect(() => {
    return () => {
      clearGroupAnimationHandles();
    };
  }, [clearGroupAnimationHandles]);

  React.useEffect(() => {
    clearGroupAnimationHandles();

    if (!hasChildren) {
      setKeepGroupMounted(false);
      setGroupExpanded(false);
      setIsCollapsing(false);
      return;
    }

    if (!hasMountedRef.current) {
      hasMountedRef.current = true;
      setKeepGroupMounted(expanded);
      setGroupExpanded(expanded);
      setIsCollapsing(false);
      return;
    }

    if (expanded) {
      setKeepGroupMounted(true);
      setIsCollapsing(false);

      // Mount collapsed first, then expand on next frame so transition is visible.
      setGroupExpanded(false);
      expandRafRef.current = window.requestAnimationFrame(() => {
        expandRafRef.current = window.requestAnimationFrame(() => {
          setGroupExpanded(true);
          expandRafRef.current = null;
        });
      });

      return;
    }

    if (keepGroupMounted) {
      setGroupExpanded(false);
      setIsCollapsing(true);
      collapseTimerRef.current = window.setTimeout(() => {
        setKeepGroupMounted(false);
        setIsCollapsing(false);
        collapseTimerRef.current = null;
      }, GROUP_COLLAPSE_DURATION);
    }
  }, [clearGroupAnimationHandles, expanded, hasChildren, keepGroupMounted]);

  const handleSelect = React.useCallback(() => {
    if (disabled) {
      return;
    }

    setSelectedId(value);
  }, [disabled, setSelectedId, value]);

  const handleToggle = React.useCallback(
    (event: React.MouseEvent<HTMLButtonElement>) => {
      event.stopPropagation();

      if (disabled || !hasChildren) {
        return;
      }

      toggleExpanded(value);
    },
    [disabled, hasChildren, toggleExpanded, value],
  );

  const handleKeyDown = React.useCallback(
    (event: React.KeyboardEvent<HTMLDivElement>) => {
      if (disabled) {
        return;
      }

      if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault();
        handleSelect();
        return;
      }

      if (!hasChildren) {
        return;
      }

      if (event.key === 'ArrowRight' && !expanded) {
        event.preventDefault();
        toggleExpanded(value, true);
        return;
      }

      if (event.key === 'ArrowLeft' && expanded) {
        event.preventDefault();
        toggleExpanded(value, false);
      }
    },
    [disabled, expanded, handleSelect, hasChildren, toggleExpanded, value],
  );

  return (
    <li
      data-slot="jb-tree-item"
      data-value={value}
      className="jb-tree-item m-0 list-none p-0"
      {...props}
    >
      <div
        data-slot="jb-tree-item-button"
        data-value={value}
        data-has-children={hasChildren ? 'true' : undefined}
        data-selected={selected ? 'true' : undefined}
        data-disabled={disabled ? 'true' : undefined}
        data-expanded={hasChildren && expanded ? 'true' : undefined}
        data-level={level}
        role="treeitem"
        aria-level={level}
        aria-selected={selected}
        aria-expanded={hasChildren ? expanded : undefined}
        aria-disabled={disabled ? true : undefined}
        tabIndex={disabled ? -1 : 0}
        className={cn(
          'jb-tree-item-button relative box-border flex h-6 w-full min-w-0 cursor-default items-center gap-0.5 pr-4 pl-[var(--jb-tree-item-padding-left)] select-none outline-none transition-[color] duration-150 ease-in-out',
          className,
        )}
        style={resolvedItemButtonStyle}
        onClick={handleSelect}
        onDoubleClick={
          hasChildren && !disabled ? () => toggleExpanded(value) : undefined
        }
        onKeyDown={handleKeyDown}
      >
        <span
          aria-hidden="true"
          data-slot="jb-tree-item-overlay"
          className="jb-tree-item-overlay pointer-events-none absolute inset-y-0 left-3 right-3 rounded-[4px] transition-[background-color,box-shadow] duration-150 ease-in-out"
        />

        {hasChildren ? (
          <button
            data-slot="jb-tree-item-disclosure"
            data-value={value}
            data-expanded={expanded ? 'true' : undefined}
            type="button"
            className="jb-tree-item-disclosure relative z-10 inline-flex size-4 shrink-0 items-center justify-center border-0 bg-transparent p-0 outline-none"
            aria-label={
              expanded ? `Collapse ${textLabel}` : `Expand ${textLabel}`
            }
            onClick={handleToggle}
            disabled={disabled}
          >
            {expanded ? (
              <General
                name="general/chevron-down"
                className="size-4 scale-[0.78]"
                width={16}
                height={16}
              />
            ) : (
              <General
                name="general/chevron-right"
                className="size-4 scale-[0.78]"
                width={16}
                height={16}
              />
            )}
          </button>
        ) : (
          <span
            data-slot="jb-tree-item-disclosure-placeholder"
            aria-hidden="true"
            className="jb-tree-item-disclosure-placeholder relative z-10 inline-flex size-4 shrink-0 items-center justify-center"
          />
        )}

        <span
          data-slot="jb-tree-item-content"
          className="jb-tree-item-content relative z-10 inline-flex h-5 min-w-0 flex-1 items-center gap-1.5"
        >
          {icon ? (
            <span
              data-slot="jb-tree-item-icon"
              className="jb-tree-item-icon inline-flex size-4 shrink-0 items-center justify-center [&>svg]:size-4"
            >
              {icon}
            </span>
          ) : null}

          <span
            data-slot="jb-tree-item-label"
            className="jb-tree-item-label min-w-0 overflow-hidden text-ellipsis whitespace-nowrap"
          >
            {label}
          </span>

          {endContent ? (
            <span
              data-slot="jb-tree-item-end"
              className="jb-tree-item-end ml-auto pr-0.5 text-[13px] leading-4 font-medium"
            >
              {endContent}
            </span>
          ) : null}
        </span>
      </div>

      {hasChildren && keepGroupMounted ? (
        <TreeLevelContext.Provider value={level + 1}>
          <div
            data-slot="jb-tree-group-motion"
            data-expanded={groupExpanded ? 'true' : undefined}
            data-collapsing={isCollapsing ? 'true' : undefined}
            className="jb-tree-group-motion"
            onTransitionEnd={() => {
              if (!groupExpanded) {
                setKeepGroupMounted(false);
                setIsCollapsing(false);
              }
            }}
          >
            <ul
              data-slot="jb-tree-group"
              role="group"
              aria-hidden={!expanded}
              className="jb-tree-group m-0 list-none p-0"
            >
              {children}
            </ul>
          </div>
        </TreeLevelContext.Provider>
      ) : null}
    </li>
  );
}

export { Tree, TreeItem, type TreeItemProps, type TreeProps };

export default Tree;
