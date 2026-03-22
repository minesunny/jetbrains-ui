'use client';

import * as React from 'react';

import {
  asyncDataLoaderFeature,
  hotkeysCoreFeature,
  selectionFeature,
  type ItemInstance,
  type TreeDataLoader,
} from '@headless-tree/core';
import { useTree } from '@headless-tree/react';
import {
  ChevronDownIcon,
  ChevronRightIcon,
  LoaderIcon,
} from '@/registry/components/icons';
import { ScrollArea, ScrollViewport } from '@/registry/components/scroll-area';
import './index.css';

const DYNAMIC_TREE_ROOT_ITEM_ID = '__jb-dynamic-tree-root__';

export interface DynamicTreeItemData {
  label: string;
  icon?: React.ReactNode;
  endContent?: React.ReactNode;
  disabled?: boolean;
  isFolder?: boolean;
}

export interface DynamicTreeLoadedItem<
  TItem extends DynamicTreeItemData = DynamicTreeItemData,
> {
  id: string;
  data: TItem;
}

export type DynamicTreeLoadData<
  TItem extends DynamicTreeItemData = DynamicTreeItemData,
> = (
  itemId: string | null,
) => DynamicTreeLoadedItem<TItem>[] | Promise<DynamicTreeLoadedItem<TItem>[]>;

export interface DynamicTreeProps<
  TItem extends DynamicTreeItemData = DynamicTreeItemData,
> extends Omit<
    React.ComponentPropsWithoutRef<'div'>,
    'children' | 'className' | 'style'
  > {
  loadData: DynamicTreeLoadData<TItem>;
  treeLabel?: string;
  indent?: number;
  width?: React.CSSProperties['width'];
  height?: React.CSSProperties['height'];
}

type ItemRowProps<TItem extends DynamicTreeItemData> = {
  indent: number;
  item: ItemInstance<TItem>;
};

type DynamicTreeItemButtonStyle = React.CSSProperties & {
  '--jb-tree-item-padding-left': string;
};

