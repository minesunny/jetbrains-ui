/**
 * Copyright 2000-2024 JetBrains s.r.o. and contributors.
 * Use of this source code is governed by the Apache 2.0 license.
 */
import type { ComponentProps } from 'react';
import { cn } from '@/lib/utils';

export type BreakpointMethodMutedDependentProps = Omit<
  ComponentProps<'svg'>,
  'size'
> & {
  size?: 12 | 14 | 16 | 20 | 24;
  mode?: 'light' | 'dark';
};

export const BreakpointMethodMutedDependent = ({
  size = 16,
  mode: _mode,
  className,
  'aria-label': ariaLabel,
  ...props
}: BreakpointMethodMutedDependentProps) => (
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
      d="M2.5 5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5"
      className="fill-[#6C707E] dark:fill-[#CED0D6]"
    />
    <path
      d="M3.189 5.932a3.5 3.5 0 0 1-1.954-.167l-.528.528a1 1 0 0 0 0 1.414l5.586 5.586a1 1 0 0 0 1.414 0l5.586-5.586a1 1 0 0 0 0-1.414L7.707.707a1 1 0 0 0-1.414 0l-.529.528a3.5 3.5 0 0 1 .168 1.954L7 2.121 11.879 7l-4.88 4.879L2.122 7z"
      className="fill-[#6C707E] dark:fill-[#CED0D6]"
    />
  </svg>
);

export default BreakpointMethodMutedDependent;
