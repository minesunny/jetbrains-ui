/**
 * Copyright 2000-2024 JetBrains s.r.o. and contributors.
 * Use of this source code is governed by the Apache 2.0 license.
 */
import type { ComponentProps } from 'react';
import { cn } from '@/lib/utils';

export const ChartBar = ({
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
      d="M6 3a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1zm3 0H7v10h2z"
      className="fill-[#3574F0] dark:fill-[#548AF7]"
    />
    <path d="M7 3h2v10H7z" className="fill-[#EDF3FF] dark:fill-[#25324D]" />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12 5a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1zm0 1h2v7h-2zM2 7a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1V8a1 1 0 0 0-1-1zm0 1h2v5H2z"
      className="fill-[#6C707E] dark:fill-[#CED0D6]"
    />
    <path
      d="M14 6h-2v7h2zM4 8H2v5h2z"
      className="fill-[#EBECF0] dark:fill-[#43454A]"
    />
  </svg>
);

export default ChartBar;
