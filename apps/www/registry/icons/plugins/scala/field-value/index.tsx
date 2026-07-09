/**
 * Copyright 2000-2024 JetBrains s.r.o. and contributors.
 * Use of this source code is governed by the Apache 2.0 license.
 */
import type { ComponentProps } from 'react';
import { cn } from '@/lib/utils';

export const ScalaFieldValue = ({
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
      d="M2 4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2z"
      className="fill-[#FAF5FF] dark:fill-[#2F2936]"
    />
    <path
      d="M7.547 11.4h.92l2.355-6H9.791l-1.746 4.705L6.24 5.4H5.18zM9 3h3a1 1 0 0 1 1 1v3h1V4a2 2 0 0 0-2-2H9zM7 3V2H4a2 2 0 0 0-2 2v3h1V4a1 1 0 0 1 1-1zM3 9H2v3a2 2 0 0 0 2 2h3v-1H4a1 1 0 0 1-1-1zM9 13v1h3a2 2 0 0 0 2-2V9h-1v3a1 1 0 0 1-1 1z"
      className="fill-[#834DF0] dark:fill-[#B589EC]"
    />
  </svg>
);

export default ScalaFieldValue;
