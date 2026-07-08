/**
 * Copyright 2000-2024 JetBrains s.r.o. and contributors.
 * Use of this source code is governed by the Apache 2.0 license.
 */
import type { ComponentProps } from 'react';
import { cn } from '@/lib/utils';

export type PreserveCaseProps = Omit<ComponentProps<'svg'>, 'size'> & {
  size?: 12 | 14 | 16 | 20 | 24;
  mode?: 'light' | 'dark';
};

export const PreserveCase = ({
  size = 16,
  mode: _mode,
  className,
  'aria-label': ariaLabel,
  ...props
}: PreserveCaseProps) => (
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
      d="M3.009 6.3h1.204L7.139 14H5.984l-.704-1.958H2.018L1.365 14H.182zm1.941 4.824L3.729 7.762l-.127-.473-.12.473-1.156 3.36zM11.509 6.3h1.204l2.926 7.7h-1.155l-.704-1.958h-3.261L9.864 14H8.681zm1.941 4.824-1.221-3.361-.127-.473-.12.473-1.155 3.36z"
      className="fill-[#6C707E] dark:fill-[#CED0D6]"
    />
    <path
      strokeLinecap="round"
      d="m7 5.813 2.406-2.407L7 1"
      className="stroke-[#6C707E] dark:stroke-[#CED0D6]"
    />
  </svg>
);

export default PreserveCase;
