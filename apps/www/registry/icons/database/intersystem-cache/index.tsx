/**
 * Copyright 2000-2024 JetBrains s.r.o. and contributors.
 * Use of this source code is governed by the Apache 2.0 license.
 */
import type { ComponentProps } from 'react';
import { cn } from '@/lib/utils';

export const IntersystemCache = ({
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
      d="M7.01 2.283 5 1.264v12.68l3.99 2.009v-2.236l-1.98-.99z"
      className="fill-[#2E2A94] dark:fill-[#4387FB]"
    />
    <path
      d="m8.99 13.717 2.01.99V2.028L7.01.048v2.235l1.98.99z"
      className="fill-[#00B1A9] dark:fill-[#248996]"
    />
  </svg>
);

export default IntersystemCache;
