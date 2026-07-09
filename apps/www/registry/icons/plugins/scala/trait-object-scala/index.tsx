/**
 * Copyright 2000-2024 JetBrains s.r.o. and contributors.
 * Use of this source code is governed by the Apache 2.0 license.
 */
import type { ComponentProps } from 'react';
import { cn } from '@/lib/utils';

export const TraitObjectScala = ({
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
      className="fill-[#F2FCF3] dark:fill-[#253627]"
    />
    <path
      d="M14 8h1A7 7 0 1 0 1 8h1a6 6 0 1 1 12 0"
      className="fill-[#208A3C] dark:fill-[#57965C]"
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
      d="m15.5 9.5-5 .5m5 2.25-5 .5m5 2.25-5 .5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="stroke-[#DB3B4B] dark:stroke-[#DB5C5C]"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M7.5 6H5V5h6v1H8.5v6h-1z"
      className="fill-[#6C707E] dark:fill-[#CED0D6]"
    />
  </svg>
);

export default TraitObjectScala;
