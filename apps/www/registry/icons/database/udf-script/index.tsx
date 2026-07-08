/**
 * Copyright 2000-2024 JetBrains s.r.o. and contributors.
 * Use of this source code is governed by the Apache 2.0 license.
 */
import type { ComponentProps } from 'react';
import { cn } from '@/lib/utils';

export const UdfScript = ({
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
      d="M11 9h4.5v.945h-3.49V12H15v.945h-2.99V16H11z"
      className="fill-[#3574F0] dark:fill-[#548AF7]"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M10.5 3H4.732c.17.294.268.636.268 1v8a1 1 0 0 0 1 1h4v1H6a2 2 0 0 1-2-2V5H1.5a.5.5 0 0 1-.5-.5V4a2 2 0 0 1 2-2h7.5A2.5 2.5 0 0 1 13 4.5V8h-1V4.5A1.5 1.5 0 0 0 10.5 3M2 4a1 1 0 0 1 2 0z"
      className="fill-[#6C707E] dark:fill-[#CED0D6]"
    />
  </svg>
);

export default UdfScript;
