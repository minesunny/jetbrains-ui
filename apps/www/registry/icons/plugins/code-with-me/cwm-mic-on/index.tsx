/**
 * Copyright 2000-2024 JetBrains s.r.o. and contributors.
 * Use of this source code is governed by the Apache 2.0 license.
 */
import type { ComponentProps } from 'react';
import { cn } from '@/lib/utils';

export const CwmMicOn = ({
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
      d="M5 4a3 3 0 0 1 6 0v4a3 3 0 0 1-6 0zm5 0v4a2 2 0 1 1-4 0V4a2 2 0 1 1 4 0"
      className="fill-[#6C707E] dark:fill-[#CED0D6]"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M4 8a.5.5 0 0 0-1 0 5 5 0 0 0 3 4.584v.916A1.5 1.5 0 0 0 7.5 15h1a1.5 1.5 0 0 0 1.5-1.5v-.916A5 5 0 0 0 13 8a.5.5 0 0 0-1 0 4.002 4.002 0 0 1-5.333 3.773A4 4 0 0 1 4 8m3 5.5v-.6a5 5 0 0 0 2 0v.6a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5"
      className="fill-[#6C707E] dark:fill-[#CED0D6]"
    />
    <path
      d="M10 8V4a2 2 0 1 0-4 0v4a2 2 0 1 0 4 0M7 12.9v.6a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-.6a5 5 0 0 1-2 0"
      className="fill-[#EBECF0] dark:fill-[#43454A]"
    />
  </svg>
);

export default CwmMicOn;
