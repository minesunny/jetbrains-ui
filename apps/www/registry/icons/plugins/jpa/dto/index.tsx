/**
 * Copyright 2000-2024 JetBrains s.r.o. and contributors.
 * Use of this source code is governed by the Apache 2.0 license.
 */
import type { ComponentProps } from 'react';
import { cn } from '@/lib/utils';

export const Dto = ({
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
    <circle
      cx="8"
      cy="8"
      r="6.5"
      className="fill-[#FFF4EB] dark:fill-[#45322B] stroke-[#E66D17] dark:stroke-[#C77D55]"
    />
    <path
      d="M5.5 4.5h2.553q.995 0 1.76.445.77.44 1.195 1.235.43.795.43 1.82t-.43 1.82a3.1 3.1 0 0 1-1.195 1.24q-.765.44-1.76.44H5.5zm2.548 6.085a2.35 2.35 0 0 0 1.23-.32q.534-.325.83-.91T10.403 8t-.295-1.355a2.16 2.16 0 0 0-.83-.905 2.3 2.3 0 0 0-1.23-.325H6.5v5.17z"
      className="fill-[#E66D17] dark:fill-[#C77D55]"
    />
  </svg>
);

export default Dto;
