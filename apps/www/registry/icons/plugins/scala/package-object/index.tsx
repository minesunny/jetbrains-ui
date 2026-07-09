/**
 * Copyright 2000-2024 JetBrains s.r.o. and contributors.
 * Use of this source code is governed by the Apache 2.0 license.
 */
import type { ComponentProps } from 'react';
import { cn } from '@/lib/utils';

export const PackageObject = ({
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
      d="M15 8q0 .51-.07 1h-2.016l-.707-.707A1 1 0 0 0 11.5 8H9a2 2 0 0 0-2 2v4.929A7.002 7.002 0 0 1 8 1a7 7 0 0 1 7 7"
      className="fill-[#FFF4EB] dark:fill-[#45322B]"
    />
    <path
      d="M2 8a6 6 0 0 0 5 5.917v1.012A7.002 7.002 0 0 1 8 1a7 7 0 0 1 6.93 8h-1.013Q14 8.511 14 8A6 6 0 0 0 2 8"
      className="fill-[#E66D17] dark:fill-[#C77D55]"
    />
    <path
      d="M8 10v5a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1h-2.5l-1-1H9a1 1 0 0 0-1 1"
      className="fill-[#EBECF0] dark:fill-[#43454A]"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="m12.5 10-1-1H9a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1zm-1.414 0H9v5h6v-4h-2.5a1 1 0 0 1-.707-.293z"
      className="fill-[#6C707E] dark:fill-[#CED0D6]"
    />
  </svg>
);

export default PackageObject;
