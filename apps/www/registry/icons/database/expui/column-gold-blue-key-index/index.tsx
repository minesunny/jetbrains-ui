/**
 * Copyright 2000-2024 JetBrains s.r.o. and contributors.
 * Use of this source code is governed by the Apache 2.0 license.
 */
import type { ComponentProps } from 'react';
import { cn } from '@/lib/utils';

export type ColumnGoldBlueKeyIndexProps = Omit<
  ComponentProps<'svg'>,
  'size'
> & {
  size?: 12 | 14 | 16 | 20 | 24;
  mode?: 'light' | 'dark';
};

export const ColumnGoldBlueKeyIndex = ({
  size = 16,
  mode: _mode,
  className,
  'aria-label': ariaLabel,
  ...props
}: ColumnGoldBlueKeyIndexProps) => (
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
      d="M3 3C2.44772 3 2 3.44772 2 4V12C2 12.5523 2.44772 13 3 13H5V11.9494C4.38142 11.3183 4 10.4541 4 9.5C4 8.54635 4.38141 7.68178 5 7.05051V3H3Z"
      className="fill-[#EDF3FF] dark:fill-[#25324D]"
    />
    <path
      d="M6 2V3H13C13.5523 3 14 3.44772 14 4V6.03544C14.3531 6.08595 14.6891 6.18915 15 6.33682V4C15 2.89543 14.1046 2 13 2H6Z"
      className="fill-[#6C707E] dark:fill-[#CED0D6]"
    />
    <path
      d="M6 2H3C1.89543 2 1 2.89543 1 4V12C1 13.1046 1.89543 14 3 14H6V12.6629C5.6252 12.4848 5.28707 12.2422 5 11.9494V13H3C2.44772 13 2 12.5523 2 12V4C2 3.44772 2.44772 3 3 3H5V7.05051C5.28706 6.75757 5.6252 6.51486 6 6.33682V2Z"
      className="fill-[#3574F0] dark:fill-[#548AF7]"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M14 11.95C15.1411 11.7184 16 10.7095 16 9.5C16 8.11929 14.8807 7 13.5 7C12.1193 7 11 8.11929 11 9.5C11 10.7095 11.8589 11.7184 13 11.95V16H14V15H16V14H14V11.95ZM15 9.5C15 10.3284 14.3284 11 13.5 11C12.6716 11 12 10.3284 12 9.5C12 8.67157 12.6716 8 13.5 8C14.3284 8 15 8.67157 15 9.5Z"
      className="fill-[#E66D17] dark:fill-[#F2C55C]"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M8 11.95C9.14112 11.7184 10 10.7095 10 9.5C10 8.11929 8.88071 7 7.5 7C6.11929 7 5 8.11929 5 9.5C5 10.7095 5.85888 11.7184 7 11.95V16H8V15H10V14H8V11.95ZM9 9.5C9 10.3284 8.32843 11 7.5 11C6.67157 11 6 10.3284 6 9.5C6 8.67157 6.67157 8 7.5 8C8.32843 8 9 8.67157 9 9.5Z"
      className="fill-[#3574F0] dark:fill-[#548AF7]"
    />
  </svg>
);

export default ColumnGoldBlueKeyIndex;
