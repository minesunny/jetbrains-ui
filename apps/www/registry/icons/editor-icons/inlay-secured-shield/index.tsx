/**
 * Copyright 2000-2024 JetBrains s.r.o. and contributors.
 * Use of this source code is governed by the Apache 2.0 license.
 */
import type { ComponentProps } from 'react';
import { cn } from '@/lib/utils';

export const InlaySecuredShield = ({
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
    viewBox="0 0 12 12"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={cn('inline-block shrink-0', className)}
    role={ariaLabel ? 'img' : 'presentation'}
    aria-label={ariaLabel}
    aria-hidden={!ariaLabel}
    {...props}
  >
    <path
      d="M8.854 4.854a.5.5 0 1 0-.708-.708L5.5 6.793 4.354 5.646a.5.5 0 1 0-.708.708l1.5 1.5a.5.5 0 0 0 .708 0z"
      className="fill-[#818594] dark:fill-[#9DA0A8]"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M11 6c0 4-5 6-5 6s-5-2-5-6V2l5-2 5 2zM2 6V2.677l4-1.6 4 1.6V6c0 1.552-.97 2.795-2.125 3.72A10.3 10.3 0 0 1 6 10.901 10.287 10.287 0 0 1 4.125 9.72C2.97 8.794 2 7.551 2 6"
      className="fill-[#818594] dark:fill-[#9DA0A8]"
    />
  </svg>
);

export default InlaySecuredShield;
