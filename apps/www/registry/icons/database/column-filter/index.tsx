/**
 * Copyright 2000-2024 JetBrains s.r.o. and contributors.
 * Use of this source code is governed by the Apache 2.0 license.
 */
import type { ComponentProps } from 'react';
import { cn } from '@/lib/utils';

export type ColumnFilterProps = Omit<ComponentProps<'svg'>, 'size'> & {
  size?: 12 | 14 | 16 | 20 | 24;
  mode?: 'light' | 'dark';
};

export const ColumnFilter = ({
  size = 16,
  mode: _mode,
  className,
  'aria-label': ariaLabel,
  ...props
}: ColumnFilterProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={cn('inline-block shrink-0', className)}
    role={ariaLabel ? 'img' : 'presentation'}
    aria-label={ariaLabel}
    aria-hidden={!ariaLabel}
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M7.046 8.291A.5.5 0 0 1 7.5 8h8a.5.5 0 0 1 .38.825L13 12.185V15.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-3.315l-2.88-3.36a.5.5 0 0 1-.074-.534M8.587 9l2.293 2.675A.5.5 0 0 1 11 12v3h1v-3a.5.5 0 0 1 .12-.325L14.413 9z"
      className="fill-[#3574F0] dark:fill-[#548AF7]"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M3 2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h6v-1H6V3h7a1 1 0 0 1 1 1v3h1V4a2 2 0 0 0-2-2zm2 1H3a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h2z"
      className="fill-[#6C707E] dark:fill-[#CED0D6]"
    />
  </svg>
);

export default ColumnFilter;
