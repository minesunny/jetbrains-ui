/**
 * Copyright 2000-2024 JetBrains s.r.o. and contributors.
 * Use of this source code is governed by the Apache 2.0 license.
 */
import type { ComponentProps } from 'react';
import { cn } from '@/lib/utils';

export type CheckConstraintProps = Omit<ComponentProps<'svg'>, 'size'> & {
  size?: 12 | 14 | 16 | 20 | 24;
  mode?: 'light' | 'dark';
};

export const CheckConstraint = ({
  size = 16,
  mode: _mode,
  className,
  'aria-label': ariaLabel,
  ...props
}: CheckConstraintProps) => (
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
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M11.5 3.5H14.5"
      className="stroke-[#6C707E] dark:stroke-[#CED0D6]"
    />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M8.5 8H14.5"
      className="stroke-[#6C707E] dark:stroke-[#CED0D6]"
    />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M5.5 12.5H14.5"
      className="stroke-[#6C707E] dark:stroke-[#CED0D6]"
    />
    <path
      strokeLinecap="round"
      d="M8.5 4.5L4 9L1.5 6.5"
      className="stroke-[#6C707E] dark:stroke-[#CED0D6]"
    />
  </svg>
);

export default CheckConstraint;
