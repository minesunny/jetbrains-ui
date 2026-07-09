/**
 * Copyright 2000-2024 JetBrains s.r.o. and contributors.
 * Use of this source code is governed by the Apache 2.0 license.
 */
import type { ComponentProps } from 'react';
import { cn } from '@/lib/utils';

export const West = ({
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
      d="m4 12-3 1 1.907 2z"
      className="fill-[#7929D2] dark:fill-[#AF7FE4]"
    />
    <path d="m4 12 6.5-6.5L14 10z" className="fill-[url(#a)]" />
    <path d="M4 12 6 2l4.5 3.5z" className="fill-[url(#b)]" />
    <path d="M6 2h8l-3.5 3.5z" className="fill-[url(#c)]" />
    <path d="M14 10V2l-3.5 3.5z" className="fill-[url(#d)]" />
  </svg>
);

export default West;
