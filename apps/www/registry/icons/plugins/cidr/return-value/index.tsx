/**
 * Copyright 2000-2024 JetBrains s.r.o. and contributors.
 * Use of this source code is governed by the Apache 2.0 license.
 */
import type { ComponentProps } from 'react';
import { cn } from '@/lib/utils';

export const ReturnValue = ({
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
      d="M15 8c0 .766-.123 1.503-.35 2.193A3.5 3.5 0 0 0 13.5 10a3.5 3.5 0 0 0-2.45 1h-1.1a3.5 3.5 0 0 0-5.94 2.752A7 7 0 1 1 15 8"
      className="fill-[#FFF7F7] dark:fill-[#402929]"
    />
    <path
      d="M4.122 12.579a6 6 0 1 1 9.535-2.575q.522.024.993.19c.227-.69.35-1.428.35-2.194a7 7 0 1 0-10.991 5.752 3.6 3.6 0 0 1 .113-1.173"
      className="fill-[#DB3B4B] dark:fill-[#DB5C5C]"
    />
    <path
      d="M7.258 10.008a3.6 3.6 0 0 1 1.017.078V7.327H9.83V6.43H8.275v-.95c0-.36.246-.606.6-.606h1.006V4H8.778c-.903 0-1.52.571-1.52 1.406V6.43H6.121v.897h1.137z"
      className="fill-[#DB3B4B] dark:fill-[#DB5C5C]"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M7.5 16a2.5 2.5 0 0 0 2.45-3h1.1q-.05.243-.05.5a2.5 2.5 0 1 0 .5-1.5h-2a2.5 2.5 0 1 0-2 4m0-1a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3m6 0a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3"
      className="fill-[#6C707E] dark:fill-[#CED0D6]"
    />
  </svg>
);

export default ReturnValue;
