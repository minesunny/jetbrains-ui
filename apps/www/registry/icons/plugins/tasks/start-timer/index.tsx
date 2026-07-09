/**
 * Copyright 2000-2024 JetBrains s.r.o. and contributors.
 * Use of this source code is governed by the Apache 2.0 license.
 */
import type { ComponentProps } from 'react';
import { cn } from '@/lib/utils';

export const StartTimer = ({
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
      fillRule="evenodd"
      clipRule="evenodd"
      d="M9 9.502a1.5 1.5 0 0 1 2.294-1.272l4.002 2.497a1.5 1.5 0 0 1 0 2.546l-4.002 2.497A1.5 1.5 0 0 1 9 14.498zm1.765-.424a.5.5 0 0 0-.765.424v4.996a.5.5 0 0 0 .765.424l4.002-2.498a.5.5 0 0 0 0-.848z"
      className="fill-[#208A3C] dark:fill-[#57965C]"
    />
    <path
      d="M10 9.502a.5.5 0 0 1 .765-.424l4.002 2.498a.5.5 0 0 1 0 .848l-4.002 2.498a.5.5 0 0 1-.765-.424z"
      className="fill-[#F2FCF3] dark:fill-[#253627]"
    />
    <path
      d="M5.5 1a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1zM8 5.5a.5.5 0 0 0-.5.5v2.717L5.243 10.07a.5.5 0 1 0 .514.858l2.5-1.5A.5.5 0 0 0 8.5 9V6a.5.5 0 0 0-.5-.5"
      className="fill-[#6C707E] dark:fill-[#CED0D6]"
    />
    <path
      d="M8 14a5 5 0 1 1 4.912-5.939l1.082.676A6 6 0 1 0 8 15z"
      className="fill-[#6C707E] dark:fill-[#CED0D6]"
    />
  </svg>
);

export default StartTimer;
