'use client';

import * as React from 'react';

import { type ItemInstance } from '@headless-tree/core';
import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuLabel,
  ContextMenuSeparator,
  ContextMenuTrigger,
} from '@/registry/components/context-menu';
import { ScrollArea, ScrollViewport } from '@/registry/components/scroll-area';
import { ChevronDown } from '@/registry/icons/general/general/chevron-down';
import { Delete } from '@/registry/icons/general/general/delete';
import { ChevronRight } from '@/registry/icons/general/general/chevron-right';
import { Loader } from '@/registry/icons/general/spinner/loader';

export { asyncDataLoaderFeature } from './feature';

export interface DynamicTreeItemData {
  label?: string;
  icon?: React.ReactNode;
  endContent?: React.ReactNode;
  disabled?: boolean;
  isFolder?: boolean;
}

export interface DynamicTreeItemProps<
  TItem extends DynamicTreeItemData = DynamicTreeItemData,
> {
  item: ItemInstance<TItem>;
  indent: number;
}

export interface DynamicTreeItemComponent<
  TItem extends DynamicTreeItemData = DynamicTreeItemData,
> {
  (props: DynamicTreeItemProps<TItem>): React.ReactNode;
}

export interface DynamicTreeContextMenuProps<
  TItem extends DynamicTreeItemData = DynamicTreeItemData,
> {
  item: ItemInstance<TItem>;
}

export interface DynamicTreeContextMenuComponent<
  TItem extends DynamicTreeItemData = DynamicTreeItemData,
> {
  (props: DynamicTreeContextMenuProps<TItem>): React.ReactNode;
}

export interface DynamicTreeProps<
  TItem extends DynamicTreeItemData = DynamicTreeItemData,
> extends Omit<
    React.ComponentPropsWithoutRef<'div'>,
    'children' | 'className' | 'style' | 'contextMenu'
  > {
  containerProps: React.ComponentPropsWithoutRef<'div'>;
  items: ItemInstance<TItem>[];
  indent?: number;
  item?: DynamicTreeItemComponent<TItem>;
  contextMenu?: DynamicTreeContextMenuComponent<TItem> | null;
  width?: React.CSSProperties['width'];
  height?: React.CSSProperties['height'];
}

type DynamicTreeItemButtonStyle = React.CSSProperties & {
  '--tree-item-padding-left': string;
};

type DynamicTreeAsyncItemInstance<
  TItem extends DynamicTreeItemData = DynamicTreeItemData,
> = ItemInstance<TItem> & {
  invalidateItemData?: (optimistic?: boolean) => Promise<void>;
  invalidateChildrenIds?: (optimistic?: boolean) => Promise<void>;
};

type DynamicTreeMutableParentItem<
  TItem extends DynamicTreeItemData = DynamicTreeItemData,
> = ItemInstance<TItem> & {
  updateCachedChildrenIds?: (
    childrenIds: string[],
    skipUpdateTree?: boolean,
  ) => void;
};

type DynamicTreeMutableItem<
  TItem extends DynamicTreeItemData = DynamicTreeItemData,
> = ItemInstance<TItem> & {
  clearCachedChildren?: (skipUpdateTree?: boolean) => void;
};

function canRefreshDynamicTreeItem<TItem extends DynamicTreeItemData>(
  item: ItemInstance<TItem>,
) {
  const asyncItem = item as DynamicTreeAsyncItemInstance<TItem>;

  return (
    typeof asyncItem.invalidateItemData === 'function' ||
    (item.isFolder() && typeof asyncItem.invalidateChildrenIds === 'function')
  );
}

function canDeleteDynamicTreeItem<TItem extends DynamicTreeItemData>(
  item: ItemInstance<TItem>,
) {
  const parent = item.getParent() as
    | DynamicTreeMutableParentItem<TItem>
    | undefined;

  return typeof parent?.updateCachedChildrenIds === 'function';
}

