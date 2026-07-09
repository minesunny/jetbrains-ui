/**
 * Copyright 2000-2024 JetBrains s.r.o. and contributors.
 * Use of this source code is governed by the Apache 2.0 license.
 */
import type { ComponentProps } from 'react';
import { cn } from '@/lib/utils';

export const CwmPermissionsGranted = ({
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
      d="M8.969 8a4 4 0 1 1 0-1H14.5a.5.5 0 0 1 0 1H14v2.5a.5.5 0 0 1-1 0V8h-1v2.5a.5.5 0 0 1-1 0V8zM5 10.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6"
      className="fill-[#6C707E] dark:fill-[#CED0D6]"
    />
    <path
      d="M15.827 11.176a.6.6 0 0 1 0 .848l-3.797 3.797a.6.6 0 0 1-.848 0l-2.006-2.006a.6.6 0 1 1 .848-.848l1.582 1.581 3.373-3.372a.6.6 0 0 1 .848 0"
      className="fill-[#369650] dark:fill-[#57965C]"
    />
  </svg>
);

export default CwmPermissionsGranted;
