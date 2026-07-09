/**
 * Copyright 2000-2024 JetBrains s.r.o. and contributors.
 * Use of this source code is governed by the Apache 2.0 license.
 */
import type { ComponentProps } from 'react';
import { cn } from '@/lib/utils';

export const BreakpointException = ({
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
      d="M8.626.514c.066-.45-.523-.7-.821-.348L1.106 8.062c-.249.293-.032.734.36.734H6.07l-.695 4.69c-.066.45.523.7.821.348l6.699-7.896c.248-.293.032-.734-.36-.734H7.93z"
      className="fill-[#E55765] dark:fill-[#DB5C5C]"
    />
  </svg>
);

export default BreakpointException;
