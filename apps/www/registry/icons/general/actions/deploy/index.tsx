/**
 * Copyright 2000-2024 JetBrains s.r.o. and contributors.
 * Use of this source code is governed by the Apache 2.0 license.
 */
import type { ComponentProps } from 'react';
import { cn } from '@/lib/utils';

export type DeployProps = Omit<ComponentProps<'svg'>, 'size'> & {
  size?: 12 | 14 | 16 | 20 | 24;
  mode?: 'light' | 'dark';
};

export const Deploy = ({
  size = 16,
  mode: _mode,
  className,
  'aria-label': ariaLabel,
  ...props
}: DeployProps) => (
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
      d="M1.5 7.5h13m0 0-3-3m3 3-3 3M8.5 11.5v3m0 0h-3m3 0-4-4M8.5 3.5v-3m0 0h-3m3 0-4 4"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="stroke-[#208A3C] dark:stroke-[#57965C]"
    />
  </svg>
);

export default Deploy;
