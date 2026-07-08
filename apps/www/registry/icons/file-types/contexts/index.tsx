/**
 * Copyright 2000-2024 JetBrains s.r.o. and contributors.
 * Use of this source code is governed by the Apache 2.0 license.
 */
import type { ComponentProps } from 'react';
import { cn } from '@/lib/utils';

export const Contexts = ({
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
    <rect
      x={2.5}
      y={4.5}
      width={9}
      height={9}
      rx={1.5}
      className="fill-[#EDF3FF] dark:fill-[#2E436E] stroke-[#3574F0] dark:stroke-[#548AF7]"
    />
    <path
      d="M13.5 10.5V4A1.5 1.5 0 0 0 12 2.5H5.5"
      strokeLinecap="round"
      className="stroke-[#3574F0] dark:stroke-[#548AF7]"
    />
  </svg>
);

export default Contexts;
