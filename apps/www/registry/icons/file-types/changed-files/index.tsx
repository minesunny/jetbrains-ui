/**
 * Copyright 2000-2024 JetBrains s.r.o. and contributors.
 * Use of this source code is governed by the Apache 2.0 license.
 */
import type { ComponentProps } from 'react';
import { cn } from '@/lib/utils';

export type ChangedFilesProps = Omit<ComponentProps<'svg'>, 'size'> & {
  size?: 12 | 14 | 16 | 20 | 24;
  mode?: 'light' | 'dark';
};

export const ChangedFiles = ({
  size = 16,
  mode: _mode,
  className,
  'aria-label': ariaLabel,
  ...props
}: ChangedFilesProps) => (
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
      d="M4 4.5h6A1.5 1.5 0 0 1 11.5 6v6a1.5 1.5 0 0 1-1.5 1.5H4A1.5 1.5 0 0 1 2.5 12V6A1.5 1.5 0 0 1 4 4.5Z"
      className="fill-[#EBECF0] dark:fill-[#43454A] stroke-[#6C707E] dark:stroke-[#CED0D6]"
    />
    <path
      d="M5.5 2.5H12A1.5 1.5 0 0 1 13.5 4v6.5M5 10.5h4m-4-3h4"
      strokeLinecap="round"
      className="stroke-[#6C707E] dark:stroke-[#CED0D6]"
    />
  </svg>
);

export default ChangedFiles;
