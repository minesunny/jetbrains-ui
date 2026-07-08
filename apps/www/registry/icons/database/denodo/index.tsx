/**
 * Copyright 2000-2024 JetBrains s.r.o. and contributors.
 * Use of this source code is governed by the Apache 2.0 license.
 */
import type { ComponentProps } from 'react';
import { cn } from '@/lib/utils';

export const Denodo = ({
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
      d="M9.5 1h-3v3h3zM9.5 12h-3v3h3zM14.812 5.799l-1.5-2.598-2.598 1.5 1.5 2.598zM5.286 11.299l-1.5-2.598-2.598 1.5 1.5 2.598zM2.688 3.201l-1.5 2.598 2.598 1.5 1.5-2.598zM12.214 8.701l-1.5 2.598 2.598 1.5 1.5-2.598z"
      className="fill-[#F05049] dark:fill-[#EF5049]"
    />
    <path d="M6.5 6.5h3v3h-3z" className="fill-[#000] dark:fill-[#fff]" />
  </svg>
);

export default Denodo;
