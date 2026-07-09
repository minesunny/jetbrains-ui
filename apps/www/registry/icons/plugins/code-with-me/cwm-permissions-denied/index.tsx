/**
 * Copyright 2000-2024 JetBrains s.r.o. and contributors.
 * Use of this source code is governed by the Apache 2.0 license.
 */
import type { ComponentProps } from 'react';
import { cn } from '@/lib/utils';

export const CwmPermissionsDenied = ({
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
      d="M10.146 10.146a.5.5 0 0 1 .708 0L13 12.293l2.146-2.147a.5.5 0 0 1 .708.708L13.707 13l2.147 2.146a.5.5 0 0 1-.708.708L13 13.707l-2.146 2.147a.5.5 0 0 1-.708-.708L12.293 13l-2.147-2.146a.5.5 0 0 1 0-.708"
      className="fill-[#DB3B4B] dark:fill-[#DB5C5C]"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M5 11.5A4 4 0 0 0 8.969 8H11v1.085c.205.073.397.19.56.354l.44.44V8h1v2.5c0 .107.034.206.091.288l.909-.91V8h.5a.5.5 0 0 0 0-1H8.969A4 4 0 1 0 5 11.5m3-4a3 3 0 1 1-6 0 3 3 0 0 1 6 0"
      className="fill-[#6C707E] dark:fill-[#CED0D6]"
    />
  </svg>
);

export default CwmPermissionsDenied;
