/**
 * Copyright 2000-2024 JetBrains s.r.o. and contributors.
 * Use of this source code is governed by the Apache 2.0 license.
 */
import type { ComponentProps } from 'react';
import { cn } from '@/lib/utils';

export const LogOverlap = ({
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
    <path d="M2 3H4V2H2V3Z" className="fill-[#6C707E] dark:fill-[#CED0D6]" />
    <path d="M2 5H4V4H2V5Z" className="fill-[#6C707E] dark:fill-[#CED0D6]" />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M1 0C0.447716 0 0 0.447715 0 1V6C0 6.55228 0.447716 7 1 7H5C5.55228 7 6 6.55228 6 6V1C6 0.447715 5.55228 0 5 0H1ZM5 1H1V6H5V1Z"
      className="fill-[#6C707E] dark:fill-[#CED0D6]"
    />
  </svg>
);

export default LogOverlap;
