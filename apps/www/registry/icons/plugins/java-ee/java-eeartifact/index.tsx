/**
 * Copyright 2000-2024 JetBrains s.r.o. and contributors.
 * Use of this source code is governed by the Apache 2.0 license.
 */
import type { ComponentProps } from 'react';
import { cn } from '@/lib/utils';

export const JavaEeartifact = ({
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
      d="M3.294 10.709 1.293 8.708a1 1 0 0 1 0-1.414l2-2.001a1 1 0 0 1 1.415 0l2 2a1 1 0 0 1 0 1.415l-2 2a1 1 0 0 1-1.414 0"
      className="fill-[#EDF3FF] dark:fill-[#25324D]"
    />
    <path
      d="m5.293 4.708 2 2a1 1 0 0 0 1.415 0l2-2a1 1 0 0 0 0-1.414l-2-2.001a1 1 0 0 0-1.414 0l-2.001 2a1 1 0 0 0 0 1.415"
      className="fill-[#EBECF0] dark:fill-[#43454A]"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M3.294 10.709 1.293 8.708a1 1 0 0 1 0-1.414l2-2.001a1 1 0 0 1 1.415 0l2 2a1 1 0 0 1 0 1.415l-2 2a1 1 0 0 1-1.414 0M2 8l2 2 2.002-2L4 6z"
      className="fill-[#3574F0] dark:fill-[#548AF7]"
    />
    <path
      d="M11 9H7v7h4v-1H8v-2h2.5v-1H8v-2h3zM16 9h-4v7h4v-1h-3v-2h2.5v-1H13v-2h3z"
      className="fill-[#6C707E] dark:fill-[#CED0D6]"
    />
    <path
      d="M9 8c0-.256.098-.511.293-.706l2-2.001a1 1 0 0 1 1.415 0l2 2c.196.196.293.451.294.707zM12.057 11a1 1 0 0 1-.113 0z"
      className="fill-[#EDF3FF] dark:fill-[#25324D]"
    />
    <path
      d="M9 8c0-.256.098-.511.293-.706l2-2.001a1 1 0 0 1 1.415 0l2 2c.196.196.293.451.294.707H14l-2-2-2 2zM12.057 11a1 1 0 0 1-.113 0z"
      className="fill-[#3574F0] dark:fill-[#548AF7]"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M7.294 6.709 5.293 4.708a1 1 0 0 1 0-1.414l2-2.001a1 1 0 0 1 1.415 0l2 2a1 1 0 0 1 0 1.415l-2 2a1 1 0 0 1-1.414 0M6 4l2 2 2.002-2L8 2z"
      className="fill-[#6C707E] dark:fill-[#CED0D6]"
    />
  </svg>
);

export default JavaEeartifact;
