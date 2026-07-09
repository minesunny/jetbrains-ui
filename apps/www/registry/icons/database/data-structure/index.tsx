/**
 * Copyright 2000-2024 JetBrains s.r.o. and contributors.
 * Use of this source code is governed by the Apache 2.0 license.
 */
import type { ComponentProps } from 'react';
import { cn } from '@/lib/utils';

export const DataStructure = ({
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
      d="M1.5 10.5v4h5v-4zM9.5 10.5v4h5v-4z"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="stroke-[#6C707E] dark:stroke-[#CED0D6]"
    />
    <path
      d="M5.5 4.5v-4h5v4zM8 5v2M4.5 10V7.5h7V10"
      strokeLinejoin="round"
      className="stroke-[#6C707E] dark:stroke-[#CED0D6]"
    />
    <path d="M2 11H6V14H2z" className="fill-[#EBECF0] dark:fill-[#43454A]" />
    <path d="M10 11H14V14H10z" className="fill-[#EBECF0] dark:fill-[#43454A]" />
    <path d="M6 1H10V4H6z" className="fill-[#EBECF0] dark:fill-[#43454A]" />
  </svg>
);

export default DataStructure;
