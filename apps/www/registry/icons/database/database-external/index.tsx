/**
 * Copyright 2000-2024 JetBrains s.r.o. and contributors.
 * Use of this source code is governed by the Apache 2.0 license.
 */
import type { ComponentProps } from 'react';
import { cn } from '@/lib/utils';

export const DatabaseExternal = ({
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
      className="fill-[#6C707E] dark:fill-[#CED0D6]"
    />
    <path
      d="M2 12V6a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v3h-.5a1.5 1.5 0 0 0 0 3h.379l-2 2H4a2 2 0 0 1-2-2"
      className="fill-[#EDF3FF] dark:fill-[#25324D]"
    />
    <path
      d="M5.5 2a.5.5 0 0 0 0 1H12a1 1 0 0 1 1 1v5h1V4a2 2 0 0 0-2-2z"
      className="fill-[#3574F0] dark:fill-[#548AF7]"
    />
    <path
      d="m10.879 13-1 1H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v3h-.5q-.264.001-.5.085V6a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1z"
      className="fill-[#3574F0] dark:fill-[#548AF7]"
    />
  </svg>
);

export default DatabaseExternal;
