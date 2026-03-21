'use client';

import * as React from 'react';

import { cn } from '@workspace/ui/lib/utils';
import {
  AddIcon,
  CheckIcon,
  ChevronDownIcon,
  ChevronRightIcon,
  CloseIcon,
  CopyIcon,
  EditIcon,
  FilterIcon,
  RefreshIcon,
  SearchIcon,
  SettingsIcon,
  TrashIcon,
} from '@/registry/components/icons';
import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuSeparator,
  ContextMenuSub,
  ContextMenuSubContent,
  ContextMenuSubTrigger,
  ContextMenuTrigger,
} from '@/registry/components/context-menu';
import './index.css';

const treeContextMenuIcons = {
  add: AddIcon,
  check: CheckIcon,
  close: CloseIcon,
  copy: CopyIcon,
  delete: TrashIcon,
  edit: EditIcon,
  filter: FilterIcon,
  refresh: RefreshIcon,
  search: SearchIcon,
  settings: SettingsIcon,
  trash: TrashIcon,
} as const;

export type TreeContextMenuIconName = keyof typeof treeContextMenuIcons;

export interface TreeContextMenuNode {
  id: string;
  value: string;
  label: string;
  data: Pick<TreeItemProps, 'label' | 'icon' | 'endContent' | 'disabled'>;
  disabled: boolean;
  expanded: boolean;
  hasChildren: boolean;
  level: number;
  selected: boolean;
}

export interface TreeContextMenuItem {
  key: string;
  label?: React.ReactNode;
  text?: React.ReactNode;
  disabled?: boolean;
  separator?: boolean;
  separatorAfter?: boolean;
  iconName?: TreeContextMenuIconName;
  variant?: 'default' | 'destructive';
  onSelect?: (node: TreeContextMenuNode) => void;
  children?: TreeContextMenuItem[];
  items?: TreeContextMenuItem[];
}

type RegisteredTreeItem = TreeContextMenuNode;

type TreeContextValue = {
  selectedId: string | null;
  setSelectedId: (nextId: string) => void;
  expandedIds: Set<string>;
  toggleExpanded: (id: string, expanded?: boolean) => void;
  indent: number;
  registerItem: (item: RegisteredTreeItem) => void;
  unregisterItem: (id: string) => void;
};