function DynamicTreeItemRow<TItem extends DynamicTreeItemData>({
  indent,
  item,
}: ItemRowProps<TItem>) {
  const {
    onClick: ignoredOnClick,
    onDoubleClick: ignoredOnDoubleClick,
    onKeyDown: resolvedOnKeyDown,
    style: resolvedStyle,
    tabIndex: resolvedTabIndex,
    ...resolvedProps
  } = item.getProps() as React.ComponentPropsWithoutRef<'div'>;
  void ignoredOnClick;
  void ignoredOnDoubleClick;

  return (
    <div
      data-slot="jb-tree-item"
      data-value={item.getId()}
      className="jb-tree-item m-0 p-0"
    >
      <div
        {...resolvedProps}
        data-slot="jb-tree-item-button"
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
            '--jb-tree-item-padding-left': `${
              16 +
              item.getItemMeta().level * indent +
              Math.max(0, item.getItemMeta().level - 1) * 2
            }px`,
          } as DynamicTreeItemButtonStyle
        }
        className="jb-tree-item-button relative box-border flex h-6 w-full min-w-0 cursor-default items-center gap-0.5 pr-4 pl-[var(--jb-tree-item-padding-left)] select-none outline-none transition-[color] duration-150 ease-in-out data-[disabled=true]:cursor-not-allowed"
      >
        <span
          aria-hidden="true"
          data-slot="jb-tree-item-overlay"
          className="jb-tree-item-overlay pointer-events-none absolute inset-y-0 left-3 right-3 rounded-[4px] transition-[background-color,box-shadow] duration-150 ease-in-out"
        />

        {item.isFolder() ? (
          <button
            data-slot="jb-tree-item-disclosure"
            data-value={item.getId()}
            data-expanded={item.isExpanded() ? 'true' : undefined}
            data-loading={item.isLoading() ? 'true' : undefined}
            type="button"
            className="jb-tree-item-disclosure relative z-10 inline-flex size-4 shrink-0 items-center justify-center border-0 bg-transparent p-0 outline-none disabled:cursor-not-allowed"
            aria-label={
              item.isLoading()
                ? `Loading ${(item.getItemData() as TItem | null)?.label}`
                : item.isExpanded()
                  ? `Collapse ${(item.getItemData() as TItem | null)?.label}`
                  : `Expand ${(item.getItemData() as TItem | null)?.label}`
            }
            onClick={(event) => {
              event.stopPropagation();
              if ((item.getItemData() as TItem | null)?.disabled) {
                return;
              }
              item.setFocused();
              item.isExpanded() ? item.collapse() : item.expand();
            }}
            disabled={Boolean((item.getItemData() as TItem | null)?.disabled)}
          >
            {item.isLoading() ? (
              <LoaderIcon
                className="size-4 [animation-duration:900ms]"
                size={16}
              />
            ) : item.isExpanded() ? (
              <ChevronDownIcon className="size-4 scale-[0.78]" size={16} />
            ) : (
              <ChevronRightIcon className="size-4 scale-[0.78]" size={16} />
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
          {(item.getItemData() as TItem | null)?.icon ? (
            <span
              data-slot="jb-tree-item-icon"
              className="jb-tree-item-icon inline-flex size-4 shrink-0 items-center justify-center [&>svg]:size-4"
            >
              {(item.getItemData() as TItem | null)?.icon}
            </span>
          ) : null}

          <span
            data-slot="jb-tree-item-label"
            className="jb-tree-item-label min-w-0 overflow-hidden text-ellipsis whitespace-nowrap"
          >
            {(item.getItemData() as TItem | null)?.label}
          </span>

          {(item.getItemData() as TItem | null)?.endContent ? (
            <span
              data-slot="jb-tree-item-end"
              className="jb-tree-item-end ml-auto pr-0.5 text-[13px] leading-4 font-medium"
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
  loadData,
  treeLabel = 'Tree',
  indent = 16,
  width,
  height,
  ...props
}: DynamicTreeProps<TItem>) {
  const loadedItemsRef = React.useRef<Record<string, TItem>>({});

  const dataLoader = React.useMemo<TreeDataLoader<TItem>>(
    () => ({
      getItem: async (itemId: string) => {
        if (itemId === DYNAMIC_TREE_ROOT_ITEM_ID) {
          return {
            label: treeLabel,
            isFolder: true,
          } as TItem;
        }

        return (
          loadedItemsRef.current[itemId] ??
          ({
            label: itemId,
          } as TItem)
        );
      },
      getChildrenWithData: async (itemId: string) =>
        loadData(itemId === DYNAMIC_TREE_ROOT_ITEM_ID ? null : itemId),
    }),
    [loadData, treeLabel],
  );

  const tree = useTree<TItem>({
    rootItemId: DYNAMIC_TREE_ROOT_ITEM_ID,
    dataLoader,
    isItemFolder: (item) => Boolean(item.getItemData()?.isFolder),
    getItemName: (item) => item.getItemData()?.label ?? item.getId(),
    onLoadedItem: (itemId, item) => {
      loadedItemsRef.current[itemId] = item;
    },
    createLoadingItemData: () => ({}) as TItem,
    features: [asyncDataLoaderFeature, selectionFeature, hotkeysCoreFeature],
  });

  const containerProps = tree.getContainerProps(
    treeLabel,
  ) as React.ComponentPropsWithoutRef<'div'>;
  const items = tree.getItems();

  return (
    <ScrollArea
      data-slot="jb-tree-scroll-area"
      className="max-w-full"
      style={{ width, height }}
    >
      <ScrollViewport data-slot="jb-tree-scroll-viewport" className="size-full">
        <div
          {...containerProps}
          data-slot="jb-tree"
          className="jb-tree jb-dynamic-tree block w-full min-w-[244px] box-border py-2 text-[13px] leading-4 font-medium [font-family:var(--jb-font-sans),sans-serif]"
          {...props}
        >
          {items.map((item) => (
            <DynamicTreeItemRow
              key={item.getKey()}
              item={item}
              indent={indent}
            />
          ))}
        </div>
      </ScrollViewport>
    </ScrollArea>
  );
}

export { DynamicTree };

export default DynamicTree;
