/**
 * Copyright 2000-2024 JetBrains s.r.o. and contributors.
 * Use of this source code is governed by the Apache 2.0 license.
 */
import type { ComponentProps } from 'react';
import { cn } from '@/lib/utils';

export type UserDriverProps = Omit<ComponentProps<'svg'>, 'size'> & {
  size?: 12 | 14 | 16 | 20 | 24;
  mode?: 'light' | 'dark';
};

export const UserDriver = ({
  size = 16,
  mode: _mode,
  className,
  'aria-label': ariaLabel,
  ...props
}: UserDriverProps) => (
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
      d="M2.5 11.5v-7"
      strokeLinecap="round"
      className="stroke-[#6C707E] dark:stroke-[#CED0D6]"
    />
    <path
      d="M13.5 11.5v-7"
      strokeLinecap="round"
      className="stroke-[#3574F0] dark:stroke-[#548AF7]"
    />
    <path
      d="M4.5 2.5h7"
      strokeLinecap="round"
      className="stroke-[#6C707E] dark:stroke-[#CED0D6]"
    />
    <path
      d="M4.5 13.5h7M6.5 13v-1m3 1v-1M13 9.5h-1m1-3h-1"
      strokeLinecap="round"
      className="stroke-[#3574F0] dark:stroke-[#548AF7]"
    />
    <path
      d="M9.5 3v1m-3-1v1M3 6.5h1m-1 3h1"
      strokeLinecap="round"
      className="stroke-[#6C707E] dark:stroke-[#CED0D6]"
    />
  </svg>
);

export default UserDriver;
