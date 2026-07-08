/**
 * Copyright 2000-2024 JetBrains s.r.o. and contributors.
 * Use of this source code is governed by the Apache 2.0 license.
 */
import type { ComponentProps } from 'react';
import { cn } from '@/lib/utils';

export const AssemblerGo = ({
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
    viewBox="0 0 14 14"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={cn('inline-block shrink-0', className)}
    role={ariaLabel ? 'img' : 'presentation'}
    aria-label={ariaLabel}
    aria-hidden={!ariaLabel}
    {...props}
  >
    <path
      d="M3 3v8a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2"
      className="fill-[#EDF3FF] dark:fill-[#25324D]"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M4 3v8a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1m-1 8V3a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2"
      className="fill-[#3574F0] dark:fill-[#548AF7]"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M0 3.5A.5.5 0 0 1 .5 3H3v1H.5a.5.5 0 0 1-.5-.5M11 3h2.5a.5.5 0 0 1 0 1H11zM0 7a.5.5 0 0 1 .5-.5H3v1H.5A.5.5 0 0 1 0 7m11-.5h2.5a.5.5 0 0 1 0 1H11zm-11 4a.5.5 0 0 1 .5-.5H3v1H.5a.5.5 0 0 1-.5-.5m11-.5h2.5a.5.5 0 0 1 0 1H11z"
      className="fill-[#6C707E] dark:fill-[#CED0D6]"
    />
  </svg>
);

export default AssemblerGo;
