/**
 * Copyright 2000-2024 JetBrains s.r.o. and contributors.
 * Use of this source code is governed by the Apache 2.0 license.
 */
import type { ComponentProps } from 'react';
import { cn } from '@/lib/utils';

export const AutoRefresh = ({
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
      d="M3 8a5 5 0 0 1 7.727-4.192.5.5 0 0 0 .546-.837A6 6 0 0 0 2 8v.292L.854 7.147a.5.5 0 1 0-.708.707l2 2a.5.5 0 0 0 .708 0l2-2a.5.5 0 1 0-.708-.707L3 8.293zM5.273 12.192A5 5 0 0 0 13 8v-.293l-1.146 1.146a.5.5 0 0 1-.707-.707l2-2a.5.5 0 0 1 .707 0l2 2a.5.5 0 0 1-.707.707L14 7.707V8a6 6 0 0 1-9.273 5.03.5.5 0 0 1 .546-.838"
      className="fill-[#369650] dark:fill-[#57965C]"
    />
  </svg>
);

export default AutoRefresh;
