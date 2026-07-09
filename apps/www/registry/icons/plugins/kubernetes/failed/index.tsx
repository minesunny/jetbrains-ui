/**
 * Copyright 2000-2024 JetBrains s.r.o. and contributors.
 * Use of this source code is governed by the Apache 2.0 license.
 */
import type { ComponentProps } from 'react';
import { cn } from '@/lib/utils';

export const Failed = ({
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
    <circle cx="8" cy="8" r="7" className="fill-[#E55765] dark:hidden" />
    <path
      d="M8 4.5V8"
      strokeWidth="1.8"
      strokeLinecap="round"
      className="stroke-[#fff] dark:hidden"
    />
    <circle cx="7.998" cy="11.1" r="1.1" className="fill-[#fff] dark:hidden" />
    <circle
      cx="8"
      cy="8"
      r="6.5"
      className="fill-[#DB5C5C] stroke-[#DB5C5C] hidden dark:block"
    />
    <path
      d="M8 4.5V8"
      strokeWidth="1.8"
      strokeLinecap="round"
      className="stroke-[#fff] hidden dark:block"
    />
    <circle
      cx="7.998"
      cy="11.1"
      r="1.1"
      className="fill-[#fff] hidden dark:block"
    />
  </svg>
);

export default Failed;
