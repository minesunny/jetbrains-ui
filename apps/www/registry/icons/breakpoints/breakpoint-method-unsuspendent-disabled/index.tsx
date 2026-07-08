/**
 * Copyright 2000-2024 JetBrains s.r.o. and contributors.
 * Use of this source code is governed by the Apache 2.0 license.
 */
import type { ComponentProps } from 'react';
import { cn } from '@/lib/utils';

export type BreakpointMethodUnsuspendentDisabledProps = Omit<
  ComponentProps<'svg'>,
  'size'
> & {
  size?: 12 | 14 | 16 | 20 | 24;
  mode?: 'light' | 'dark';
};

export const BreakpointMethodUnsuspendentDisabled = ({
  size = 16,
  mode: _mode,
  className,
  'aria-label': ariaLabel,
  ...props
}: BreakpointMethodUnsuspendentDisabledProps) => (
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
      d="M6.823 1.237a.25.25 0 0 1 .354 0l5.586 5.586a.25.25 0 0 1 0 .354l-5.586 5.586a.25.25 0 0 1-.354 0L1.237 7.177a.25.25 0 0 1 0-.354z"
      strokeWidth={1.5}
      className="stroke-[#FFAF0F] dark:stroke-[#F2C55C]"
    />
  </svg>
);

export default BreakpointMethodUnsuspendentDisabled;
