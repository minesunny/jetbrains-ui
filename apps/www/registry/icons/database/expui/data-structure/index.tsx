/**
 * Copyright 2000-2024 JetBrains s.r.o. and contributors.
 * Use of this source code is governed by the Apache 2.0 license.
 */
import type { ComponentProps } from 'react';
import { cn } from '@/lib/utils';

export type DataStructureProps = Omit<ComponentProps<'svg'>, 'size'> & {
  size?: 12 | 14 | 16 | 20 | 24;
  mode?: 'light' | 'dark';
};

export const DataStructure = ({
  size = 16,
  mode: _mode,
  className,
  'aria-label': ariaLabel,
  ...props
}: DataStructureProps) => (
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
      strokeLinejoin="round"
      d="M1.5 10.5V14.5H6.5V10.5H1.5Z"
      className="stroke-[#6C707E] dark:stroke-[#CED0D6]"
    />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M9.5 10.5V14.5H14.5V10.5H9.5Z"
      className="stroke-[#6C707E] dark:stroke-[#CED0D6]"
    />
    <path
      strokeLinejoin="round"
      d="M5.5 4.5V0.5H10.5V4.5H5.5Z"
      className="stroke-[#6C707E] dark:stroke-[#CED0D6]"
    />
    <path
      strokeLinejoin="round"
      d="M8 5V7"
      className="stroke-[#6C707E] dark:stroke-[#CED0D6]"
    />
    <path
      strokeLinejoin="round"
      d="M4.5 10V7.5H8H11.5V10"
      className="stroke-[#6C707E] dark:stroke-[#CED0D6]"
    />
  </svg>
);

export default DataStructure;