function canClearDynamicTreeItemChildren<TItem extends DynamicTreeItemData>(
  item: ItemInstance<TItem>,
) {
  const mutableItem = item as DynamicTreeMutableItem<TItem>;

  return (
    item.isFolder() && typeof mutableItem.clearCachedChildren === 'function'
  );
}

async function refreshDynamicTreeItem<TItem extends DynamicTreeItemData>(
  item: ItemInstance<TItem>,
) {
  const asyncItem = item as DynamicTreeAsyncItemInstance<TItem>;

  if (typeof asyncItem.invalidateItemData === 'function') {
    await asyncItem.invalidateItemData();
  }

  if (
    item.isFolder() &&
    typeof asyncItem.invalidateChildrenIds === 'function'
  ) {
    await asyncItem.invalidateChildrenIds();
  }
}

function deleteDynamicTreeItem<TItem extends DynamicTreeItemData>(
  item: ItemInstance<TItem>,
) {
  const parent = item.getParent() as
    | DynamicTreeMutableParentItem<TItem>
    | undefined;

  if (typeof parent?.updateCachedChildrenIds !== 'function') {
    return;
  }

  parent.updateCachedChildrenIds(
    parent
      .getChildren()
      .filter((child) => child.getId() !== item.getId())
      .map((child) => child.getId()),
  );
  parent.setFocused();
}

function clearDynamicTreeItemChildren<TItem extends DynamicTreeItemData>(
  item: ItemInstance<TItem>,
) {
  const mutableItem = item as DynamicTreeMutableItem<TItem>;

  if (
    !item.isFolder() ||
    typeof mutableItem.clearCachedChildren !== 'function'
  ) {
    return;
  }

  item.setFocused();

  if (item.isExpanded()) {
    item.collapse();
  }

  mutableItem.clearCachedChildren();
}

export interface DynamicTreeItemContextMenuProps<
  TItem extends DynamicTreeItemData = DynamicTreeItemData,
> extends DynamicTreeContextMenuProps<TItem> {}

function DynamicTreeItemContextMenu<TItem extends DynamicTreeItemData>({
  item,
}: DynamicTreeItemContextMenuProps<TItem>) {
  return (
    <>
      <ContextMenuLabel>
        {item.getItemData()?.label ?? item.getId()}
      </ContextMenuLabel>
      <ContextMenuItem
        inset
        disabled={!canRefreshDynamicTreeItem(item)}
        onSelect={() => {
          void refreshDynamicTreeItem(item);
        }}
      >
        Refresh
      </ContextMenuItem>
      <ContextMenuItem
        inset
        disabled={!canClearDynamicTreeItemChildren(item)}
        onSelect={() => {
          clearDynamicTreeItemChildren(item);
        }}
      >
        Clear Children
      </ContextMenuItem>
      <ContextMenuSeparator />
      <ContextMenuItem
        inset
        variant="destructive"
        disabled={!canDeleteDynamicTreeItem(item)}
        onSelect={() => {
          deleteDynamicTreeItem(item);
        }}
      >
        <Delete className="shrink-0" size="md" />
        <span>Delete</span>
      </ContextMenuItem>
    </>
  );
}

