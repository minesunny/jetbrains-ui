/**
 * Copyright 2000-2024 JetBrains s.r.o. and contributors.
 * Use of this source code is governed by the Apache 2.0 license.
 */
import type { ComponentProps } from 'react';
import { cn } from '@/lib/utils';

export const ResetCacheAndReloadProjects = ({
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
    viewBox="0 0 17 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={cn('inline-block shrink-0', className)}
    role={ariaLabel ? 'img' : 'presentation'}
    aria-label={ariaLabel}
    aria-hidden={!ariaLabel}
    {...props}
  >
    <path
      d="M2.621 9V8a5.5 5.5 0 0 1 8.5-4.61M5.121 12.61a5.5 5.5 0 0 0 8.5-4.61V7"
      strokeLinecap="round"
      className="stroke-[#DB3B4B] dark:stroke-[#DB5C5C]"
    />
    <path
      d="M.5 7.321 2.62 9.443 4.742 7.32M11.5 8.679l2.121-2.122 2.121 2.122"
      strokeLinecap="round"
      className="stroke-[#DB3B4B] dark:stroke-[#DB5C5C]"
    />
  </svg>
);

export default ResetCacheAndReloadProjects;
