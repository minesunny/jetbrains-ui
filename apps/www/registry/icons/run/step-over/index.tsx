/**
 * Copyright 2000-2024 JetBrains s.r.o. and contributors.
 * Use of this source code is governed by the Apache 2.0 license.
 */
import type { ComponentProps } from 'react';
import { cn } from '@/lib/utils';

export type StepOverProps = Omit<ComponentProps<'svg'>, 'size'> & {
  size?: 12 | 14 | 16 | 20 | 24;
  mode?: 'light' | 'dark';
};

export const StepOver = ({
  size = 16,
  mode: _mode,
  className,
  'aria-label': ariaLabel,
  ...props
}: StepOverProps) => (
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
    <rect
      x={2}
      y={14}
      width={12}
      height={1}
      rx={0.5}
      className="fill-[#6C707E] dark:fill-[#CED0D6]"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M13.983 4.227a.5.5 0 0 0-1 .003l.013 4.079-5.16-4.68-.353-.32-.336.337-5 5a.5.5 0 0 0 .707.708L7.517 4.69l4.725 4.285-3.987.013a.5.5 0 1 0 .004 1l5.242-.017.5-.002-.001-.5z"
      className="fill-[#6C707E] dark:fill-[#CED0D6]"
    />
  </svg>
);

export default StepOver;
