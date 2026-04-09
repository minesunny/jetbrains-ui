'use client';

import * as React from 'react';
import * as SelectPrimitive from '@radix-ui/react-select';
import { SVG } from '@/registry/components/svg';

import { cn } from '@workspace/ui/lib/utils';

const ComboBox = SelectPrimitive.Root;

const ComboBoxGroup = SelectPrimitive.Group;

const ComboBoxValue = SelectPrimitive.Value;

type ComboBoxTriggerSize = 'fluid' | 'md';

interface ComboBoxTriggerProps
  extends React.ComponentPropsWithoutRef<typeof SelectPrimitive.Trigger> {
  active?: boolean;
  size?: ComboBoxTriggerSize;
}

const ComboBoxTrigger = React.forwardRef<
  React.ComponentRef<typeof SelectPrimitive.Trigger>,
  ComboBoxTriggerProps
>(({ className, children, active = false, size = 'fluid', ...props }, ref) => (
  <SelectPrimitive.Trigger
    ref={ref}
    data-slot="combo-box-trigger"
    data-active={active || undefined}
    className={cn(
      'group inline-flex h-6 items-center justify-between gap-2 overflow-hidden rounded border border-gray-8 bg-white px-0 pl-3 font-sans text-[13px] leading-4 font-medium text-gray-1 outline-none transition-[background-color,border-color,color,border-width] duration-150',
      'hover:border-gray-6 hover:bg-gray-13',
      'active:border-blue-4 active:bg-gray-12',
      'focus-visible:border-2 focus-visible:border-blue-4 focus-visible:pl-[11px]',
      'disabled:cursor-not-allowed disabled:border-gray-10 disabled:bg-gray-12 disabled:text-gray-8',
      '[&>span[data-placeholder]]:text-gray-7',
      'disabled:[&>span[data-placeholder]]:text-gray-8',
      '[&_[data-slot=combo-box-icon]]:border-l-gray-11 [&_[data-slot=combo-box-icon]]:text-gray-6',
      'active:[&_[data-slot=combo-box-icon]]:border-l-blue-4',
      'focus-visible:[&_[data-slot=combo-box-icon]]:border-l-blue-4',
      'disabled:[&_[data-slot=combo-box-icon]]:border-l-gray-10 disabled:[&_[data-slot=combo-box-icon]]:text-gray-8',
      "[&[data-state='open']_[data-slot=combo-box-icon]]:border-l-blue-4",
      "[&[data-active='true']_[data-slot=combo-box-icon]]:border-l-blue-4",
      '[&[data-state=open]]:border-blue-4 [&[data-state=open]]:bg-gray-12',
      '[&[data-active=true]]:border-blue-4 [&[[data-active=true]]:bg-gray-12',
      "[&[aria-invalid='true']]:border-red-9 [&[aria-invalid='true']:hover]:border-red-9",
      "[&[aria-invalid='true']_[data-slot=combo-box-icon]]:border-l-red-9",
      "[&[aria-invalid='true']:active]:border-red-4 [&[aria-invalid='true']:active_[data-slot=combo-box-icon]]:border-l-red-4",
      "[&[aria-invalid='true']:focus-visible]:border-red-4 [&[aria-invalid='true']:focus-visible_[data-slot=combo-box-icon]]:border-l-red-4",
      "[&[aria-invalid='true'][data-state='open']]:border-red-4 [&[aria-invalid='true'][data-state='open']_[data-slot=combo-box-icon]]:border-l-red-4",
      "[&[aria-invalid='true'][data-active='true']]:border-red-4 [&[aria-invalid='true'][data-active='true']_[data-slot=combo-box-icon]]:border-l-red-4",
      '[&[data-state=open]_[data-slot=combo-box-icon]]:rotate-180',
      // dark
      'dark:border-gray-6 dark:bg-gray-3 dark:text-gray-12',
      'dark:hover:border-gray-7 dark:hover:bg-gray-4',
      'dark:active:border-blue-6 dark:active:bg-gray-5',
      'dark:focus-visible:border-blue-6',
      'dark:disabled:border-gray-5 dark:disabled:bg-gray-4 dark:disabled:text-gray-7',
      'dark:[&>span[data-placeholder]]:text-gray-8',
      'dark:[&_[data-slot=combo-box-icon]]:border-l-gray-5 dark:[&_[data-slot=combo-box-icon]]:text-gray-8',
      'dark:active:[&_[data-slot=combo-box-icon]]:border-l-blue-6',
      'dark:focus-visible:[&_[data-slot=combo-box-icon]]:border-l-blue-6',
      'dark:disabled:[&_[data-slot=combo-box-icon]]:border-l-gray-5 dark:disabled:[&_[data-slot=combo-box-icon]]:text-gray-7',
      "dark:[&[data-state='open']_[data-slot=combo-box-icon]]:border-l-blue-6",
      "dark:[&[data-active='true']_[data-slot=combo-box-icon]]:border-l-blue-6",
      'dark:[&[data-state=open]]:border-blue-6 dark:[&[data-state=open]]:bg-gray-5',
      'dark:[&[data-active=true]]:border-blue-6 dark:[&[data-active=true]]:bg-gray-5',
      'dark:[&[aria-invalid=true]]:border-red-3 dark:[&[aria-invalid=true]]:hover:border-red-3',
      'dark:[&[aria-invalid=true]_[data-slot=combo-box-icon]]:border-l-red-3',
      'dark:[&[aria-invalid=true]:active]:border-red-7 dark:[&[aria-invalid=true]:active_[data-slot=combo-box-icon]]:border-l-red-7',
      'dark:[&[aria-invalid=true]:focus-visible]:border-red-7 dark:[&[aria-invalid=true]:focus-visible_[data-slot=combo-box-icon]]:border-l-red-7',
      "dark:[&[aria-invalid=true][data-state='open']]:border-red-7 dark:[&[aria-invalid=true][data-state='open']_[data-slot=combo-box-icon]]:border-l-red-7",
      "dark:[&[aria-invalid=true][data-active='true']]:border-red-7 dark:[&[aria-invalid=true][data-active='true']_[data-slot=combo-box-icon]]:border-l-red-7",
      size === 'md' ? 'w-[224px]' : 'w-full',
      className,
    )}
    {...props}
  >
    {children}
    <SelectPrimitive.Icon
      data-slot="combo-box-icon"
      className="inline-flex h-full w-7 shrink-0 items-center justify-center self-stretch border-l"
    >
      <span className="inline-flex transition-transform duration-150">
        <SVG name="general/general/chevron-down" size="md" />
      </span>
    </SelectPrimitive.Icon>
  </SelectPrimitive.Trigger>
));
ComboBoxTrigger.displayName = 'ComboBoxTrigger';

const ComboBoxContent = React.forwardRef<
  React.ComponentRef<typeof SelectPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Content>
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

const ComboBoxLabel = React.forwardRef<
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
ComboBoxLabel.displayName = 'ComboBoxLabel';

const ComboBoxItem = React.forwardRef<
  React.ComponentRef<typeof SelectPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Item>
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

const ComboBoxSeparator = React.forwardRef<
  React.ComponentRef<typeof SelectPrimitive.Separator>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Separator>
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
