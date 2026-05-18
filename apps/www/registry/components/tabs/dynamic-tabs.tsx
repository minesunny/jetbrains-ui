'use client';

import {
  type ReactNode,
  type ComponentPropsWithoutRef,
  useState,
  useCallback,
} from 'react';

import { cn } from '@workspace/ui/lib/utils';
import { SVG } from '@/registry/components/svg';
import { ScrollArea } from '@/registry/components/scroll-area';
import { useJetBrainsLocale } from '@/registry/components/provider';
import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuSeparator,
  ContextMenuTrigger,
} from '@/registry/components/context-menu';

export interface DynamicTabItem {
  id: string;
  label: string;
  icon?: string;
  pinned?: boolean;
  disabled?: boolean;
  modified?: boolean;
}

export interface DynamicTabActions {
  add?: () => void;
  close?: () => void;
  closeOthers?: () => void;
  closeLeft?: () => void;
  closeRight?: () => void;
  pin?: () => void;
}

export type DynamicTabContextMenuFn = (
  tab: DynamicTabItem,
  index: number,
  actions: DynamicTabActions,
) => ReactNode;

export interface DynamicTabsListProps
  extends Omit<ComponentPropsWithoutRef<'div'>, 'children' | 'contextMenu'> {
  items: DynamicTabItem[];
  activeTab?: string;
  defaultActiveTab?: string;
  onActiveChange?: (tabId: string) => void;
  closeTabs?: (tabIds: string[]) => void;
  togglePin?: (tabId: string) => void;
  addTab?: () => void;
  contextMenu?: DynamicTabContextMenuFn | null;
}

function DynamicTabItemButton({
  item,
  isActive,
  onClick,
  onClose,
  onTogglePin,
  ...rest
}: {
  item: DynamicTabItem;
  isActive: boolean;
  onClick?: () => void;
  onClose?: () => void;
  onTogglePin?: () => void;
} & Omit<ComponentPropsWithoutRef<'button'>, 'children'>) {
  const { t } = useJetBrainsLocale();
  return (
    <button
      {...rest}
      type="button"
      role="tab"
      aria-selected={isActive}
      data-state={isActive ? 'active' : 'inactive'}
      data-pinned={item.pinned || undefined}
      data-modified={item.modified || undefined}
      data-disabled={item.disabled || undefined}
      disabled={item.disabled}
      className="inline-flex shrink-0 items-center gap-1.5 rounded-md px-2.5 py-1 text-default leading-4 font-normal opacity-[0.67] text-gray-1 dark:text-gray-12 outline-none transition-[background-color,color,box-shadow,opacity] duration-100 ease-in-out hover:opacity-100 hover:bg-gray-12 dark:hover:bg-gray-3 focus-visible:ring-2 focus-visible:ring-blue-4 dark:focus-visible:ring-blue-6 data-[state=active]:opacity-100 data-[state=active]:bg-blue-12 dark:data-[state=active]:bg-blue-2 data-[state=active]:text-gray-1 dark:data-[state=active]:text-gray-12 data-[state=active]:border data-[state=active]:border-blue-5 disabled:pointer-events-none disabled:opacity-50"
      onClick={onClick}
    >
      {item.icon ? (
        <span className="inline-flex size-4 shrink-0 items-center justify-center">
          <SVG name={item.icon} size="md" />
        </span>
      ) : null}
      <span className="whitespace-nowrap">{item.label}</span>
      {item.modified && !item.pinned ? (
        <span
          className="ml-0.5 inline-flex size-4 shrink-0 items-center justify-center text-blue-8 dark:text-blue-6"
          aria-label={t('dynamicTabs.modified')}
        >
          ●
        </span>
      ) : null}
      {item.pinned ? (
        <span
          role="button"
          tabIndex={item.disabled ? -1 : 0}
          aria-label={t('dynamicTabs.unpinTab')}
          className="ml-0.5 inline-flex size-4 shrink-0 cursor-default items-center justify-center rounded-sm text-gray-6 hover:text-gray-1 dark:text-gray-10 dark:hover:text-gray-12"
          onClick={(e) => {
            e.stopPropagation();
            onTogglePin?.();
          }}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              e.preventDefault();
              e.stopPropagation();
              onTogglePin?.();
            }
          }}
        >
          <SVG name="general/general/pin" size="xs" />
        </span>
      ) : (
        <span
          role="button"
          tabIndex={item.disabled ? -1 : 0}
          aria-label={t('dynamicTabs.closeTab')}
          className="ml-0.5 inline-flex size-4 shrink-0 cursor-default items-center justify-center rounded-sm text-gray-6 hover:text-gray-1 dark:text-gray-10 dark:hover:text-gray-12"
          onClick={(e) => {
            e.stopPropagation();
            onClose?.();
          }}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              e.preventDefault();
              e.stopPropagation();
              onClose?.();
            }
          }}
        >
          <SVG name="general/general/close" size="xs" />
        </span>
      )}
    </button>
  );
}

