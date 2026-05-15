'use client';

import type { ComponentProps } from 'react';
import { ContextMenu as ContextMenuPrimitive } from 'radix-ui';

import { cn } from '@workspace/ui/lib/utils';
import { SVG } from '@/registry/components/svg';

function MenuCheckIcon({ className, ...props }: ComponentProps<'svg'>) {
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

function MenuChevronRightIcon({ className, ...props }: ComponentProps<'svg'>) {
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
}: ComponentProps<typeof ContextMenuPrimitive.Root>) {
  return <ContextMenuPrimitive.Root data-slot="context-menu" {...props} />;
}

function ContextMenuTrigger({
  className,
  asChild,
  ...props
}: ComponentProps<typeof ContextMenuPrimitive.Trigger>) {
  return (
    <ContextMenuPrimitive.Trigger
      data-slot="context-menu-trigger"
      asChild={asChild}
      className={cn(
        !asChild &&
          'group inline-flex h-7 min-w-0 items-center justify-between gap-2 rounded border border-gray-9 bg-gray-14 px-2 text-default text-gray-1 shadow-none transition-[border-color,box-shadow] duration-150 ease-in-out outline-none dark:border-gray-5 dark:bg-gray-2 dark:text-gray-12 [&>span[data-placeholder]]:text-gray-7 dark:[&>span[data-placeholder]]:text-gray-8 focus-visible:border-2 focus-visible:border-blue-4 focus-visible:ring-2 focus-visible:ring-blue-4 focus-visible:ring-offset-0 dark:focus-visible:border-blue-6 dark:focus-visible:ring-blue-6 data-[state=open]:border-2 data-[state=open]:border-blue-4 data-[state=open]:ring-2 data-[state=open]:ring-blue-4 data-[state=open]:ring-offset-0 dark:data-[state=open]:border-blue-6 dark:data-[state=open]:ring-blue-6 disabled:cursor-not-allowed disabled:border disabled:border-gray-13 disabled:bg-gray-13 disabled:text-gray-8 dark:disabled:border-gray-5 dark:disabled:bg-gray-2 dark:disabled:text-gray-7',
        className,
      )}
      {...props}
    />
  );
}

function ContextMenuPortal({
  ...props
}: ComponentProps<typeof ContextMenuPrimitive.Portal>) {
  return (
    <ContextMenuPrimitive.Portal data-slot="context-menu-portal" {...props} />
  );
}

function ContextMenuContent({
  className,
  ...props
}: ComponentProps<typeof ContextMenuPrimitive.Content>) {
  return (
    <ContextMenuPortal>
      <ContextMenuPrimitive.Content
        data-slot="context-menu-content"
        className={cn(
          'z-[var(--z-popover)] w-[293px] overflow-hidden rounded-[8px] border-[0.5px] border-gray-9 bg-gray-14 p-1 shadow-[var(--shadow-popover)] dark:border-gray-3 dark:bg-gray-2 dark:shadow-[var(--shadow-popover-dark)] data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:origin-top data-[side=bottom]:slide-in-from-top-2 data-[side=left]:origin-right data-[side=left]:slide-in-from-right-2 data-[side=right]:origin-left data-[side=right]:slide-in-from-left-2 data-[side=top]:origin-bottom data-[side=top]:slide-in-from-bottom-2',
          className,
        )}
        {...props}
      />
    </ContextMenuPortal>
  );
}

function ContextMenuGroup({
  ...props
}: ComponentProps<typeof ContextMenuPrimitive.Group>) {
  return (
    <ContextMenuPrimitive.Group data-slot="context-menu-group" {...props} />
  );
}

function ContextMenuItem({
  className,
  children,
  inset,
  icon,
  variant = 'default',
  ...props
}: ComponentProps<typeof ContextMenuPrimitive.Item> & {
  inset?: boolean;
  icon?: string;
  variant?: 'default' | 'destructive';
}) {
  return (
    <ContextMenuPrimitive.Item
      data-slot="context-menu-item"
      data-inset={inset || undefined}
      data-variant={variant}
      className={cn(
        'relative flex h-6 w-full cursor-default select-none items-center gap-2 rounded bg-transparent px-2 py-1 text-default text-gray-1 outline-none transition-[background-color] duration-75',
        'data-[highlighted]:bg-blue-11 data-[highlighted]:text-gray-1',
        'data-[state=open]:bg-blue-11 data-[state=open]:text-gray-1',
        'data-[disabled]:pointer-events-none data-[disabled]:cursor-not-allowed data-[disabled]:text-gray-8',
        'dark:text-gray-12 dark:data-[highlighted]:bg-blue-2 dark:data-[highlighted]:text-gray-12 dark:data-[state=open]:bg-blue-2 dark:data-[state=open]:text-gray-12 dark:data-[disabled]:text-gray-7',
        'data-[inset]:pl-7',
        'data-[variant=destructive]:text-red-3 data-[variant=destructive]:data-[highlighted]:bg-red-10',
        'dark:data-[variant=destructive]:text-red-7',
        className,
      )}
      {...props}
    >
      {icon && (
        <span className="inline-flex size-4 shrink-0 items-center justify-center">
          <SVG name={icon} size="md" />
        </span>
      )}
      {children}
    </ContextMenuPrimitive.Item>
  );
}

