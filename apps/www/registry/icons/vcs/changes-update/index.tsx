/**
 * Copyright 2000-2024 JetBrains s.r.o. and contributors.
 * Use of this source code is governed by the Apache 2.0 license.
 */
import type { ComponentProps } from 'react';
import { cn } from '@/lib/utils';

export const ChangesUpdate = ({
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
      fillRule="evenodd"
      clipRule="evenodd"
      d="M8.25 8.5a.75.75 0 0 1-.75.75h-4a.75.75 0 0 1-.75-.75v-4a.75.75 0 0 1 1.5 0v2.19l3.72-3.72a.75.75 0 0 1 1.06 1.06L5.31 7.75H7.5a.75.75 0 0 1 .75.75"
      className="fill-[#3574F0] dark:fill-[#548AF7]"
    />
  </svg>
);

export default ChangesUpdate;
