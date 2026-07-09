/**
 * Copyright 2000-2024 JetBrains s.r.o. and contributors.
 * Use of this source code is governed by the Apache 2.0 license.
 */
import type { ComponentProps } from 'react';
import { cn } from '@/lib/utils';

export const VelocityPluginLogo = ({
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
    viewBox="0 0 40 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={cn('inline-block shrink-0', className)}
    role={ariaLabel ? 'img' : 'presentation'}
    aria-label={ariaLabel}
    aria-hidden={!ariaLabel}
    {...props}
  >
    <path
      d="M31.5 20c0 6.351-5.149 11.5-11.5 11.5S8.5 26.351 8.5 20 13.649 8.5 20 8.5 31.5 13.649 31.5 20Z"
      strokeWidth="3"
      className="stroke-[#6C707E] dark:stroke-[#CED0D6]"
    />
    <path
      d="M8.5 20V4.5M20 8.5h15.5M31.5 20v15.5M20 31.5H4.5"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="stroke-[#6C707E] dark:stroke-[#CED0D6]"
    />
  </svg>
);

export default VelocityPluginLogo;
