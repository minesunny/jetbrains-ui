/**
 * Copyright 2000-2024 JetBrains s.r.o. and contributors.
 * Use of this source code is governed by the Apache 2.0 license.
 */
import type { ComponentProps } from 'react';
import { cn } from '@/lib/utils';

export const Package = ({
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
      d="m8 7.5 6.5-3v7.02L8 14.5zM8 7.5l-6.5-3v7.02L8 14.5z"
      className="fill-[#EDF3FF] dark:fill-[#25324D]"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M14.5 4.5 8 1.5l-6.5 3 6.5 3z"
      className="fill-[#EDF3FF] dark:fill-[#25324D]"
    />
    <path
      d="m8 7.5 6.5-3M8 7.5v7m0-7-6.5-3m13 0v7.02L8 14.5m6.5-10L8 1.5l-6.5 3m6.5 10-6.5-2.98V4.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="stroke-[#3574F0] dark:stroke-[#548AF7]"
    />
  </svg>
);

export default Package;
