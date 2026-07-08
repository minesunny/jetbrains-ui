/**
 * Copyright 2000-2024 JetBrains s.r.o. and contributors.
 * Use of this source code is governed by the Apache 2.0 license.
 */
import type { ComponentProps } from 'react';
import { cn } from '@/lib/utils';

export const Column = ({
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
      d="M1 4C1 2.89543 1.89543 2 3 2H13C14.1046 2 15 2.89543 15 4V12C15 13.1046 14.1046 14 13 14H3C1.89543 14 1 13.1046 1 12V4ZM3 3H5V13H3C2.44772 13 2 12.5523 2 12V4C2 3.44772 2.44772 3 3 3ZM6 3V13H13C13.5523 13 14 12.5523 14 12V4C14 3.44772 13.5523 3 13 3H6Z"
      className="fill-[#6C707E] dark:fill-[#CED0D6]"
    />
    <path
      d="M2 4C2 3.44772 2.44772 3 3 3H5V13H3C2.44772 13 2 12.5523 2 12V4Z"
      className="fill-[#EBECF0] dark:fill-[#43454A]"
    />
  </svg>
);

export default Column;