function ContextMenuCheckboxItem({
  className,
  children,
  checked,
  ...props
}: ComponentProps<typeof ContextMenuPrimitive.CheckboxItem>) {
  return (
    <ContextMenuPrimitive.CheckboxItem
      data-slot="context-menu-checkbox-item"
      checked={checked}
      className={cn(
        'relative flex h-6 w-full cursor-default select-none items-center gap-2 rounded bg-transparent py-1 pl-7 pr-2 text-default text-gray-1 outline-none transition-[background-color] duration-75',
        'data-[highlighted]:bg-blue-11 data-[highlighted]:text-gray-1',
        'data-[state=open]:bg-blue-11 data-[state=open]:text-gray-1',
        'data-[state=checked]:bg-blue-12 data-[state=checked]:text-blue-1',
        'data-[disabled]:pointer-events-none data-[disabled]:cursor-not-allowed data-[disabled]:text-gray-8',
        'dark:text-gray-12 dark:data-[highlighted]:bg-blue-2 dark:data-[highlighted]:text-gray-12 dark:data-[state=open]:bg-blue-2 dark:data-[state=open]:text-gray-12 dark:data-[state=checked]:bg-blue-2 dark:data-[state=checked]:text-gray-12 dark:data-[disabled]:text-gray-7',
        className,
      )}
      {...props}
    >
      <span className="absolute left-2 inline-flex size-[14px] items-center justify-center text-blue-4 dark:text-blue-6">
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
}: ComponentProps<typeof ContextMenuPrimitive.RadioGroup>) {
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
}: ComponentProps<typeof ContextMenuPrimitive.RadioItem>) {
  return (
    <ContextMenuPrimitive.RadioItem
      data-slot="context-menu-radio-item"
      className={cn(
        'relative flex h-6 w-full cursor-default select-none items-center gap-2 rounded bg-transparent py-1 pl-7 pr-2 text-default text-gray-1 outline-none transition-[background-color] duration-75',
        'data-[highlighted]:bg-blue-11 data-[highlighted]:text-gray-1',
        'data-[state=open]:bg-blue-11 data-[state=open]:text-gray-1',
        'data-[state=checked]:bg-blue-12 data-[state=checked]:text-blue-1',
        'data-[disabled]:pointer-events-none data-[disabled]:cursor-not-allowed data-[disabled]:text-gray-8',
        'dark:text-gray-12 dark:data-[highlighted]:bg-blue-2 dark:data-[highlighted]:text-gray-12 dark:data-[state=open]:bg-blue-2 dark:data-[state=open]:text-gray-12 dark:data-[state=checked]:bg-blue-2 dark:data-[state=checked]:text-gray-12 dark:data-[disabled]:text-gray-7',
        className,
      )}
      {...props}
    >
      <span className="absolute left-2 inline-flex size-[14px] items-center justify-center text-blue-4 dark:text-blue-6">
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
}: ComponentProps<typeof ContextMenuPrimitive.Label> & {
  inset?: boolean;
}) {
  return (
    <ContextMenuPrimitive.Label
      data-slot="context-menu-label"
      data-inset={inset || undefined}
      className={cn(
        'px-2 py-1.5 text-xs leading-4 font-medium text-gray-6 dark:text-gray-8 data-[inset]:pl-7',
        className,
      )}
      {...props}
    />
  );
}

function ContextMenuSeparator({
  className,
  ...props
}: ComponentProps<typeof ContextMenuPrimitive.Separator>) {
  return (
    <ContextMenuPrimitive.Separator
      data-slot="context-menu-separator"
      className={cn('-mx-1 my-1 h-px bg-gray-12 dark:bg-gray-3', className)}
      {...props}
    />
  );
}

function ContextMenuShortcut({ className, ...props }: ComponentProps<'span'>) {
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
}: ComponentProps<typeof ContextMenuPrimitive.Sub>) {
  return <ContextMenuPrimitive.Sub data-slot="context-menu-sub" {...props} />;
}

function ContextMenuSubTrigger({
  className,
  inset,
  children,
  ...props
}: ComponentProps<typeof ContextMenuPrimitive.SubTrigger> & {
  inset?: boolean;
}) {
  return (
    <ContextMenuPrimitive.SubTrigger
      data-slot="context-menu-sub-trigger"
      data-inset={inset || undefined}
      className={cn(
        'relative flex h-6 w-full cursor-default select-none items-center gap-2 rounded bg-transparent pl-2 py-1 pr-1.5 text-default text-gray-1 outline-none transition-[background-color] duration-75',
        'data-[highlighted]:bg-blue-11 data-[highlighted]:text-gray-1',
        'data-[state=open]:bg-blue-11 data-[state=open]:text-gray-1',
        'data-[disabled]:pointer-events-none data-[disabled]:text-gray-8',
        'dark:text-gray-12 dark:data-[highlighted]:bg-blue-2 dark:data-[highlighted]:text-gray-12 dark:data-[state=open]:bg-blue-2 dark:data-[state=open]:text-gray-12 dark:data-[disabled]:text-gray-7',
        'data-[inset]:pl-7',
        className,
      )}
      {...props}
    >
      {children}
      <MenuChevronRightIcon className="ml-auto size-[14px] text-blue-4 dark:text-blue-6" />
    </ContextMenuPrimitive.SubTrigger>
  );
}

function ContextMenuSubContent({
  className,
  sideOffset = 8,
  ...props
}: ComponentProps<typeof ContextMenuPrimitive.SubContent>) {
  return (
    <ContextMenuPrimitive.SubContent
      data-slot="context-menu-sub-content"
      className={cn(
        'z-[var(--z-popover)] min-w-[196px] overflow-hidden rounded-[8px] border-[0.5px] border-gray-9 bg-gray-14 p-1 shadow-[var(--shadow-popover)] dark:border-gray-3 dark:bg-gray-2 dark:shadow-[var(--shadow-popover-dark)] data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:origin-top data-[side=bottom]:slide-in-from-top-2 data-[side=left]:origin-right data-[side=left]:slide-in-from-right-2 data-[side=right]:origin-left data-[side=right]:slide-in-from-left-2 data-[side=top]:origin-bottom data-[side=top]:slide-in-from-bottom-2',
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
