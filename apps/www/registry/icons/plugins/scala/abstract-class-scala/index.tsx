/**
 * Copyright 2000-2024 JetBrains s.r.o. and contributors.
 * Use of this source code is governed by the Apache 2.0 license.
 */
import type { ComponentProps } from 'react';
import { cn } from '@/lib/utils';

export const AbstractClassScala = ({
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
      d="M15 8v.043l-4.65.464A1.5 1.5 0 0 0 9 10v4.93Q8.51 15 8 15a7 7 0 1 1 7-7"
      className="fill-[#EDF3FF] dark:fill-[#25324D]"
    />
    <path
      d="m7.06 2.074-.155-.988A6.97 6.97 0 0 0 3.05 3.05a6.97 6.97 0 0 0-1.964 3.855l.988.155c.19-1.209.75-2.37 1.684-3.303A5.97 5.97 0 0 1 7.06 2.074M13.927 7.06l.988-.155A6.97 6.97 0 0 0 12.95 3.05a6.97 6.97 0 0 0-3.855-1.964l-.155.988c1.209.19 2.37.75 3.303 1.683a5.97 5.97 0 0 1 1.684 3.303M1.086 9.095A6.97 6.97 0 0 0 3.05 12.95a6.97 6.97 0 0 0 3.855 1.964l.156-.987a5.97 5.97 0 0 1-3.303-1.684A5.97 5.97 0 0 1 2.074 8.94z"
      className="fill-[#3574F0] dark:fill-[#548AF7]"
    />
    <path
      d="m15.5 9.5-5 .5m5 2.25-5 .5m5 2.25-5 .5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="stroke-[#DB3B4B] dark:stroke-[#DB5C5C]"
    />
    <path
      d="M9 10.425v.97a3.6 3.6 0 0 1-.868.105c-1.919 0-3.345-1.494-3.345-3.5s1.426-3.5 3.345-3.5c1.49 0 2.766.9 3.08 2.175h-1.015c-.315-.73-1.093-1.252-2.065-1.252-1.339 0-2.306 1.074-2.306 2.577s.967 2.577 2.306 2.577c.313 0 .605-.054.868-.152"
      className="fill-[#3574F0] dark:fill-[#548AF7]"
    />
  </svg>
);

export default AbstractClassScala;
