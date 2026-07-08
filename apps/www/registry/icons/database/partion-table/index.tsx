/**
 * Copyright 2000-2024 JetBrains s.r.o. and contributors.
 * Use of this source code is governed by the Apache 2.0 license.
 */
import type { ComponentProps } from 'react';
import { cn } from '@/lib/utils';

export type PartionTableProps = Omit<ComponentProps<'svg'>, 'size'> & {
  size?: 12 | 14 | 16 | 20 | 24;
  mode?: 'light' | 'dark';
};

export const PartionTable = ({
  size = 16,
  mode: _mode,
  className,
  'aria-label': ariaLabel,
  ...props
}: PartionTableProps) => (
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
      d="M11 6h3v2h1V4a2 2 0 0 0-2-2H3a2 2 0 0 0-2 2v4h1V6h3v2h1V6h4v2h1zM3 3h2v2H2V4a1 1 0 0 1 1-1m7 2H6V3h4zm4 0h-3V3h2a1 1 0 0 1 1 1z"
      className="fill-[#6C707E] dark:fill-[#CED0D6]"
    />
    <path
      d="M5 9h1v4h4V9h1v4h2a1 1 0 0 0 1-1V9h1v3a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V9h1v3a1 1 0 0 0 1 1h2z"
      className="fill-[#3574F0] dark:fill-[#548AF7]"
    />
  </svg>
);

export default PartionTable;
