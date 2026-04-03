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
        "flex h-7 w-ui-input min-w-0 rounded-[4px] border border-input-border bg-input-bg px-ui-item py-ui-item text-xs leading-4 font-normal text-input-text outline-none transition-[background-color,border-color,color,box-shadow] duration-150 ease-in-out placeholder:text-input-placeholder hover:bg-input-bg-hover hover:border-input-border-hover focus-visible:border-input-border-active focus-visible:ring-2 focus-visible:ring-input-ring [&[aria-invalid='true']]:border-input-border-invalid [&[aria-invalid='true']:focus-visible]:ring-input-ring-invalid disabled:cursor-not-allowed disabled:border-input-border-disabled disabled:bg-input-bg-disabled disabled:text-input-text-disabled disabled:placeholder:text-input-placeholder-disabled",
        className,
      )}
      {...props}
    />
  );
}

export { Input };
