'use client';

import * as React from 'react';
import * as SelectPrimitive from '@radix-ui/react-select';
import { SVG } from '@/registry/components/svg';

import { cn } from '@workspace/ui/lib/utils';

const Select = SelectPrimitive.Root;

const SelectGroup = SelectPrimitive.Group;

const SelectValue = SelectPrimitive.Value;

type SelectTriggerSize = 'fluid' | 'md';

interface SelectTriggerProps
  extends React.ComponentPropsWithoutRef<typeof SelectPrimitive.Trigger> {
  active?: boolean;
  size?: SelectTriggerSize;
}

const SelectTrigger = React.forwardRef<
  React.ComponentRef<typeof SelectPrimitive.Trigger>,
  SelectTriggerProps
>(({ className, children, active = false, size = 'fluid', ...props }, ref) => (
  <SelectPrimitive.Trigger
    ref={ref}
    data-slot="select-trigger"
    data-active={active || undefined}
    className={cn(
      // Base (same as Input / ComboBoxTrigger)
      'group inline-flex h-7 min-w-0 items-center justify-between gap-2 rounded border border-gray-9 bg-gray-14 px-2 text-default text-gray-1 shadow-none transition-[border-color,box-shadow] duration-150 ease-in-out outline-none dark:border-gray-5 dark:bg-gray-2 dark:text-gray-12',
      // Placeholder
      '[&>span[data-placeholder]]:text-gray-7 dark:[&>span[data-placeholder]]:text-gray-8',
      // Focus
      'focus-visible:border-2 focus-visible:border-blue-4 focus-visible:ring-2 focus-visible:ring-blue-4 focus-visible:ring-offset-0 dark:focus-visible:border-blue-6 dark:focus-visible:ring-blue-6',
      // Open state
      'data-[state=open]:border-2 data-[state=open]:border-blue-4 data-[state=open]:ring-2 data-[state=open]:ring-blue-4 data-[state=open]:ring-offset-0 dark:data-[state=open]:border-blue-6 dark:data-[state=open]:ring-blue-6',
      // Validated (error)
      "[&[aria-invalid='true']]:border-2 [&[aria-invalid='true']]:border-red-9 dark:[&[aria-invalid='true']]:border-red-2",
      "[&[aria-invalid='true']:focus-visible]:border-red-4 [&[aria-invalid='true']:focus-visible]:ring-2 [&[aria-invalid='true']:focus-visible]:ring-red-4 [&[aria-invalid='true']:focus-visible]:ring-offset-0 dark:[&[aria-invalid='true']:focus-visible]:border-red-6 dark:[&[aria-invalid='true']:focus-visible]:ring-red-6",
      "[&[aria-invalid='true'][data-state=open]]:border-red-4 [&[aria-invalid='true'][data-state=open]]:ring-2 [&[aria-invalid='true'][data-state=open]]:ring-red-4 [&[aria-invalid='true'][data-state=open]]:ring-offset-0 dark:[&[aria-invalid='true'][data-state=open]]:border-red-6 dark:[&[aria-invalid='true'][data-state=open]]:ring-red-6",
      // Disabled
      'disabled:cursor-not-allowed disabled:border disabled:border-gray-13 disabled:bg-gray-13 disabled:text-gray-8 dark:disabled:border-gray-5 dark:disabled:bg-gray-2 dark:disabled:text-gray-7',
      'disabled:[&>span[data-placeholder]]:text-gray-8 dark:disabled:[&>span[data-placeholder]]:text-gray-7',
      // Icon
      '[&_[data-slot=select-icon]]:text-gray-6 dark:[&_[data-slot=select-icon]]:text-gray-8',
      'disabled:[&_[data-slot=select-icon]]:text-gray-8 dark:disabled:[&_[data-slot=select-icon]]:text-gray-7',
      '[&[data-state=open]_[data-slot=select-icon]]:rotate-180',
      // Size
      size === 'md' ? 'w-[224px]' : 'w-full',
      className,
    )}
    {...props}
  >
    {children}
    <SelectPrimitive.Icon
      data-slot="select-icon"
      className="inline-flex h-full w-7 shrink-0 items-center justify-center self-stretch"
    >
      <span className="inline-flex transition-transform duration-150">
        <SVG name="general/general/chevron-down" size="md" />
      </span>
    </SelectPrimitive.Icon>
  </SelectPrimitive.Trigger>
));
SelectTrigger.displayName = 'SelectTrigger';

