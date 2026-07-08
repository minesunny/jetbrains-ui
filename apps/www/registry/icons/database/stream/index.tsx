/**
 * Copyright 2000-2024 JetBrains s.r.o. and contributors.
 * Use of this source code is governed by the Apache 2.0 license.
 */
import type { ComponentProps } from 'react';
import { cn } from '@/lib/utils';

export const Stream = ({
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
      d="M1.124 4.17a.5.5 0 0 1 .705-.046L6.26 8l-4.43 3.876a.5.5 0 0 1-.658-.752L4.74 8 1.17 4.876a.5.5 0 0 1-.047-.705"
      className="fill-[#6C707E] dark:fill-[#CED0D6]"
    />
    <path
      d="M5.624 4.17a.5.5 0 0 1 .705-.046L10.76 8l-4.43 3.876a.5.5 0 0 1-.658-.752L9.24 8 5.67 4.876a.5.5 0 0 1-.047-.705"
      className="fill-[#6C707E] dark:fill-[#CED0D6]"
    />
    <path
      d="M10.83 4.124a.5.5 0 0 0-.66.752L13.74 8l-3.57 3.124a.5.5 0 1 0 .66.752L15.26 8z"
      className="fill-[#6C707E] dark:fill-[#CED0D6]"
    />
  </svg>
);

export default Stream;
