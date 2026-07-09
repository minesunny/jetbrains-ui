/**
 * Copyright 2000-2024 JetBrains s.r.o. and contributors.
 * Use of this source code is governed by the Apache 2.0 license.
 */
import type { ComponentProps } from 'react';
import { cn } from '@/lib/utils';

export const ClassObjectScala = ({
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
      className="fill-[#EDF3FF] dark:fill-[#25324D]"
    />
    <path
      d="M14 8h1A7 7 0 1 0 1 8h1a6 6 0 1 1 12 0"
      className="fill-[#3574F0] dark:fill-[#548AF7]"
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
      d="M9 11.395a3.6 3.6 0 0 1-.866.105C6.215 11.5 4.79 10.006 4.79 8s1.426-3.5 3.345-3.5c1.49 0 2.766.9 3.08 2.175h-1.015c-.315-.73-1.093-1.252-2.065-1.252-1.339 0-2.306 1.074-2.306 2.577s.967 2.577 2.306 2.577a2.5 2.5 0 0 0 .866-.15z"
      className="fill-[#6C707E] dark:fill-[#CED0D6]"
    />
  </svg>
);

export default ClassObjectScala;
