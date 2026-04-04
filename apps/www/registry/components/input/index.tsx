'use client';

import * as React from 'react';

import { cn } from '@workspace/ui/lib/utils';

function Input({
  className,
  type = 'text',
  ...props
}: React.ComponentProps<'input'>) {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(
        "flex h-7 w-[240px] min-w-0 rounded-[4px] border border-gray-8 dark:border-gray-6 bg-white dark:bg-gray-3 px-2 py-1 text-xs leading-4 font-normal text-gray-1 dark:text-gray-12 outline-none transition-[background-color,border-color,color,box-shadow] duration-150 ease-in-out placeholder:text-gray-7 dark:placeholder:text-gray-8 hover:bg-gray-13 dark:hover:bg-gray-4 hover:border-gray-6 dark:hover:border-gray-7 focus-visible:border-blue-4 dark:focus-visible:border-blue-6 focus-visible:ring-2 focus-visible:ring-blue-4 dark:focus-visible:ring-blue-6 [&[aria-invalid='true']]:border-red-9 dark:[&[aria-invalid='true']]:border-red-3 [&[aria-invalid='true']:focus-visible]:ring-red-4 dark:[&[aria-invalid='true']:focus-visible]:ring-red-3 disabled:cursor-not-allowed disabled:border-gray-10 dark:disabled:border-gray-5 disabled:bg-gray-12 dark:disabled:bg-gray-4 disabled:text-gray-8 dark:disabled:text-gray-7 disabled:placeholder:text-gray-10 dark:disabled:placeholder:text-gray-6",
        className,
      )}
      {...props}
    />
  );
}

export { Input };
