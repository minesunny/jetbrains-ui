/**
 * Copyright 2000-2024 JetBrains s.r.o. and contributors.
 * Use of this source code is governed by the Apache 2.0 license.
 */
import type { ComponentProps } from 'react';
import { cn } from '@/lib/utils';

export const ProfileCpu = ({
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
      d="M11.5 11a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1z"
      className="fill-[#6C707E] dark:fill-[#CED0D6]"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M9 15v-5a1 1 0 0 1 1-1h3.586a1 1 0 0 1 .707.293l1.414 1.414a1 1 0 0 1 .293.707V15a1 1 0 0 1-1 1h-5a1 1 0 0 1-1-1m1-5v5h1v-1a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1v1h1v-3.586L13.586 10zm3 5h-1v-1h1z"
      className="fill-[#6C707E] dark:fill-[#CED0D6]"
    />
    <path
      d="M1 8a7 7 0 1 1 13.978.564 2 2 0 0 0-.978-.52V8a6 6 0 1 0-6 6v1a7 7 0 0 1-7-7"
      className="fill-[#6C707E] dark:fill-[#CED0D6]"
    />
    <path
      d="M8 4.5a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-.243.429l-2.5 1.5a.5.5 0 0 1-.514-.858L7.5 7.717V5a.5.5 0 0 1 .5-.5"
      className="fill-[#6C707E] dark:fill-[#CED0D6]"
    />
  </svg>
);

export default ProfileCpu;
