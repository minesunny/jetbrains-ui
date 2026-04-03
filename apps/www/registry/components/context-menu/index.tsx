'use client';

import * as React from 'react';
import { ContextMenu as ContextMenuPrimitive } from 'radix-ui';

import { cn } from '@workspace/ui/lib/utils';
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from '@/registry/components/tooltip';

function MenuCheckIcon({ className, ...props }: React.ComponentProps<'svg'>) {
  return (
    <svg
      viewBox="0 0 16 16"
      fill="none"
      aria-hidden="true"
      className={className}
      {...props}
    >
      <path
        d="m3.5 8 3 3 6-6"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function MenuChevronRightIcon({
  className,
  ...props
}: React.ComponentProps<'svg'>) {
  return (
    <svg
      viewBox="0 0 16 16"
      fill="none"
      aria-hidden="true"
      className={className}
      {...props}
    >
      <path
        d="M6 4.5 9.5 8 6 11.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

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
          'inline-flex h-7 min-w-ui-button select-none items-center justify-center gap-ui-control rounded-[4px] border border-gray-9 bg-transparent px-ui-control text-ui-default text-gray-1 outline-none transition-[background-color,border-color,color,box-shadow] duration-150 ease-in-out hover:bg-gray-12 active:bg-gray-11 focus-visible:ring-2 focus-visible:ring-blue-4 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-14 dark:border-gray-5 dark:bg-gray-5 dark:text-gray-12 dark:hover:bg-gray-6 dark:active:bg-gray-4 dark:focus-visible:ring-blue-6 dark:focus-visible:ring-offset-gray-2',
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
          'z-[var(--z-popover)] min-w-ui-context-menu overflow-hidden rounded-[8px] border border-gray-9 bg-white p-ui-surface shadow-[0_4px_12px_rgba(0,0,0,0.15)] dark:border-gray-5 dark:bg-gray-2 dark:shadow-[0_4px_12px_rgba(0,0,0,0.4)] data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:origin-top data-[side=bottom]:slide-in-from-top-2 data-[side=left]:origin-right data-[side=left]:slide-in-from-right-2 data-[side=right]:origin-left data-[side=right]:slide-in-from-left-2 data-[side=top]:origin-bottom data-[side=top]:slide-in-from-bottom-2',
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
        'relative flex min-h-6 w-full cursor-default select-none items-center gap-ui-control rounded-[3px] bg-transparent px-ui-item py-ui-item text-ui-default text-gray-1 outline-none transition-[background-color,color] duration-75',
        'data-[highlighted]:bg-gray-12 data-[highlighted]:text-gray-1',
        'data-[state=open]:bg-gray-12 data-[state=open]:text-gray-1',
        'data-[state=checked]:bg-blue-12 data-[state=checked]:text-blue-1',
        'data-[disabled]:pointer-events-none data-[disabled]:text-gray-8',
        'dark:text-gray-12',
        'dark:data-[highlighted]:bg-gray-4 dark:data-[highlighted]:text-gray-12',
        'dark:data-[state=open]:bg-gray-4 dark:data-[state=open]:text-gray-12',
        'dark:data-[state=checked]:bg-blue-2 dark:data-[state=checked]:text-gray-12',
        'dark:data-[disabled]:text-gray-7',
        'data-[inset]:pl-ui-item-indicator',
        'data-[variant=destructive]:text-red-3 data-[variant=destructive]:data-[highlighted]:bg-red-10',
        'dark:data-[variant=destructive]:text-red-7 dark:data-[variant=destructive]:data-[highlighted]:bg-mix-blend-multiply',
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
        'relative flex min-h-6 w-full cursor-default select-none items-center gap-ui-control rounded-[3px] bg-transparent py-ui-item pl-ui-item-indicator pr-ui-item text-ui-default text-gray-1 outline-none transition-[background-color,color] duration-75',
        'data-[highlighted]:bg-gray-12 data-[highlighted]:text-gray-1',
        'data-[state=open]:bg-gray-12 data-[state=open]:text-gray-1',
        'data-[state=checked]:bg-blue-12 data-[state=checked]:text-blue-1',
        'data-[disabled]:pointer-events-none data-[disabled]:text-gray-8',
        'dark:text-gray-12',
        'dark:data-[highlighted]:bg-gray-4 dark:data-[highlighted]:text-gray-12',
        'dark:data-[state=open]:bg-gray-4 dark:data-[state=open]:text-gray-12',
        'dark:data-[state=checked]:bg-blue-2 dark:data-[state=checked]:text-gray-12',
        'dark:data-[disabled]:text-gray-7',
        className,
      )}
      {...props}
    >
      <span className="absolute left-2 inline-flex size-ui-item-icon items-center justify-center text-blue-4 dark:text-blue-6">
        <ContextMenuPrimitive.ItemIndicator>
          <MenuCheckIcon className="size-3" />
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
        'relative flex min-h-6 w-full cursor-default select-none items-center gap-ui-control rounded-[3px] bg-transparent py-ui-item pl-ui-item-indicator pr-ui-item text-ui-default text-gray-1 outline-none transition-[background-color,color] duration-75',
        'data-[highlighted]:bg-gray-12 data-[highlighted]:text-gray-1',
        'data-[state=open]:bg-gray-12 data-[state=open]:text-gray-1',
        'data-[state=checked]:bg-blue-12 data-[state=checked]:text-blue-1',
        'data-[disabled]:pointer-events-none data-[disabled]:text-gray-8',
        'dark:text-gray-12',
        'dark:data-[highlighted]:bg-gray-4 dark:data-[highlighted]:text-gray-12',
        'dark:data-[state=open]:bg-gray-4 dark:data-[state=open]:text-gray-12',
        'dark:data-[state=checked]:bg-blue-2 dark:data-[state=checked]:text-gray-12',
        'dark:data-[disabled]:text-gray-7',
        className,
      )}
      {...props}
    >
      <span className="absolute left-2 inline-flex size-ui-item-icon items-center justify-center text-blue-4 dark:text-blue-6">
        <ContextMenuPrimitive.ItemIndicator>
          <span className="size-2 rounded-full bg-current" />
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
        'px-ui-item py-ui-label text-ui-medium-semibold text-gray-6 dark:text-gray-8 data-[inset]:pl-ui-item-indicator',
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
      className={cn(
        '-mx-ui-surface my-ui-surface h-ui-hairline bg-gray-11 dark:bg-gray-5',
        className,
      )}
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
        'ml-auto text-xs tracking-[var(--tracking-wide)] text-gray-6 dark:text-gray-8',
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
        'relative flex min-h-6 w-full cursor-default select-none items-center gap-ui-control rounded-[3px] bg-transparent pl-ui-item py-ui-item pr-ui-sub-trigger text-ui-default text-gray-1 outline-none transition-[background-color,color] duration-75',
        'data-[highlighted]:bg-gray-12 data-[highlighted]:text-gray-1',
        'data-[state=open]:bg-gray-12 data-[state=open]:text-gray-1',
        'data-[state=checked]:bg-blue-12 data-[state=checked]:text-blue-1',
        'data-[disabled]:pointer-events-none data-[disabled]:text-gray-8',
        'dark:text-gray-12',
        'dark:data-[highlighted]:bg-gray-4 dark:data-[highlighted]:text-gray-12',
        'dark:data-[state=open]:bg-gray-4 dark:data-[state=open]:text-gray-12',
        'dark:data-[state=checked]:bg-blue-2 dark:data-[state=checked]:text-gray-12',
        'dark:data-[disabled]:text-gray-7',
        'data-[inset]:pl-ui-item-indicator',
        className,
      )}
      {...props}
    >
      {children}
      <MenuChevronRightIcon className="ml-auto size-ui-item-icon text-blue-4 dark:text-blue-6" />
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
        'z-[var(--z-popover)] min-w-ui-context-submenu overflow-hidden rounded-[8px] border border-gray-9 bg-white p-ui-surface shadow-[0_4px_12px_rgba(0,0,0,0.15)] dark:border-gray-5 dark:bg-gray-2 dark:shadow-[0_4px_12px_rgba(0,0,0,0.4)] data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:origin-top data-[side=bottom]:slide-in-from-top-2 data-[side=left]:origin-right data-[side=left]:slide-in-from-right-2 data-[side=right]:origin-left data-[side=right]:slide-in-from-left-2 data-[side=top]:origin-bottom data-[side=top]:slide-in-from-bottom-2',
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
