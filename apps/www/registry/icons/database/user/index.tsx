/**
 * Copyright 2000-2024 JetBrains s.r.o. and contributors.
 * Use of this source code is governed by the Apache 2.0 license.
 */
import type { ComponentProps } from 'react';
import { cn } from '@/lib/utils';

export const User = ({
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
      d="M8 7a3 3 0 1 0 0-6 3 3 0 0 0 0 6M2.103 13.008C2.399 11.303 3.548 8 8 8s5.6 3.303 5.897 5.008c.094.544-.345.992-.897.992H3c-.553 0-.992-.448-.897-.992"
      className="fill-[#EBECF0] dark:fill-[#43454A]"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M11 4a3 3 0 1 1-6 0 3 3 0 0 1 6 0m-1 0a2 2 0 1 1-4 0 2 2 0 0 1 4 0M8 8c-4.452 0-5.6 3.303-5.897 5.008-.095.544.344.992.897.992h10c.552 0 .991-.448.897-.992C13.6 11.303 12.452 8 8 8m3.744 2.511c.664.784.984 1.744 1.134 2.489H3.122c.15-.745.47-1.705 1.134-2.489C4.94 9.704 6.058 9 8 9c1.941 0 3.06.704 3.744 1.511"
      className="fill-[#6C707E] dark:fill-[#CED0D6]"
    />
  </svg>
);

export default User;
