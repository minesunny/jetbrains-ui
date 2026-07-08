/**
 * Copyright 2000-2024 JetBrains s.r.o. and contributors.
 * Use of this source code is governed by the Apache 2.0 license.
 */
import type { ComponentProps } from 'react';
import { cn } from '@/lib/utils';

export type AngularJsMonochromeProps = Omit<ComponentProps<'svg'>, 'size'> & {
  size?: 12 | 14 | 16 | 20 | 24;
  mode?: 'light' | 'dark';
};

export const AngularJsMonochrome = ({
  size = 16,
  mode: _mode,
  className,
  'aria-label': ariaLabel,
  ...props
}: AngularJsMonochromeProps) => (
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
      d="M2.43 10.575 2 3.772l4.574-2.117zM6.353 9.025h3.294L8 5.016zM8 14.342l-3.137-1.78.639-1.545h4.996l.639 1.546zM13.57 10.575 14 3.772 9.426 1.654z"
      className="fill-[#0F0F11] dark:fill-[#fff]"
    />
  </svg>
);

export default AngularJsMonochrome;
