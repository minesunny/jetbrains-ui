/**
 * Copyright 2000-2024 JetBrains s.r.o. and contributors.
 * Use of this source code is governed by the Apache 2.0 license.
 */
import type { ComponentProps } from 'react';
import { cn } from '@/lib/utils';

export type BreakpointMethodValidProps = Omit<ComponentProps<'svg'>, 'size'> & {
  size?: 12 | 14 | 16 | 20 | 24;
  mode?: 'light' | 'dark';
};

export const BreakpointMethodValid = ({
  size = 16,
  mode: _mode,
  className,
  'aria-label': ariaLabel,
  ...props
}: BreakpointMethodValidProps) => (
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
      d="M6.472 3.524A1.6 1.6 0 0 1 7.805.805L7.707.707a1 1 0 0 0-1.414 0L.707 6.293a1 1 0 0 0 0 1.414l5.586 5.586a1 1 0 0 0 1.414 0l5.586-5.586a1 1 0 0 0 0-1.414l-1.658-1.658-.894.895a1.6 1.6 0 0 1-2.263 0z"
      className="fill-[#E55765] dark:fill-[#DB5C5C]"
    />
  </svg>
);

export default BreakpointMethodValid;
