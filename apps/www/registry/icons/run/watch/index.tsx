/**
 * Copyright 2000-2024 JetBrains s.r.o. and contributors.
 * Use of this source code is governed by the Apache 2.0 license.
 */
import type { ComponentProps } from 'react';
import { cn } from '@/lib/utils';

export const Watch = ({
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
      d="M6.625 6.547A3 3 0 0 0 1.171 7H.5a.5.5 0 0 0 0 1H1a3 3 0 0 0 6 0 1 1 0 0 1 2 0 3 3 0 1 0 6 0h.5a.5.5 0 0 0 0-1h-.67a3.001 3.001 0 0 0-5.455-.453A2 2 0 0 0 8 6c-.532 0-1.016.208-1.375.547M4 10a2 2 0 1 0 0-4 2 2 0 0 0 0 4m6-2a2 2 0 1 0 4 0 2 2 0 0 0-4 0"
      className="fill-[#6C707E] dark:fill-[#CED0D6]"
    />
  </svg>
);

export default Watch;
