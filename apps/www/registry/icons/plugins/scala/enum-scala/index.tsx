/**
 * Copyright 2000-2024 JetBrains s.r.o. and contributors.
 * Use of this source code is governed by the Apache 2.0 license.
 */
import type { ComponentProps } from 'react';
import { cn } from '@/lib/utils';

export const EnumScala = ({
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
      d="m15.5 9.5-5 .5m5 2.25-5 .5m5 2.25-5 .5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="stroke-[#DB3B4B] dark:stroke-[#DB5C5C]"
    />
    <path
      d="M15 8v.043l-4.65.464A1.5 1.5 0 0 0 9 10v4.93Q8.51 15 8 15a7 7 0 1 1 7-7"
      className="fill-[#FAF5FF] dark:fill-[#2F2936]"
    />
    <path
      d="M9 11.5H5.49v-7h4.92v.915H6.48v2.1h3.59v.92H6.48v2.15H9z"
      className="fill-[#834DF0] dark:fill-[#A571E6]"
    />
    <path
      d="M9 13.917Q8.511 14 8 14a6 6 0 1 1 5.998-5.857l1.002-.1V8a7 7 0 1 0-6 6.93z"
      className="fill-[#834DF0] dark:fill-[#A571E6]"
    />
  </svg>
);

export default EnumScala;
