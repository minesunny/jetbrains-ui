/**
 * Copyright 2000-2024 JetBrains s.r.o. and contributors.
 * Use of this source code is governed by the Apache 2.0 license.
 */
import type { ComponentProps } from 'react';
import { cn } from '@/lib/utils';

export const StatisticsEventLog = ({
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
      d="M1.5 2a.5.5 0 0 1 .5.5v5.793l2.146-2.146a1.5 1.5 0 1 1 2.708 0l2 2a1.5 1.5 0 0 1 1.293 0l3-3a1.5 1.5 0 1 1 .707.707l-3 3a1.5 1.5 0 1 1-2.708 0l-2-2a1.5 1.5 0 0 1-1.293 0L2 9.707V13h12.5a.5.5 0 0 1 0 1H2a1 1 0 0 1-1-1V2.5a.5.5 0 0 1 .5-.5M6 5.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0m4 4a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0m5-5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0"
      className="fill-[#6C707E] dark:fill-[#CED0D6]"
    />
  </svg>
);

export default StatisticsEventLog;
