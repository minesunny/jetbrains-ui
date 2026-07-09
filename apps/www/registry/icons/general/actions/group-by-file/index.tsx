/**
 * Copyright 2000-2024 JetBrains s.r.o. and contributors.
 * Use of this source code is governed by the Apache 2.0 license.
 */
import type { ComponentProps } from 'react';
import { cn } from '@/lib/utils';

export const GroupByFile = ({
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
      d="M3.5 13.5h-1a1 1 0 0 1-1-1v-9a1 1 0 0 1 1-1h1M12.5 13.5h1a1 1 0 0 0 1-1v-9a1 1 0 0 0-1-1h-1"
      strokeLinecap="round"
      className="stroke-[#6C707E] dark:stroke-[#CED0D6]"
    />
    <path
      d="M5 12.5h6a.5.5 0 0 0 .5-.5V4a.5.5 0 0 0-.5-.5H7.207a.5.5 0 0 0-.353.146L4.646 5.854a.5.5 0 0 0-.146.353V12a.5.5 0 0 0 .5.5"
      className="fill-[#EBECF0] dark:fill-[#43454A]"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M7.207 3a1 1 0 0 0-.707.293L4.293 5.5A1 1 0 0 0 4 6.207V12a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1zM8 4h3v8H5V7h2a1 1 0 0 0 1-1zm-1 .207L5.207 6H7z"
      className="fill-[#6C707E] dark:fill-[#CED0D6]"
    />
  </svg>
);

export default GroupByFile;
