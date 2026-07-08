/**
 * Copyright 2000-2024 JetBrains s.r.o. and contributors.
 * Use of this source code is governed by the Apache 2.0 license.
 */
import type { ComponentProps } from 'react';
import { cn } from '@/lib/utils';

export type BreakpointDisabledProps = Omit<ComponentProps<'svg'>, 'size'> & {
  size?: 12 | 14 | 16 | 20 | 24;
  mode?: 'light' | 'dark';
};

export const BreakpointDisabled = ({
  size = 16,
  mode: _mode,
  className,
  'aria-label': ariaLabel,
  ...props
}: BreakpointDisabledProps) => (
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
      d="M7 .75a6.25 6.25 0 1 1 0 12.5A6.25 6.25 0 0 1 7 .75Z"
      strokeWidth={1.5}
      className="stroke-[#E55765] dark:stroke-[#DB5C5C]"
    />
  </svg>
);

export default BreakpointDisabled;