function DynamicTreeItem<TItem extends DynamicTreeItemData>({
  indent,
  item,
}: DynamicTreeItemProps<TItem>) {
  const {
    style: resolvedStyle,
    tabIndex: resolvedTabIndex,
    ...resolvedProps
  } = item.getProps() as React.ComponentPropsWithoutRef<'div'>;

  return (
    <div
      data-slot="tree-item"
      data-value={item.getId()}
      className="tree-item my-ui-hairline p-0"
    >
      <div
        {...resolvedProps}
        data-slot="tree-item-button"
        data-value={item.getId()}
        data-has-children={item.isFolder() ? 'true' : undefined}
        data-selected={item.isSelected() ? 'true' : undefined}
        data-disabled={
          (item.getItemData() as TItem | null)?.disabled ? 'true' : undefined
        }
        data-expanded={
          item.isFolder() && item.isExpanded() ? 'true' : undefined
        }
        data-loading={item.isLoading() ? 'true' : undefined}
        aria-selected={item.isSelected()}
        aria-disabled={
          (item.getItemData() as TItem | null)?.disabled ? true : undefined
        }
        aria-busy={item.isLoading() ? true : undefined}
        tabIndex={
          (item.getItemData() as TItem | null)?.disabled
            ? -1
            : (resolvedTabIndex ?? -1)
        }
        style={
          {
            ...resolvedStyle,
            '--tree-item-padding-left': `${
              16 +
              item.getItemMeta().level * indent +
              Math.max(0, item.getItemMeta().level - 1) * 2
            }px`,
          } as DynamicTreeItemButtonStyle
        }
        className={
          "tree-item-button relative box-border flex h-6 w-full min-w-0 cursor-default items-center gap-ui-hairline pr-ui-section pl-[var(--tree-item-padding-left)] select-none text-gray-1 outline-none transition-[color] duration-150 ease-in-out data-[disabled=true]:cursor-not-allowed data-[disabled=true]:text-gray-8 data-[selected=true]:text-gray-1 [&_.tree-item-disclosure]:text-gray-7 [&_.tree-item-icon]:text-gray-6 [&[data-selected='true']_.tree-item-disclosure]:text-current [&[data-selected='true']_.tree-item-icon]:text-current [&[data-disabled='true']_.tree-item-disclosure]:text-gray-8 [&:not([data-selected='true']):not([data-disabled='true'])_.tree-item-disclosure:hover]:text-gray-5 [&:hover:not([data-disabled='true']):not([data-selected='true'])_.tree-item-overlay]:bg-gray-12 [&:active:not([data-disabled='true']):not([data-selected='true'])_.tree-item-overlay]:bg-gray-11 [&[data-selected='true']_.tree-item-overlay]:bg-blue-11 [&:focus-visible:not([data-disabled='true'])_.tree-item-overlay]:ring-2 [&:focus-visible:not([data-disabled='true'])_.tree-item-overlay]:ring-blue-4 [&:focus-visible:not([data-disabled='true'])_.tree-item-overlay]:ring-offset-1 [&:focus-visible:not([data-disabled='true'])_.tree-item-overlay]:ring-offset-white dark:text-gray-12 dark:data-[disabled=true]:text-gray-7 dark:data-[selected=true]:text-gray-12 dark:[&_.tree-item-disclosure]:text-gray-10 dark:[&_.tree-item-icon]:text-gray-10 dark:[&[data-disabled=true]_.tree-item-disclosure]:text-gray-7 dark:[&:not([data-selected=true]):not([data-disabled=true])_.tree-item-disclosure:hover]:text-gray-12 dark:[&:hover:not([data-disabled=true]):not([data-selected=true])_.tree-item-overlay]:bg-gray-3 dark:[&:active:not([data-disabled=true]):not([data-selected=true])_.tree-item-overlay]:bg-gray-4 dark:[&[data-selected=true]_.tree-item-overlay]:bg-blue-2 dark:[&:focus-visible:not([data-disabled=true])_.tree-item-overlay]:ring-blue-6 dark:[&:focus-visible:not([data-disabled=true])_.tree-item-overlay]:ring-offset-gray-2"
        }
      >
        <span
          aria-hidden="true"
          data-slot="tree-item-overlay"
          className="tree-item-overlay pointer-events-none absolute inset-y-0 left-ui-tree-overlay right-ui-tree-overlay rounded-[4px] bg-transparent transition-[background-color,box-shadow] duration-150 ease-in-out"
        />

        {item.isFolder() ? (
          <button
            data-slot="tree-item-disclosure"
            data-value={item.getId()}
            data-expanded={item.isExpanded() ? 'true' : undefined}
            data-loading={item.isLoading() ? 'true' : undefined}
            type="button"
            className="tree-item-disclosure relative z-10 inline-flex size-4 shrink-0 items-center justify-center border-0 bg-transparent p-0 outline-none disabled:cursor-not-allowed"
            aria-label={
              item.isLoading()
                ? `Loading ${(item.getItemData() as TItem | null)?.label ?? item.getId()}`
                : item.isExpanded()
                  ? `Collapse ${(item.getItemData() as TItem | null)?.label ?? item.getId()}`
                  : `Expand ${(item.getItemData() as TItem | null)?.label ?? item.getId()}`
            }
            onClick={(event) => {
              event.stopPropagation();

              if ((item.getItemData() as TItem | null)?.disabled) {
                return;
              }

              item.setFocused();

              if (item.isExpanded()) {
                item.collapse();
              } else {
                item.expand();
              }
            }}
            disabled={Boolean((item.getItemData() as TItem | null)?.disabled)}
          >
            {item.isLoading() ? (
              <Loader
                className="animate-spin [animation-duration:900ms]"
                size="md"
              />
            ) : item.isExpanded() ? (
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
          {(item.getItemData() as TItem | null)?.icon ? (
            <span
              data-slot="tree-item-icon"
              className="tree-item-icon inline-flex size-4 shrink-0 items-center justify-center [&>svg]:size-4"
            >
              {(item.getItemData() as TItem | null)?.icon}
            </span>
          ) : null}

          <span
            data-slot="tree-item-label"
            className="tree-item-label min-w-0 overflow-hidden text-ellipsis whitespace-nowrap"
          >
            {(item.getItemData() as TItem | null)?.label ?? item.getId()}
          </span>

          {(item.getItemData() as TItem | null)?.endContent ? (
            <span
              data-slot="tree-item-end"
              className="tree-item-end ml-auto pr-ui-hairline text-[13px] leading-4 font-medium text-gray-7 dark:text-gray-7"
            >
              {(item.getItemData() as TItem | null)?.endContent}
            </span>
          ) : null}
        </span>
      </div>
    </div>
  );
}

function DynamicTree<TItem extends DynamicTreeItemData>({
  containerProps,
  items,
  indent = 16,
  item: customItem,
  contextMenu,
  width,
  height,
  ...props
}: DynamicTreeProps<TItem>) {
  const ItemComponent = customItem ?? DynamicTreeItem;
  const ContextMenuComponent =
    contextMenu === undefined
      ? (DynamicTreeItemContextMenu as DynamicTreeContextMenuComponent<TItem>)
      : contextMenu;

  return (
    <ScrollArea
      data-slot="tree-scroll-area"
      className="max-w-full p-ui-section"
      style={{ width, height }}
    >
      <ScrollViewport data-slot="tree-scroll-viewport" className="size-full">
        <div
          {...containerProps}
          data-slot="tree"
          className="tree dynamic-tree block w-full min-w-ui-tree box-border bg-transparent py-ui-control-row text-[13px] leading-4 font-medium text-gray-1 dark:text-gray-12 [font-family:var(--font-sans),sans-serif]"
          {...props}
        >
          {items.map((item) => {
            if (!ContextMenuComponent) {
              return (
                <ItemComponent
                  key={item.getKey()}
                  item={item}
                  indent={indent}
                />
              );
            }

            return (
              <ContextMenu key={item.getKey()}>
                <ContextMenuTrigger
                  asChild
                  onContextMenu={(event) => {
                    if ((item.getItemData() as TItem | null)?.disabled) {
                      event.preventDefault();
                      return;
                    }

                    item.setFocused();
                    item.select();
                  }}
                >
                  <div
                    data-slot="tree-item-context-trigger"
                    data-value={item.getId()}
                  >
                    <ItemComponent item={item} indent={indent} />
                  </div>
                </ContextMenuTrigger>
                <ContextMenuContent>
                  {ContextMenuComponent({
                    item,
                  })}
                </ContextMenuContent>
              </ContextMenu>
            );
          })}
        </div>
      </ScrollViewport>
    </ScrollArea>
  );
}

export { DynamicTreeItemContextMenu };
export { DynamicTreeItem };
export { DynamicTree };

export default DynamicTree;
