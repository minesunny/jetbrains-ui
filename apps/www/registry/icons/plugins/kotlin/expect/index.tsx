/**
 * Copyright 2000-2024 JetBrains s.r.o. and contributors.
 * Use of this source code is governed by the Apache 2.0 license.
 */
import type { ComponentProps } from 'react';
import { cn } from '@/lib/utils';

export const Expect = ({
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
    viewBox="0 0 17 17"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={cn('inline-block shrink-0', className)}
    role={ariaLabel ? 'img' : 'presentation'}
    aria-label={ariaLabel}
    aria-hidden={!ariaLabel}
    {...props}
  >
    <rect
      x=".293"
      y="8.071"
      width="11"
      height="11"
      rx=".5"
      transform="rotate(-45 .293 8.071)"
      className="fill-[#FFF4EB] dark:fill-[#45322B] stroke-[#E66D17] dark:stroke-[#C77D55]"
    />
    <path
      d="M5.67 11.414h4.8v-.875H6.617V8.484h3.432v-.88H6.617V5.596h3.757v-.875H5.67z"
      className="fill-[#E66D17] dark:fill-[#E08855]"
    />
  </svg>
);

export default Expect;
