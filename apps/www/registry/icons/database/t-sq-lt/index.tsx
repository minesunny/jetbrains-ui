/**
 * Copyright 2000-2024 JetBrains s.r.o. and contributors.
 * Use of this source code is governed by the Apache 2.0 license.
 */
import type { ComponentProps } from 'react';
import { cn } from '@/lib/utils';

export type TSqLtProps = Omit<ComponentProps<'svg'>, 'size'> & {
  size?: 12 | 14 | 16 | 20 | 24;
  mode?: 'light' | 'dark';
};

export const TSqLt = ({
  size = 16,
  mode: _mode,
  className,
  'aria-label': ariaLabel,
  ...props
}: TSqLtProps) => (
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
    <path d="M8 3H1v9h7z" className="fill-[#E55765] dark:fill-[#DB5C5C]" />
    <path d="M13 3H9v4h4z" className="fill-[#55A76A] dark:fill-[#5FAD65]" />
    <path d="M15 8H9v6h6z" className="fill-[#4682FA] dark:fill-[#548AF7]" />
  </svg>
);

export default TSqLt;
