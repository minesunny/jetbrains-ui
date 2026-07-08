/**
 * Copyright 2000-2024 JetBrains s.r.o. and contributors.
 * Use of this source code is governed by the Apache 2.0 license.
 */
import type { ComponentProps } from 'react';
import { cn } from '@/lib/utils';

export type ColumnBlueKeyProps = Omit<ComponentProps<'svg'>, 'size'> & {
  size?: 12 | 14 | 16 | 20 | 24;
  mode?: 'light' | 'dark';
};

export const ColumnBlueKey = ({
  size = 16,
  mode: _mode,
  className,
  'aria-label': ariaLabel,
  ...props
}: ColumnBlueKeyProps) => (
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
      className="fill-[#EBECF0] dark:fill-[#43454A]"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M14 11.95C15.1411 11.7184 16 10.7095 16 9.5C16 8.11929 14.8807 7 13.5 7C12.1193 7 11 8.11929 11 9.5C11 10.7095 11.8589 11.7184 13 11.95V16H14V15H16V14H14V11.95ZM15 9.5C15 10.3284 14.3284 11 13.5 11C12.6716 11 12 10.3284 12 9.5C12 8.67157 12.6716 8 13.5 8C14.3284 8 15 8.67157 15 9.5Z"
      className="fill-[#3574F0] dark:fill-[#548AF7]"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M1 4C1 2.89543 1.89543 2 3 2H13C14.1046 2 15 2.89543 15 4V6.33682C14.6891 6.18915 14.3531 6.08595 14 6.03544V4C14 3.44772 13.5523 3 13 3H6V13H12V14H3C1.89543 14 1 13.1046 1 12V4ZM3 3H5V13H3C2.44772 13 2 12.5523 2 12V4C2 3.44772 2.44772 3 3 3Z"
      className="fill-[#6C707E] dark:fill-[#CED0D6]"
    />
  </svg>
);

export default ColumnBlueKey;
