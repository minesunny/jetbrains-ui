/**
 * Copyright 2000-2024 JetBrains s.r.o. and contributors.
 * Use of this source code is governed by the Apache 2.0 license.
 */
import type { ComponentProps } from 'react';
import { cn } from '@/lib/utils';

export const RvmRunAnything = ({
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
      d="M4.5 10.5 7 8 4.48 5.52"
      strokeLinecap="round"
      className="stroke-[#6C707E] dark:stroke-[#CED0D6]"
    />
    <path
      d="M3 3h10a1 1 0 0 1 1 1v4.038c.36.07.695.24.969.491l.031.029V4a2 2 0 0 0-2-2H3a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h5.908l-.787-1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1"
      className="fill-[#6C707E] dark:fill-[#CED0D6]"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="m15.893 11.367-3.5 4.442a.5.5 0 0 1-.787 0l-3.499-4.442a.5.5 0 0 1 .055-.678l1.547-1.424c.185-.17.427-.265.678-.265h3.226c.251 0 .493.095.678.265l1.547 1.424a.5.5 0 0 1 .055.678"
      className="fill-[#FFF7F7] dark:fill-[#402929]"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="m12 14.69 2.819-3.578-1.206-1.11h-3.226l-1.206 1.11zm3.893-3.323-3.5 4.442a.5.5 0 0 1-.787 0l-3.499-4.442a.5.5 0 0 1 .055-.678l1.547-1.424c.185-.17.427-.265.678-.265h3.226c.251 0 .493.095.678.265l1.547 1.424a.5.5 0 0 1 .055.678"
      className="fill-[#DB3B4B] dark:fill-[#DB5C5C]"
    />
  </svg>
);

export default RvmRunAnything;
