/**
 * Copyright 2000-2024 JetBrains s.r.o. and contributors.
 * Use of this source code is governed by the Apache 2.0 license.
 */
import type { ComponentProps } from 'react';
import { cn } from '@/lib/utils';

export const TabAlert = ({
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
      d="M9 12.5a3.5 3.5 0 1 0 7 0 3.5 3.5 0 0 0-7 0"
      className="fill-[#E66D17] dark:fill-[#F2C55C]"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M14.854 12.146a.5.5 0 0 1 0 .708l-2 2a.5.5 0 0 1-.708 0l-2-2a.5.5 0 0 1 .708-.708L12 13.293V10.5a.5.5 0 0 1 1 0v2.793l1.146-1.147a.5.5 0 0 1 .708 0"
      className="fill-[#fff] dark:fill-[#1E1F22]"
    />
  </svg>
);

export default TabAlert;
