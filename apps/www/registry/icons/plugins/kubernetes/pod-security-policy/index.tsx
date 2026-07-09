/**
 * Copyright 2000-2024 JetBrains s.r.o. and contributors.
 * Use of this source code is governed by the Apache 2.0 license.
 */
import type { ComponentProps } from 'react';
import { cn } from '@/lib/utils';

export const PodSecurityPolicy = ({
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
      d="M9 14.042V12a2 2 0 0 1 1-1.732V10a3 3 0 0 1 4.5-2.599V4.5L8 1.5l-6.5 3v7.02L8 14.5z"
      className="fill-[#EBECF0] dark:fill-[#43454A]"
    />
    <path
      d="M8.21 1.046a.5.5 0 0 0-.42 0l-6.5 3A.5.5 0 0 0 1 4.5v7.02a.5.5 0 0 0 .292.454l6.5 2.98a.5.5 0 0 0 .416 0L9 14.593v-1.1l-1 .458-6-2.75V4.82l6-2.77 6 2.77v2.35c.373.132.711.336 1 .594V4.5a.5.5 0 0 0-.29-.454z"
      className="fill-[#6C707E] dark:fill-[#CED0D6]"
    />
    <path
      d="m8 7.5 4.5-2M8 7.5l-4.5-2m4.5 2v5"
      strokeLinecap="round"
      className="stroke-[#6C707E] dark:stroke-[#CED0D6]"
    />
  </svg>
);

export default PodSecurityPolicy;
