/**
 * Copyright 2000-2024 JetBrains s.r.o. and contributors.
 * Use of this source code is governed by the Apache 2.0 license.
 */
import type { ComponentProps } from 'react';
import { cn } from '@/lib/utils';

export const KotlinFieldValue = ({
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
      x="2.5"
      y="2.5"
      width="11"
      height="11"
      rx="1.5"
      className="fill-[#FAF5FF] dark:fill-[#2F2936] stroke-[#834DF0] dark:stroke-[#A571E6]"
    />
    <path
      d="M7.547 11h.92l2.355-6H9.791L8.045 9.705 6.24 5H5.18z"
      className="fill-[#834DF0] dark:fill-[#A571E6]"
    />
  </svg>
);

export default KotlinFieldValue;
