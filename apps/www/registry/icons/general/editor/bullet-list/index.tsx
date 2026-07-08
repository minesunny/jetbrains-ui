/**
 * Copyright 2000-2024 JetBrains s.r.o. and contributors.
 * Use of this source code is governed by the Apache 2.0 license.
 */
import type { ComponentProps } from 'react';
import { cn } from '@/lib/utils';

export const BulletList = ({
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
      d="M3.5 3.25a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5M7.5 2a.5.5 0 0 0 0 1h6a.5.5 0 0 0 0-1zM7.5 7a.5.5 0 0 0 0 1h6a.5.5 0 0 0 0-1zM7.5 12a.5.5 0 0 0 0 1h6a.5.5 0 0 0 0-1zM3.5 8.25a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5M4.25 12.5a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0"
      className="fill-[#6C707E] dark:fill-[#CED0D6]"
    />
  </svg>
);

export default BulletList;
