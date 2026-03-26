'use client';

import * as React from 'react';
import * as SelectPrimitive from '@radix-ui/react-select';
import { ChevronDown } from '@/registry/icons/general/general/chevron-down';
import { Checkmark } from '@/registry/icons/general/general/checkmark';

import { cn } from '@workspace/ui/lib/utils';
import './index.css';

const ComboBox = SelectPrimitive.Root;

const ComboBoxGroup = SelectPrimitive.Group;

const ComboBoxValue = SelectPrimitive.Value;

const comboBoxTriggerSizeClassMap = {
  fluid: 'jb-cbx-trigger--size-fluid w-[224px]',
  md: 'jb-cbx-trigger--size-md w-[224px]',
} as const;

type ComboBoxTriggerSize = keyof typeof comboBoxTriggerSizeClassMap;

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
      'jb-cbx-trigger group inline-flex h-6 items-center justify-between gap-2 overflow-hidden rounded border px-0 pl-3 text-[13px] leading-4 font-medium outline-none transition-[background-color,border-color,color,border-width] duration-150 focus-visible:border-2 focus-visible:pl-[11px] disabled:cursor-not-allowed [&[data-state=open]_.jb-cbx-icon]:rotate-180',
      comboBoxTriggerSizeClassMap[size],
      className,
    )}
    {...props}
  >
    {children}
    <SelectPrimitive.Icon
      data-slot="combo-box-icon"
      className="jb-cbx-icon-area inline-flex h-full w-7 shrink-0 items-center justify-center self-stretch border-l"
    >
      <span className="jb-cbx-icon inline-flex transition-transform duration-150">
        <ChevronDown size="md" className="jb-cbx-icon-chevron" />
      </span>
    </SelectPrimitive.Icon>
  </SelectPrimitive.Trigger>
));
ComboBoxTrigger.displayName = SelectPrimitive.Trigger.displayName;

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
        'jb-cbx-content z-[var(--jb-z-popover)] min-w-[224px] overflow-hidden rounded-[8px] border p-1 shadow-[var(--jb-cbx-content-shadow)] data-[position=popper]:data-[side=bottom]:translate-y-1 data-[position=popper]:data-[side=top]:-translate-y-1 data-[position=popper]:data-[side=left]:-translate-x-1 data-[position=popper]:data-[side=right]:translate-x-1',
        className,
      )}
      position={position}
      {...props}
    >
      <SelectPrimitive.Viewport className="jb-cbx-viewport min-w-[224px]">
        {children}
      </SelectPrimitive.Viewport>
    </SelectPrimitive.Content>
  </SelectPrimitive.Portal>
));
ComboBoxContent.displayName = SelectPrimitive.Content.displayName;

const ComboBoxLabel = React.forwardRef<
  React.ComponentRef<typeof SelectPrimitive.Label>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Label>
>(({ className, ...props }, ref) => (
  <SelectPrimitive.Label
    ref={ref}
    className={cn(
      'jb-cbx-label px-2 py-1.5 text-xs leading-4 font-medium',
      className,
    )}
    {...props}
  />
));
ComboBoxLabel.displayName = SelectPrimitive.Label.displayName;

const ComboBoxItem = React.forwardRef<
  React.ComponentRef<typeof SelectPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Item>
>(({ className, children, ...props }, ref) => (
  <SelectPrimitive.Item
    ref={ref}
    className={cn(
      'jb-cbx-item relative flex min-h-6 w-full cursor-pointer select-none items-center rounded-[3px] py-1 pl-7 pr-2 text-xs leading-4 font-normal outline-none transition-[background-color,color] duration-75 data-[disabled]:pointer-events-none data-[disabled]:cursor-not-allowed',
      className,
    )}
    {...props}
  >
    <span className="jb-cbx-item-indicator absolute left-2 inline-flex h-[14px] w-[14px] items-center justify-center">
      <SelectPrimitive.ItemIndicator>
        <Checkmark size="xs" className="jb-cbx-item-check" />
      </SelectPrimitive.ItemIndicator>
    </span>
    <SelectPrimitive.ItemText>{children}</SelectPrimitive.ItemText>
  </SelectPrimitive.Item>
));
ComboBoxItem.displayName = SelectPrimitive.Item.displayName;

const ComboBoxSeparator = React.forwardRef<
  React.ComponentRef<typeof SelectPrimitive.Separator>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Separator>
>(({ className, ...props }, ref) => (
  <SelectPrimitive.Separator
    ref={ref}
    className={cn('jb-cbx-separator -mx-1 my-1 h-px', className)}
    {...props}
  />
));
ComboBoxSeparator.displayName = SelectPrimitive.Separator.displayName;

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
