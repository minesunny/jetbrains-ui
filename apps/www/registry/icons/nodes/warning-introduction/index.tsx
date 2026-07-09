/**
 * Copyright 2000-2024 JetBrains s.r.o. and contributors.
 * Use of this source code is governed by the Apache 2.0 license.
 */
import type { ComponentProps } from 'react';
import { cn } from '@/lib/utils';

export const WarningIntroduction = ({
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
      d="M7.566 1.768a.5.5 0 0 1 .869 0l6.276 10.984a.5.5 0 0 1-.435.748H1.724a.5.5 0 0 1-.435-.748z"
      className="fill-[#FFFAEB] dark:fill-[#3D3223] stroke-[#C27D04] dark:stroke-[#D6AE58]"
    />
    <path
      d="M8 5.001a.6.6 0 0 1 .6.6V9a.6.6 0 0 1-1.2 0V5.6a.6.6 0 0 1 .6-.6M8.8 11.2a.8.8 0 1 1-1.6 0 .8.8 0 0 1 1.6 0"
      className="fill-[#C27D04] dark:fill-[#D6AE58]"
    />
  </svg>
);

export default WarningIntroduction;
