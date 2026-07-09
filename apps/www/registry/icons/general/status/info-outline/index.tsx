/**
 * Copyright 2000-2024 JetBrains s.r.o. and contributors.
 * Use of this source code is governed by the Apache 2.0 license.
 */
import type { ComponentProps } from 'react';
import { cn } from '@/lib/utils';

export const InfoOutline = ({
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
      d="M8 1a7 7 0 1 0 0 14A7 7 0 0 0 8 1m0 1a6 6 0 1 0 0 12A6 6 0 0 0 8 2"
      className="fill-[#6C707E] dark:fill-[#CED0D6]"
    />
    <path
      d="M7 11a1 1 0 1 0 2 0V8a1 1 0 1 0-2 0zM8 4a1 1 0 1 0 0 2 1 1 0 0 0 0-2"
      className="fill-[#6C707E] dark:fill-[#CED0D6]"
    />
  </svg>
);

export default InfoOutline;
