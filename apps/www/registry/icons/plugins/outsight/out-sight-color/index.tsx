/**
 * Copyright 2000-2024 JetBrains s.r.o. and contributors.
 * Use of this source code is governed by the Apache 2.0 license.
 */
import type { ComponentProps } from 'react';
import { cn } from '@/lib/utils';

export const OutSightColor = ({
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
      d="M13 8a3 3 0 1 1-6 0 3 3 0 0 1 6 0m-1 0a2 2 0 1 1-4 0 2 2 0 0 1 4 0"
      className="fill-[url(#a)]"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M8 13.5c3.5 0 7-2.5 8-5.5-1-3-4.5-5.5-8-5.5S1 5 0 8c1 3 4.5 5.5 8 5.5m-4.366-2.446C2.445 10.227 1.533 9.142 1.066 8c.467-1.142 1.379-2.227 2.568-3.054C4.928 4.046 6.482 3.5 8 3.5s3.072.545 4.366 1.446c1.189.827 2.101 1.912 2.568 3.054-.467 1.142-1.379 2.227-2.568 3.054-1.294.9-2.848 1.446-4.366 1.446s-3.072-.546-4.366-1.446"
      className="fill-[url(#b)]"
    />
  </svg>
);

export default OutSightColor;
