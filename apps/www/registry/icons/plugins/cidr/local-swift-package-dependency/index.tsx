/**
 * Copyright 2000-2024 JetBrains s.r.o. and contributors.
 * Use of this source code is governed by the Apache 2.0 license.
 */
import type { ComponentProps } from 'react';
import { cn } from '@/lib/utils';

export const LocalSwiftPackageDependency = ({
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
      d="m8 1.5 6.5 3V9h-1.586l-.707-.707A1 1 0 0 0 11.5 8H9a2 2 0 0 0-2 2v4.041L1.5 11.52V4.5z"
      className="fill-[#FFF4EB] dark:fill-[#45322B]"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M8.21 1.046a.5.5 0 0 0-.42 0l-6.5 3A.5.5 0 0 0 1 4.5v7.02a.5.5 0 0 0 .292.454L7 14.592v-1.1l-5-2.293V5.281L7.5 7.82v.857a2 2 0 0 1 1-.614V7.82L14 5.28V9h1V4.5a.5.5 0 0 0-.29-.454zM2.693 4.5 8 2.05l5.307 2.45L8 6.95z"
      className="fill-[#E66D17] dark:fill-[#C77D55]"
    />
    <path
      d="M8 10v5a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1h-2.5l-1-1H9a1 1 0 0 0-1 1"
      className="fill-[#EBECF0] dark:fill-[#43454A]"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="m12.5 10-1-1H9a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1zm-1.414 0H9v5h6v-4h-2.5a1 1 0 0 1-.707-.293z"
      className="fill-[#6C707E] dark:fill-[#CED0D6]"
    />
  </svg>
);

export default LocalSwiftPackageDependency;
