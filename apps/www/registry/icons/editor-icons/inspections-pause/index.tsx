/**
 * Copyright 2000-2024 JetBrains s.r.o. and contributors.
 * Use of this source code is governed by the Apache 2.0 license.
 */
import type { ComponentProps } from 'react';
import { cn } from '@/lib/utils';

export const InspectionsPause = ({
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
      d="M4.5 4a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-.5.5H5a.5.5 0 0 1-.5-.5zM9.5 4a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5z"
      className="stroke-[#6C707E] dark:hidden"
    />
    <path
      d="M4.5 3.916a.5.5 0 0 1 .5-.5h2.04a.5.5 0 0 1 .5.5V11a.5.5 0 0 1-.5.5H5a.5.5 0 0 1-.5-.5zM9.545 3.916a.5.5 0 0 1 .5-.5h1.936a.5.5 0 0 1 .5.5V11a.5.5 0 0 1-.5.5h-1.936a.5.5 0 0 1-.5-.5z"
      className="stroke-[#CED0D6] hidden dark:block"
    />
  </svg>
);

export default InspectionsPause;
