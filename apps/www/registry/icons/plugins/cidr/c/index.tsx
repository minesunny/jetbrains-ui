/**
 * Copyright 2000-2024 JetBrains s.r.o. and contributors.
 * Use of this source code is governed by the Apache 2.0 license.
 */
import type { ComponentProps } from 'react';
import { cn } from '@/lib/utils';

export const C = ({
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
      d="M7.256 1.001a1.5 1.5 0 0 1 1.488 0l5 2.857a1.5 1.5 0 0 1 .756 1.303v5.678a1.5 1.5 0 0 1-.756 1.303l-5 2.857a1.5 1.5 0 0 1-1.488 0l-5-2.857a1.5 1.5 0 0 1-.756-1.303V5.16a1.5 1.5 0 0 1 .756-1.303z"
      className="fill-[#FAF5FF] dark:fill-[#2F2936] stroke-[#834DF0] dark:stroke-[#B589EC]"
    />
    <path
      d="M8.134 11.5c1.49 0 2.766-.9 3.08-2.175h-1.015c-.315.73-1.093 1.252-2.065 1.252-1.339 0-2.306-1.074-2.306-2.577s.967-2.577 2.306-2.577c.972 0 1.75.522 2.065 1.252h1.015C10.9 5.4 9.624 4.5 8.134 4.5 6.215 4.5 4.79 5.994 4.79 8s1.426 3.5 3.345 3.5"
      className="fill-[#834DF0] dark:fill-[#B589EC]"
    />
  </svg>
);

export default C;