function DynamicTabItemContextMenu({
  tab,
  actions,
  hasClosableLeft,
  hasClosableRight,
}: {
  tab: DynamicTabItem;
  actions: DynamicTabActions;
  hasClosableLeft: boolean;
  hasClosableRight: boolean;
}) {
  const isPinned = tab.pinned;
  const { t } = useJetBrainsLocale();

  return (
    <>
      <ContextMenuItem
        icon="general/general/pin"
        disabled={!actions.pin}
        onSelect={() => actions.pin?.()}
      >
        {isPinned
          ? t('dynamicTabs.unpinTabLabel')
          : t('dynamicTabs.pinTabLabel')}
      </ContextMenuItem>
      <ContextMenuItem disabled={!actions.add} onSelect={() => actions.add?.()}>
        {t('dynamicTabs.addTab')}
      </ContextMenuItem>
      <ContextMenuSeparator />
      <ContextMenuItem
        icon="general/general/close"
        disabled={isPinned || !actions.close}
        onSelect={() => actions.close?.()}
      >
        {t('dynamicTabs.close')}
      </ContextMenuItem>
      <ContextMenuItem
        icon="general/general/close"
        disabled={!hasClosableLeft || !actions.closeLeft}
        onSelect={() => actions.closeLeft?.()}
      >
        {t('dynamicTabs.closeLeftTabs')}
      </ContextMenuItem>
      <ContextMenuItem
        icon="general/general/close"
        disabled={!hasClosableRight || !actions.closeRight}
        onSelect={() => actions.closeRight?.()}
      >
        {t('dynamicTabs.closeRightTabs')}
      </ContextMenuItem>
      <ContextMenuItem
        icon="general/general/close"
        disabled={!actions.closeOthers}
        onSelect={() => actions.closeOthers?.()}
      >
        {t('dynamicTabs.closeOthers')}
      </ContextMenuItem>
    </>
  );
}

function DynamicTabsList({
  items,
  activeTab: controlledActive,
  defaultActiveTab,
  onActiveChange,
  closeTabs,
  togglePin,
  addTab,
  contextMenu: contextMenuFn,
  className,
  ...props
}: DynamicTabsListProps) {
  const [internalActive, setInternalActive] = useState(defaultActiveTab);
  const activeTab = controlledActive ?? internalActive;

  const handleActiveChange = useCallback(
    (tabId: string) => {
      if (!controlledActive) {
        setInternalActive(tabId);
      }
      onActiveChange?.(tabId);
    },
    [controlledActive, onActiveChange],
  );

  const buildActions = useCallback(
    (tab: DynamicTabItem, index: number): DynamicTabActions => ({
      close: closeTabs
        ? () => {
            if (!tab.pinned) closeTabs([tab.id]);
          }
        : undefined,
      closeOthers: closeTabs
        ? () => {
            const ids = items
              .filter((t, i) => i !== index && !t.pinned)
              .map((t) => t.id);
            if (ids.length > 0) closeTabs(ids);
          }
        : undefined,
      closeLeft: closeTabs
        ? () => {
            const ids = items
              .slice(0, index)
              .filter((t) => !t.pinned)
              .map((t) => t.id);
            if (ids.length > 0) closeTabs(ids);
          }
        : undefined,
      closeRight: closeTabs
        ? () => {
            const ids = items
              .slice(index + 1)
              .filter((t) => !t.pinned)
              .map((t) => t.id);
            if (ids.length > 0) closeTabs(ids);
          }
        : undefined,
      pin: togglePin ? () => togglePin(tab.id) : undefined,
      add: addTab ? () => addTab() : undefined,
    }),
    [items, closeTabs, togglePin, addTab],
  );

  return (
    <ScrollArea
      role="tablist"
      data-slot="dynamic-tabs-list"
      orientation="horizontal"
      className={cn(
        'w-full h-8 bg-gray-12 dark:bg-gray-2 rounded-md',
        className,
      )}
    >
      <div className="inline-flex h-8 items-center gap-1 p-1 min-w-full">
        {items.map((tab, index) => {
          const isActive = tab.id === activeTab;
          const actions = buildActions(tab, index);
          const hasClosableLeft = items.slice(0, index).some((t) => !t.pinned);
          const hasClosableRight = items
            .slice(index + 1)
            .some((t) => !t.pinned);

          const button = (
            <DynamicTabItemButton
              item={tab}
              isActive={isActive}
              onClick={
                tab.disabled ? undefined : () => handleActiveChange(tab.id)
              }
              onClose={closeTabs ? () => closeTabs([tab.id]) : undefined}
              onTogglePin={togglePin ? () => togglePin(tab.id) : undefined}
            />
          );

          if (contextMenuFn === null) {
            return (
              <div key={tab.id} className="shrink-0">
                {button}
              </div>
            );
          }

          const menuContent = contextMenuFn ? (
            contextMenuFn(tab, index, actions)
          ) : (
            <DynamicTabItemContextMenu
              tab={tab}
              actions={actions}
              hasClosableLeft={hasClosableLeft}
              hasClosableRight={hasClosableRight}
            />
          );

          return (
            <ContextMenu key={tab.id}>
              <ContextMenuTrigger asChild>{button}</ContextMenuTrigger>
              <ContextMenuContent>{menuContent}</ContextMenuContent>
            </ContextMenu>
          );
        })}
      </div>
    </ScrollArea>
  );
}

DynamicTabsList.displayName = 'DynamicTabsList';

export { DynamicTabsList };
export default DynamicTabsList;
