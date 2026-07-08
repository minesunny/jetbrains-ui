/**
 * Copyright 2000-2024 JetBrains s.r.o. and contributors.
 * Use of this source code is governed by the Apache 2.0 license.
 */
import type { ComponentProps } from 'react';
import { cn } from '@/lib/utils';

export type DdlDataSourceOverlayProps = Omit<ComponentProps<'svg'>, 'size'> & {
  size?: 12 | 14 | 16 | 20 | 24;
  mode?: 'light' | 'dark';
};

export const DdlDataSourceOverlay = ({
  size = 16,
  mode: _mode,
  className,
  'aria-label': ariaLabel,
  ...props
}: DdlDataSourceOverlayProps) => (
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
      d="M0 10a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1z"
      className="fill-[#6C707E] dark:fill-[#CED0D6]"
    />
    <path
      d="M2.5 10.5v4H4A1.5 1.5 0 0 0 5.5 13v-1A1.5 1.5 0 0 0 4 10.5zM7.5 10.5v4H9a1.5 1.5 0 0 0 1.5-1.5v-1A1.5 1.5 0 0 0 9 10.5zM12.5 10v4.5H15"
      className="stroke-[#F7F8FA] dark:stroke-[#2B2D30]"
    />
  </svg>
);

export default DdlDataSourceOverlay;
