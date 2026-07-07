/**
 * Copyright 2000-2024 JetBrains s.r.o. and contributors.
 * Use of this source code is governed by the Apache 2.0 license.
 */
import type { ComponentProps, FC } from 'react';
import { cn } from '@/lib/utils';

export type BreakpointFieldProps = Omit<ComponentProps<'svg'>, 'size'> & {
  size?: 12 | 14 | 16 | 20 | 24;
  mode?: 'light' | 'dark';
};

const BreakpointFieldLight: FC<
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
    viewBox="0 0 14 14"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    role={role}
    aria-label={ariaLabel}
    aria-hidden={ariaHidden}
  >
    <path d="M7 9a2 2 0 1 0 0-4 2 2 0 0 0 0 4" fill="#E55765" />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M7 2C3.64 2 .75 4.328 0 7c.75 2.672 3.64 5 7 5s6.25-2.328 7-5c-.75-2.672-3.64-5-7-5m3.5 5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0"
      fill="#E55765"
    />
  </svg>
);

const BreakpointFieldDark: FC<
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
    viewBox="0 0 14 14"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    role={role}
    aria-label={ariaLabel}
    aria-hidden={ariaHidden}
  >
    <path d="M7 9a2 2 0 1 0 0-4 2 2 0 0 0 0 4" fill="#DB5C5C" />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M7 2C3.64 2 .75 4.328 0 7c.75 2.672 3.64 5 7 5s6.25-2.328 7-5c-.75-2.672-3.64-5-7-5m3.5 5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0"
      fill="#DB5C5C"
    />
  </svg>
);

export const BreakpointField: FC<BreakpointFieldProps> = ({
  size = 16,
  mode = 'light',
  className,
  'aria-label': ariaLabel,
  ...props
}) => {
  const SvgComponent =
    mode === 'light' ? BreakpointFieldLight : BreakpointFieldDark;

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

export default BreakpointField;
