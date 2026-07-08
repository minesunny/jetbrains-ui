/**
 * Copyright 2000-2024 JetBrains s.r.o. and contributors.
 * Use of this source code is governed by the Apache 2.0 license.
 */
import type { ComponentProps } from 'react';
import { cn } from '@/lib/utils';

export const Warning = ({
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
      d="M1.276 10.863 6.303 1.99C7.05.67 8.949.67 9.696 1.989l5.027 8.874c.793 1.4-.218 3.137-1.827 3.137H3.103c-1.609 0-2.62-1.736-1.827-3.137"
      className="fill-[#FFAF0F] dark:fill-[#F2C55C]"
    />
    <path
      d="M9 5a1 1 0 0 0-2 0v2.5a1 1 0 1 0 2 0zM8 12a1 1 0 1 0 0-2 1 1 0 0 0 0 2"
      className="fill-[#fff] dark:fill-[#5E4D33]"
    />
  </svg>
);

export default Warning;
