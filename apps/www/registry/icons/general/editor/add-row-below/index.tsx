/**
 * Copyright 2000-2024 JetBrains s.r.o. and contributors.
 * Use of this source code is governed by the Apache 2.0 license.
 */
import type { ComponentProps } from 'react';
import { cn } from '@/lib/utils';

export const AddRowBelow = ({
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
      d="M2 6a2 2 0 0 0 2 2h7a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2zm1-3v3a1 1 0 0 0 1 1h3V2H4a1 1 0 0 0-1 1m8 4H8V2h3a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1"
      className="fill-[#6C707E] dark:fill-[#CED0D6]"
    />
    <path
      d="M8 10.5a.5.5 0 0 0-1 0V12H5.5a.5.5 0 0 0 0 1H7v1.5a.5.5 0 0 0 1 0V13h1.5a.5.5 0 0 0 0-1H8z"
      className="fill-[#6C707E] dark:fill-[#CED0D6]"
    />
  </svg>
);

export default AddRowBelow;
