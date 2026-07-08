/**
 * Copyright 2000-2024 JetBrains s.r.o. and contributors.
 * Use of this source code is governed by the Apache 2.0 license.
 */
import type { ComponentProps } from 'react';
import { cn } from '@/lib/utils';

export type PythonProps = Omit<ComponentProps<'svg'>, 'size'> & {
  size?: 12 | 14 | 16 | 20 | 24;
  mode?: 'light' | 'dark';
};

export const Python = ({
  size = 16,
  mode: _mode,
  className,
  'aria-label': ariaLabel,
  ...props
}: PythonProps) => (
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
      d="M8 1c3 0 3 1 3 3v2.5A1.5 1.5 0 0 1 9.5 8h-3A2.5 2.5 0 0 0 4 10.5v.5c-2 0-3 0-3-3s1-3 3-3h3.5a.5.5 0 0 0 0-1H5c0-2 0-3 3-3M6.5 3a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1"
      className="fill-[#4682FA] dark:fill-[#548AF7]"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12 5v1.5A2.5 2.5 0 0 1 9.5 9h-3A1.5 1.5 0 0 0 5 10.5V12c0 2 0 3 3 3s3-1 3-3H8.5a.5.5 0 0 1 0-1H12c2 0 3 0 3-3s-1-3-3-3m-2.5 9a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1"
      className="fill-[#FFAF0F] dark:fill-[#F2C55C]"
    />
  </svg>
);

export default Python;
