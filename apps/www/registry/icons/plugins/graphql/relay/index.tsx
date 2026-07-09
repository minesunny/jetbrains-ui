/**
 * Copyright 2000-2024 JetBrains s.r.o. and contributors.
 * Use of this source code is governed by the Apache 2.0 license.
 */
import type { ComponentProps } from 'react';
import { cn } from '@/lib/utils';

export const Relay = ({
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
      d="M3.915 4a1.5 1.5 0 1 1 0-1H9.5a2.5 2.5 0 0 1 0 5h-3a1.5 1.5 0 1 0 0 3h5.585a1.5 1.5 0 1 1 0 1H6.5a2.5 2.5 0 0 1 0-5h3a1.5 1.5 0 0 0 0-3z"
      className="fill-[#E66D17] dark:fill-[#C77D55]"
    />
  </svg>
);

export default Relay;
