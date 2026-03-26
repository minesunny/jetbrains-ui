'use client';

import * as React from 'react';
import { ContextMenu as ContextMenuPrimitive } from 'radix-ui';
import { CheckIcon, ChevronRightIcon, CircleIcon } from 'lucide-react';

import { cn } from '@workspace/ui/lib/utils';
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from '@/registry/components/tooltip';
import './index.css';

function ContextMenu({
  ...props
}: React.ComponentProps<typeof ContextMenuPrimitive.Root>) {
  return <ContextMenuPrimitive.Root data-slot="context-menu" {...props} />;
}

type ContextMenuTriggerProps = React.ComponentProps<
  typeof ContextMenuPrimitive.Trigger
> & {
  tooltip?: string;
};

function ContextMenuTrigger({
  className,
  asChild,
  tooltip,
  ...props
}: ContextMenuTriggerProps) {
  const trigger = (
    <ContextMenuPrimitive.Trigger
      data-slot="context-menu-trigger"
      asChild={asChild}
      className={cn(
        !asChild &&
          'jb-cmenu-trigger inline-flex h-7 min-w-[72px] select-none items-center justify-center gap-2 rounded-[4px] border px-3 py-1.5 text-[13px] leading-4 font-medium outline-none transition-[background-color,border-color,color,box-shadow] duration-150 ease-in-out',
        className,
      )}
      {...props}
    />
  );

  if (!tooltip) {
    return trigger;
  }

  return (
    <Tooltip>
      <TooltipTrigger asChild>{trigger}</TooltipTrigger>
      <TooltipContent>{tooltip}</TooltipContent>
    </Tooltip>
  );
}

function ContextMenuPortal({
  ...props
}: React.ComponentProps<typeof ContextMenuPrimitive.Portal>) {
  return (
    <ContextMenuPrimitive.Portal data-slot="context-menu-portal" {...props} />
  );
}

function ContextMenuContent({
  className,
  ...props
}: React.ComponentProps<typeof ContextMenuPrimitive.Content>) {
  return (
    <ContextMenuPortal>
      <ContextMenuPrimitive.Content
        data-slot="context-menu-content"
        className={cn(
          'jb-cmenu-content z-[var(--jb-z-popover)] min-w-[220px] overflow-hidden rounded-[8px] border p-1 shadow-[var(--jb-cmenu-content-shadow)] data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:origin-top data-[side=bottom]:slide-in-from-top-2 data-[side=left]:origin-right data-[side=left]:slide-in-from-right-2 data-[side=right]:origin-left data-[side=right]:slide-in-from-left-2 data-[side=top]:origin-bottom data-[side=top]:slide-in-from-bottom-2',
          className,
        )}
        {...props}
      />
    </ContextMenuPortal>
  );
}

function ContextMenuGroup({
  ...props
}: React.ComponentProps<typeof ContextMenuPrimitive.Group>) {
  return (
    <ContextMenuPrimitive.Group data-slot="context-menu-group" {...props} />
  );
}

function ContextMenuItem({
  className,
  inset,
  variant = 'default',
  ...props
}: React.ComponentProps<typeof ContextMenuPrimitive.Item> & {
  inset?: boolean;
  variant?: 'default' | 'destructive';
}) {
  return (
    <ContextMenuPrimitive.Item
      data-slot="context-menu-item"
      data-inset={inset || undefined}
      data-variant={variant}
      className={cn(
        'jb-cmenu-item relative flex min-h-6 w-full cursor-default select-none items-center gap-2 rounded-[3px] px-2 py-1 text-sm leading-4 font-normal outline-none transition-[background-color,color] duration-75 data-[inset]:pl-7 data-[disabled]:pointer-events-none',
        className,
      )}
      {...props}
    />
  );
}

function ContextMenuCheckboxItem({
  className,
  children,
  checked,
  ...props
}: React.ComponentProps<typeof ContextMenuPrimitive.CheckboxItem>) {
  return (
    <ContextMenuPrimitive.CheckboxItem
      data-slot="context-menu-checkbox-item"
      checked={checked}
      className={cn(
        'jb-cmenu-item relative flex min-h-6 w-full cursor-default select-none items-center gap-2 rounded-[3px] py-1 pl-7 pr-2 text-sm leading-4 font-normal outline-none transition-[background-color,color] duration-75 data-[disabled]:pointer-events-none',
        className,
      )}
      {...props}
    >
      <span className="jb-cmenu-item-indicator absolute left-2 inline-flex size-[14px] items-center justify-center">
        <ContextMenuPrimitive.ItemIndicator>
          <CheckIcon className="jb-cmenu-check-icon size-3" />
        </ContextMenuPrimitive.ItemIndicator>
      </span>
      {children}
    </ContextMenuPrimitive.CheckboxItem>
  );
}

function ContextMenuRadioGroup({
  ...props
}: React.ComponentProps<typeof ContextMenuPrimitive.RadioGroup>) {
  return (
    <ContextMenuPrimitive.RadioGroup
      data-slot="context-menu-radio-group"
      {...props}
    />
  );
}

