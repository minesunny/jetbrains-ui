'use client';

import React, {
  type ComponentPropsWithoutRef,
  createContext,
  useContext,
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
  ContextMenuSub,
  ContextMenuSubContent,
  ContextMenuSubTrigger,
  ContextMenuTrigger,
} from '@/registry/components/context-menu';

// ---------------------------------------------------------------------------
// Public types
// ---------------------------------------------------------------------------

export interface DynamicTabsProps {
  id: string;
  label: string;
  icon?: string;
  pinned?: boolean;
  disabled?: boolean;
  modified?: boolean;
  key?: string;
  index?: number;
}

export interface DynamicTabContextMenuProps {
  key: string;
  label?: string;
  icon?: string;
  index?: number;
  separator?: boolean;
  children?: DynamicTabContextMenuProps[];
  action?: (tab: DynamicTabsProps) => void;
}

export interface DynamicTabsListProps
  extends Omit<
    ComponentPropsWithoutRef<'div'>,
    'children' | 'contextMenu' | 'onClick'
  > {
  items: DynamicTabsProps[];
  activeTab?: string;
  defaultActiveTab?: string;
  /** Fired when the active tab changes */
  onActive?: (prev: DynamicTabsProps | null, next: DynamicTabsProps) => void;
  /** Fired when a tab is clicked (regardless of whether it becomes active) */
  onClick?: (item: DynamicTabsProps) => void;
  /** Fired when tabs are closed */
  onClose?: (items: DynamicTabsProps | DynamicTabsProps[]) => void;
  /** Fired when a tab is pinned or unpinned */
  onTogglePin?: (item: DynamicTabsProps, pinned: boolean) => void;
  /** Add new tab — returns the new tab item */
  add?: () => DynamicTabsProps | undefined;
  /** Custom context menu config, null to disable */
  contextMenu?: DynamicTabContextMenuProps[] | null;
}

// ---------------------------------------------------------------------------
// List context (internal)
// ---------------------------------------------------------------------------

interface DynamicTabsListContextValue {
  items: DynamicTabsProps[];
  activeTab: string | undefined;
  handleClick: (tab: DynamicTabsProps) => void;
  onActive?: (prev: DynamicTabsProps | null, next: DynamicTabsProps) => void;
  onClick?: (item: DynamicTabsProps) => void;
  onClose?: (items: DynamicTabsProps | DynamicTabsProps[]) => void;
  onTogglePin?: (item: DynamicTabsProps, pinned: boolean) => void;
  add?: () => DynamicTabsProps | undefined;
}

const DynamicTabsListContext =
  createContext<DynamicTabsListContextValue | null>(null);

function useDynamicTabsListContext() {
  const ctx = useContext(DynamicTabsListContext);
  if (!ctx) {
    throw new Error(
      'useDynamicTabsListContext must be used within DynamicTabsList',
    );
  }
  return ctx;
}

// ---------------------------------------------------------------------------
// DynamicTabsTrigger
// ---------------------------------------------------------------------------

function DynamicTabsTrigger({
  item,
  ...rest
}: {
  item: DynamicTabsProps;
} & Omit<ComponentPropsWithoutRef<'button'>, 'children'>) {
  const { t } = useJetBrainsLocale();
  const { activeTab, handleClick, onClose, onTogglePin } =
    useDynamicTabsListContext();
  const isActive = item.id === activeTab;

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
      onClick={() => handleClick(item)}
      className="inline-flex shrink-0 items-center gap-1.5 rounded-md px-2.5 py-1 text-default leading-4 font-normal opacity-[0.67] text-gray-1 dark:text-gray-12 outline-none transition-[background-color,color,box-shadow,opacity] duration-100 ease-in-out hover:opacity-100 hover:bg-gray-12 dark:hover:bg-gray-3 focus-visible:ring-2 focus-visible:ring-blue-4 dark:focus-visible:ring-blue-6 data-[state=active]:opacity-100 data-[state=active]:bg-blue-12 dark:data-[state=active]:bg-blue-2 data-[state=active]:text-gray-1 dark:data-[state=active]:text-gray-12 data-[state=active]:border data-[state=active]:border-blue-5 disabled:pointer-events-none disabled:opacity-50"
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
            onTogglePin?.(item, false);
          }}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              e.preventDefault();
              e.stopPropagation();
              onTogglePin?.(item, false);
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
            onClose?.(item);
          }}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              e.preventDefault();
              e.stopPropagation();
              onClose?.(item);
            }
          }}
        >
          <SVG name="general/general/close" size="xs" />
        </span>
      )}
    </button>
  );
}