interface TreeProps
  extends Omit<React.ComponentPropsWithoutRef<'ul'>, 'contextMenu'> {
  selectedId?: string | null;
  defaultSelectedId?: string | null;
  onSelectedIdChange?: (id: string) => void;
  expandedIds?: string[];
  defaultExpandedIds?: string[];
  onExpandedIdsChange?: (ids: string[]) => void;
  indent?: number;
  contextMenu?: (
    node: TreeContextMenuNode,
  ) => TreeContextMenuItem[] | null | undefined;
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
const treeRootClassName =
  'jb-tree block w-[244px] max-w-full box-border py-2 text-[13px] leading-4 font-medium';
const treeListClassName = 'm-0 list-none p-0';
const treeItemClassName = 'jb-tree-item m-0 list-none p-0';
const treeGroupClassName = 'jb-tree-group m-0 list-none p-0';
const treeItemButtonClassName =
  'jb-tree-item-button relative flex h-6 w-full min-w-0 cursor-default items-center gap-0.5 pr-4 select-none outline-none transition-[color,background-color,box-shadow] duration-150 ease-in-out';
const treeDisclosureClassName =
  'jb-tree-item-disclosure inline-flex size-4 shrink-0 items-center justify-center';
const treeDisclosurePlaceholderClassName =
  'jb-tree-item-disclosure-placeholder inline-flex size-4 shrink-0 items-center justify-center';
const treeItemContentClassName =
  'jb-tree-item-content inline-flex h-5 min-w-0 flex-1 items-center gap-1.5';
const treeItemIconClassName =
  'jb-tree-item-icon inline-flex size-4 shrink-0 items-center justify-center';
const treeItemLabelClassName =
  'jb-tree-item-label min-w-0 overflow-hidden text-ellipsis whitespace-nowrap';
const treeItemEndClassName =
  'jb-tree-item-end ml-auto pr-0.5 text-[13px] leading-4 font-medium';

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

function resolveContextMenuLabel(item: TreeContextMenuItem) {
  return item.label ?? item.text ?? item.key;
}

function resolveContextMenuChildren(item: TreeContextMenuItem) {
  return item.children ?? item.items ?? [];
}

function resolveContextMenuSeparator(item: TreeContextMenuItem) {
  return item.separatorAfter ?? item.separator ?? false;
}

function TreeContextMenuEntries({
  items,
  node,
}: {
  items: TreeContextMenuItem[];
  node: TreeContextMenuNode;
}) {
  return (
    <>
      {items.map((item) => {
        const label = resolveContextMenuLabel(item);
        const childItems = resolveContextMenuChildren(item);
        const IconComponent = item.iconName
          ? treeContextMenuIcons[item.iconName]
          : null;
        const entry = childItems.length ? (
          <ContextMenuSub key={item.key}>
            <ContextMenuSubTrigger disabled={item.disabled}>
              {IconComponent ? (
                <IconComponent
                  aria-hidden="true"
                  className="size-4"
                  size={16}
                />
              ) : null}
              <span className="truncate">{label}</span>
            </ContextMenuSubTrigger>
            <ContextMenuSubContent>
              <TreeContextMenuEntries items={childItems} node={node} />
            </ContextMenuSubContent>
          </ContextMenuSub>
        ) : (
          <ContextMenuItem
            key={item.key}
            disabled={item.disabled}
            variant={item.variant}
            onSelect={() => item.onSelect?.(node)}
          >
            {IconComponent ? (
              <IconComponent aria-hidden="true" className="size-4" size={16} />
            ) : null}
            <span className="truncate">{label}</span>
          </ContextMenuItem>
        );

        if (!resolveContextMenuSeparator(item)) {
          return entry;
        }

        return (
          <React.Fragment key={`${item.key}-group`}>
            {entry}
            <ContextMenuSeparator />
          </React.Fragment>
        );
      })}
    </>
  );
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
  contextMenu,
  onContextMenuCapture,
  ...props
}: TreeProps) {
  const [uncontrolledSelectedId, setUncontrolledSelectedId] = React.useState<
    string | null
  >(defaultSelectedId);
  const [uncontrolledExpandedIds, setUncontrolledExpandedIds] =
    React.useState<string[]>(defaultExpandedIds);
  const [contextMenuNode, setContextMenuNode] =
    React.useState<TreeContextMenuNode | null>(null);
  const [contextMenuItems, setContextMenuItems] = React.useState<
    TreeContextMenuItem[]
  >([]);
  const itemRegistryRef = React.useRef(new Map<string, RegisteredTreeItem>());

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

  const registerItem = React.useCallback((item: RegisteredTreeItem) => {
    itemRegistryRef.current.set(item.id, item);
  }, []);

  const unregisterItem = React.useCallback((id: string) => {
    itemRegistryRef.current.delete(id);
  }, []);

  const clearContextMenuState = React.useCallback(() => {
    setContextMenuNode(null);
    setContextMenuItems([]);
  }, []);

  const contextValue = React.useMemo<TreeContextValue>(
    () => ({
      selectedId: resolvedSelectedId,
      setSelectedId,
      expandedIds: new Set(resolvedExpandedIds),
      toggleExpanded,
      indent,
      registerItem,
      unregisterItem,
    }),
    [
      indent,
      registerItem,
      resolvedExpandedIds,
      resolvedSelectedId,
      setSelectedId,
      toggleExpanded,
      unregisterItem,
    ],
  );

  const handleTreeContextMenuCapture = React.useCallback(
    (event: React.MouseEvent<HTMLUListElement>) => {
      onContextMenuCapture?.(event);

      if (event.defaultPrevented || !contextMenu) {
        return;
      }

      const target = event.target;

      if (!(target instanceof HTMLElement)) {
        event.preventDefault();
        clearContextMenuState();
        return;
      }

      const itemButton = target.closest(
        '[data-slot="jb-tree-item-button"][data-value]',
      );

      if (!(itemButton instanceof HTMLElement)) {
        event.preventDefault();
        clearContextMenuState();
        return;
      }

      const itemId = itemButton.dataset.value;

      if (!itemId) {
        event.preventDefault();
        clearContextMenuState();
        return;
      }

      const node = itemRegistryRef.current.get(itemId);

      if (!node) {
        event.preventDefault();
        clearContextMenuState();
        return;
      }

      const items = contextMenu(node) ?? [];

      if (items.length === 0) {
        event.preventDefault();
        clearContextMenuState();
        return;
      }

      setContextMenuNode(node);
      setContextMenuItems(items);
    },
    [clearContextMenuState, contextMenu, onContextMenuCapture],
  );

  const treeList = (
    <ul
      data-slot="jb-tree"
      role="tree"
      className={cn(treeRootClassName, treeListClassName, className)}
      style={style}
      {...props}
      onContextMenuCapture={
        contextMenu ? handleTreeContextMenuCapture : onContextMenuCapture
      }
    >
      <TreeLevelContext.Provider value={1}>
        {children}
      </TreeLevelContext.Provider>
    </ul>
  );

  return (
    <TreeContext.Provider value={contextValue}>
      {contextMenu ? (
        <ContextMenu
          onOpenChange={(open) => {
            if (!open) {
              clearContextMenuState();
            }
          }}
        >
          <ContextMenuTrigger asChild>{treeList}</ContextMenuTrigger>
          {contextMenuNode && contextMenuItems.length ? (
            <ContextMenuContent>
              <TreeContextMenuEntries
                items={contextMenuItems}
                node={contextMenuNode}
              />
            </ContextMenuContent>
          ) : null}
        </ContextMenu>
      ) : (
        treeList
      )}
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
  const {
    selectedId,
    setSelectedId,
    expandedIds,
    toggleExpanded,
    indent,
    registerItem,
    unregisterItem,
  } = useTreeContext();
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

  React.useEffect(() => {
    registerItem({
      id: value,
      value,
      label: textLabel,
      data: {
        label,
        icon,
        endContent,
        disabled,
      },
      disabled,
      expanded,
      hasChildren,
      level,
      selected,
    });

    return () => {
      unregisterItem(value);
    };
  }, [
    disabled,
    endContent,
    expanded,
    hasChildren,
    icon,
    label,
    level,
    registerItem,
    selected,
    textLabel,
    unregisterItem,
    value,
  ]);

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
      className={treeItemClassName}
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
        className={cn(treeItemButtonClassName, className)}
        style={{ paddingLeft: `${rowPaddingLeft}px` }}
        onClick={handleSelect}
        onDoubleClick={
          hasChildren && !disabled ? () => toggleExpanded(value) : undefined
        }
        onKeyDown={handleKeyDown}
      >
        {hasChildren ? (
          <button
            data-slot="jb-tree-item-disclosure"
            data-value={value}
            data-expanded={expanded ? 'true' : undefined}
            type="button"
            className={treeDisclosureClassName}
            aria-label={
              expanded ? `Collapse ${textLabel}` : `Expand ${textLabel}`
            }
            onClick={handleToggle}
            disabled={disabled}
          >
            {expanded ? (
              <ChevronDownIcon className="jb-tree-item-chevron" size={16} />
            ) : (
              <ChevronRightIcon className="jb-tree-item-chevron" size={16} />
            )}
          </button>
        ) : (
          <span
            data-slot="jb-tree-item-disclosure-placeholder"
            aria-hidden="true"
            className={treeDisclosurePlaceholderClassName}
          />
        )}

        <span
          data-slot="jb-tree-item-content"
          className={treeItemContentClassName}
        >
          {icon ? (
            <span
              data-slot="jb-tree-item-icon"
              className={treeItemIconClassName}
            >
              {icon}
            </span>
          ) : null}

          <span
            data-slot="jb-tree-item-label"
            className={treeItemLabelClassName}
          >
            {label}
          </span>

          {endContent ? (
            <span data-slot="jb-tree-item-end" className={treeItemEndClassName}>
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
              className={treeGroupClassName}
            >
              {children}
            </ul>
          </div>
        </TreeLevelContext.Provider>
      ) : null}
    </li>
  );
}

export {
  DynamicTree,
  type DynamicTreeContextMenuIconName,
  type DynamicTreeContextMenuItem,
  type DynamicTreeContextMenuNode,
  type DynamicTreeItemData,
  type DynamicTreeProps,
} from './dynamic-tree';
export { Tree, TreeItem, type TreeItemProps, type TreeProps };

export default Tree;
