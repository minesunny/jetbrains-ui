/**
 * Copyright 2000-2024 JetBrains s.r.o. and contributors.
 * Use of this source code is governed by the Apache 2.0 license.
 */
import type { ComponentProps, FC } from 'react';
import { cn } from '@/lib/utils';

export type RedshiftProps = Omit<ComponentProps<'svg'>, 'size'> & {
  size?: 12 | 14 | 16 | 20 | 24;
  mode?: 'light' | 'dark';
};

const RedshiftLight: FC<
  Omit<ComponentProps<'svg'>, 'size'> & { size: number }
> = ({
  size,
  className,
  role,
  'aria-label': ariaLabel,
  'aria-hidden': ariaHidden,
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    role={role}
    aria-label={ariaLabel}
    aria-hidden={ariaHidden}
  >
    <path
      d="m6.784 1-2.13.913v12.174l2.13.913zM2.828 3.009l-1.218.426v9.13l1.218.487zM13.176 3.009l-1.827.608v8.827l1.826.608z"
      fill="#1B5A9A"
    />
    <path
      d="m9.218 1 2.13.913v12.174L9.219 15zM2.827 3.009l1.826.608v8.827l-1.826.608zM13.175 3.009l1.217.426v9.13l-1.217.487z"
      fill="#4F93D1"
    />
    <path fill="#2870BA" d="M6.784 1H9.219V15H6.784z" />
  </svg>
);

const RedshiftDark: FC<
  Omit<ComponentProps<'svg'>, 'size'> & { size: number }
> = ({
  size,
  className,
  role,
  'aria-label': ariaLabel,
  'aria-hidden': ariaHidden,
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    role={role}
    aria-label={ariaLabel}
    aria-hidden={ariaHidden}
  >
    <path
      d="m6.784 1-2.13.913v12.174l2.13.913zM2.828 3.009l-1.218.426v9.13l1.218.487zM13.176 3.009l-1.827.608v8.827l1.826.608z"
      fill="#1B5A9A"
    />
    <path
      d="m9.218 1 2.13.913v12.174L9.219 15zM2.827 3.009l1.826.608v8.827l-1.826.608zM13.175 3.009l1.217.426v9.13l-1.217.487z"
      fill="#4F93D1"
    />
    <path fill="#2870BA" d="M6.784 1H9.219V15H6.784z" />
  </svg>
);

export const Redshift: FC<RedshiftProps> = ({
  size = 16,
  mode = 'light',
  className,
  'aria-label': ariaLabel,
  ...props
}) => {
  const SvgComponent = mode === 'light' ? RedshiftLight : RedshiftDark;

  return (
    <SvgComponent
      size={size}
      className={cn('inline-block shrink-0', className)}
      role={ariaLabel ? 'img' : 'presentation'}
      aria-label={ariaLabel}
      aria-hidden={!ariaLabel}
      {...props}
    />
  );
};

export default Redshift;
