/**
 * Copyright 2000-2024 JetBrains s.r.o. and contributors.
 * Use of this source code is governed by the Apache 2.0 license.
 */
import type { ComponentProps } from 'react';
import { cn } from '@/lib/utils';

export type RedshiftProps = Omit<ComponentProps<'svg'>, 'size'> & {
  size?: 12 | 14 | 16 | 20 | 24;
  mode?: 'light' | 'dark';
};

export const Redshift = ({
  size = 16,
  mode: _mode,
  className,
  'aria-label': ariaLabel,
  ...props
}: RedshiftProps) => (
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
      d="m6.784 1-2.13.913v12.174l2.13.913zM2.828 3.009l-1.218.426v9.13l1.218.487zM13.176 3.009l-1.827.608v8.827l1.826.608z"
      className="fill-[#1B5A9A]"
    />
    <path
      d="m9.218 1 2.13.913v12.174L9.219 15zM2.827 3.009l1.826.608v8.827l-1.826.608zM13.175 3.009l1.217.426v9.13l-1.217.487z"
      className="fill-[#4F93D1]"
    />
    <path d="M6.784 1H9.219V15H6.784z" className="fill-[#2870BA]" />
  </svg>
);

export default Redshift;
