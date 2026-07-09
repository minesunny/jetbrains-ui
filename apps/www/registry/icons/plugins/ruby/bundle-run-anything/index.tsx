/**
 * Copyright 2000-2024 JetBrains s.r.o. and contributors.
 * Use of this source code is governed by the Apache 2.0 license.
 */
import type { ComponentProps } from 'react';
import { cn } from '@/lib/utils';

export const BundleRunAnything = ({
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
      d="m8 1.5 6.5 3v3.707A2 2 0 0 0 13.613 8h-3.226c-.502 0-.986.189-1.356.53L7.484 9.952a1.5 1.5 0 0 0-.162 2.033l1.635 2.075L8 14.5l-6.5-2.98V4.5z"
      className="fill-[#EBECF0] dark:fill-[#43454A]"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M8.21 1.046a.5.5 0 0 0-.42 0l-6.5 3A.5.5 0 0 0 1 4.5v7.02a.5.5 0 0 0 .292.454l6.5 2.98a.5.5 0 0 0 .416 0l1.067-.489-.637-.808-.138.064v-.24l-1-1.269v1.509L2 11.199V5.281L7.5 7.82v2.119l1-.92v-1.2L14 5.282v2.757c.36.07.695.24.969.491l.031.029V4.5a.5.5 0 0 0-.29-.454zM2.693 4.5 8 2.05l5.307 2.45L8 6.95z"
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

export default BundleRunAnything;
