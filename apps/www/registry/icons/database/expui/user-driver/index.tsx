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
      strokeLinecap="round"
      d="M2.5 11.5V4.5"
      className="stroke-[#6C707E] dark:stroke-[#CED0D6]"
    />
    <path
      d="M13 11.5C13 11.7761 13.2239 12 13.5 12C13.7761 12 14 11.7761 14 11.5H13ZM14 4.5C14 4.22386 13.7761 4 13.5 4C13.2239 4 13 4.22386 13 4.5H14ZM14 11.5V4.5H13V11.5H14Z"
      className="fill-[#3574F0] dark:fill-[#548AF7]"
    />
    <path
      strokeLinecap="round"
      d="M4.5 2.5H11.5"
      className="stroke-[#6C707E] dark:stroke-[#CED0D6]"
    />
    <path
      d="M4.5 13C4.22386 13 4 13.2239 4 13.5C4 13.7761 4.22386 14 4.5 14V13ZM11.5 14C11.7761 14 12 13.7761 12 13.5C12 13.2239 11.7761 13 11.5 13V14ZM4.5 14H11.5V13H4.5V14Z"
      className="fill-[#3574F0] dark:fill-[#548AF7]"
    />
    <path
      strokeLinecap="round"
      d="M6.5 13V12M9.5 13V12"
      className="stroke-[#3574F0] dark:stroke-[#548AF7]"
    />
    <path
      strokeLinecap="round"
      d="M13 9.5H12M13 6.5H12"
      className="stroke-[#3574F0] dark:stroke-[#548AF7]"
    />
    <path
      strokeLinecap="round"
      d="M9.5 3V4M6.5 3V4M3 6.5H4M3 9.5H4"
      className="stroke-[#6C707E] dark:stroke-[#CED0D6]"
    />
  </svg>
);

export default UserDriver;
