/**
 * Copyright 2000-2024 JetBrains s.r.o. and contributors.
 * Use of this source code is governed by the Apache 2.0 license.
 */
import type { ComponentProps } from 'react';
import { cn } from '@/lib/utils';

export const Install = ({
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
      d="M8 1a.5.5 0 0 1 .5.5v5.293l1.646-1.646a.5.5 0 1 1 .707.707L8 8.707 5.146 5.854a.5.5 0 1 1 .708-.707L7.5 6.793V1.5A.5.5 0 0 1 8 1M6 12H4v1h2z"
      className="fill-[#369650] dark:fill-[#57965C]"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M2 11v3a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1m1 3v-3h10v3z"
      className="fill-[#369650] dark:fill-[#57965C]"
    />
  </svg>
);

export default Install;
