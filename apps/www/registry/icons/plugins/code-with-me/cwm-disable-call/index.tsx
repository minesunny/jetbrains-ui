/**
 * Copyright 2000-2024 JetBrains s.r.o. and contributors.
 * Use of this source code is governed by the Apache 2.0 license.
 */
import type { ComponentProps } from 'react';
import { cn } from '@/lib/utils';

export const CwmDisableCall = ({
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
      d="M13.5 10.736v1.656a1.12 1.12 0 0 1-1.206 1.104C6.778 13.5 2.5 9.182 2.504 3.703A1.12 1.12 0 0 1 3.605 2.5h1.66c.268-.003.528.092.731.267.579.497.951 2.182.808 2.852-.112.523-.64.89-.998 1.247a8.84 8.84 0 0 0 3.319 3.312c.358-.358.725-.884 1.25-.996.672-.143 2.368.23 2.863.813.175.206.268.47.262.74"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="stroke-[#6C707E] dark:stroke-[#CED0D6]"
    />
    <path
      d="m15.5.5-5 5m0-5 5 5"
      strokeLinecap="round"
      className="stroke-[#DB3B4B] dark:stroke-[#DB5C5C]"
    />
  </svg>
);

export default CwmDisableCall;
