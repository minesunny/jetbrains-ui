'use client';

import * as React from 'react';
import * as RadioPrimitive from '@radix-ui/react-radio-group';

import { cn } from '@workspace/ui/lib/utils';

const RadioGroup = React.forwardRef<
  React.ComponentRef<typeof RadioPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof RadioPrimitive.Root>
>(({ className, ...props }, ref) => (
  <RadioPrimitive.Root
    ref={ref}
    className={cn('radio-group grid gap-ui-actions', className)}
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
      'group inline-flex size-5 shrink-0 items-center justify-center rounded-full border border-gray-8 bg-white outline-none transition-[background-color,border-color,color,box-shadow] duration-150 ease-in-out',
      'hover:border-gray-6 hover:bg-gray-13',
      'active:border-gray-5 active:bg-gray-12',
      'focus-visible:ring-2 focus-visible:ring-blue-4',
      'disabled:pointer-events-none disabled:cursor-not-allowed disabled:border-gray-10 disabled:bg-gray-12',
      "[&[aria-invalid='true']]:border-red-4 [&[aria-invalid='true']]:bg-white [&[aria-invalid='true']:focus-visible]:ring-red-4",
      'dark:border-gray-6 dark:bg-gray-3',
      'dark:hover:border-gray-7 dark:hover:bg-gray-4',
      'dark:active:border-gray-8 dark:active:bg-gray-5',
      'dark:focus-visible:ring-blue-6',
      'dark:disabled:border-gray-5 dark:disabled:bg-gray-4',
      "dark:[&[aria-invalid='true']]:border-red-7 dark:[&[aria-invalid='true']]:bg-gray-3 dark:[&[aria-invalid='true']:focus-visible]:ring-red-7",
      // checked
      'data-[state=checked]:border-blue-4 data-[state=checked]:bg-white data-[state=checked]:text-blue-4',
      'data-[state=checked]:hover:border-blue-3 data-[state=checked]:hover:bg-gray-13 data-[state=checked]:hover:text-blue-3',
      'data-[state=checked]:active:border-blue-2 data-[state=checked]:active:bg-gray-12 data-[state=checked]:active:text-blue-2',
      'data-[state=checked]:focus-visible:ring-blue-4',
      'data-[state=checked]:disabled:border-gray-10 data-[state=checked]:disabled:bg-gray-12 data-[state=checked]:disabled:text-gray-8',
      "data-[state=checked]:[&[aria-invalid='true']]:border-red-4 data-[state=checked]:[&[aria-invalid='true']]:bg-white data-[state=checked]:[&[aria-invalid='true']]:text-red-4 data-[state=checked]:[&[aria-invalid='true']:focus-visible]:ring-red-4",
      'dark:data-[state=checked]:border-blue-6 dark:data-[state=checked]:bg-gray-3 dark:data-[state=checked]:text-blue-6',
      'dark:data-[state=checked]:hover:border-blue-5 dark:data-[state=checked]:hover:bg-gray-4 dark:data-[state=checked]:hover:text-blue-5',
      'dark:data-[state=checked]:active:border-blue-4 dark:data-[state=checked]:active:bg-gray-5 dark:data-[state=checked]:active:text-blue-4',
      'dark:data-[state=checked]:focus-visible:ring-blue-6',
      'dark:data-[state=checked]:disabled:border-gray-5 dark:data-[state=checked]:disabled:bg-gray-4 dark:data-[state=checked]:disabled:text-gray-7',
      "dark:data-[state=checked]:[&[aria-invalid='true']]:border-red-7 dark:data-[state=checked]:[&[aria-invalid='true']]:bg-gray-3 dark:data-[state=checked]:[&[aria-invalid='true']]:text-red-7 dark:data-[state=checked]:[&[aria-invalid='true']:focus-visible]:ring-red-7",
      className,
    )}
    {...props}
  >
    {children}
    <RadioPrimitive.Indicator
      className={cn('size-2.5 rounded-full bg-current')}
    />
  </RadioPrimitive.Item>
));
RadioGroupItem.displayName = RadioPrimitive.Item.displayName;

export { RadioGroup, RadioGroupItem };
