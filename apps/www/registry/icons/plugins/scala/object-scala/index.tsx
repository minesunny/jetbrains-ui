/**
 * Copyright 2000-2024 JetBrains s.r.o. and contributors.
 * Use of this source code is governed by the Apache 2.0 license.
 */
import type { ComponentProps } from 'react';
import { cn } from '@/lib/utils';

export const ObjectScala = ({
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
      d="M15 8.043V8a7 7 0 1 0-6 6.93V10a1.5 1.5 0 0 1 1.35-1.493z"
      className="fill-[#FFF4EB] dark:fill-[#45322B]"
    />
    <path
      d="M15 8.043V8a7 7 0 1 0-6 6.93v-1.013Q8.511 14 8 14a6 6 0 1 1 5.998-5.857z"
      className="fill-[#E66D17] dark:fill-[#C77D55]"
    />
    <path
      d="M10.969 8.446q.03-.22.031-.446v-.017C11 6.351 9.77 5 8.008 5S5 6.367 5 8v.017C5 9.649 6.23 11 7.992 11c.36 0 .698-.057 1.008-.162V10q0-.114.016-.223a1.9 1.9 0 0 1-1.008.278c-1.14 0-1.95-.928-1.95-2.055v-.017c0-1.127.794-2.038 1.934-2.038s1.95.928 1.95 2.055v.017q-.001.33-.086.628.228-.11.495-.138z"
      className="fill-[#E66D17] dark:fill-[#C77D55]"
    />
  </svg>
);

export default ObjectScala;
