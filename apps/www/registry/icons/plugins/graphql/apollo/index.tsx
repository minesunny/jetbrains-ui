/**
 * Copyright 2000-2024 JetBrains s.r.o. and contributors.
 * Use of this source code is governed by the Apache 2.0 license.
 */
import type { ComponentProps } from 'react';
import { cn } from '@/lib/utils';

export const Apollo = ({
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
      d="M8 2a6 6 0 1 0 4.243 10.243.5.5 0 0 1 .707.707 7 7 0 1 1-1.261-10.9 1 1 0 1 1-.671.763A5.97 5.97 0 0 0 8 2"
      className="fill-[#000] dark:fill-[#fff]"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M7.47 4.98h1.062L10.8 11H9.797l-.53-1.483H6.792l-.49 1.484H5.277zm1.523 3.75L8.09 6.223l-.095-.374-.095.374-.855 2.507z"
      className="fill-[#000] dark:fill-[#fff]"
    />
  </svg>
);

export default Apollo;
