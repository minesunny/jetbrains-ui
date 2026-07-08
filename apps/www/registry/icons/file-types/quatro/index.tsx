/**
 * Copyright 2000-2024 JetBrains s.r.o. and contributors.
 * Use of this source code is governed by the Apache 2.0 license.
 */
import type { ComponentProps } from 'react';
import { cn } from '@/lib/utils';

export const Quatro = ({
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
      d="M7 1.07A7.005 7.005 0 0 0 1.07 7H7zM1.07 9A7 7 0 0 0 7 14.93V9zM9 14.93A7 7 0 0 0 14.929 9h-5.93zM14.929 7a7 7 0 0 0-5.93-5.93V7z"
      className="fill-[#75AADB]"
    />
  </svg>
);

export default Quatro;
