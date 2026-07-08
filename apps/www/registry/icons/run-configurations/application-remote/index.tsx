/**
 * Copyright 2000-2024 JetBrains s.r.o. and contributors.
 * Use of this source code is governed by the Apache 2.0 license.
 */
import type { ComponentProps } from 'react';
import { cn } from '@/lib/utils';

export const ApplicationRemote = ({
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
      d="M11 10.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-1 0v-2.793l-4.146 4.147a.5.5 0 0 1-.708-.708L14.293 11H11.5a.5.5 0 0 1-.5-.5"
      className="fill-[#3574F0] dark:fill-[#548AF7]"
    />
    <path
      d="M1 4a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v5h-3.5a1.5 1.5 0 0 0 0 3h.379l-2 2H3a2 2 0 0 1-2-2z"
      className="fill-[#EBECF0] dark:fill-[#43454A]"
    />
    <path
      d="M4 5.5h1M7 5.5h1"
      strokeLinecap="round"
      className="stroke-[#6C707E] dark:stroke-[#CED0D6]"
    />
    <path
      d="M13 3H3a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h7.879l-1 1H3a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v5h-1V4a1 1 0 0 0-1-1"
      className="fill-[#6C707E] dark:fill-[#CED0D6]"
    />
  </svg>
);

export default ApplicationRemote;
