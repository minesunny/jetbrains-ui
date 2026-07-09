/**
 * Copyright 2000-2024 JetBrains s.r.o. and contributors.
 * Use of this source code is governed by the Apache 2.0 license.
 */
import type { ComponentProps } from 'react';
import { cn } from '@/lib/utils';

export const Parameter = ({
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
      cx={8}
      cy={8}
      r={6.5}
      className="fill-[#FFF4EB] dark:fill-[#45322B] stroke-[#E66D17] dark:stroke-[#C77D55]"
    />
    <path
      d="M8.57 5c-.843 0-1.507.371-1.887.998v-.875H5.7V12h1.003V9.52c.384.607 1.039.965 1.868.965 1.458 0 2.476-1.115 2.476-2.742S10.03 5 8.571 5m-.209 4.585c-.977 0-1.658-.752-1.658-1.842S7.383 5.9 8.361 5.9c.972 0 1.643.752 1.643 1.842s-.67 1.842-1.643 1.842"
      className="fill-[#E66D17] dark:fill-[#C77D55]"
    />
  </svg>
);

export default Parameter;
