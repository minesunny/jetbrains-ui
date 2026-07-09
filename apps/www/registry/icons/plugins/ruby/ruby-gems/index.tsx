/**
 * Copyright 2000-2024 JetBrains s.r.o. and contributors.
 * Use of this source code is governed by the Apache 2.0 license.
 */
import type { ComponentProps } from 'react';
import { cn } from '@/lib/utils';

export const RubyGems = ({
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
      className="fill-[#FFF7F7] dark:fill-[#402929] stroke-[#DB3B4B] dark:stroke-[#DB5C5C]"
    />
    <path
      d="M5.9 4.5h4.198c.129 0 .253.05.346.14l1.994 1.913L8 12.41 3.55 6.553l2.006-1.914A.5.5 0 0 1 5.9 4.5ZM12 6.5H4"
      className="stroke-[#DB3B4B] dark:stroke-[#DB5C5C]"
    />
  </svg>
);

export default RubyGems;
