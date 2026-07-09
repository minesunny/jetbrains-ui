/**
 * Copyright 2000-2024 JetBrains s.r.o. and contributors.
 * Use of this source code is governed by the Apache 2.0 license.
 */
import type { ComponentProps } from 'react';
import { cn } from '@/lib/utils';

export const RubyScript = ({
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
      d="M10.5 3H4.732c.17.294.268.636.268 1v8a1 1 0 0 0 1 1h2.12l.788 1H6a2 2 0 0 1-2-2V5H1.5a.5.5 0 0 1-.5-.5V4a2 2 0 0 1 2-2h7.5A2.5 2.5 0 0 1 13 4.5V8h-1V4.5A1.5 1.5 0 0 0 10.5 3M2 4a1 1 0 0 1 2 0z"
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

export default RubyScript;
