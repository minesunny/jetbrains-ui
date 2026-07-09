/**
 * Copyright 2000-2024 JetBrains s.r.o. and contributors.
 * Use of this source code is governed by the Apache 2.0 license.
 */
import type { ComponentProps } from 'react';
import { cn } from '@/lib/utils';

export const ChartAreaRange = ({
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
      d="m9.5 3.14 4.5 3.6v3.72l-3.875-3.1a1 1 0 0 0-1.25 0L4.5 10.86l-2.5-2V5.14l1.875 1.5a1 1 0 0 0 1.25 0z"
      className="fill-[#EDF3FF] dark:fill-[#25324D]"
    />
    <path
      d="M2 2.5a.5.5 0 0 0-1 0V13a1 1 0 0 0 1 1h12.5a.5.5 0 0 0 0-1H2z"
      className="fill-[#6C707E] dark:fill-[#CED0D6]"
    />
    <path
      d="m2 3.86 2.5 2 4.375-3.5a1 1 0 0 1 1.25 0l4.687 3.75A.5.5 0 0 1 15 6.5v5a.5.5 0 0 1-.812.39L9.5 8.14l-4.375 3.5a1 1 0 0 1-1.25 0L2 10.14V8.86l2.5 2 4.375-3.5a1 1 0 0 1 1.25 0L14 10.46V6.74l-4.5-3.6-4.375 3.5a1 1 0 0 1-1.25 0L2 5.14z"
      className="fill-[#3574F0] dark:fill-[#548AF7]"
    />
  </svg>
);

export default ChartAreaRange;
