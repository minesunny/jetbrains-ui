/**
 * Copyright 2000-2024 JetBrains s.r.o. and contributors.
 * Use of this source code is governed by the Apache 2.0 license.
 */
import type { ComponentProps } from 'react';
import { cn } from '@/lib/utils';

export const Gift = ({
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
      d="M2 5h11v1H2zM4 7h7v6H4z"
      className="fill-[#EDF3FF] dark:fill-[#25324D]"
    />
    <path
      d="M7.5 4V3A1.5 1.5 0 1 0 6 4.5h1a.5.5 0 0 0 .5-.5ZM7.5 3v1.5H9A1.5 1.5 0 1 0 7.5 3Z"
      className="stroke-[#3574F0] dark:stroke-[#548AF7]"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M13 7h-1v6.5a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5V7H2a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h11a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1m-9 6V7h7v6zm9-7V5H2v1z"
      className="fill-[#3574F0] dark:fill-[#548AF7]"
    />
    <path d="M7.5 4.5V13" className="stroke-[#3574F0] dark:stroke-[#548AF7]" />
  </svg>
);

export default Gift;
