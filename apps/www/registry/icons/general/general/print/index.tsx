/**
 * Copyright 2000-2024 JetBrains s.r.o. and contributors.
 * Use of this source code is governed by the Apache 2.0 license.
 */
import type { ComponentProps } from 'react';
import { cn } from '@/lib/utils';

export const Print = ({
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
    <path d="M13 7h-1v1h1z" className="fill-[#6C707E] dark:fill-[#CED0D6]" />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M4.5 2a.5.5 0 0 0-.5.5V5h-.5A2.5 2.5 0 0 0 1 7.5v5a.5.5 0 0 0 .5.5H4v.5a.5.5 0 0 0 .5.5h7a.5.5 0 0 0 .5-.5V13h2.5a.5.5 0 0 0 .5-.5v-5A2.5 2.5 0 0 0 12.5 5H12V2.5a.5.5 0 0 0-.5-.5zM11 5H5V3h6zm0 8H5v-3h6zm1-4v3h2V7.5A1.5 1.5 0 0 0 12.5 6h-9A1.5 1.5 0 0 0 2 7.5V12h2V9z"
      className="fill-[#6C707E] dark:fill-[#CED0D6]"
    />
  </svg>
);

export default Print;
