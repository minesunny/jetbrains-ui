/**
 * Copyright 2000-2024 JetBrains s.r.o. and contributors.
 * Use of this source code is governed by the Apache 2.0 license.
 */
import type { ComponentProps } from 'react';
import { cn } from '@/lib/utils';

export const StaticMark = ({
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
      d="m.294 12.709 2.997 2.997a1.003 1.003 0 0 0 1.418 0l2.997-2.997a1.003 1.003 0 0 0 0-1.418L4.71 8.294a1.003 1.003 0 0 0-1.418 0L.294 11.29a1.003 1.003 0 0 0 0 1.418"
      className="fill-[#EBECF0] dark:fill-[#43454A]"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M1.003 12 4 14.997 6.997 12 4 9.003zm2.288 3.706L.294 12.71a1.003 1.003 0 0 1 0-1.418L3.29 8.294a1.003 1.003 0 0 1 1.418 0l2.997 2.997a1.003 1.003 0 0 1 0 1.418L4.71 15.706a1.003 1.003 0 0 1-1.418 0"
      className="fill-[#6C707E] dark:fill-[#CED0D6]"
    />
  </svg>
);

export default StaticMark;