function ContextMenuRadioItem({
  className,
  children,
  ...props
}: React.ComponentProps<typeof ContextMenuPrimitive.RadioItem>) {
  return (
    <ContextMenuPrimitive.RadioItem
      data-slot="context-menu-radio-item"
      className={cn(
        'jb-cmenu-item relative flex min-h-6 w-full cursor-default select-none items-center gap-2 rounded-[3px] py-1 pl-7 pr-2 text-sm leading-4 font-normal outline-none transition-[background-color,color] duration-75 data-[disabled]:pointer-events-none',
        className,
      )}
      {...props}
    >
      <span className="jb-cmenu-item-indicator absolute left-2 inline-flex size-[14px] items-center justify-center">
        <ContextMenuPrimitive.ItemIndicator>
          <CircleIcon className="jb-cmenu-radio-icon h-2 w-2 fill-current stroke-[3px]" />
        </ContextMenuPrimitive.ItemIndicator>
      </span>
      {children}
    </ContextMenuPrimitive.RadioItem>
  );
}

function ContextMenuLabel({
  className,
  inset,
  ...props
}: React.ComponentProps<typeof ContextMenuPrimitive.Label> & {
  inset?: boolean;
}) {
  return (
    <ContextMenuPrimitive.Label
      data-slot="context-menu-label"
      data-inset={inset || undefined}
      className={cn(
        'jb-cmenu-label px-2 py-1.5 text-xs leading-4 font-medium data-[inset]:pl-7',
        className,
      )}
      {...props}
    />
  );
}

function ContextMenuSeparator({
  className,
  ...props
}: React.ComponentProps<typeof ContextMenuPrimitive.Separator>) {
  return (
    <ContextMenuPrimitive.Separator
      data-slot="context-menu-separator"
      className={cn('jb-cmenu-separator -mx-1 my-1 h-px', className)}
      {...props}
    />
  );
}

function ContextMenuShortcut({
  className,
  ...props
}: React.ComponentProps<'span'>) {
  return (
    <span
      data-slot="context-menu-shortcut"
      className={cn(
        'jb-cmenu-shortcut ml-auto text-xs tracking-[var(--jb-tracking-wide)]',
        className,
      )}
      {...props}
    />
  );
}

function ContextMenuSub({
  ...props
}: React.ComponentProps<typeof ContextMenuPrimitive.Sub>) {
  return <ContextMenuPrimitive.Sub data-slot="context-menu-sub" {...props} />;
}

function ContextMenuSubTrigger({
  className,
  inset,
  children,
  ...props
}: React.ComponentProps<typeof ContextMenuPrimitive.SubTrigger> & {
  inset?: boolean;
}) {
  return (
    <ContextMenuPrimitive.SubTrigger
      data-slot="context-menu-sub-trigger"
      data-inset={inset || undefined}
      className={cn(
        'jb-cmenu-item jb-cmenu-sub-trigger relative flex min-h-6 w-full cursor-default select-none items-center gap-2 rounded-[3px] px-2 py-1 pr-1.5 text-sm leading-4 font-normal outline-none transition-[background-color,color] duration-75 data-[inset]:pl-7 data-[disabled]:pointer-events-none',
        className,
      )}
      {...props}
    >
      {children}
      <ChevronRightIcon className="jb-cmenu-sub-chevron ml-auto size-[14px]" />
    </ContextMenuPrimitive.SubTrigger>
  );
}

function ContextMenuSubContent({
  className,
  sideOffset = 8,
  ...props
}: React.ComponentProps<typeof ContextMenuPrimitive.SubContent>) {
  return (
    <ContextMenuPrimitive.SubContent
      data-slot="context-menu-sub-content"
      className={cn(
        'jb-cmenu-content jb-cmenu-sub-content z-[var(--jb-z-popover)] min-w-[196px] overflow-hidden rounded-[8px] border p-1 shadow-[var(--jb-cmenu-content-shadow)] data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:origin-top data-[side=bottom]:slide-in-from-top-2 data-[side=left]:origin-right data-[side=left]:slide-in-from-right-2 data-[side=right]:origin-left data-[side=right]:slide-in-from-left-2 data-[side=top]:origin-bottom data-[side=top]:slide-in-from-bottom-2',
        className,
      )}
      sideOffset={sideOffset}
      {...props}
    />
  );
}

export {
  ContextMenu,
  ContextMenuTrigger,
  ContextMenuPortal,
  ContextMenuContent,
  ContextMenuGroup,
  ContextMenuItem,
  ContextMenuCheckboxItem,
  ContextMenuRadioGroup,
  ContextMenuRadioItem,
  ContextMenuLabel,
  ContextMenuSeparator,
  ContextMenuShortcut,
  ContextMenuSub,
  ContextMenuSubTrigger,
  ContextMenuSubContent,
};
