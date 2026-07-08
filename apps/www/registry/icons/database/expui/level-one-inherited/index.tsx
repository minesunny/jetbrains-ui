/**
 * Copyright 2000-2024 JetBrains s.r.o. and contributors.
 * Use of this source code is governed by the Apache 2.0 license.
 */
import type { ComponentProps } from 'react';
import { cn } from '@/lib/utils';

export type LevelOneInheritedProps = Omit<ComponentProps<'svg'>, 'size'> & {
  size?: 12 | 14 | 16 | 20 | 24;
  mode?: 'light' | 'dark';
};

export const LevelOneInherited = ({
  size = 16,
  mode: _mode,
  className,
  'aria-label': ariaLabel,
  ...props
}: LevelOneInheritedProps) => (
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
      d="M8 12H12V12C12 12.5523 11.5523 13 11 13H9C8.44772 13 8 12.5523 8 12V12Z"
      className="fill-[#C9CCD6] dark:fill-[#5A5D63]"
    />
    <path
      d="M7.5 4C7.5 3.17157 8.17157 2.5 9 2.5H11C11.8284 2.5 12.5 3.17157 12.5 4V12C12.5 12.8284 11.8284 13.5 11 13.5H9C8.17157 13.5 7.5 12.8284 7.5 12V4Z"
      className="stroke-[#6C707E] dark:stroke-[#CED0D6]"
    />
    <path d="M8 11.5H12" className="stroke-[#6C707E] dark:stroke-[#CED0D6]" />
  </svg>
);

export default LevelOneInherited;
