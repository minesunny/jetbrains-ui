/**
 * Copyright 2000-2024 JetBrains s.r.o. and contributors.
 * Use of this source code is governed by the Apache 2.0 license.
 */
import type { ComponentProps } from 'react';
import { cn } from '@/lib/utils';

export type OperatorProps = Omit<ComponentProps<'svg'>, 'size'> & {
  size?: 12 | 14 | 16 | 20 | 24;
  mode?: 'light' | 'dark';
};

export const Operator = ({
  size = 16,
  mode: _mode,
  className,
  'aria-label': ariaLabel,
  ...props
}: OperatorProps) => (
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
    <circle
      cx={8}
      cy={8}
      r={6.5}
      className="fill-[#E7EFFD] dark:fill-[#25324D] stroke-[#3574F0] dark:stroke-[#548AF7]"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M7.9918 11C6.22951 11 5 9.64917 5 8.01657V8C5 6.3674 6.2459 5 8.0082 5C9.77049 5 11 6.35083 11 7.98343V8C11 9.6326 9.7541 11 7.9918 11ZM8.0082 10.0552C9.14754 10.0552 9.94262 9.14365 9.94262 8.01657V8C9.94262 6.87293 9.13115 5.94475 7.9918 5.94475C6.85246 5.94475 6.05738 6.85635 6.05738 7.98343V8C6.05738 9.12707 6.86885 10.0552 8.0082 10.0552Z"
      className="fill-[#3574F0] dark:fill-[#548AF7]"
    />
  </svg>
);

export default Operator;
