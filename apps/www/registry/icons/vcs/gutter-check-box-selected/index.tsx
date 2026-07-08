/**
 * Copyright 2000-2024 JetBrains s.r.o. and contributors.
 * Use of this source code is governed by the Apache 2.0 license.
 */
import type { ComponentProps } from 'react';
import { cn } from '@/lib/utils';

export type GutterCheckBoxSelectedProps = Omit<
  ComponentProps<'svg'>,
  'size'
> & {
  size?: 12 | 14 | 16 | 20 | 24;
  mode?: 'light' | 'dark';
};

export const GutterCheckBoxSelected = ({
  size = 16,
  mode: _mode,
  className,
  'aria-label': ariaLabel,
  ...props
}: GutterCheckBoxSelectedProps) => (
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
      d="M2 .5h10A1.5 1.5 0 0 1 13.5 2v10a1.5 1.5 0 0 1-1.5 1.5H2A1.5 1.5 0 0 1 .5 12V2A1.5 1.5 0 0 1 2 .5Z"
      className="stroke-[#6C707E] dark:stroke-[#CED0D6]"
    />
    <path
      d="M3.75 6.75 6 9l4.242-4.242"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="stroke-[#6C707E] dark:stroke-[#CED0D6]"
    />
  </svg>
);

export default GutterCheckBoxSelected;
