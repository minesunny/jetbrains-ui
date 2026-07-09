/**
 * Copyright 2000-2024 JetBrains s.r.o. and contributors.
 * Use of this source code is governed by the Apache 2.0 license.
 */
import type { ComponentProps } from 'react';
import { cn } from '@/lib/utils';

export const BreakpointInvalid = ({
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
    viewBox="0 0 14 14"
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
      d="M14 7A7 7 0 1 1 0 7a7 7 0 0 1 14 0m-1.5 0a5.5 5.5 0 0 1-8.823 4.383l7.706-7.706A5.48 5.48 0 0 1 12.5 7m-9.883 3.323 7.706-7.706a5.5 5.5 0 0 0-7.706 7.706"
      className="fill-[#6C707E] dark:fill-[#CED0D6]"
    />
  </svg>
);

export default BreakpointInvalid;
