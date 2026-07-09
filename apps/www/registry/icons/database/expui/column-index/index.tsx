/**
 * Copyright 2000-2024 JetBrains s.r.o. and contributors.
 * Use of this source code is governed by the Apache 2.0 license.
 */
import type { ComponentProps } from 'react';
import { cn } from '@/lib/utils';

export const ColumnIndex = ({
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
      d="M2 4C2 3.44772 2.44772 3 3 3H5V13H3C2.44772 13 2 12.5523 2 12V4Z"
      className="fill-[#EDF3FF] dark:fill-[#25324D]"
    />
    <path
      d="M6 14H13C14.1046 14 15 13.1046 15 12V4C15 2.89543 14.1046 2 13 2H6V3H13C13.5523 3 14 3.44772 14 4V12C14 12.5523 13.5523 13 13 13H6V14Z"
      className="fill-[#6C707E] dark:fill-[#CED0D6]"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M6 2H3C1.89543 2 1 2.89543 1 4V12C1 13.1046 1.89543 14 3 14H6V2ZM5 3H3C2.44772 3 2 3.44772 2 4V12C2 12.5523 2.44772 13 3 13H5V3Z"
      className="fill-[#3574F0] dark:fill-[#548AF7]"
    />
  </svg>
);

export default ColumnIndex;
