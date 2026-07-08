/**
 * Copyright 2000-2024 JetBrains s.r.o. and contributors.
 * Use of this source code is governed by the Apache 2.0 license.
 */
import type { ComponentProps } from 'react';
import { cn } from '@/lib/utils';

export const Bookmarks = ({
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
      d="M5.5 1a.5.5 0 0 0 0 1H12a1 1 0 0 1 1 1v9.5a.5.5 0 0 0 1 0V3a2 2 0 0 0-2-2z"
      className="fill-[#6C707E] dark:fill-[#CED0D6]"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M10.363 14.77 7 12l-3.364 2.77A1 1 0 0 1 2 13.998V5a2 2 0 0 1 2-2h5.999a2 2 0 0 1 2 2v8.998a1 1 0 0 1-1.636.772m-2.727-3.542a1 1 0 0 0-1.272 0L3 13.998V5a1 1 0 0 1 1-1h5.999a1 1 0 0 1 1 1v8.998z"
      className="fill-[#6C707E] dark:fill-[#CED0D6]"
    />
  </svg>
);

export default Bookmarks;
