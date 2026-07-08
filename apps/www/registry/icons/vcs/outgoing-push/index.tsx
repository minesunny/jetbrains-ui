/**
 * Copyright 2000-2024 JetBrains s.r.o. and contributors.
 * Use of this source code is governed by the Apache 2.0 license.
 */
import type { ComponentProps } from 'react';
import { cn } from '@/lib/utils';

export const OutgoingPush = ({
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
      fillRule="evenodd"
      clipRule="evenodd"
      d="M3.146 12.146a.5.5 0 0 0 .708.708L12 4.707V10.5a.5.5 0 1 0 1 0v-7a.5.5 0 0 0-.5-.5h-7a.5.5 0 0 0 0 1h5.793z"
      className="fill-[#369650] dark:hidden"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M3.146 12.146a.5.5 0 0 0 .708.708L12 4.707V10.5a.5.5 0 0 0 1 0v-7a.5.5 0 0 0-.5-.5h-7a.5.5 0 0 0 0 1h5.793z"
      className="fill-[#57965C] hidden dark:block"
    />
  </svg>
);

export default OutgoingPush;
