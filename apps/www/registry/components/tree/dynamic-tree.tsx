'use client';

import * as React from 'react';

import { type ItemInstance } from '@headless-tree/core';
import { SVG } from '@/registry/components/svg';

export { asyncDataLoaderFeature } from './dynamic-tree-feature';

export interface DynamicTreeItemData {
  label?: string;
  icon?: string;
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

export interface DynamicTreeProps<
  TItem extends DynamicTreeItemData = DynamicTreeItemData,
> extends Omit<
    React.ComponentPropsWithoutRef<'div'>,
    'children' | 'className' | 'style'
  > {
  containerProps: React.ComponentPropsWithoutRef<'div'>;
  items: ItemInstance<TItem>[];
  indent?: number;
  item?: DynamicTreeItemComponent<TItem>;
  width?: React.CSSProperties['width'];
  height?: React.CSSProperties['height'];
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
  return (
    <span
      data-slot="tree-item-disclosure"
      data-value={itemId}
      data-expanded={isExpanded ? 'true' : undefined}
      data-loading={isLoading ? 'true' : undefined}
      role="button"
      tabIndex={isDisabled ? -1 : 0}
      aria-label={
        isLoading
          ? `Loading ${itemLabel}`
          : isExpanded
            ? `Collapse ${itemLabel}`
            : `Expand ${itemLabel}`
      }
      aria-disabled={isDisabled ? true : undefined}
      className="tree-item-disclosure relative z-10 inline-flex size-4 shrink-0 items-center justify-center cursor-default outline-none disabled:cursor-not-allowed"
      onClick={(event) => {
        event.stopPropagation();
        onToggle();
      }}
      onKeyDown={(event) => {
        if (isDisabled) return;
        if (event.key === 'Enter' || event.key === ' ') {
          event.preventDefault();
          onToggle();
        }
      }}
    >
      <SVG
        name={
          isLoading
            ? 'general/spinner/loader'
            : isExpanded
              ? 'chevron-down'
              : 'chevron-right'
        }
        size="md"
        className={
          isLoading ? 'animate-spin [animation-duration:900ms]' : undefined
        }
      />
    </span>
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

  const itemData = item.getItemData() as TItem | null;
  const itemLabel = itemData?.label ?? item.getId();
  const isDisabled = itemData?.disabled;

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
        data-disabled={isDisabled ? 'true' : undefined}
        data-expanded={
          item.isFolder() && item.isExpanded() ? 'true' : undefined
        }
        data-loading={item.isLoading() ? 'true' : undefined}
        aria-selected={item.isSelected()}
        aria-disabled={isDisabled ? true : undefined}
        aria-busy={item.isLoading() ? true : undefined}
        tabIndex={isDisabled ? -1 : (resolvedTabIndex ?? -1)}
        style={
          {
            ...resolvedStyle,
            '--tree-item-padding-left': `${
              16 +
              item.getItemMeta().level * indent +
              Math.max(0, item.getItemMeta().level - 1) * 2
            }px`,
          } as React.CSSProperties
        }
        className={
          "tree-item-button relative box-border flex h-6 w-full min-w-0 cursor-default items-center gap-ui-hairline pr-ui-section pl-[var(--tree-item-padding-left)] select-none text-gray-1 outline-none transition-[background-color,color] duration-75 data-[disabled=true]:cursor-not-allowed data-[disabled=true]:text-gray-8 [&_.tree-item-disclosure]:text-gray-7 [&_.tree-item-icon]:text-gray-6 [&:focus_.tree-item-disclosure]:text-current [&:focus_.tree-item-icon]:text-current [&[data-disabled='true']_.tree-item-disclosure]:text-gray-8 [&:hover:not([data-disabled='true'])_.tree-item-overlay]:bg-blue-11 [&:focus_.tree-item-overlay]:bg-blue-11 [&:focus-visible:not([data-disabled='true'])_.tree-item-overlay]:ring-2 [&:focus-visible:not([data-disabled='true'])_.tree-item-overlay]:ring-blue-4 [&:focus-visible:not([data-disabled='true'])_.tree-item-overlay]:ring-offset-1 [&:focus-visible:not([data-disabled='true'])_.tree-item-overlay]:ring-offset-white dark:text-gray-12 dark:data-[disabled=true]:text-gray-7 dark:[&_.tree-item-disclosure]:text-gray-10 dark:[&_.tree-item-icon]:text-gray-10 dark:[&[data-disabled=true]_.tree-item-disclosure]:text-gray-7 dark:[&:hover:not([data-disabled='true'])_.tree-item-overlay]:bg-blue-2 dark:[&:focus_.tree-item-overlay]:bg-blue-2 dark:[&:focus-visible:not([data-disabled='true'])_.tree-item-overlay]:ring-blue-6 dark:[&:focus-visible:not([data-disabled='true'])_.tree-item-overlay]:ring-offset-gray-2"
        }
      >
        <span
          aria-hidden="true"
          data-slot="tree-item-overlay"
          className="tree-item-overlay pointer-events-none absolute inset-y-0 left-ui-tree-overlay right-ui-tree-overlay rounded-[4px] bg-transparent transition-[background-color,box-shadow] duration-150 ease-in-out"
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
            className="tree-item-disclosure-placeholder relative z-10 inline-flex size-4 shrink-0 items-center justify-center"
          />
        )}
        <span
          data-slot="tree-item-content"
          className="tree-item-content relative z-10 inline-flex h-5 min-w-0 flex-1 items-center gap-ui-compact"
        >
          {itemData?.icon ? (
            <span
              data-slot="tree-item-icon"
              className="tree-item-icon inline-flex size-4 shrink-0 items-center justify-center"
            >
              <SVG name={itemData.icon} size="md" />
            </span>
          ) : null}

          <span
            data-slot="tree-item-label"
            className="tree-item-label min-w-0 overflow-hidden text-ellipsis whitespace-nowrap"
          >
            {itemLabel}
          </span>

          {itemData?.endContent ? (
            <span
              data-slot="tree-item-end"
              className="tree-item-end ml-auto pr-ui-hairline text-[13px] leading-4 font-medium text-gray-7 dark:text-gray-7"
            >
              {itemData.endContent}
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
  width,
  height,
  ...props
}: DynamicTreeProps<TItem>) {
  const ItemComponent = customItem ?? DynamicTreeItem;

  return (
    <div
      {...containerProps}
      data-slot="tree"
      className="tree dynamic-tree block w-full min-w-ui-tree box-border bg-transparent py-ui-control-row text-ui-default text-gray-1 dark:text-gray-12"
      style={{ width, height }}
      {...props}
    >
      {items.map((item) => (
        <ItemComponent key={item.getKey()} item={item} indent={indent} />
      ))}
    </div>
  );
}

export { DynamicTreeItem };
export { DynamicTree };

export default DynamicTree;
