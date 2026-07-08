/**
 * Copyright 2000-2024 JetBrains s.r.o. and contributors.
 * Use of this source code is governed by the Apache 2.0 license.
 */
import type { ComponentProps } from 'react';
import { cn } from '@/lib/utils';

export const CurrentBranchFavorite = ({
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
      d="M7.707 2.293 1.295 8.705a1 1 0 0 0 0 1.414l4.586 4.586a1 1 0 0 0 1.414 0l6.412-6.412A1 1 0 0 0 14 7.586V3a1 1 0 0 0-1-1H8.414a1 1 0 0 0-.707.293M10 8a2 2 0 1 0 0-4 2 2 0 0 0 0 4"
      className="fill-[#FFAF0F] dark:fill-[#F2C55C]"
    />
  </svg>
);

export default CurrentBranchFavorite;
