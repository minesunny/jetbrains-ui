/**
 * Copyright 2000-2024 JetBrains s.r.o. and contributors.
 * Use of this source code is governed by the Apache 2.0 license.
 */
import type { ComponentProps } from 'react';
import { cn } from '@/lib/utils';

export const ShowMembers = ({
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
      d="M9.5 3h1.243A5.5 5.5 0 1 0 3 10.743V9.5A6.5 6.5 0 0 1 9.5 3"
      className="fill-[#FFF7F7] dark:fill-[#402929]"
    />
    <circle
      cx={9.5}
      cy={9.5}
      r={5}
      className="fill-[#FFF4EB] dark:fill-[#45322B] stroke-[#E66D17] dark:stroke-[#C77D55]"
    />
    <path
      d="M9.5 13V7.5a1 1 0 0 1 1-1h1M11.5 8.5H8"
      className="stroke-[#E66D17] dark:stroke-[#C77D55]"
    />
    <path
      d="M10.743 3H9.5q-.084 0-.169.002A4.5 4.5 0 0 0 3 9.33v1.414A5.5 5.5 0 1 1 10.743 3"
      className="fill-[#DB3B4B] dark:fill-[#DB5C5C]"
    />
  </svg>
);

export default ShowMembers;
