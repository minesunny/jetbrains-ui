/**
 * Copyright 2000-2024 JetBrains s.r.o. and contributors.
 * Use of this source code is governed by the Apache 2.0 license.
 */
import type { ComponentProps } from 'react';
import { cn } from '@/lib/utils';

export const Cmake = ({
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
      d="M8 .52 15.385 15 9.23 12.357z"
      className="fill-[url(#a)]"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M5.477 10.757 15.384 15H.615z"
      className="fill-[url(#b)]"
    />
    <path
      d="m8 .52.768 7.385-3.281 2.856-.01-.004L.615 15z"
      className="fill-[url(#c)]"
    />
  </svg>
);

export default Cmake;
