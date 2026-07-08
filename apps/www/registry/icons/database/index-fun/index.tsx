/**
 * Copyright 2000-2024 JetBrains s.r.o. and contributors.
 * Use of this source code is governed by the Apache 2.0 license.
 */
import type { ComponentProps } from 'react';
import { cn } from '@/lib/utils';

export type IndexFunProps = Omit<ComponentProps<'svg'>, 'size'> & {
  size?: 12 | 14 | 16 | 20 | 24;
  mode?: 'light' | 'dark';
};

export const IndexFun = ({
  size = 16,
  mode: _mode,
  className,
  'aria-label': ariaLabel,
  ...props
}: IndexFunProps) => (
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
      d="M7 2a.5.5 0 0 0-.5.5v.974a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5V2.5A.5.5 0 0 0 8 2zM4.5 6.5A.5.5 0 0 1 5 6h2.5a.5.5 0 0 1 .5.5V14h2.5a.5.5 0 0 1 0 1h-6a.5.5 0 0 1 0-1H7V7H5a.5.5 0 0 1-.5-.5"
      className="fill-[#834DF0] dark:fill-[#B589EC]"
    />
  </svg>
);

export default IndexFun;
