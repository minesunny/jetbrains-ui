/**
 * Copyright 2000-2024 JetBrains s.r.o. and contributors.
 * Use of this source code is governed by the Apache 2.0 license.
 */
import type { ComponentProps } from 'react';
import { cn } from '@/lib/utils';

export const PartionTable = ({
  size = 16,
  className,
  'aria-label': ariaLabel,
  ...props
}: Omit<ComponentProps<'svg'>, 'size'> & {
  size?: 12 | 14 | 16 | 20 | 24;
}) => (
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
      fillRule="evenodd"
      clipRule="evenodd"
      d="M5 5V3H6V5H5Z"
      className="fill-[#6C707E] dark:fill-[#CED0D6]"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M10 5V3H11V5H10Z"
      className="fill-[#6C707E] dark:fill-[#CED0D6]"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M14 6H2V5H14V6Z"
      className="fill-[#6C707E] dark:fill-[#CED0D6]"
    />
    <path
      d="M3 3H13C13.5523 3 14 3.44772 14 4V6H15V4C15 2.89543 14.1046 2 13 2H3C1.89543 2 1 2.89543 1 4V6H2V4C2 3.44772 2.44772 3 3 3Z"
      className="fill-[#6C707E] dark:fill-[#CED0D6]"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M5 8V6H6V8H5Z"
      className="fill-[#6C707E] dark:fill-[#CED0D6]"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M5 12V9H6V12H5Z"
      className="fill-[#3574F0] dark:fill-[#548AF7]"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M5 14V12H6V14H5Z"
      className="fill-[#3574F0] dark:fill-[#548AF7]"
    />
    <rect
      x={10}
      y={6}
      width={1}
      height={2}
      className="fill-[#6C707E] dark:fill-[#CED0D6]"
    />
    <rect
      x={10}
      y={9}
      width={1}
      height={2}
      className="fill-[#3574F0] dark:fill-[#548AF7]"
    />
    <rect
      x={10}
      y={11}
      width={1}
      height={3}
      className="fill-[#3574F0] dark:fill-[#548AF7]"
    />
    <rect
      x={14}
      y={6}
      width={1}
      height={2}
      className="fill-[#6C707E] dark:fill-[#CED0D6]"
    />
    <rect
      x={14}
      y={9}
      width={1}
      height={3}
      className="fill-[#3574F0] dark:fill-[#548AF7]"
    />
    <path
      d="M2 12H1C1 13.1046 1.89543 14 3 14V13C2.44772 13 2 12.5523 2 12Z"
      className="fill-[#3574F0] dark:fill-[#548AF7]"
    />
    <path
      d="M13 13L13 14C14.1046 14 15 13.1046 15 12L14 12C14 12.5523 13.5523 13 13 13Z"
      className="fill-[#3574F0] dark:fill-[#548AF7]"
    />
    <rect
      x={1}
      y={6}
      width={1}
      height={2}
      className="fill-[#6C707E] dark:fill-[#CED0D6]"
    />
    <rect
      x={1}
      y={9}
      width={1}
      height={3}
      className="fill-[#3574F0] dark:fill-[#548AF7]"
    />
    <rect
      x={3}
      y={13}
      width={2}
      height={1}
      className="fill-[#3574F0] dark:fill-[#548AF7]"
    />
    <rect
      x={11}
      y={13}
      width={2}
      height={1}
      className="fill-[#3574F0] dark:fill-[#548AF7]"
    />
    <rect
      x={6}
      y={13}
      width={4}
      height={1}
      className="fill-[#3574F0] dark:fill-[#548AF7]"
    />
  </svg>
);

export default PartionTable;
