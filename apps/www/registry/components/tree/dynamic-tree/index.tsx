'use client';

import {
  type ReactNode,
  type ComponentPropsWithoutRef,
  type CSSProperties,
  useMemo,
} from 'react';

import { type ItemInstance } from '@headless-tree/core';
import { SVG } from '@/registry/components/svg';
import { useJetBrainsLocale } from '@/registry/components/provider';
import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuSeparator,
  ContextMenuTrigger,
} from '@/registry/components/context-menu';

export { asyncDataLoaderFeature } from './feature';

export interface DynamicTreeItemData {
  label?: string;
  icon?: string;
  endContent?: ReactNode;
  disabled?: boolean;
  isFolder?: boolean;
}

export interface DynamicTreeItemProps<
  TItem extends DynamicTreeItemData = DynamicTreeItemData,
> extends Omit<ComponentPropsWithoutRef<'div'>, 'children'> {
  item: ItemInstance<TItem>;
  indent: number;
}

export interface DynamicTreeItemComponent<
  TItem extends DynamicTreeItemData = DynamicTreeItemData,
> {
  (props: DynamicTreeItemProps<TItem>): ReactNode;
}

export interface TreeItemActions<
  TItem extends DynamicTreeItemData = DynamicTreeItemData,
> {
  /** Refresh item data and children from the data loader. Built-in. */
  refresh: (item: ItemInstance<TItem>) => void;
  /** Clear cached children and collapse the folder. Built-in. */
  clearChildren: (item: ItemInstance<TItem>) => void;
  /** Add a child item. Calls the addItem prop. Undefined if not provided. */
  add?: (item: ItemInstance<TItem>) => void;
  /** Delete this item. Calls the deleteItem prop. Undefined if not provided. */
  delete?: (item: ItemInstance<TItem>) => void;
}

export type DynamicTreeContextMenuFn<
  TItem extends DynamicTreeItemData = DynamicTreeItemData,
> = (item: ItemInstance<TItem>, actions: TreeItemActions<TItem>) => ReactNode;

export interface DynamicTreeProps<
  TItem extends DynamicTreeItemData = DynamicTreeItemData,
> extends Omit<
    ComponentPropsWithoutRef<'div'>,
    'children' | 'className' | 'style' | 'contextMenu'
  > {
  containerProps: ComponentPropsWithoutRef<'div'>;
  items: ItemInstance<TItem>[];
  indent?: number;
  item?: DynamicTreeItemComponent<TItem>;
  width?: CSSProperties['width'];
  height?: CSSProperties['height'];
  contextMenu?: DynamicTreeContextMenuFn<TItem> | null;
  addItem?: (item: ItemInstance<TItem>) => void;
  deleteItem?: (item: ItemInstance<TItem>) => void;
}

function TreeItemDisclosure({
  itemId,
  itemLabel,
  isLoading,
  isExpanded,
  isDisabled,
  onToggle,
}: {
  itemId: string;
  itemLabel: string;
  isLoading: boolean;
  isExpanded: boolean;
  isDisabled?: boolean;
  onToggle: () => void;
}) {
  const { t } = useJetBrainsLocale();
  return (
    <button
      type="button"
      data-slot="tree-item-disclosure"
      data-value={itemId}
      data-expanded={isExpanded ? 'true' : undefined}
      data-loading={isLoading ? 'true' : undefined}
      tabIndex={isDisabled ? -1 : 0}
      aria-label={
        isLoading
          ? t('dynamicTree.loading', { label: itemLabel })
          : isExpanded
            ? t('dynamicTree.collapse', { label: itemLabel })
            : t('dynamicTree.expand', { label: itemLabel })
      }
      aria-expanded={isExpanded}
      disabled={isDisabled}
      className="relative z-10 inline-flex size-4 shrink-0 items-center justify-center cursor-default outline-none disabled:cursor-not-allowed"
      onClick={(event) => {
        event.stopPropagation();
        onToggle();
      }}
    >
      <SVG
        name={
          isLoading
            ? 'general/spinner/loader'
            : isExpanded
              ? 'general/general/chevrondown'
              : 'general/general/chevronright'
        }
        size="md"
        className={
          isLoading ? 'animate-spin [animation-duration:900ms]' : undefined
        }
      />
    </button>
  );
}

