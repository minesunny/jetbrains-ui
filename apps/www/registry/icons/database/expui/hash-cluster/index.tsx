/**
 * Copyright 2000-2024 JetBrains s.r.o. and contributors.
 * Use of this source code is governed by the Apache 2.0 license.
 */
import type { ComponentProps } from 'react';
import { cn } from '@/lib/utils';

export const HashCluster = ({
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
      d="M3.5 9.5V3.5H7.5V9.5H3.5Z"
      strokeLinejoin="round"
      className="stroke-[#6C707E] dark:stroke-[#CED0D6]"
    />
    <path d="M4 5.5H7" className="stroke-[#6C707E] dark:stroke-[#CED0D6]" />
    <path d="M4 7.5H7" className="stroke-[#6C707E] dark:stroke-[#CED0D6]" />
    <path
      d="M10 7.59998H11V9.5V10.618V12.496H10.632C10.632 11.932 10.728 11.44 10.92 11.02C11.116 10.6 11.394 10.278 11.754 10.054C12.118 9.82598 12.544 9.71198 13.032 9.71198C13.472 9.71198 13.862 9.80598 14.202 9.99398C14.542 10.182 14.808 10.46 15 10.828C15.192 11.192 15.288 11.63 15.288 12.142V16H14.256V12.256C14.256 11.908 14.194 11.612 14.07 11.368C13.95 11.124 13.776 10.938 13.548 10.81C13.324 10.682 13.058 10.618 12.75 10.618C12.414 10.618 12.118 10.692 11.862 10.84C11.606 10.984 11.406 11.19 11.262 11.458C11.122 11.726 11 12.035 11 12.375V16H10V7.59998Z"
      className="fill-[#3574F0] dark:fill-[#548AF7]"
    />
    <path
      d="M2 13V3C2 2.44772 2.44772 2 3 2H13C13.5523 2 14 2.44772 14 3V8.8392C14.2372 8.90513 14.4666 8.99763 14.6859 9.11891C14.7961 9.17981 14.9008 9.24681 15 9.31957V3C15 1.89543 14.1046 1 13 1H3C1.89543 1 1 1.89543 1 3V13C1 14.1046 1.89543 15 3 15H9V14H3C2.44772 14 2 13.5523 2 13Z"
      className="fill-[#6C707E] dark:fill-[#CED0D6]"
    />
  </svg>
);

export default HashCluster;
