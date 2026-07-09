/**
 * Copyright 2000-2024 JetBrains s.r.o. and contributors.
 * Use of this source code is governed by the Apache 2.0 license.
 */
import type { ComponentProps } from 'react';
import { cn } from '@/lib/utils';

export const ClassInitializerKotlin = ({
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
      d="M10 10h4.645l-1.97 1.97a.75.75 0 0 0 0 1.06l1.97 1.97H10z"
      className="fill-[#FAF5FF] dark:fill-[#2F2936]"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M9 10a1 1 0 0 1 1-1h5.248a.75.75 0 0 1 .53 1.28l-2.22 2.22 2.22 2.22a.75.75 0 0 1-.53 1.28H10a1 1 0 0 1-1-1zm5.645 0H10v5h4.645l-1.97-1.97a.75.75 0 0 1 0-1.06z"
      className="fill-[#834DF0] dark:fill-[#A571E6]"
    />
    <path
      d="M15 8a7 7 0 1 0-7 7v-5a2 2 0 0 1 2-2z"
      className="fill-[#FFF4EB] dark:fill-[#45322B]"
    />
    <path
      d="M8 14a6 6 0 1 1 6-6h1a7 7 0 1 0-7 7z"
      className="fill-[#E66D17] dark:fill-[#C77D55]"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M5 6a.5.5 0 0 0 0 1h6a.5.5 0 0 0 0-1zm0 3a.5.5 0 0 0 0 1h2.5a.5.5 0 1 0 0-1z"
      className="fill-[#E66D17] dark:fill-[#C77D55]"
    />
  </svg>
);

export default ClassInitializerKotlin;
