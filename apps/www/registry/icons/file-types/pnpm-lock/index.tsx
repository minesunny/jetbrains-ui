/**
 * Copyright 2000-2024 JetBrains s.r.o. and contributors.
 * Use of this source code is governed by the Apache 2.0 license.
 */
import type { ComponentProps } from 'react';
import { cn } from '@/lib/utils';

export const PnpmLock = ({
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
    <path d="M11 12H15V15H11z" className="fill-[#EBECF0] dark:fill-[#43454A]" />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M15 11v-1a2 2 0 1 0-4 0v1a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1m-3-1a1 1 0 1 1 2 0v1h-2zm-1 5v-3h4v3z"
      className="fill-[#6C707E] dark:fill-[#CED0D6]"
    />
    <path
      d="M6 6h3v3H6zM6 10h3v3H6zM2 10h3v3H2z"
      className="fill-[#6C707E] dark:fill-[#CED0D6]"
    />
    <path
      d="M2 2h3v3H2zM6 2h3v3H6zM10 2h3v3h-3zM10 6h3v1a3 3 0 0 0-2.83 2H10z"
      className="fill-[#FFAF0F] dark:fill-[#F2C55C]"
    />
  </svg>
);

export default PnpmLock;
