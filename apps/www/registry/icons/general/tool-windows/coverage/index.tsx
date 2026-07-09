/**
 * Copyright 2000-2024 JetBrains s.r.o. and contributors.
 * Use of this source code is governed by the Apache 2.0 license.
 */
import type { ComponentProps } from 'react';
import { cn } from '@/lib/utils';

export const Coverage = ({
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
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={cn('inline-block shrink-0', className)}
    role={ariaLabel ? 'img' : 'presentation'}
    aria-label={ariaLabel}
    aria-hidden={!ariaLabel}
    {...props}
  >
    <path
      d="M13.784 8.282a.75.75 0 1 0-1.061-1.06l-3.72 3.717-1.718-1.715a.75.75 0 0 0-1.061 1.06L8.47 12.53a.75.75 0 0 0 1.062 0z"
      className="fill-[#6C707E] dark:fill-[#CED0D6]"
    />
    <path
      d="M16.5 10v.029l1.455.867Q18 10.459 18 10V4.5L10 1 2 4.5V10c0 5.934 5.75 8.994 7.5 9.788V18.12l-.057-.03a15 15 0 0 1-2.497-1.63C5.126 14.982 3.5 12.867 3.5 10V5.481L10 2.637l6.5 2.844z"
      className="fill-[#6C707E]"
    />
    <path
      d="M17.25 4.99V10c0 3.183-1.813 5.491-3.723 7.043a15.7 15.7 0 0 1-3.484 2.127l-.043.017-.043-.017a15.743 15.743 0 0 1-3.484-2.127C4.563 15.491 2.75 13.183 2.75 10V4.99L10 1.818z"
      strokeWidth={1.5}
      strokeLinecap="round"
      className="stroke-[#6C707E] dark:stroke-[#CED0D6]"
    />
  </svg>
);

export default Coverage;
