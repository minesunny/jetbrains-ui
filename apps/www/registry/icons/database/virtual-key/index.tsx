/**
 * Copyright 2000-2024 JetBrains s.r.o. and contributors.
 * Use of this source code is governed by the Apache 2.0 license.
 */
import type { ComponentProps } from 'react';
import { cn } from '@/lib/utils';

export type VirtualKeyProps = Omit<ComponentProps<'svg'>, 'size'> & {
  size?: 12 | 14 | 16 | 20 | 24;
  mode?: 'light' | 'dark';
};

export const VirtualKey = ({
  size = 16,
  mode: _mode,
  className,
  'aria-label': ariaLabel,
  ...props
}: VirtualKeyProps) => (
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
      d="M7.5 1.5a3.5 3.5 0 1 1 0 7 3.5 3.5 0 0 1 0-7Z"
      className="stroke-[#955AE0] dark:stroke-[#B589EC]"
    />
    <path
      d="M7.5 8.5v6M8 13.5h2.5M8 11.5h2.5"
      strokeLinecap="round"
      className="stroke-[#955AE0] dark:stroke-[#B589EC]"
    />
  </svg>
);

export default VirtualKey;
