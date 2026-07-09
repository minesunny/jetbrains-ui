/**
 * Copyright 2000-2024 JetBrains s.r.o. and contributors.
 * Use of this source code is governed by the Apache 2.0 license.
 */
import type { ComponentProps } from 'react';
import { cn } from '@/lib/utils';

export const DropTable = ({
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
      className="fill-[#DB3B4B] dark:hidden"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M3 2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h6.879l1-1-.879-.879V13H6V6h4v3.085a1.5 1.5 0 0 1 1 0V6h3v3.879l.44-.44c.163-.163.355-.281.56-.354V4a2 2 0 0 0-2-2zm7 1H6v2h4zM3 3h2v2H2V4a1 1 0 0 1 1-1m-1 9V6h3v7H3a1 1 0 0 1-1-1m12-8v1h-3V3h2a1 1 0 0 1 1 1"
      className="fill-[#6C707E] dark:hidden"
    />
    <path
      d="M10.146 10.146a.5.5 0 0 1 .708 0L13 12.293l2.146-2.147a.5.5 0 0 1 .708.708L13.707 13l2.147 2.146a.5.5 0 0 1-.708.708L13 13.707l-2.146 2.147a.5.5 0 0 1-.708-.708L12.293 13l-2.147-2.146a.5.5 0 0 1 0-.708"
      className="fill-[#DB5C5C] hidden dark:block"
    />
    <path
      d="M3 2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h6.879l1-1-.879-.879V13H6V6h4v3.085a1.5 1.5 0 0 1 1 0V6h3v3.879l.44-.44c.163-.163.355-.281.56-.354V4a2 2 0 0 0-2-2zm7 1H6v2h4zM3 3h2v2H2V4a1 1 0 0 1 1-1m-1 9V6h3v7H3a1 1 0 0 1-1-1m12-8v1h-3V3h2a1 1 0 0 1 1 1"
      className="fill-[#CED0D6] hidden dark:block"
    />
  </svg>
);

export default DropTable;
