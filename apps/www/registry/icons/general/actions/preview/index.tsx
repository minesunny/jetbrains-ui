/**
 * Copyright 2000-2024 JetBrains s.r.o. and contributors.
 * Use of this source code is governed by the Apache 2.0 license.
 */
import type { ComponentProps } from 'react';
import { cn } from '@/lib/utils';

export const Preview = ({
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
      d="M6 3.022V3a2 2 0 0 1 2-2h5a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2h-2.6q.244-.476.393-1H13a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v.207a5.5 5.5 0 0 0-1-.185"
      className="fill-[#6C707E] dark:fill-[#CED0D6]"
    />
    <path
      d="M9.743 5a5.5 5.5 0 0 0-1.08-1H12.5a.5.5 0 0 1 0 1zM10.978 8a5.5 5.5 0 0 0-.185-1H12.5a.5.5 0 0 1 0 1z"
      className="fill-[#6C707E] dark:fill-[#CED0D6]"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M5.5 13a4.48 4.48 0 0 0 2.809-.984l2.837 2.838a.5.5 0 0 0 .708-.708L9.016 11.31A4.5 4.5 0 1 0 5.5 13m0-1a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7"
      className="fill-[#6C707E] dark:fill-[#CED0D6]"
    />
  </svg>
);

export default Preview;
