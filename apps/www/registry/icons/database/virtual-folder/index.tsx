/**
 * Copyright 2000-2024 JetBrains s.r.o. and contributors.
 * Use of this source code is governed by the Apache 2.0 license.
 */
import type { ComponentProps } from 'react';
import { cn } from '@/lib/utils';

export type VirtualFolderProps = Omit<ComponentProps<'svg'>, 'size'> & {
  size?: 12 | 14 | 16 | 20 | 24;
  mode?: 'light' | 'dark';
};

export const VirtualFolder = ({
  size = 16,
  mode: _mode,
  className,
  'aria-label': ariaLabel,
  ...props
}: VirtualFolderProps) => (
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
      d="M2.634 2.5h3.488a.5.5 0 0 1 .36.154l1.623 1.692.149.154H13A1.5 1.5 0 0 1 14.5 6v6.134c0 .82-.569 1.366-1.134 1.366H2.634c-.565 0-1.134-.547-1.134-1.366V3.866c0-.768.5-1.297 1.027-1.36z"
      className="fill-[#FAF5FF] dark:fill-[#2F2936] stroke-[#834DF0] dark:stroke-[#A571E6]"
    />
  </svg>
);

export default VirtualFolder;
