'use client';

import * as React from 'react';

import { cn } from '@workspace/ui/lib/utils';
import { ChevronDown } from '@/registry/icons/general/general/chevron-down';
import { ChevronRight } from '@/registry/icons/general/general/chevron-right';
import { ScrollArea, ScrollViewport } from '@/registry/components/scroll-area';

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
  '--tree-item-padding-left': string;
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
      data-slot="tree"
      role="tree"
      className={cn(
        'static-tree m-0 block w-full min-w-ui-tree list-none box-border bg-transparent p-0 py-ui-control-row text-[13px] leading-4 font-medium text-gray-1 dark:text-gray-12 [font-family:var(--font-sans),sans-serif]',
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
        data-slot="tree-scroll-area"
        className={cn('max-w-full', scrollAreaClassName)}
        style={{ width, height }}
      >
        <ScrollViewport data-slot="tree-scroll-viewport" className="size-full">
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
    '--tree-item-padding-left': `${rowPaddingLeft}px`,
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
      data-slot="tree-item"
      data-value={value}
      className="tree-item m-0 list-none p-0"
      {...props}
    >
      <div
        data-slot="tree-item-button"
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
          'tree-item-button relative box-border flex h-6 w-full min-w-0 cursor-default items-center gap-ui-hairline pr-ui-section pl-[var(--tree-item-padding-left)] select-none text-gray-1 outline-none transition-[color] duration-150 ease-in-out',
          'data-[disabled=true]:cursor-not-allowed data-[disabled=true]:text-gray-8',
          'data-[selected=true]:text-gray-1',
          '[&_.tree-item-disclosure]:text-gray-7 [&_.tree-item-icon]:text-gray-6',
          "[&[data-selected='true']_.tree-item-disclosure]:text-current [&[data-selected='true']_.tree-item-icon]:text-current",
          "[&[data-disabled='true']_.tree-item-disclosure]:text-gray-8",
          '[&:not([data-selected=true]):not([data-disabled=true])_.tree-item-disclosure:hover]:text-gray-5',
          '[&:hover:not([data-disabled=true]):not([data-selected=true])_.tree-item-overlay]:bg-gray-12',
          '[&:active:not([data-disabled=true]):not([data-selected=true])_.tree-item-overlay]:bg-gray-11',
          "[&[data-selected='true']_.tree-item-overlay]:bg-blue-11",
          '[&:focus-visible:not([data-disabled=true])_.tree-item-overlay]:ring-2 [&:focus-visible:not([data-disabled=true])_.tree-item-overlay]:ring-blue-4 [&:focus-visible:not([data-disabled=true])_.tree-item-overlay]:ring-offset-1 [&:focus-visible:not([data-disabled=true])_.tree-item-overlay]:ring-offset-white',
          // dark
          'dark:text-gray-12',
          'dark:data-[disabled=true]:text-gray-7',
          'dark:data-[selected=true]:text-gray-12',
          'dark:[&_.tree-item-disclosure]:text-gray-10 dark:[&_.tree-item-icon]:text-gray-10',
          'dark:[&[data-disabled=true]_.tree-item-disclosure]:text-gray-7',
          'dark:[&:not([data-selected=true]):not([data-disabled=true])_.tree-item-disclosure:hover]:text-gray-12',
          'dark:[&:hover:not([data-disabled=true]):not([data-selected=true])_.tree-item-overlay]:bg-gray-3',
          'dark:[&:active:not([data-disabled=true]):not([data-selected=true])_.tree-item-overlay]:bg-gray-4',
          "dark:[&[data-selected='true']_.tree-item-overlay]:bg-blue-2",
          'dark:[&:focus-visible:not([data-disabled=true])_.tree-item-overlay]:ring-blue-6 dark:[&:focus-visible:not([data-disabled=true])_.tree-item-overlay]:ring-offset-gray-2',
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
          data-slot="tree-item-overlay"
          className="tree-item-overlay pointer-events-none absolute inset-y-0 left-ui-tree-overlay right-ui-tree-overlay rounded-[4px] bg-transparent transition-[background-color,box-shadow] duration-150 ease-in-out"
        />

        {hasChildren ? (
          <button
            data-slot="tree-item-disclosure"
            data-value={value}
            data-expanded={expanded ? 'true' : undefined}
            type="button"
            className="tree-item-disclosure relative z-10 inline-flex size-4 shrink-0 items-center justify-center border-0 bg-transparent p-0 outline-none disabled:cursor-not-allowed"
            aria-label={
              expanded ? `Collapse ${textLabel}` : `Expand ${textLabel}`
            }
            onClick={handleToggle}
            disabled={disabled}
          >
            {expanded ? (
              <ChevronDown className="scale-[0.78]" size="md" />
            ) : (
              <ChevronRight className="scale-[0.78]" size="md" />
            )}
          </button>
        ) : (
          <span
            data-slot="tree-item-disclosure-placeholder"
            aria-hidden="true"
            className="tree-item-disclosure-placeholder relative z-10 inline-flex size-4 shrink-0 items-center justify-center"
          />
        )}

        <span
          data-slot="tree-item-content"
          className="tree-item-content relative z-10 inline-flex h-5 min-w-0 flex-1 items-center gap-ui-compact"
        >
          {icon ? (
            <span
              data-slot="tree-item-icon"
              className="tree-item-icon inline-flex size-4 shrink-0 items-center justify-center [&>svg]:size-4"
            >
              {icon}
            </span>
          ) : null}

          <span
            data-slot="tree-item-label"
            className="tree-item-label min-w-0 overflow-hidden text-ellipsis whitespace-nowrap"
          >
            {label}
          </span>

          {endContent ? (
            <span
              data-slot="tree-item-end"
              className="tree-item-end ml-auto pr-ui-hairline text-[13px] leading-4 font-medium text-gray-7 dark:text-gray-7"
            >
              {endContent}
            </span>
          ) : null}
        </span>
      </div>

      {hasChildren && keepGroupMounted ? (
        <TreeLevelContext.Provider value={level + 1}>
          <div
            data-slot="tree-group-motion"
            data-expanded={groupExpanded ? 'true' : undefined}
            data-collapsing={isCollapsing ? 'true' : undefined}
            className="tree-group-motion grid min-h-0 grid-rows-[0fr] translate-y-[-2px] opacity-0 pointer-events-none transition-[grid-template-rows,opacity,transform] ease-[var(--ease-out)] [transition-duration:170ms,140ms,170ms] data-[expanded=true]:grid-rows-[1fr] data-[expanded=true]:translate-y-0 data-[expanded=true]:opacity-100 data-[expanded=true]:pointer-events-auto"
            onTransitionEnd={() => {
              if (!groupExpanded) {
                setKeepGroupMounted(false);
                setIsCollapsing(false);
              }
            }}
          >
            <ul
              data-slot="tree-group"
              role="group"
              aria-hidden={!expanded}
              className="tree-group m-0 min-h-0 list-none overflow-hidden p-0"
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
