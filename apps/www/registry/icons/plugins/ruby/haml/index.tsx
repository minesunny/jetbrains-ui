/**
 * Copyright 2000-2024 JetBrains s.r.o. and contributors.
 * Use of this source code is governed by the Apache 2.0 license.
 */
import type { ComponentProps } from 'react';
import { cn } from '@/lib/utils';

export const Haml = ({
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
      d="m11.804 2 2.12 2.121-.763.764a3.75 3.75 0 0 1-3.66 6.04V14H6.499V8.621L2 4.121l2.121-2.12 3.841 3.84 2.274-2.274.014-.067h.053zM9.5 9.896a2.752 2.752 0 0 0 2.948-4.298L9.5 8.546z"
      className="fill-[#FFAF0F] dark:fill-[#F2C55C]"
    />
  </svg>
);

export default Haml;
