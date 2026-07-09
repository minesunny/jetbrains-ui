/**
 * Copyright 2000-2024 JetBrains s.r.o. and contributors.
 * Use of this source code is governed by the Apache 2.0 license.
 */
import type { ComponentProps } from 'react';
import { cn } from '@/lib/utils';

export const Delete = ({
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
      d="M7 2h2a1 1 0 0 1 1 1H6a1 1 0 0 1 1-1M5 3a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2h2a1 1 0 0 1 1 1v2h-1v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V6H2V4a1 1 0 0 1 1-1zm6 1H3v1h10V4zM4 6h8v7a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1zm2.5 1a.5.5 0 0 0-.5.5v4a.5.5 0 0 0 1 0v-4a.5.5 0 0 0-.5-.5m2.5.5a.5.5 0 0 1 1 0v4a.5.5 0 0 1-1 0z"
      className="fill-[#6C707E] dark:fill-[#CED0D6]"
    />
  </svg>
);

export default Delete;
