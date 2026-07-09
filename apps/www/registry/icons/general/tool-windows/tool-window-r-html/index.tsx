/**
 * Copyright 2000-2024 JetBrains s.r.o. and contributors.
 * Use of this source code is governed by the Apache 2.0 license.
 */
import type { ComponentProps } from 'react';
import { cn } from '@/lib/utils';

export const ToolWindowRHtml = ({
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
      d="M14.558 10.437C15.208 9.7 15.71 8.871 16 8c-1-3-4.5-5.5-8-5.5S1 5 0 8c.86 2.582 3.573 4.794 6.544 5.36a1.5 1.5 0 0 1 .099-1 8.2 8.2 0 0 1-3.01-1.306C2.446 10.227 1.534 9.142 1.067 8c.467-1.142 1.379-2.227 2.568-3.054C4.928 4.046 6.482 3.5 8 3.5s3.072.545 4.366 1.446c1.189.827 2.101 1.912 2.568 3.054a6.3 6.3 0 0 1-1.084 1.728z"
      className="fill-[#6C707E] dark:fill-[#CED0D6]"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="m7.881 10.998 1.558-1.559c.374-.374.897-.509 1.378-.405a3 3 0 1 0-2.936 1.964M8 10a2 2 0 1 0 0-4 2 2 0 0 0 0 4M10.854 10.146a.5.5 0 0 1 0 .708L8.707 13l2.147 2.146a.5.5 0 0 1-.708.708l-2.5-2.5a.5.5 0 0 1 0-.708l2.5-2.5a.5.5 0 0 1 .708 0m1.292 0a.5.5 0 0 1 .708 0l2.5 2.5a.5.5 0 0 1 0 .708l-2.5 2.5a.5.5 0 0 1-.708-.708L14.293 13l-2.147-2.146a.5.5 0 0 1 0-.708"
      className="fill-[#6C707E] dark:fill-[#CED0D6]"
    />
  </svg>
);

export default ToolWindowRHtml;
