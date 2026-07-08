/**
 * Copyright 2000-2024 JetBrains s.r.o. and contributors.
 * Use of this source code is governed by the Apache 2.0 license.
 */
import type { ComponentProps } from 'react';
import { cn } from '@/lib/utils';

export type NextJsProps = Omit<ComponentProps<'svg'>, 'size'> & {
  size?: 12 | 14 | 16 | 20 | 24;
  mode?: 'light' | 'dark';
};

export const NextJs = ({
  size = 16,
  mode: _mode,
  className,
  'aria-label': ariaLabel,
  ...props
}: NextJsProps) => (
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
      d="M11 4.5a.5.5 0 0 0-1 0v4.396l.993 1.604H11z"
      className="fill-[#000] dark:fill-[#fff]"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M15 8A7 7 0 1 1 1 8a7 7 0 0 1 14 0m-4.534 5.472a6 6 0 1 1 .875-.487L5.925 4.237A.5.5 0 0 0 5 4.5v7a.5.5 0 0 0 1 0V6.258z"
      className="fill-[#000] dark:fill-[#fff]"
    />
  </svg>
);

export default NextJs;