// ---------------------------------------------------------------------------
// Context menu (internal)
// ---------------------------------------------------------------------------

const DEFAULT_CONTEXT_MENU: DynamicTabContextMenuProps[] = [
  { key: 'pin', icon: 'general/general/pin' },
  { key: 'add' },
  { key: 'sep', separator: true },
  { key: 'close', icon: 'general/general/close' },
  { key: 'closeLeft', icon: 'general/general/close' },
  { key: 'closeRight', icon: 'general/general/close' },
  { key: 'closeOthers', icon: 'general/general/close' },
];

interface ResolvedMenuItem {
  label: string;
  disabled: boolean;
  handleSelect: (() => void) | undefined;
}

function resolveMenuItem(
  key: string,
  tab: DynamicTabsProps,
  label: string,
  ctx: {
    onClose: ((items: DynamicTabsProps | DynamicTabsProps[]) => void) | undefined;
    onTogglePin: ((item: DynamicTabsProps, pinned: boolean) => void) | undefined;
    add: (() => DynamicTabsProps | undefined) | undefined;
    closableLeft: DynamicTabsProps[];
    closableRight: DynamicTabsProps[];
    closableOthers: DynamicTabsProps[];
    t: (key: string) => string;
  },
): ResolvedMenuItem {
  let disabled = false;
  let handleSelect: (() => void) | undefined;

  switch (key) {
    case 'pin':
      if (!label)
        label = tab.pinned
          ? ctx.t('dynamicTabs.unpinTabLabel')
          : ctx.t('dynamicTabs.pinTabLabel');
      disabled = !ctx.onTogglePin;
      handleSelect = ctx.onTogglePin
        ? () => ctx.onTogglePin!(tab, !tab.pinned)
        : undefined;
      break;
    case 'add':
      if (!label) label = ctx.t('dynamicTabs.addTab');
      disabled = !ctx.add;
      handleSelect = ctx.add ? () => ctx.add!() : undefined;
      break;
    case 'close':
      if (!label) label = ctx.t('dynamicTabs.close');
      disabled = tab.pinned || !ctx.onClose;
      handleSelect =
        ctx.onClose && !tab.pinned ? () => ctx.onClose!(tab) : undefined;
      break;
    case 'closeLeft':
      if (!label) label = ctx.t('dynamicTabs.closeLeftTabs');
      disabled = ctx.closableLeft.length === 0 || !ctx.onClose;
      handleSelect =
        ctx.onClose && ctx.closableLeft.length > 0
          ? () => ctx.onClose!(ctx.closableLeft)
          : undefined;
      break;
    case 'closeRight':
      if (!label) label = ctx.t('dynamicTabs.closeRightTabs');
      disabled = ctx.closableRight.length === 0 || !ctx.onClose;
      handleSelect =
        ctx.onClose && ctx.closableRight.length > 0
          ? () => ctx.onClose!(ctx.closableRight)
          : undefined;
      break;
    case 'closeOthers':
      if (!label) label = ctx.t('dynamicTabs.closeOthers');
      disabled = ctx.closableOthers.length === 0 || !ctx.onClose;
      handleSelect =
        ctx.onClose && ctx.closableOthers.length > 0
          ? () => ctx.onClose!(ctx.closableOthers)
          : undefined;
      break;
  }

  return { label, disabled, handleSelect };
}

