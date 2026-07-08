/**
 * Copyright 2000-2024 JetBrains s.r.o. and contributors.
 * Use of this source code is governed by the Apache 2.0 license.
 */
import type { ComponentProps } from 'react';
import { cn } from '@/lib/utils';

export type UnspecifiedClusterProps = Omit<ComponentProps<'svg'>, 'size'> & {
  size?: 12 | 14 | 16 | 20 | 24;
  mode?: 'light' | 'dark';
};

export const UnspecifiedCluster = ({
  size = 16,
  mode: _mode,
  className,
  'aria-label': ariaLabel,
  ...props
}: UnspecifiedClusterProps) => (
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
      d="M1.5 3.5V12.5C1.5 13.6046 2.39543 14.5 3.5 14.5H12.5C13.6046 14.5 14.5 13.6046 14.5 12.5V3.5C14.5 2.39543 13.6046 1.5 12.5 1.5H3.5C2.39543 1.5 1.5 2.39543 1.5 3.5Z"
      className="stroke-[#6C707E] dark:stroke-[#CED0D6]"
    />
    <path
      d="M3.5 9.5V3.5H7.5V9.5H3.5Z"
      strokeLinejoin="round"
      className="stroke-[#6C707E] dark:stroke-[#CED0D6]"
    />
    <path d="M4 5.5H7" className="stroke-[#6C707E] dark:stroke-[#CED0D6]" />
    <path d="M4 7.5H7" className="stroke-[#6C707E] dark:stroke-[#CED0D6]" />
  </svg>
);

export default UnspecifiedCluster;
