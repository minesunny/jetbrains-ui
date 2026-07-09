/**
 * Copyright 2000-2024 JetBrains s.r.o. and contributors.
 * Use of this source code is governed by the Apache 2.0 license.
 */
import type { ComponentProps } from 'react';
import { cn } from '@/lib/utils';

export const ChartArea = ({
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
      d="M2 2.5a.5.5 0 0 0-1 0V13a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1H2z"
      className="fill-[#6C707E] dark:fill-[#CED0D6]"
    />
    <path
      d="m2 4.86 2.5 2 4.375-3.5a1 1 0 0 1 1.25 0l4.5 3.6a1 1 0 0 1 .375.78V13H2h12V7.74l-4.5-3.6-4.375 3.5a1 1 0 0 1-1.25 0L2 6.14z"
      className="fill-[#3574F0] dark:fill-[#548AF7]"
    />
    <path
      d="M2 6.14V13h12.5-.5V7.74l-4.5-3.6-4.375 3.5a1 1 0 0 1-1.25 0z"
      className="fill-[#EDF3FF] dark:fill-[#25324D]"
    />
  </svg>
);

export default ChartArea;
