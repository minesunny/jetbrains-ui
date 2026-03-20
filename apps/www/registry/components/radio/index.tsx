'use client';

import * as React from 'react';
import * as RadioPrimitive from '@radix-ui/react-radio-group';

import { cn } from '@workspace/ui/lib/utils';
import './index.css';

const RadioGroup = React.forwardRef<
  React.ComponentRef<typeof RadioPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof RadioPrimitive.Root>
>(({ className, ...props }, ref) => (
  <RadioPrimitive.Root
    ref={ref}
    className={cn('jb-radio-group grid gap-3', className)}
    {...props}
  />
));
RadioGroup.displayName = RadioPrimitive.Root.displayName;

const RadioGroupItem = React.forwardRef<
  React.ComponentRef<typeof RadioPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof RadioPrimitive.Item>
>(({ className, children, ...props }, ref) => (
  <RadioPrimitive.Item
    ref={ref}
    className={cn(
      'jb-radio-item inline-flex size-5 shrink-0 items-center justify-center rounded-full border outline-none transition-[background-color,border-color,box-shadow] duration-150 ease-in-out disabled:pointer-events-none disabled:cursor-not-allowed',
      className,
    )}
    {...props}
  >
    {children}
    <RadioPrimitive.Indicator
      className={cn('jb-radio-indicator size-2.5 rounded-full')}
    />
  </RadioPrimitive.Item>
));
RadioGroupItem.displayName = RadioPrimitive.Item.displayName;

export { RadioGroup, RadioGroupItem };
