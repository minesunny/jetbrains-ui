/**
 * Copyright 2000-2024 JetBrains s.r.o. and contributors.
 * Use of this source code is governed by the Apache 2.0 license.
 */
import type { ComponentProps } from 'react';
import { cn } from '@/lib/utils';

export type LocateProps = Omit<ComponentProps<'svg'>, 'size'> & {
  size?: 12 | 14 | 16 | 20 | 24;
  mode?: 'light' | 'dark';
};

export const Locate = ({
  size = 16,
  mode: _mode,
  className,
  'aria-label': ariaLabel,
  ...props
}: LocateProps) => (
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
      d="M8.5 5V2.02a6 6 0 0 1 5.48 5.48H11a.5.5 0 0 0 0 1h2.98a6 6 0 0 1-5.48 5.48V11a.5.5 0 0 0-1 0v2.98A6 6 0 0 1 2.02 8.5H5a.5.5 0 0 0 0-1H2.02A6 6 0 0 1 7.5 2.02V5a.5.5 0 0 0 1 0M1 8a7 7 0 1 1 14 0A7 7 0 0 1 1 8"
      className="fill-[#6C707E] dark:fill-[#CED0D6]"
    />
  </svg>
);

export default Locate;