function DynamicTreeItem<TItem extends DynamicTreeItemData>({
  indent,
  item,
  ...rest
}: DynamicTreeItemProps<TItem>) {
  const {
    style: resolvedStyle,
    tabIndex: resolvedTabIndex,
    ...resolvedProps
  } = item.getProps() as ComponentPropsWithoutRef<'div'>;

  const itemData = item.getItemData() as TItem | null;
  const itemLabel = itemData?.label ?? item.getId();
  const isDisabled = itemData?.disabled;

  const level = item.getItemMeta().level;

  return (
    <div
      {...rest}
      role="treeitem"
      aria-level={level}
      aria-expanded={item.isFolder() ? item.isExpanded() : undefined}
      aria-selected={item.isSelected()}
      data-slot="tree-item"
      data-value={item.getId()}
      className="group my-0.5 w-full p-0"
    >
      <div
        {...resolvedProps}
        data-slot="tree-item-button"
        data-value={item.getId()}
        data-has-children={item.isFolder() ? 'true' : undefined}
        data-selected={item.isSelected() ? 'true' : undefined}
        data-disabled={isDisabled ? 'true' : undefined}
        data-expanded={
          item.isFolder() && item.isExpanded() ? 'true' : undefined
        }
        data-loading={item.isLoading() ? 'true' : undefined}
        aria-disabled={isDisabled ? true : undefined}
        aria-busy={item.isLoading() ? true : undefined}
        tabIndex={isDisabled ? -1 : (resolvedTabIndex ?? -1)}
        style={
          {
            ...resolvedStyle,
            paddingLeft: `${
              16 + level * indent + Math.max(0, level - 1) * 2
            }px`,
          } as CSSProperties
        }
        className={
          "relative box-border flex h-6 w-full min-w-0 cursor-default items-center gap-0.5 pr-4 select-none text-gray-1 outline-none transition-[background-color,color] duration-75 data-[disabled=true]:cursor-not-allowed data-[disabled=true]:text-gray-8 [&_[data-slot=tree-item-disclosure]]:text-gray-7 [&_[data-slot=tree-item-icon]]:text-gray-6 [&:focus_[data-slot=tree-item-disclosure]]:text-current [&:focus_[data-slot=tree-item-icon]]:text-current [&[data-disabled='true']_[data-slot=tree-item-disclosure]]:text-gray-8 [&:hover:not([data-disabled='true'])_[data-slot=tree-item-overlay]]:bg-blue-11 [&:focus_[data-slot=tree-item-overlay]]:bg-blue-11 [&:focus-visible:not([data-disabled='true'])_[data-slot=tree-item-overlay]]:ring-2 [&:focus-visible:not([data-disabled='true'])_[data-slot=tree-item-overlay]]:ring-blue-4 [&:focus-visible:not([data-disabled='true'])_[data-slot=tree-item-overlay]]:ring-offset-1 [&:focus-visible:not([data-disabled='true'])_[data-slot=tree-item-overlay]]:ring-offset-white dark:text-gray-12 dark:data-[disabled=true]:text-gray-7 dark:[&_[data-slot=tree-item-disclosure]]:text-gray-10 dark:[&_[data-slot=tree-item-icon]]:text-gray-10 dark:[&[data-disabled=true]_[data-slot=tree-item-disclosure]]:text-gray-7 dark:[&:hover:not([data-disabled='true'])_[data-slot=tree-item-overlay]]:bg-blue-2 dark:[&:focus_[data-slot=tree-item-overlay]]:bg-blue-2 dark:[&:focus-visible:not([data-disabled='true'])_[data-slot=tree-item-overlay]]:ring-blue-6 dark:[&:focus-visible:not([data-disabled='true'])_[data-slot=tree-item-overlay]]:ring-offset-gray-2"
        }
      >
        <span
          aria-hidden="true"
          data-slot="tree-item-overlay"
          className="pointer-events-none absolute inset-y-0 left-3 right-3 rounded-[4px] bg-transparent transition-[background-color,box-shadow] duration-150 ease-in-out group-data-[state=open]:bg-blue-11 dark:group-data-[state=open]:bg-blue-2"
        />

        {item.isFolder() ? (
          <TreeItemDisclosure
            itemId={item.getId()}
            itemLabel={itemLabel}
            isLoading={item.isLoading()}
            isExpanded={item.isExpanded()}
            isDisabled={isDisabled}
            onToggle={() => {
              if (isDisabled) return;
              item.setFocused();
              item.isExpanded() ? item.collapse() : item.expand();
            }}
          />
        ) : (
          <span
            data-slot="tree-item-disclosure-placeholder"
            aria-hidden="true"
            className="relative z-10 inline-flex size-4 shrink-0 items-center justify-center"
          />
        )}
        <span
          data-slot="tree-item-content"
          className="relative z-10 inline-flex h-5 min-w-0 flex-1 items-center gap-1.5"
        >
          {itemData?.icon ? (
            <span
              data-slot="tree-item-icon"
              className="inline-flex size-4 shrink-0 items-center justify-center"
            >
              <SVG name={itemData.icon} size="md" />
            </span>
          ) : null}

          <span
            data-slot="tree-item-label"
            className="min-w-0 overflow-hidden text-ellipsis whitespace-nowrap"
          >
            {itemLabel}
          </span>

          {itemData?.endContent ? (
            <span
              data-slot="tree-item-end"
              className="ml-auto pr-0.5 text-[13px] leading-4 font-medium text-gray-7 dark:text-gray-7"
            >
              {itemData.endContent}
            </span>
          ) : null}
        </span>
      </div>
    </div>
  );
}

