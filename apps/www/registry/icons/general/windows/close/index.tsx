/**
 * Copyright 2000-2024 JetBrains s.r.o. and contributors.
 * Use of this source code is governed by the Apache 2.0 license.
 */
import type { ComponentProps } from 'react';
import { cn } from '@/lib/utils';

export type CloseProps = Omit<ComponentProps<'svg'>, 'size'> & {
  size?: 12 | 14 | 16 | 20 | 24;
  mode?: 'light' | 'dark';
};

export const Close = ({
  size = 16,
  mode: _mode,
  className,
  'aria-label': ariaLabel,
  ...props
}: CloseProps) => (
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
      transform="rotate(45 3.758 3.05)"
      d="M3.758 3.05H16.758V4.05H3.758z"
      className="fill-[#A8ADBD] dark:fill-[#CED0D6]"
    />
    <path
      transform="scale(-1 1)rotate(45 -9.804 -13.254)"
      d="M0 0H13V1H0z"
      className="fill-[#A8ADBD] dark:fill-[#CED0D6]"
    />
  </svg>
);

export default Close;
