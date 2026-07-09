/**
 * Copyright 2000-2024 JetBrains s.r.o. and contributors.
 * Use of this source code is governed by the Apache 2.0 license.
 */
import type { ComponentProps } from 'react';
import { cn } from '@/lib/utils';

export const ChartStock = ({
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
      d="M1.5 2a.5.5 0 0 1 .5.5V13h12.5a.5.5 0 0 1 0 1H2a1 1 0 0 1-1-1V2.5a.5.5 0 0 1 .5-.5"
      className="fill-[#6C707E] dark:fill-[#CED0D6]"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M8 2a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1zm0 1h1v4H8zM3 5a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1zm2 0H4v5h1zM11 5a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1h-1a1 1 0 0 1-1-1zm2 0h-1v6h1z"
      className="fill-[#3574F0] dark:fill-[#548AF7]"
    />
    <path
      d="M8 3h1v4H8zM5 5H4v5h1zM12 5h1v6h-1z"
      className="fill-[#EDF3FF] dark:fill-[#25324D]"
    />
  </svg>
);

export default ChartStock;
