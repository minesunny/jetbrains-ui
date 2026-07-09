/**
 * Copyright 2000-2024 JetBrains s.r.o. and contributors.
 * Use of this source code is governed by the Apache 2.0 license.
 */
import type { ComponentProps } from 'react';
import { cn } from '@/lib/utils';

export const Symbol = ({
  size = 16,
  className,
  'aria-label': ariaLabel,
  ...props
}: Omit<ComponentProps<'svg'>, 'size'> & {
  size?: 12 | 14 | 16 | 20 | 24;
}) => (
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
      d="M1 8a7 7 0 1 1 14 0A7 7 0 0 1 1 8"
      className="fill-[#F2FCF3] dark:fill-[#253627]"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M2 8a6 6 0 1 0 12 0A6 6 0 0 0 2 8m6-7a7 7 0 1 0 0 14A7 7 0 0 0 8 1"
      className="fill-[#208A3C] dark:fill-[#57965C]"
    />
    <circle
      cx="8"
      cy="6"
      r="1"
      className="fill-[#208A3C] dark:fill-[#57965C]"
    />
    <circle
      cx="8"
      cy="10"
      r="1"
      className="fill-[#208A3C] dark:fill-[#57965C]"
    />
  </svg>
);

export default Symbol;
