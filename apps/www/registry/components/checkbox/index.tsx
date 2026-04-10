'use client';

import * as React from 'react';
import * as CheckboxPrimitive from '@radix-ui/react-checkbox';
import { cn } from '@workspace/ui/lib/utils';
import { SVG } from '@/registry/components/svg';

function CheckboxIcon({ state }: { state: boolean | 'indeterminate' }) {
  if (state === 'indeterminate') {
    return (
      <SVG
        name="general/actions/unselectAll"
        size="sm"
        className="size-3.5 [&_path:first-of-type]:hidden [&_path:last-of-type]:stroke-current"
        aria-hidden="true"
      />
    );
  }
  return (
    <SVG
      name="general/actions/checked"
      size="sm"
      className="size-3.5 [&_path]:stroke-current"
      aria-hidden="true"
    />
  );
}

function Checkbox({
  className,
  ...props
}: React.ComponentProps<typeof CheckboxPrimitive.Root>) {
  return (
    <CheckboxPrimitive.Root
      data-slot="checkbox"
      className={cn(
        'group relative inline-flex size-4 shrink-0 items-center justify-center rounded-[3px] border outline-none transition-[background-color,border-color,color,box-shadow] duration-150 ease-in-out',
        // light · unchecked
        'border-gray-8 bg-white text-gray-14',
        'hover:border-gray-8 hover:bg-white',
        'focus-visible:border-blue-4 focus-visible:ring-2 focus-visible:ring-blue-4',
        'disabled:pointer-events-none disabled:cursor-not-allowed disabled:border-gray-11 disabled:bg-gray-13 disabled:text-gray-13',
        "[&[aria-invalid='true']]:border-red-4 [&[aria-invalid='true']:focus-visible]:ring-red-4",
        // dark · unchecked
        'dark:border-gray-8 dark:bg-transparent dark:text-gray-14',
        'dark:hover:border-gray-8 dark:hover:bg-transparent',
        'dark:focus-visible:ring-blue-6',
        'dark:disabled:border-gray-11 dark:disabled:bg-gray-3 dark:disabled:text-gray-13',
        "dark:[&[aria-invalid='true']]:border-red-4 dark:[&[aria-invalid='true']:focus-visible]:ring-red-4",
        // light · checked
        'data-[state=checked]:border-blue-4 data-[state=checked]:bg-blue-4 data-[state=checked]:text-gray-14',
        'data-[state=checked]:hover:border-blue-3 data-[state=checked]:hover:bg-blue-3',
        'data-[state=checked]:focus-visible:border-blue-4 data-[state=checked]:focus-visible:ring-blue-4',
        'data-[state=checked]:disabled:border-gray-9 data-[state=checked]:disabled:bg-gray-9 data-[state=checked]:disabled:text-gray-14',
        "data-[state=checked]:[&[aria-invalid='true']]:border-red-4 data-[state=checked]:[&[aria-invalid='true']:focus-visible]:ring-red-4",
        // dark · checked
        'dark:data-[state=checked]:border-blue-4 dark:data-[state=checked]:bg-blue-6 dark:data-[state=checked]:text-gray-14',
        'dark:data-[state=checked]:hover:border-blue-3 dark:data-[state=checked]:hover:bg-blue-5',
        'dark:data-[state=checked]:focus-visible:ring-blue-6',
        'dark:data-[state=checked]:disabled:border-gray-9 dark:data-[state=checked]:disabled:bg-gray-3 dark:data-[state=checked]:disabled:text-gray-14',
        "dark:data-[state=checked]:[&[aria-invalid='true']]:border-red-4 dark:data-[state=checked]:[&[aria-invalid='true']:focus-visible]:ring-red-4",
        // light · indeterminate
        'data-[state=indeterminate]:border-blue-4 data-[state=indeterminate]:bg-blue-4 data-[state=indeterminate]:text-gray-14',
        'data-[state=indeterminate]:hover:border-blue-3 data-[state=indeterminate]:hover:bg-blue-3',
        'data-[state=indeterminate]:focus-visible:border-blue-4 data-[state=indeterminate]:focus-visible:ring-blue-4',
        'data-[state=indeterminate]:disabled:border-gray-9 data-[state=indeterminate]:disabled:bg-gray-9 data-[state=indeterminate]:disabled:text-gray-14',
        "data-[state=indeterminate]:[&[aria-invalid='true']]:border-red-4 data-[state=indeterminate]:[&[aria-invalid='true']:focus-visible]:ring-red-4",
        // dark · indeterminate
        'dark:data-[state=indeterminate]:border-blue-4 dark:data-[state=indeterminate]:bg-blue-6 dark:data-[state=indeterminate]:text-gray-14',
        'dark:data-[state=indeterminate]:hover:border-blue-3 dark:data-[state=indeterminate]:hover:bg-blue-5',
        'dark:data-[state=indeterminate]:focus-visible:ring-blue-6',
        'dark:data-[state=indeterminate]:disabled:border-gray-9 dark:data-[state=indeterminate]:disabled:bg-gray-3 dark:data-[state=indeterminate]:disabled:text-gray-14',
        "dark:data-[state=indeterminate]:[&[aria-invalid='true']]:border-red-4 dark:data-[state=indeterminate]:[&[aria-invalid='true']:focus-visible]:ring-red-4",
        className,
      )}
      {...props}
    >
      <CheckboxPrimitive.Indicator
        data-slot="checkbox-indicator"
        className="pointer-events-none absolute inset-0 flex items-center justify-center"
      >
        <CheckboxIcon state={props.checked as boolean | 'indeterminate'} />
      </CheckboxPrimitive.Indicator>
    </CheckboxPrimitive.Root>
  );
}

export { Checkbox };
