/**
 * Copyright 2000-2024 JetBrains s.r.o. and contributors.
 * Use of this source code is governed by the Apache 2.0 license.
 */
import type { ComponentProps } from 'react';
import { cn } from '@/lib/utils';

export const Enum = ({
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
    <circle
      cx={8}
      cy={8}
      r={6.5}
      className="fill-[#FAF5FF] dark:fill-[#2F2936] stroke-[#834DF0] dark:stroke-[#A571E6]"
    />
    <path
      d="M5.49 11.5h5.02v-.915H6.48v-2.15h3.59v-.92H6.48v-2.1h3.93V4.5H5.49z"
      className="fill-[#834DF0] dark:fill-[#A571E6]"
    />
  </svg>
);

export default Enum;
