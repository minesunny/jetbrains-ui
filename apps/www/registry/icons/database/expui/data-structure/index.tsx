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
      d="M1.5 10.5V14.5H6.5V10.5H1.5Z"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="stroke-[#6C707E] dark:stroke-[#CED0D6]"
    />
    <path
      d="M9.5 10.5V14.5H14.5V10.5H9.5Z"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="stroke-[#6C707E] dark:stroke-[#CED0D6]"
    />
    <path
      d="M5.5 4.5V0.5H10.5V4.5H5.5Z"
      strokeLinejoin="round"
      className="stroke-[#6C707E] dark:stroke-[#CED0D6]"
    />
    <path
      d="M8 5V7"
      strokeLinejoin="round"
      className="stroke-[#6C707E] dark:stroke-[#CED0D6]"
    />
    <path
      d="M4.5 10V7.5H8H11.5V10"
      strokeLinejoin="round"
      className="stroke-[#6C707E] dark:stroke-[#CED0D6]"
    />
    <rect
      x={2}
      y={11}
      width={4}
      height={3}
      className="fill-[#EBECF0] dark:fill-[#43454A]"
    />
    <rect
      x={10}
      y={11}
      width={4}
      height={3}
      className="fill-[#EBECF0] dark:fill-[#43454A]"
    />
    <rect
      x={6}
      y={1}
      width={4}
      height={3}
      className="fill-[#EBECF0] dark:fill-[#43454A]"
    />
  </svg>
);

export default DataStructure;
