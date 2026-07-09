/**
 * Copyright 2000-2024 JetBrains s.r.o. and contributors.
 * Use of this source code is governed by the Apache 2.0 license.
 */
import type { ComponentProps } from 'react';
import { cn } from '@/lib/utils';

export const ModelClass = ({
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
      d="M15 8a7 7 0 1 0-7 7v-5a2 2 0 0 1 2-2z"
      className="fill-[#EDF3FF] dark:fill-[#25324D]"
    />
    <path
      d="M8 14a6 6 0 1 1 6-6h1a7 7 0 1 0-7 7z"
      className="fill-[#3574F0] dark:fill-[#548AF7]"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M10 9a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1v-5a1 1 0 0 0-1-1zm0 2v-1h2v1zm0 1v3h2v-3zm3 3h2v-3h-2zm2-4v-1h-2v1z"
      className="fill-[#6C707E] dark:fill-[#CED0D6]"
    />
    <path
      d="M8 10.573C6.73 10.505 5.826 9.453 5.826 8c0-1.503.967-2.577 2.306-2.577.972 0 1.75.522 2.065 1.252h1.015C10.898 5.4 9.622 4.5 8.132 4.5 6.213 4.5 4.787 5.994 4.787 8c0 1.96 1.361 3.43 3.213 3.498z"
      className="fill-[#3574F0] dark:fill-[#548AF7]"
    />
  </svg>
);

export default ModelClass;
