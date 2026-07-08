/**
 * Copyright 2000-2024 JetBrains s.r.o. and contributors.
 * Use of this source code is governed by the Apache 2.0 license.
 */
import type { ComponentProps } from 'react';
import { cn } from '@/lib/utils';

export type TestSkippedProps = Omit<ComponentProps<'svg'>, 'size'> & {
  size?: 12 | 14 | 16 | 20 | 24;
  mode?: 'light' | 'dark';
};

export const TestSkipped = ({
  size = 16,
  mode: _mode,
  className,
  'aria-label': ariaLabel,
  ...props
}: TestSkippedProps) => (
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
      d="M7.646 1.99 1.99 7.646a.5.5 0 0 0 0 .708l5.656 5.656a.5.5 0 0 0 .707 0l5.657-5.656a.5.5 0 0 0 0-.708L8.353 1.99a.5.5 0 0 0-.707 0M.93 6.586a2 2 0 0 0 0 2.828l5.657 5.657a2 2 0 0 0 2.828 0l5.657-5.657a2 2 0 0 0 0-2.828L9.414.929a2 2 0 0 0-2.828 0z"
      className="fill-[#FFAF0F] dark:fill-[#F2C55C]"
    />
    <path
      strokeLinecap="round"
      d="M6 8h4"
      className="stroke-[#FFAF0F] dark:stroke-[#F2C55C]"
    />
  </svg>
);

export default TestSkipped;
