'use client';

import type { ComponentProps } from 'react';

import { cn } from '@workspace/ui/lib/utils';

function Input({
  className,
  type = 'text',
  ...props
}: ComponentProps<'input'>) {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(
        'flex h-7 w-[224px] min-w-0 rounded border border-gray-9 bg-gray-14 px-2 text-default text-gray-1 shadow-none transition-[border-color,box-shadow] duration-150 ease-in-out outline-none placeholder:text-gray-7 dark:border-gray-5 dark:bg-gray-2 dark:text-gray-12 dark:placeholder:text-gray-8',
        // Focus
        'focus-visible:border-2 focus-visible:border-blue-4 focus-visible:ring-2 focus-visible:ring-blue-4 focus-visible:ring-offset-0 dark:focus-visible:border-blue-6 dark:focus-visible:ring-blue-6',
        // Validated (error, unfocused)
        "[&[aria-invalid='true']]:border-2 [&[aria-invalid='true']]:border-red-9 dark:[&[aria-invalid='true']]:border-red-2",
        // Validated + focused
        "[&[aria-invalid='true']:focus-visible]:border-red-4 [&[aria-invalid='true']:focus-visible]:ring-2 [&[aria-invalid='true']:focus-visible]:ring-red-4 [&[aria-invalid='true']:focus-visible]:ring-offset-0 dark:[&[aria-invalid='true']:focus-visible]:border-red-6 dark:[&[aria-invalid='true']:focus-visible]:ring-red-6",
        // Disabled
        'disabled:cursor-not-allowed disabled:border disabled:border-gray-13 disabled:bg-gray-13 disabled:text-gray-8 disabled:placeholder:text-gray-8 dark:disabled:border-gray-5 dark:disabled:bg-gray-2 dark:disabled:text-gray-7 dark:disabled:placeholder:text-gray-7',
        className,
      )}
      {...props}
    />
  );
}

export { Input };
