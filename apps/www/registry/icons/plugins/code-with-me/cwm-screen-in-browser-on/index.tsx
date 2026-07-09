/**
 * Copyright 2000-2024 JetBrains s.r.o. and contributors.
 * Use of this source code is governed by the Apache 2.0 license.
 */
import type { ComponentProps } from 'react';
import { cn } from '@/lib/utils';

export const CwmScreenInBrowserOn = ({
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
      d="M8.354 5.146a.5.5 0 0 0-.708 0l-2.5 2.5a.5.5 0 1 0 .708.708L8 6.207l2.146 2.147a.5.5 0 0 0 .708-.708z"
      className="fill-[#3574F0] dark:fill-[#548AF7]"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M14 4a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2zm-1 6V4a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1"
      className="fill-[#3574F0] dark:fill-[#548AF7]"
    />
    <path
      d="M4 13.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5"
      className="fill-[#3574F0] dark:fill-[#548AF7]"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M13 10V4a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1M8.354 5.146a.5.5 0 0 0-.708 0l-2.5 2.5a.5.5 0 0 0 .708.708L8 6.207l2.146 2.147a.5.5 0 0 0 .708-.708z"
      className="fill-[#EDF3FF] dark:fill-[#25324D]"
    />
  </svg>
);

export default CwmScreenInBrowserOn;
