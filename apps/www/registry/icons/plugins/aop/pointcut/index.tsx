/**
 * Copyright 2000-2024 JetBrains s.r.o. and contributors.
 * Use of this source code is governed by the Apache 2.0 license.
 */
import type { ComponentProps } from 'react';
import { cn } from '@/lib/utils';

export const Pointcut = ({
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
      d="M2.1 3.375C2.035 3.57 2 3.782 2 4v8a2 2 0 0 0 2 2h8c.311 0 .606-.071.868-.198l-6.815-3.408a1 1 0 0 1-.435-.423z"
      className="fill-[#4682FA] dark:fill-[#548AF7]"
    />
    <path
      d="M13.996 12.13Q14 12.066 14 12V4a2 2 0 0 0-2-2H4q-.18 0-.35.03l3.582 6.718z"
      className="fill-[#4682FA] dark:fill-[#548AF7]"
    />
  </svg>
);

export default Pointcut;
