/**
 * Copyright 2000-2024 JetBrains s.r.o. and contributors.
 * Use of this source code is governed by the Apache 2.0 license.
 */
import type { ComponentProps } from 'react';
import { cn } from '@/lib/utils';

export const RendererKit = ({
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
      d="M5 15v-3l6.703-6.703a1 1 0 0 1 1.414 0l1.586 1.586a1 1 0 0 1 0 1.414L8 15zm1-1v-1.586l4.354-4.353 1.585 1.585L7.586 14zm6.646-5.06 1.35-1.35-1.586-1.586-1.35 1.35z"
      className="fill-[#6C707E] dark:hidden"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M1 11V8l6.703-6.703a1 1 0 0 1 1.414 0l1.586 1.586a1 1 0 0 1 0 1.414L4 11zm1-1V8.414l4.354-4.353 1.585 1.585L3.586 10zm6.646-5.06 1.35-1.35L8.41 2.004l-1.35 1.35z"
      className="fill-[#208A3C] dark:hidden"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M6 15v-3l6.703-6.703a1 1 0 0 1 1.414 0l1.586 1.586a1 1 0 0 1 0 1.414L9 15zm1-1v-1.586l4.354-4.353 1.585 1.585L8.586 14zm6.646-5.06 1.35-1.35-1.586-1.586-1.35 1.35z"
      className="fill-[#CED0D6] hidden dark:block"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M2 11V8l6.703-6.703a1 1 0 0 1 1.414 0l1.586 1.586a1 1 0 0 1 0 1.414L5 11zm1-1V8.414l4.354-4.353 1.585 1.585L4.586 10zm6.646-5.06 1.35-1.35L9.41 2.004l-1.35 1.35z"
      className="fill-[#57965C] hidden dark:block"
    />
  </svg>
);

export default RendererKit;
