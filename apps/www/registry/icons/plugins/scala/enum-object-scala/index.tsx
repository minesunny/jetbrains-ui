/**
 * Copyright 2000-2024 JetBrains s.r.o. and contributors.
 * Use of this source code is governed by the Apache 2.0 license.
 */
import type { ComponentProps } from 'react';
import { cn } from '@/lib/utils';

export const EnumObjectScala = ({
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
      d="M15 8A7 7 0 1 0 1 8z"
      className="fill-[#FAF5FF] dark:fill-[#2F2936]"
    />
    <path
      d="M14 8h1A7 7 0 1 0 1 8h1a6 6 0 1 1 12 0"
      className="fill-[#834DF0] dark:fill-[#A571E6]"
    />
    <path
      d="m15.5 9.5-5 .5m5 2.25-5 .5m5 2.25-5 .5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="stroke-[#DB3B4B] dark:stroke-[#DB5C5C]"
    />
    <path
      d="M15 8.043V8H1a7 7 0 0 0 8 6.93V10a1.5 1.5 0 0 1 1.35-1.493z"
      className="fill-[#FFF4EB] dark:fill-[#45322B]"
    />
    <path
      d="M9 14.93Q8.51 15 8 15a7 7 0 0 1-7-7h1a6 6 0 0 0 7 5.917z"
      className="fill-[#E66D17] dark:fill-[#C77D55]"
    />
    <path
      d="M9 11.5H5.49v-7h4.92v.915H6.48v2.1h3.59v.92H6.48v2.15H9z"
      className="fill-[#6C707E] dark:fill-[#CED0D6]"
    />
  </svg>
);

export default EnumObjectScala;
