/**
 * Copyright 2000-2024 JetBrains s.r.o. and contributors.
 * Use of this source code is governed by the Apache 2.0 license.
 */
import type { ComponentProps } from 'react';
import { cn } from '@/lib/utils';

export const BreakpointFieldValid = ({
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
    viewBox="0 0 14 14"
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
      d="M13.827.176a.6.6 0 0 1 0 .848L10.03 4.821a.6.6 0 0 1-.848 0L7.176 2.815a.6.6 0 1 1 .848-.848l1.582 1.581L12.979.176a.6.6 0 0 1 .848 0"
      className="fill-[#6C707E] dark:fill-[#CED0D6]"
    />
    <path
      d="M6.037 2.064C3.1 2.454.677 4.587 0 7c.75 2.672 3.64 5 7 5s6.25-2.328 7-5c-.3-1.068-.941-2.08-1.818-2.912L10.741 5.53c-.131.13-.28.234-.438.31a3.5 3.5 0 1 1-3.818-2.303l-.013-.013a1.6 1.6 0 0 1-.435-1.46"
      className="fill-[#E55765] dark:fill-[#DB5C5C]"
    />
    <path
      d="M9 7a2 2 0 1 1-4 0 2 2 0 0 1 4 0"
      className="fill-[#E55765] dark:fill-[#DB5C5C]"
    />
  </svg>
);

export default BreakpointFieldValid;
