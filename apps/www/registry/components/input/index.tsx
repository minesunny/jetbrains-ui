'use client';

import * as React from 'react';

import { cn } from '@workspace/ui/lib/utils';
import './index.css';

function Input({
  className,
  type = 'text',
  ...props
}: React.ComponentProps<'input'>) {
  return (
    <input
      type={type}
      data-slot="jb-input"
      className={cn(
        'jb-input flex h-7 w-[240px] min-w-0 rounded-[4px] border px-2 py-1 text-xs leading-4 font-normal outline-none transition-[background-color,border-color,color,box-shadow] duration-150 ease-in-out disabled:cursor-not-allowed',
        className,
      )}
      {...props}
    />
  );
}

export { Input };
