/**
 * Copyright 2000-2024 JetBrains s.r.o. and contributors.
 * Use of this source code is governed by the Apache 2.0 license.
 */
import type { ComponentProps } from 'react';
import { cn } from '@/lib/utils';

export const JsonDocument = ({
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
      d="M3 5.414V13a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2H7.414a1 1 0 0 0-.707.293L3.293 4.707A1 1 0 0 0 3 5.414M12 3a1 1 0 0 0-1-1H8v2a2 2 0 0 1-2 2H4v7a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1zm-5-.586L4.414 5H6a1 1 0 0 0 1-1z"
      className="fill-[#6C707E] dark:fill-[#CED0D6]"
    />
    <path
      d="M11 2a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V6h2a2 2 0 0 0 2-2V2z"
      className="fill-[#EBECF0] dark:fill-[#43454A]"
    />
    <path
      d="M4.414 5 7 2.414V4q0 .103-.02.202A1 1 0 0 1 6 5z"
      className="fill-[#EBECF0] dark:fill-[#43454A]"
    />
  </svg>
);

export default JsonDocument;
