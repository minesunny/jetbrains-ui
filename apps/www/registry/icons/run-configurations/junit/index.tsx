/**
 * Copyright 2000-2024 JetBrains s.r.o. and contributors.
 * Use of this source code is governed by the Apache 2.0 license.
 */
import type { ComponentProps } from 'react';
import { cn } from '@/lib/utils';

export type JunitProps = Omit<ComponentProps<'svg'>, 'size'> & {
  size?: 12 | 14 | 16 | 20 | 24;
  mode?: 'light' | 'dark';
};

export const Junit = ({
  size = 16,
  mode: _mode,
  className,
  'aria-label': ariaLabel,
  ...props
}: JunitProps) => (
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
      strokeLinecap="round"
      d="M1.385 8.42a.6.6 0 0 1 0-.81l4.071-4.466a.6.6 0 0 1 1.044.404v8.91a.6.6 0 0 1-1.042.405z"
      className="fill-[#FFF7F7] dark:fill-[#5E3838] stroke-[#DB3B4B] dark:stroke-[#DB5C5C]"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      strokeLinecap="round"
      d="M14.628 7.595a.6.6 0 0 1 0 .81l-4.086 4.458a.6.6 0 0 1-1.042-.406V3.543a.6.6 0 0 1 1.043-.406z"
      className="fill-[#F2FCF3] dark:fill-[#375239] stroke-[#208A3C] dark:stroke-[#57965C]"
    />
  </svg>
);

export default Junit;
