/**
 * Copyright 2000-2024 JetBrains s.r.o. and contributors.
 * Use of this source code is governed by the Apache 2.0 license.
 */
import type { ComponentProps } from 'react';
import { cn } from '@/lib/utils';

export const ShowWriteAccess = ({
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
      d="M5.854 11.354a.5.5 0 0 1-.708-.708L7.293 8.5H1.5a.5.5 0 0 1 0-1h5.793L5.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708z"
      className="fill-[#6C707E] dark:fill-[#CED0D6]"
    />
    <path
      d="m8.857 6.236 1.709-2.984a.5.5 0 0 1 .867 0l2.434 4.25c.176.307.176.686 0 .994l-2.434 4.252a.5.5 0 0 1-.867 0L8.857 9.764l-.732.732 1.573 2.749a1.5 1.5 0 0 0 2.603 0l2.434-4.251a2 2 0 0 0 0-1.99L12.3 2.754a1.5 1.5 0 0 0-2.603 0L8.124 5.504z"
      className="fill-[#DB3B4B] dark:fill-[#DB5C5C]"
    />
  </svg>
);

export default ShowWriteAccess;
