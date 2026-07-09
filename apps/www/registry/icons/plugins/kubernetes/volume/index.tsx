/**
 * Copyright 2000-2024 JetBrains s.r.o. and contributors.
 * Use of this source code is governed by the Apache 2.0 license.
 */
import type { ComponentProps } from 'react';
import { cn } from '@/lib/utils';

export const Volume = ({
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
      d="M15 10V6c0-1.657-3.134-3-7-3S1 4.343 1 6v4c0 1.657 3.134 3 7 3s7-1.343 7-3m-1.262-3.535c.23-.233.262-.389.262-.465s-.032-.232-.262-.465c-.234-.238-.623-.497-1.182-.737C11.44 4.32 9.83 4 8 4s-3.44.32-4.556.798c-.56.24-.948.5-1.182.737C2.032 5.768 2 5.924 2 6s.032.232.262.465c.234.238.623.497 1.182.737C4.56 7.68 6.17 8 8 8s3.44-.32 4.556-.798c.56-.24.948-.5 1.182-.737M14 7.546C12.775 8.417 10.546 9 8 9s-4.775-.583-6-1.454V10c0 .076.032.232.262.465.234.238.623.498 1.182.737C4.56 11.68 6.17 12 8 12s3.44-.32 4.556-.798c.56-.24.948-.5 1.182-.737.23-.233.262-.389.262-.465z"
      className="fill-[#6C707E] dark:fill-[#CED0D6]"
    />
    <path
      d="M14 6c0 .076-.032.232-.262.465-.234.238-.623.497-1.182.737C11.44 7.68 9.83 8 8 8s-3.44-.32-4.556-.798c-.56-.24-.948-.5-1.182-.737C2.032 6.232 2 6.076 2 6s.032-.232.262-.465c.234-.238.623-.497 1.182-.737C4.56 4.32 6.17 4 8 4s3.44.32 4.556.798c.56.24.948.5 1.182.737.23.233.262.389.262.465"
      className="fill-[#EBECF0] dark:fill-[#43454A]"
    />
    <path
      d="M8 9c2.546 0 4.775-.583 6-1.454V10c0 .076-.032.232-.262.465-.234.238-.623.498-1.182.737C11.44 11.68 9.83 12 8 12s-3.44-.32-4.556-.798c-.56-.24-.948-.5-1.182-.737C2.032 10.232 2 10.076 2 10V7.546C3.225 8.417 5.454 9 8 9"
      className="fill-[#EBECF0] dark:fill-[#43454A]"
    />
  </svg>
);

export default Volume;
