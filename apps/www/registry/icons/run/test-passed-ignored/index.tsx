/**
 * Copyright 2000-2024 JetBrains s.r.o. and contributors.
 * Use of this source code is governed by the Apache 2.0 license.
 */
import type { ComponentProps } from 'react';
import { cn } from '@/lib/utils';

export const TestPassedIgnored = ({
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
      d="m3 7.5 3 3L12.5 4"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="stroke-[#55A76A]"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M16 12.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0m-1 0a2.5 2.5 0 0 1-3.879 2.086l3.465-3.465c.262.396.414.87.414 1.379m-4.586 1.379 3.465-3.465a2.5 2.5 0 0 0-3.465 3.465"
      className="fill-[#6C707E] dark:fill-[#CED0D6]"
    />
  </svg>
);

export default TestPassedIgnored;
