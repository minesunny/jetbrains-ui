/**
 * Copyright 2000-2024 JetBrains s.r.o. and contributors.
 * Use of this source code is governed by the Apache 2.0 license.
 */
import type { ComponentProps } from 'react';
import { cn } from '@/lib/utils';

export const CwmPermissionEdit = ({
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
    <rect
      x="2"
      y="12"
      width="8"
      height="1"
      rx=".5"
      className="fill-[#E66D17] dark:fill-[#F2C55C]"
    />
    <rect
      x="2"
      y="6"
      width="8"
      height="1"
      rx=".5"
      className="fill-[#E66D17] dark:fill-[#F2C55C]"
    />
    <rect
      x="2"
      y="9"
      width="12"
      height="1"
      rx=".5"
      className="fill-[#E66D17] dark:fill-[#F2C55C]"
    />
    <rect
      x="2"
      y="3"
      width="12"
      height="1"
      rx=".5"
      className="fill-[#E66D17] dark:fill-[#F2C55C]"
    />
  </svg>
);

export default CwmPermissionEdit;
