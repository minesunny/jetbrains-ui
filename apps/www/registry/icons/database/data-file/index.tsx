/**
 * Copyright 2000-2024 JetBrains s.r.o. and contributors.
 * Use of this source code is governed by the Apache 2.0 license.
 */
import type { ComponentProps } from 'react';
import { cn } from '@/lib/utils';

export const DataFile = ({
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
      d="M10 9a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1v-5a1 1 0 0 0-1-1zm0 2v-1h2v1zm0 1v3h2v-3zm3 3h2v-3h-2zm2-4v-1h-2v1z"
      className="fill-[#3574F0] dark:fill-[#548AF7]"
    />
    <path
      d="M3 13V5.414a1 1 0 0 1 .293-.707l3.414-3.414A1 1 0 0 1 7.414 1H11a2 2 0 0 1 2 2v5h-3a2 2 0 0 0-2 2v5H5a2 2 0 0 1-2-2"
      className="fill-[#EBECF0] dark:fill-[#43454A]"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M3 13V5.414a1 1 0 0 1 .293-.707l3.414-3.414A1 1 0 0 1 7.414 1H11a2 2 0 0 1 2 2v5h-1V3a1 1 0 0 0-1-1H8v2a2 2 0 0 1-2 2H4v7a1 1 0 0 0 1 1h3v1H5a2 2 0 0 1-2-2m1.414-8L7 2.414V4a1 1 0 0 1-1 1z"
      className="fill-[#6C707E] dark:fill-[#CED0D6]"
    />
  </svg>
);

export default DataFile;
