'use client';

import { forwardRef } from 'react';
import type { ComponentRef, ComponentPropsWithoutRef } from 'react';
import * as SelectPrimitive from '@radix-ui/react-select';
import { SVG } from '@/registry/components/svg';

import { cn } from '@workspace/ui/lib/utils';

const ComboBox = SelectPrimitive.Root;

const ComboBoxGroup = SelectPrimitive.Group;

const ComboBoxValue = SelectPrimitive.Value;

type ComboBoxTriggerSize = 'fluid' | 'md';

interface ComboBoxTriggerProps
  extends ComponentPropsWithoutRef<typeof SelectPrimitive.Trigger> {
  active?: boolean;
  size?: ComboBoxTriggerSize;
}

const ComboBoxTrigger = forwardRef<
  ComponentRef<typeof SelectPrimitive.Trigger>,
  ComboBoxTriggerProps
>(({ className, children, active = false, size = 'fluid', ...props }, ref) => (
  <SelectPrimitive.Trigger
    ref={ref}
    data-slot="combo-box-trigger"
    data-active={active || undefined}
    className={cn(
      // Base (same as Input)
      'group inline-flex h-7 min-w-0 items-center justify-between gap-2 rounded border border-gray-9 bg-gray-14 px-2 text-default text-gray-1 shadow-none transition-[border-color,box-shadow] duration-150 ease-in-out outline-none dark:border-gray-5 dark:bg-gray-2 dark:text-gray-12',
      // Placeholder
      '[&>span[data-placeholder]]:text-gray-7 dark:[&>span[data-placeholder]]:text-gray-8',
      // Focus (same as Input)
      'focus-visible:border-2 focus-visible:border-blue-4 focus-visible:ring-2 focus-visible:ring-blue-4 focus-visible:ring-offset-0 dark:focus-visible:border-blue-6 dark:focus-visible:ring-blue-6',
      // Open state (same visual as focus)
      'data-[state=open]:border-2 data-[state=open]:border-blue-4 data-[state=open]:ring-2 data-[state=open]:ring-blue-4 data-[state=open]:ring-offset-0 dark:data-[state=open]:border-blue-6 dark:data-[state=open]:ring-blue-6',
      // Validated (error, unfocused) (same as Input)
      "[&[aria-invalid='true']]:border-2 [&[aria-invalid='true']]:border-red-9 dark:[&[aria-invalid='true']]:border-red-2",
      // Validated + focused (same as Input)
      "[&[aria-invalid='true']:focus-visible]:border-red-4 [&[aria-invalid='true']:focus-visible]:ring-2 [&[aria-invalid='true']:focus-visible]:ring-red-4 [&[aria-invalid='true']:focus-visible]:ring-offset-0 dark:[&[aria-invalid='true']:focus-visible]:border-red-6 dark:[&[aria-invalid='true']:focus-visible]:ring-red-6",
      // Validated + open
      "[&[aria-invalid='true'][data-state=open]]:border-red-4 [&[aria-invalid='true'][data-state=open]]:ring-2 [&[aria-invalid='true'][data-state=open]]:ring-red-4 [&[aria-invalid='true'][data-state=open]]:ring-offset-0 dark:[&[aria-invalid='true'][data-state=open]]:border-red-6 dark:[&[aria-invalid='true'][data-state=open]]:ring-red-6",
      // Disabled (same as Input)
      'disabled:cursor-not-allowed disabled:border disabled:border-gray-13 disabled:bg-gray-13 disabled:text-gray-8 dark:disabled:border-gray-5 dark:disabled:bg-gray-2 dark:disabled:text-gray-7',
      'disabled:[&>span[data-placeholder]]:text-gray-8 dark:disabled:[&>span[data-placeholder]]:text-gray-7',
      // Icon
      '[&_[data-slot=combo-box-icon]]:text-gray-6 dark:[&_[data-slot=combo-box-icon]]:text-gray-8',
      'disabled:[&_[data-slot=combo-box-icon]]:text-gray-8 dark:disabled:[&_[data-slot=combo-box-icon]]:text-gray-7',
      '[&[data-state=open]_[data-slot=combo-box-icon]]:rotate-180',
      // Size
      size === 'md' ? 'w-[224px]' : 'w-full',
      className,
    )}
    {...props}
  >
    {children}
    <SelectPrimitive.Icon
      data-slot="combo-box-icon"
      className="inline-flex h-full w-7 shrink-0 items-center justify-center self-stretch"
    >
      <span className="inline-flex transition-transform duration-150">
        <SVG name="general/general/chevron-down" size="md" />
      </span>
    </SelectPrimitive.Icon>
  </SelectPrimitive.Trigger>
));
ComboBoxTrigger.displayName = 'ComboBoxTrigger';