function DynamicTabsContextMenu({
  tab,
  contextMenu,
}: {
  tab: DynamicTabsProps;
  contextMenu?: DynamicTabContextMenuProps[] | null;
}) {
  const { t } = useJetBrainsLocale();
  const { items, onClose, onTogglePin, add } = useDynamicTabsListContext();
  const index = items.findIndex((i) => i.id === tab.id);
  const closableLeft = items.slice(0, index).filter((i) => !i.pinned);
  const closableRight = items.slice(index + 1).filter((i) => !i.pinned);
  const closableOthers = items.filter(
    (i, idx) => idx !== index && !i.pinned,
  );

  const resolveCtx = {
    onClose,
    onTogglePin,
    add,
    closableLeft,
    closableRight,
    closableOthers,
    t,
  };

  const menuItems = (contextMenu ?? DEFAULT_CONTEXT_MENU)
    .map(function sortByName(
      item: DynamicTabContextMenuProps,
    ): DynamicTabContextMenuProps {
      return {
        ...item,
        children: item.children
          ?.map(sortByName)
          .sort((a, b) => (a.index ?? 0) - (b.index ?? 0)),
      };
    })
    .sort((a, b) => (a.index ?? 0) - (b.index ?? 0));

  return (
    <>
      {menuItems.map((item) => {
        let separatorEl = item.separator ? (
          <ContextMenuSeparator key={`${item.key}-sep`} />
        ) : null;

        if (
          !item.key ||
          (item.separator && !item.label && !item.children?.length)
        ) {
          return separatorEl;
        }

        const resolved = resolveMenuItem(
          item.key,
          tab,
          item.label ?? '',
          resolveCtx,
        );
        if (item.action) resolved.handleSelect = () => item.action!(tab);

        if (item.children?.length) {
          return (
            <React.Fragment key={item.key}>
              {separatorEl}
              <ContextMenuSub>
                <ContextMenuSubTrigger disabled={resolved.disabled}>
                  {item.icon && <SVG name={item.icon} size="xs" />}
                  {resolved.label}
                </ContextMenuSubTrigger>
                <ContextMenuSubContent>
                  {item.children.map((child) => (
                    <ContextMenuItem
                      key={child.key}
                      icon={child.icon}
                      onSelect={
                        child.action ? () => child.action!(tab) : undefined
                      }
                    >
                      {child.label}
                    </ContextMenuItem>
                  ))}
                </ContextMenuSubContent>
              </ContextMenuSub>
            </React.Fragment>
          );
        }

        return (
          <React.Fragment key={item.key}>
            {separatorEl}
            <ContextMenuItem
              icon={item.icon}
              disabled={resolved.disabled}
              onSelect={resolved.handleSelect}
            >
              {resolved.label}
            </ContextMenuItem>
          </React.Fragment>
        );
      })}
    </>
  );
}

// ---------------------------------------------------------------------------
// DynamicTabsList
// ---------------------------------------------------------------------------

function DynamicTabsList({
  items,
  activeTab: controlledActive,
  defaultActiveTab,
  onActive,
  onClick,
  onClose,
  onTogglePin,
  add,
  contextMenu: contextMenuConfig,
  className,
  ...rest
}: DynamicTabsListProps) {
  const [internalActive, setInternalActive] = useState(defaultActiveTab);
  const activeTab = controlledActive ?? internalActive;

  const handleClick = useCallback(
    (tab: DynamicTabsProps) => {
      if (tab.disabled) return;
      onClick?.(tab);

      const prevId = activeTab;
      if (prevId !== tab.id) {
        if (!controlledActive) {
          setInternalActive(tab.id);
        }
        const prevItem = prevId
          ? (items.find((t) => t.id === prevId) ?? null)
          : null;
        onActive?.(prevItem, tab);
      }
    },
    [activeTab, controlledActive, items, onClick, onActive],
  );

  const ctx: DynamicTabsListContextValue = {
    items,
    activeTab,
    handleClick,
    onActive,
    onClick,
    onClose,
    onTogglePin,
    add,
  };

  return (
    <DynamicTabsListContext.Provider value={ctx}>
      <ScrollArea
        role="tablist"
        data-slot="dynamic-tabs-list"
        orientation="horizontal"
        className={cn(
          'w-full h-8 bg-gray-12 dark:bg-gray-2 rounded-md overscroll-contain',
          className,
        )}
      >
        <div className="inline-flex h-8 items-center gap-1 p-1 min-w-full">
          {items.map((tab) => {
            const button = <DynamicTabsTrigger key={tab.id} item={tab} />;

            if (contextMenuConfig === null) {
              return (
                <div key={tab.id} className="shrink-0">
                  {button}
                </div>
              );
            }

            return (
              <ContextMenu key={tab.id}>
                <ContextMenuTrigger asChild>{button}</ContextMenuTrigger>
                <ContextMenuContent>
                  <DynamicTabsContextMenu
                    tab={tab}
                    contextMenu={contextMenuConfig}
                  />
                </ContextMenuContent>
              </ContextMenu>
            );
          })}
        </div>
      </ScrollArea>
    </DynamicTabsListContext.Provider>
  );
}

DynamicTabsList.displayName = 'DynamicTabsList';

export { DynamicTabsList };
export default DynamicTabsList;
