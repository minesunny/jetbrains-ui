/**
 * Copyright 2000-2024 JetBrains s.r.o. and contributors.
 * Use of this source code is governed by the Apache 2.0 license.
 */
import type { ComponentProps } from 'react';
import { cn } from '@/lib/utils';

export const ChartHistogram = ({
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
      d="M4 3a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v11H4zm3 0H5v10h2z"
      className="fill-[#3574F0] dark:fill-[#548AF7]"
    />
    <path d="M5 3h2v10H5z" className="fill-[#EDF3FF] dark:fill-[#25324D]" />
    <path
      d="M8 6v7h2V6zM11 13V9h2v4zM4 13V8H2v5z"
      className="fill-[#EBECF0] dark:fill-[#43454A]"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M13 14H2a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1h2v1H2v5h8V6H8V5h2a1 1 0 0 1 1 1v2h2a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1m-2-1V9h2v4z"
      className="fill-[#6C707E] dark:fill-[#CED0D6]"
    />
  </svg>
);

export default ChartHistogram;
