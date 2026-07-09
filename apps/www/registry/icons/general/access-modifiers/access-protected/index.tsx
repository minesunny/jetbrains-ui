/**
 * Copyright 2000-2024 JetBrains s.r.o. and contributors.
 * Use of this source code is governed by the Apache 2.0 license.
 */
import type { ComponentProps } from 'react';
import { cn } from '@/lib/utils';

export const AccessProtected = ({
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
      fillRule="evenodd"
      clipRule="evenodd"
      d="M8.95 8a2.5 2.5 0 1 1 0-1h2.55a.5.5 0 0 1 0 1H11v1.5a.5.5 0 0 1-1 0V8zM6.5 9a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3"
      className="fill-[#E66D17] dark:fill-[#F2C55C]"
    />
  </svg>
);

export default AccessProtected;