function DynamicTreeItemContextMenu<TItem extends DynamicTreeItemData>({
  item,
  actions,
}: {
  item: ItemInstance<TItem>;
  actions: TreeItemActions<TItem>;
}) {
  const isFolder = item.isFolder();
  const { t } = useJetBrainsLocale();

  return (
    <>
      {isFolder && (
        <ContextMenuItem
          icon="general/general/add"
          disabled={!actions.add}
          onSelect={() => actions.add?.(item)}
        >
          {t('dynamicTree.add')}
        </ContextMenuItem>
      )}
      <ContextMenuItem
        icon="general/general/refresh"
        onSelect={() => actions.refresh(item)}
      >
        {t('dynamicTree.refresh')}
      </ContextMenuItem>
      {isFolder && (
        <ContextMenuItem
          icon="general/general/remove"
          onSelect={() => actions.clearChildren(item)}
        >
          {t('dynamicTree.clearChildren')}
        </ContextMenuItem>
      )}
      <ContextMenuSeparator />
      <ContextMenuItem
        icon="general/general/delete"
        disabled={!actions.delete}
        onSelect={() => actions.delete?.(item)}
      >
        {t('dynamicTree.delete')}
      </ContextMenuItem>
    </>
  );
}

function DynamicTree<TItem extends DynamicTreeItemData>({
  containerProps,
  items,
  indent = 16,
  item: customItem,
  width,
  height,
  contextMenu: contextMenuFn,
  addItem,
  deleteItem,
  ...props
}: DynamicTreeProps<TItem>) {
  const ItemComponent = customItem ?? DynamicTreeItem;

  const actions = useMemo<TreeItemActions<TItem>>(
    () => ({
      refresh: (item) => {
        const instance = item as ItemInstance<TItem> & {
          invalidateItemData: (optimistic?: boolean) => Promise<void>;
          invalidateChildrenIds: () => Promise<void>;
        };
        void instance.invalidateItemData(true);
        void instance.invalidateChildrenIds();
      },
      clearChildren: (item) => {
        const instance = item as ItemInstance<TItem> & {
          clearCachedChildren: () => void;
        };
        instance.clearCachedChildren();
        if (item.isExpanded()) item.collapse();
      },
      add: addItem ? (item) => addItem(item) : undefined,
      delete: deleteItem ? (item) => deleteItem(item) : undefined,
    }),
    [addItem, deleteItem],
  );

  return (
    <div
      {...containerProps}
      data-slot="tree"
      className="block w-full min-w-[244px] box-border bg-transparent py-2 font-sans text-[13px] leading-4 font-medium text-gray-1 dark:text-gray-12"
      style={{ width, height }}
      {...props}
    >
      {items.map((item) => {
        const itemKey = item.getKey();

        if (contextMenuFn === null) {
          return <ItemComponent key={itemKey} item={item} indent={indent} />;
        }

        const menuContent = contextMenuFn ? (
          contextMenuFn(item, actions)
        ) : (
          <DynamicTreeItemContextMenu item={item} actions={actions} />
        );

        return (
          <ContextMenu key={itemKey}>
            <ContextMenuTrigger asChild>
              <ItemComponent item={item} indent={indent} />
            </ContextMenuTrigger>
            <ContextMenuContent>{menuContent}</ContextMenuContent>
          </ContextMenu>
        );
      })}
    </div>
  );
}

export { DynamicTreeItem };
export { DynamicTree };

export default DynamicTree;
