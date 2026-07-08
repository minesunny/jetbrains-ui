/**
 * Copyright 2000-2024 JetBrains s.r.o. and contributors.
 * Use of this source code is governed by the Apache 2.0 license.
 */
import type { ComponentProps } from 'react';
import { cn } from '@/lib/utils';

export const ProfileMemory = ({
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
      d="M4 4v8a2 2 0 0 0 2 2h2v-4a2 2 0 0 1 2-2h2V4a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2"
      className="fill-[#EBECF0] dark:fill-[#43454A]"
    />
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
      d="M6 2a2 2 0 0 0-2 2H1.5a.5.5 0 0 0 0 1H4V4v8-1H1.5a.5.5 0 0 0 0 1H4a2 2 0 0 0 2 2h2v-1H6a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v4h1V5h2.5a.5.5 0 0 0 0-1H12a2 2 0 0 0-2-2z"
      className="fill-[#6C707E] dark:fill-[#CED0D6]"
    />
    <path
      d="M1.5 7.5a.5.5 0 0 0 0 1H4v-1z"
      className="fill-[#6C707E] dark:fill-[#CED0D6]"
    />
  </svg>
);

export default ProfileMemory;
