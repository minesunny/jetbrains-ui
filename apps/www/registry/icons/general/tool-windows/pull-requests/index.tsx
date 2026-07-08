/**
 * Copyright 2000-2024 JetBrains s.r.o. and contributors.
 * Use of this source code is governed by the Apache 2.0 license.
 */
import type { ComponentProps } from 'react';
import { cn } from '@/lib/utils';

export type PullRequestsProps = Omit<ComponentProps<'svg'>, 'size'> & {
  size?: 12 | 14 | 16 | 20 | 24;
  mode?: 'light' | 'dark';
};

export const PullRequests = ({
  size = 16,
  mode: _mode,
  className,
  'aria-label': ariaLabel,
  ...props
}: PullRequestsProps) => (
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
      d="M12.25 10V5.6a1.6 1.6 0 0 0-1.6-1.6H8"
      className="stroke-[#6C707E] dark:stroke-[#CED0D6]"
    />
    <path
      strokeLinecap="round"
      d="m9.75 6-2-2 2-2"
      className="stroke-[#6C707E] dark:stroke-[#CED0D6]"
    />
    <path d="M3.75 6v4" className="stroke-[#6C707E] dark:stroke-[#CED0D6]" />
  </svg>
);

export default PullRequests;