const SelectContent = React.forwardRef<
  React.ComponentRef<typeof SelectPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Content>
>(({ className, children, position = 'popper', ...props }, ref) => (
  <SelectPrimitive.Portal>
    <SelectPrimitive.Content
      ref={ref}
      data-slot="select-content"
      className={cn(
        'z-[var(--z-popover)] w-[164px] overflow-hidden rounded-[8px] border-[0.5px] border-gray-9 bg-gray-14 p-0 shadow-[var(--shadow-popover)] data-[position=popper]:data-[side=bottom]:translate-y-1 data-[position=popper]:data-[side=top]:-translate-y-1 data-[position=popper]:data-[side=left]:-translate-x-1 data-[position=popper]:data-[side=right]:translate-x-1',
        'dark:border-gray-3 dark:bg-gray-2 dark:shadow-[var(--shadow-popover-dark)]',
        className,
      )}
      position={position}
      {...props}
    >
      <SelectPrimitive.Viewport className="p-1">
        {children}
      </SelectPrimitive.Viewport>
    </SelectPrimitive.Content>
  </SelectPrimitive.Portal>
));
SelectContent.displayName = 'SelectContent';

const SelectItem = React.forwardRef<
  React.ComponentRef<typeof SelectPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Item>
>(({ className, children, ...props }, ref) => (
  <SelectPrimitive.Item
    ref={ref}
    className={cn(
      'relative flex h-6 w-full cursor-pointer select-none items-center rounded py-0 pl-2 pr-2 text-default text-gray-1 outline-none transition-[background-color] duration-75 data-[highlighted]:bg-blue-11 data-[state=checked]:font-medium data-[disabled]:pointer-events-none data-[disabled]:cursor-not-allowed data-[disabled]:text-gray-8 dark:text-gray-12 dark:data-[highlighted]:bg-blue-2 dark:data-[disabled]:text-gray-7',
      className,
    )}
    {...props}
  >
    <span className="absolute right-2 inline-flex size-3.5 items-center justify-center">
      <SelectPrimitive.ItemIndicator>
        <SVG name="general/general/checkmark" size="xs" />
      </SelectPrimitive.ItemIndicator>
    </span>
    <SelectPrimitive.ItemText>{children}</SelectPrimitive.ItemText>
  </SelectPrimitive.Item>
));
SelectItem.displayName = 'SelectItem';

const SelectLabel = React.forwardRef<
  React.ComponentRef<typeof SelectPrimitive.Label>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Label>
>(({ className, ...props }, ref) => (
  <SelectPrimitive.Label
    ref={ref}
    className={cn(
      'px-2 py-1.5 text-xs leading-4 font-medium text-gray-6 dark:text-gray-8',
      className,
    )}
    {...props}
  />
));
SelectLabel.displayName = 'SelectLabel';

const SelectSeparator = React.forwardRef<
  React.ComponentRef<typeof SelectPrimitive.Separator>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Separator>
>(({ className, ...props }, ref) => (
  <SelectPrimitive.Separator
    ref={ref}
    className={cn('-mx-1 my-1 h-px bg-gray-12 dark:bg-gray-3', className)}
    {...props}
  />
));
SelectSeparator.displayName = 'SelectSeparator';

export {
  Select,
  SelectGroup,
  SelectValue,
  SelectTrigger,
  SelectContent,
  SelectItem,
  SelectLabel,
  SelectSeparator,
};
