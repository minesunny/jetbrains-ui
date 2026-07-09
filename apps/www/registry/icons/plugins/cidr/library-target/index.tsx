/**
 * Copyright 2000-2024 JetBrains s.r.o. and contributors.
 * Use of this source code is governed by the Apache 2.0 license.
 */
import type { ComponentProps } from 'react';
import { cn } from '@/lib/utils';

export const LibraryTarget = ({
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
      d="M9 15.076A7.03 7.03 0 0 1 12.528 9 7.03 7.03 0 0 1 16 15.072v.018c-2.066 1.194-4.73 1.237-7-.014m5-3.18a3.01 3.01 0 0 1-1.512 2.604 3.01 3.01 0 0 1-1.489-2.602v-.008c.886-.512 2.028-.53 3 .005"
      className="fill-[#39207C] dark:fill-[#fff]"
    />
    <path
      d="M14.824 9.565A7 7 0 1 0 8 15a8.03 8.03 0 0 1 4.032-6.868l.501-.286.498.29a8 8 0 0 1 1.793 1.429"
      className="fill-[#FAF5FF] dark:fill-[#2F2936]"
    />
    <path
      d="M14.824 9.565A7 7 0 1 0 8 15a8 8 0 0 1 .076-1H8a6 6 0 1 1 5.952-5.236q.468.37.872.801"
      className="fill-[#834DF0] dark:fill-[#A571E6]"
    />
    <path
      d="M9.123 11h-.43c-.575 0-1.066-.139-1.317-.416Q7 10.167 7 9.199V5.993L6 6V5h2v4.2c0 .8.5.801 1.033.801h.454v.438q-.193.273-.364.561"
      className="fill-[#834DF0] dark:fill-[#A571E6]"
    />
  </svg>
);

export default LibraryTarget;
