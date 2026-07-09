/**
 * Copyright 2000-2024 JetBrains s.r.o. and contributors.
 * Use of this source code is governed by the Apache 2.0 license.
 */
import type { ComponentProps } from 'react';
import { cn } from '@/lib/utils';

export const Succeded = ({
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
      r="7"
      className="fill-[#55A76A] dark:fill-[#5FAD65]"
    />
    <path
      d="m4.266 8.39 2.541 2.647 4.795-5.201"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="stroke-[#fff]"
    />
  </svg>
);

export default Succeded;
