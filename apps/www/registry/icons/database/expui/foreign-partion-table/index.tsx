/**
 * Copyright 2000-2024 JetBrains s.r.o. and contributors.
 * Use of this source code is governed by the Apache 2.0 license.
 */
import type { ComponentProps } from 'react';
import { cn } from '@/lib/utils';

export type ForeignPartionTableProps = Omit<ComponentProps<'svg'>, 'size'> & {
  size?: 12 | 14 | 16 | 20 | 24;
  mode?: 'light' | 'dark';
};

export const ForeignPartionTable = ({
  size = 16,
  mode: _mode,
  className,
  'aria-label': ariaLabel,
  ...props
}: ForeignPartionTableProps) => (
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
      d="M10 6H6V8H5V6H2V8H1V4C1 2.89543 1.89543 2 3 2H13C14.1046 2 15 2.89543 15 4V8H14V6H11V8H10V6ZM5 3H3C2.44772 3 2 3.44772 2 4V5H5V3ZM6 5H10V3H6V5ZM11 5H14V4C14 3.44772 13.5523 3 13 3H11V5Z"
      className="fill-[#6C707E] dark:fill-[#CED0D6]"
    />
    <path
      d="M5 9H6V13H7V14H3C1.89543 14 1 13.1046 1 12V9H2V12C2 12.5523 2.44772 13 3 13H5V9Z"
      className="fill-[#3574F0] dark:fill-[#548AF7]"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M11 10.5C11 10.2239 11.2239 10 11.5 10H15.5C15.7761 10 16 10.2239 16 10.5V14.5C16 14.7761 15.7761 15 15.5 15C15.2239 15 15 14.7761 15 14.5V11.7071L10.8536 15.8536C10.6583 16.0488 10.3417 16.0488 10.1464 15.8536C9.95118 15.6583 9.95118 15.3417 10.1464 15.1464L14.2929 11H11.5C11.2239 11 11 10.7761 11 10.5Z"
      className="fill-[#6C707E] dark:fill-[#CED0D6]"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M3 2C1.89543 2 1 2.89543 1 4V8H2V6H5V8H6V6H10V8H11V6H14V8H15V4C15 2.89543 14.1046 2 13 2H3ZM10 3H6V5H10V3ZM3 3H5V5H2V4C2 3.44772 2.44772 3 3 3ZM14 4V5H11V3H13C13.5523 3 14 3.44772 14 4Z"
      className="fill-[#6C707E] dark:fill-[#CED0D6]"
    />
    <path
      d="M11 9H10V10.5V13H6V9H5V13H3C2.44772 13 2 12.5523 2 12V9H1V12C1 13.1046 1.89543 14 3 14H9.87868L11 12.8787V11.9146C10.4174 11.7087 10 11.1531 10 10.5C10 9.84689 10.4174 9.29127 11 9.08535V9Z"
      className="fill-[#3574F0] dark:fill-[#548AF7]"
    />
  </svg>
);

export default ForeignPartionTable;
