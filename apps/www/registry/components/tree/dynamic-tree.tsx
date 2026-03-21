'use client';

import * as React from 'react';
import { flushSync } from 'react-dom';

import {
  asyncDataLoaderFeature,
  type ItemInstance,
  type TreeDataLoader,
} from '@headless-tree/core';
import { useTree } from '@headless-tree/react';
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

export interface DynamicTreeItemData {
  label: string;
  icon?: React.ReactNode;
  endContent?: React.ReactNode;
  disabled?: boolean;
  isFolder?: boolean;
}

const dynamicTreeContextMenuIcons = {
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

export type DynamicTreeContextMenuIconName =
  keyof typeof dynamicTreeContextMenuIcons;

export interface DynamicTreeContextMenuNode {
  id: string;
  label: string;
  data: DynamicTreeItemData | null;
  item: ItemInstance<DynamicTreeItemData>;
  disabled: boolean;
  expanded: boolean;
  isFolder: boolean;
  level: number;
  loading: boolean;
  selected: boolean;
}

export interface DynamicTreeContextMenuItem {
  key: string;
  label?: React.ReactNode;
  text?: React.ReactNode;
  disabled?: boolean;
  separator?: boolean;
  separatorAfter?: boolean;
  iconName?: DynamicTreeContextMenuIconName;
  variant?: 'default' | 'destructive';
  onSelect?: (node: DynamicTreeContextMenuNode) => void;
  children?: DynamicTreeContextMenuItem[];
  items?: DynamicTreeContextMenuItem[];
}

export interface DynamicTreeProps
  extends Omit<
    React.ComponentPropsWithoutRef<'div'>,
    'children' | 'contextMenu'
  > {
  rootItemId: string;
  dataLoader: TreeDataLoader<DynamicTreeItemData>;
  treeLabel?: string;
  selectedId?: string | null;
  defaultSelectedId?: string | null;
  onSelectedIdChange?: (id: string) => void;
  expandedIds?: string[];
  defaultExpandedIds?: string[];
  onExpandedIdsChange?: (ids: string[]) => void;
  indent?: number;
  loadingLabel?: string;
  loadingEndContent?: React.ReactNode;
  contextMenu?: (
    node: DynamicTreeContextMenuNode,
  ) => DynamicTreeContextMenuItem[] | null | undefined;
}

type ItemRowProps = {
  indent: number;
  item: ItemInstance<DynamicTreeItemData>;
  rootItemId: string;
  selectedId: string | null;
  onSelect: (id: string) => void;
  loadingLabel: string;
  loadingEndContent: React.ReactNode;
};

type MenuEntriesProps = {
  items: DynamicTreeContextMenuItem[];
  node: DynamicTreeContextMenuNode;
};
const dynamicTreeRootClassName =
  'jb-tree block w-[244px] max-w-full box-border py-2 text-[13px] leading-4 font-medium';
const dynamicTreeItemClassName = 'jb-tree-item m-0 p-0';
const dynamicTreeItemButtonClassName =
  'jb-tree-item-button relative flex h-6 w-full min-w-0 cursor-default items-center gap-0.5 pr-4 select-none outline-none transition-[color,background-color,box-shadow] duration-150 ease-in-out';
const dynamicTreeDisclosureClassName =
  'jb-tree-item-disclosure inline-flex size-4 shrink-0 items-center justify-center';
const dynamicTreeDisclosurePlaceholderClassName =
  'jb-tree-item-disclosure-placeholder inline-flex size-4 shrink-0 items-center justify-center';
const dynamicTreeItemContentClassName =
  'jb-tree-item-content inline-flex h-5 min-w-0 flex-1 items-center gap-1.5';
const dynamicTreeItemIconClassName =
  'jb-tree-item-icon inline-flex size-4 shrink-0 items-center justify-center';
const dynamicTreeItemLabelClassName =
  'jb-tree-item-label min-w-0 overflow-hidden text-ellipsis whitespace-nowrap';
const dynamicTreeItemEndClassName =
  'jb-tree-item-end ml-auto pr-0.5 text-[13px] leading-4 font-medium';

function resolveContextMenuLabel(item: DynamicTreeContextMenuItem) {
  return item.label ?? item.text ?? item.key;
}

function resolveContextMenuChildren(item: DynamicTreeContextMenuItem) {
  return item.children ?? item.items ?? [];
}

function resolveContextMenuSeparator(item: DynamicTreeContextMenuItem) {
  return item.separatorAfter ?? item.separator ?? false;
}

function DynamicTreeContextMenuEntries({ items, node }: MenuEntriesProps) {
  return (
    <>
      {items.map((item) => {
        const label = resolveContextMenuLabel(item);
        const childItems = resolveContextMenuChildren(item);
        const IconComponent = item.iconName
          ? dynamicTreeContextMenuIcons[item.iconName]
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
              <DynamicTreeContextMenuEntries items={childItems} node={node} />
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

function DynamicTreeItemRow({
  indent,
  item,
  rootItemId,
  selectedId,
  onSelect,
  loadingLabel,
  loadingEndContent,
}: ItemRowProps) {
  const itemProps = item.getProps() as React.ComponentPropsWithoutRef<'div'>;
  const resolvedProps = { ...itemProps };
  delete resolvedProps.onClick;
  delete resolvedProps.onDoubleClick;
  delete resolvedProps.onKeyDown;
  const resolvedClassName = resolvedProps.className;
  delete resolvedProps.className;
  const itemId = item.getId();
  const itemData = item.getItemData() as DynamicTreeItemData | null;
  const disabled = Boolean(itemData?.disabled);
  const selected = selectedId === itemId;
  const expanded = item.isExpanded();
  const folder = item.isFolder();
  const loading = item.isLoading();
  const level = item.getItemMeta().level;
  const label = itemData?.label ?? loadingLabel;
  const endContent = loading ? loadingEndContent : itemData?.endContent;
  const rowPaddingLeft = 16 + level * indent + Math.max(0, level - 1) * 2;

  const focusItem = React.useCallback(() => {
    item.setFocused();
  }, [item]);

  const toggleFolder = React.useCallback(() => {
    if (!folder) {
      return;
    }

    if (expanded) {
      item.collapse();
    } else {
      item.expand();
    }
  }, [expanded, folder, item]);

  const handleSelect = React.useCallback(() => {
    if (disabled) {
      return;
    }

    focusItem();
    onSelect(itemId);
  }, [disabled, focusItem, itemId, onSelect]);

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

      if (event.key === 'ArrowRight') {
        event.preventDefault();

        if (folder && !expanded) {
          item.expand();
        } else {
          const next = item.getItemBelow();
          if (next) {
            next.setFocused();
            item.getTree().updateDomFocus();
          }
        }
        return;
      }

      if (event.key === 'ArrowLeft') {
        event.preventDefault();

        if (folder && expanded) {
          item.collapse();
          return;
        }

        const parent = item.getParent();
        if (parent && parent.getId() !== rootItemId) {
          parent.setFocused();
          item.getTree().updateDomFocus();
        }
        return;
      }

      if (event.key === 'ArrowDown') {
        event.preventDefault();
        const next = item.getItemBelow();
        if (next) {
          next.setFocused();
          item.getTree().updateDomFocus();
        }
        return;
      }

      if (event.key === 'ArrowUp') {
        event.preventDefault();
        const prev = item.getItemAbove();
        if (prev) {
          prev.setFocused();
          item.getTree().updateDomFocus();
        }
      }
    },
    [disabled, expanded, folder, handleSelect, item, rootItemId],
  );

  const handleDisclosureClick = React.useCallback(
    (event: React.MouseEvent<HTMLButtonElement>) => {
      event.stopPropagation();

      if (disabled) {
        return;
      }

      focusItem();
      toggleFolder();
    },
    [disabled, focusItem, toggleFolder],
  );

  return (
    <div
      data-slot="jb-tree-item"
      data-value={itemId}
      className={dynamicTreeItemClassName}
    >
      <div
        {...resolvedProps}
        data-slot="jb-tree-item-button"
        data-value={itemId}
        data-has-children={folder ? 'true' : undefined}
        data-selected={selected ? 'true' : undefined}
        data-disabled={disabled ? 'true' : undefined}
        data-expanded={folder && expanded ? 'true' : undefined}
        data-loading={loading ? 'true' : undefined}
        className={cn(dynamicTreeItemButtonClassName, resolvedClassName)}
        aria-selected={selected}
        aria-disabled={disabled ? true : undefined}
        aria-busy={loading ? true : undefined}
        tabIndex={disabled ? -1 : (resolvedProps.tabIndex ?? -1)}
        style={{ paddingLeft: `${rowPaddingLeft}px` }}
        onClick={handleSelect}
        onDoubleClick={
          folder && !disabled
            ? () => {
                focusItem();
                toggleFolder();
              }
            : undefined
        }
        onKeyDown={handleKeyDown}
      >
        {folder ? (
          <button
            data-slot="jb-tree-item-disclosure"
            data-value={itemId}
            data-expanded={expanded ? 'true' : undefined}
            type="button"
            className={dynamicTreeDisclosureClassName}
            aria-label={expanded ? `Collapse ${label}` : `Expand ${label}`}
            onClick={handleDisclosureClick}
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
            className={dynamicTreeDisclosurePlaceholderClassName}
          />
        )}

        <span
          data-slot="jb-tree-item-content"
          className={dynamicTreeItemContentClassName}
        >
          {itemData?.icon ? (
            <span
              data-slot="jb-tree-item-icon"
              className={dynamicTreeItemIconClassName}
            >
              {itemData.icon}
            </span>
          ) : null}

          <span
            data-slot="jb-tree-item-label"
            className={dynamicTreeItemLabelClassName}
          >
            {label}
          </span>

          {endContent ? (
            <span
              data-slot="jb-tree-item-end"
              className={dynamicTreeItemEndClassName}
            >
              {endContent}
            </span>
          ) : null}
        </span>
      </div>
    </div>
  );
}

function DynamicTree({
  rootItemId,
  dataLoader,
  treeLabel = 'Tree',
  className,
  style,
  selectedId,
  defaultSelectedId = null,
  onSelectedIdChange,
  expandedIds,
  defaultExpandedIds = [],
  onExpandedIdsChange,
  indent = 16,
  loadingLabel = 'Loading...',
  loadingEndContent = '…',
  contextMenu,
  onContextMenuCapture,
  ...props
}: DynamicTreeProps) {
  const [uncontrolledSelectedId, setUncontrolledSelectedId] = React.useState<
    string | null
  >(defaultSelectedId);
  const [uncontrolledExpandedIds, setUncontrolledExpandedIds] =
    React.useState<string[]>(defaultExpandedIds);
  const [contextMenuNode, setContextMenuNode] =
    React.useState<DynamicTreeContextMenuNode | null>(null);
  const [contextMenuItems, setContextMenuItems] = React.useState<
    DynamicTreeContextMenuItem[]
  >([]);

  const resolvedSelectedId =
    selectedId !== undefined ? selectedId : uncontrolledSelectedId;
  const resolvedExpandedIds =
    expandedIds !== undefined ? expandedIds : uncontrolledExpandedIds;

  const setSelected = React.useCallback(
    (nextId: string) => {
      if (selectedId === undefined) {
        setUncontrolledSelectedId(nextId);
      }

      onSelectedIdChange?.(nextId);
    },
    [onSelectedIdChange, selectedId],
  );

  const setExpanded = React.useCallback(
    (updater: string[] | ((prev: string[]) => string[])) => {
      const nextIds =
        typeof updater === 'function' ? updater(resolvedExpandedIds) : updater;

      if (expandedIds === undefined) {
        setUncontrolledExpandedIds(nextIds);
      }

      onExpandedIdsChange?.(nextIds);
    },
    [expandedIds, onExpandedIdsChange, resolvedExpandedIds],
  );

  const tree = useTree<DynamicTreeItemData>({
    rootItemId,
    dataLoader,
    state: {
      expandedItems: resolvedExpandedIds,
    },
    setExpandedItems: setExpanded,
    isItemFolder: (item) => Boolean(item.getItemData()?.isFolder),
    getItemName: (item) => item.getItemData()?.label ?? item.getId(),
    createLoadingItemData: () => ({
      label: loadingLabel,
    }),
    features: [asyncDataLoaderFeature],
  });

  const containerProps = tree.getContainerProps(
    treeLabel,
  ) as React.ComponentPropsWithoutRef<'div'>;
  const items = tree.getItems();
  const itemMap = React.useMemo(
    () => new Map(items.map((item) => [item.getId(), item])),
    [items],
  );

  const createContextMenuNode = React.useCallback(
    (item: ItemInstance<DynamicTreeItemData>): DynamicTreeContextMenuNode => {
      const itemId = item.getId();
      const itemData = item.getItemData() as DynamicTreeItemData | null;

      return {
        id: itemId,
        label: itemData?.label ?? itemId,
        data: itemData,
        item,
        disabled: Boolean(itemData?.disabled),
        expanded: item.isExpanded(),
        isFolder: item.isFolder(),
        level: item.getItemMeta().level,
        loading: item.isLoading(),
        selected: resolvedSelectedId === itemId,
      };
    },
    [resolvedSelectedId],
  );

  const clearContextMenuState = React.useCallback(() => {
    setContextMenuNode(null);
    setContextMenuItems([]);
  }, []);

  const handleTreeContextMenuCapture = React.useCallback(
    (event: React.MouseEvent<HTMLDivElement>) => {
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

      const item = itemMap.get(itemId);

      if (!item) {
        event.preventDefault();
        clearContextMenuState();
        return;
      }

      const nextNode = createContextMenuNode(item);
      const nextItems = contextMenu(nextNode) ?? [];

      if (nextItems.length === 0) {
        event.preventDefault();
        clearContextMenuState();
        return;
      }

      flushSync(() => {
        setContextMenuNode(nextNode);
        setContextMenuItems(nextItems);
      });
    },
    [
      clearContextMenuState,
      contextMenu,
      createContextMenuNode,
      itemMap,
      onContextMenuCapture,
    ],
  );

  const treeContent = (
    <div
      {...containerProps}
      data-slot="jb-tree"
      className={cn(dynamicTreeRootClassName, className)}
      style={style}
      {...props}
      onContextMenuCapture={
        contextMenu ? handleTreeContextMenuCapture : onContextMenuCapture
      }
    >
      {items.map((item) => (
        <DynamicTreeItemRow
          key={item.getKey()}
          item={item}
          rootItemId={rootItemId}
          selectedId={resolvedSelectedId}
          onSelect={setSelected}
          indent={indent}
          loadingLabel={loadingLabel}
          loadingEndContent={loadingEndContent}
        />
      ))}
    </div>
  );

  if (!contextMenu) {
    return treeContent;
  }

  return (
    <ContextMenu
      onOpenChange={(open) => {
        if (!open) {
          clearContextMenuState();
        }
      }}
    >
      <ContextMenuTrigger asChild>{treeContent}</ContextMenuTrigger>
      {contextMenuNode && contextMenuItems.length ? (
        <ContextMenuContent>
          <DynamicTreeContextMenuEntries
            items={contextMenuItems}
            node={contextMenuNode}
          />
        </ContextMenuContent>
      ) : null}
    </ContextMenu>
  );
}

export { DynamicTree };
