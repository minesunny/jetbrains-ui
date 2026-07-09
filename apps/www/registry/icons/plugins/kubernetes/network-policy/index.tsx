/**
 * Copyright 2000-2024 JetBrains s.r.o. and contributors.
 * Use of this source code is governed by the Apache 2.0 license.
 */
import type { ComponentProps } from 'react';
import { cn } from '@/lib/utils';

export const NetworkPolicy = ({
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
    <path d="M11 12H15V15H11z" className="fill-[#EDF3FF] dark:fill-[#25324D]" />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M15 11v-1a2 2 0 1 0-4 0v1a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1m-3-1a1 1 0 1 1 2 0v1h-2zm-1 5v-3h4v3z"
      className="fill-[#3574F0] dark:fill-[#548AF7]"
    />
    <path
      d="M11.146 2.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L12 3.707v3.464a3 3 0 0 0-1 .593V3.707L8.854 5.854a.5.5 0 1 1-.708-.708zM4.5 5a.5.5 0 0 1 .5.5v6.793l2.146-2.147a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 0 1 .708-.708L4 12.293V5.5a.5.5 0 0 1 .5-.5"
      className="fill-[#6C707E] dark:fill-[#CED0D6]"
    />
  </svg>
);

export default NetworkPolicy;
