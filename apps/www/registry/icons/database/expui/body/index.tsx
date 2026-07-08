/**
 * Copyright 2000-2024 JetBrains s.r.o. and contributors.
 * Use of this source code is governed by the Apache 2.0 license.
 */
import type { ComponentProps } from 'react';
import { cn } from '@/lib/utils';

export type BodyProps = Omit<ComponentProps<'svg'>, 'size'> & {
  size?: 12 | 14 | 16 | 20 | 24;
  mode?: 'light' | 'dark';
};

export const Body = ({
  size = 16,
  mode: _mode,
  className,
  'aria-label': ariaLabel,
  ...props
}: BodyProps) => (
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
      d="M8 7.5L14.5 4.5V11.5199L8 14.5V7.5Z"
      className="fill-[#EBECF0] dark:fill-[#43454A]"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M8 7.5L1.5 4.5V11.5199L8 14.5V7.5Z"
      className="fill-[#EBECF0] dark:fill-[#43454A]"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M14.5 4.5L7.99998 1.5L1.5 4.5L8 7.5L14.5 4.5Z"
      className="fill-[#EBECF0] dark:fill-[#43454A]"
    />
    <path
      d="M8 7.5L14.5 4.5M8 7.5V14.5M8 7.5L1.5 4.5M14.5 4.5V11.5199L8 14.5M14.5 4.5L7.99998 1.5L1.5 4.5M8 14.5L1.5 11.5199V4.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="stroke-[#6C707E] dark:stroke-[#CED0D6]"
    />
  </svg>
);

export default Body;