const ComboBoxContent = forwardRef<
  ComponentRef<typeof SelectPrimitive.Content>,
  ComponentPropsWithoutRef<typeof SelectPrimitive.Content>
>(({ className, children, position = 'popper', ...props }, ref) => (
  <SelectPrimitive.Portal>
    <SelectPrimitive.Content
      ref={ref}
      data-slot="combo-box-content"
      data-position={position}
      className={cn(
        'z-[var(--z-popover)] min-w-[224px] overflow-hidden rounded-[8px] border border-gray-9 bg-white p-1 shadow-[0_4px_12px_rgba(0,0,0,0.15)] data-[position=popper]:data-[side=bottom]:translate-y-1 data-[position=popper]:data-[side=top]:-translate-y-1 data-[position=popper]:data-[side=left]:-translate-x-1 data-[position=popper]:data-[side=right]:translate-x-1',
        'dark:border-gray-5 dark:bg-gray-2 dark:shadow-[0_4px_12px_rgba(0,0,0,0.4)]',
        className,
      )}
      position={position}
      {...props}
    >
      <SelectPrimitive.Viewport className="min-w-[224px]">
        {children}
      </SelectPrimitive.Viewport>
    </SelectPrimitive.Content>
  </SelectPrimitive.Portal>
));
ComboBoxContent.displayName = 'ComboBoxContent';

const ComboBoxLabel = forwardRef<
  ComponentRef<typeof SelectPrimitive.Label>,
  ComponentPropsWithoutRef<typeof SelectPrimitive.Label>
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
ComboBoxLabel.displayName = 'ComboBoxLabel';

const ComboBoxItem = forwardRef<
  ComponentRef<typeof SelectPrimitive.Item>,
  ComponentPropsWithoutRef<typeof SelectPrimitive.Item>
>(({ className, children, ...props }, ref) => (
  <SelectPrimitive.Item
    ref={ref}
    className={cn(
      'relative flex min-h-6 w-full cursor-pointer select-none items-center rounded-[3px] bg-transparent py-1 pl-7 pr-2 text-xs leading-4 font-normal text-gray-1 outline-none transition-[background-color,color] duration-75',
      'data-[highlighted]:bg-gray-12 data-[highlighted]:text-gray-1',
      'data-[state=checked]:bg-blue-12 data-[state=checked]:text-blue-1',
      'data-[disabled]:pointer-events-none data-[disabled]:cursor-not-allowed data-[disabled]:text-gray-8',
      'dark:text-gray-12',
      'dark:data-[highlighted]:bg-gray-4 dark:data-[highlighted]:text-gray-12',
      'dark:data-[state=checked]:bg-blue-2 dark:data-[state=checked]:text-gray-12',
      'dark:data-[disabled]:text-gray-7',
      className,
    )}
    {...props}
  >
    <span className="absolute left-2 inline-flex size-[14px] items-center justify-center text-blue-4 dark:text-blue-6">
      <SelectPrimitive.ItemIndicator>
        <SVG name="general/general/checkmark" size="xs" />
      </SelectPrimitive.ItemIndicator>
    </span>
    <SelectPrimitive.ItemText>{children}</SelectPrimitive.ItemText>
  </SelectPrimitive.Item>
));
ComboBoxItem.displayName = 'ComboBoxItem';

const ComboBoxSeparator = forwardRef<
  ComponentRef<typeof SelectPrimitive.Separator>,
  ComponentPropsWithoutRef<typeof SelectPrimitive.Separator>
>(({ className, ...props }, ref) => (
  <SelectPrimitive.Separator
    ref={ref}
    className={cn('-mx-1 my-1 h-px bg-gray-11 dark:bg-gray-5', className)}
    {...props}
  />
));
ComboBoxSeparator.displayName = 'ComboBoxSeparator';

export {
  ComboBox,
  ComboBoxGroup,
  ComboBoxValue,
  ComboBoxTrigger,
  ComboBoxContent,
  ComboBoxLabel,
  ComboBoxItem,
  ComboBoxSeparator,
};
