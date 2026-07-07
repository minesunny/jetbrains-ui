/**
 * Copyright 2000-2024 JetBrains s.r.o. and contributors.
 * Use of this source code is governed by the Apache 2.0 license.
 */
import type { ComponentProps, FC } from 'react';
import { cn } from '@/lib/utils';

export type MultipleBreakpointsProps = Omit<ComponentProps<'svg'>, 'size'> & {
  size?: 12 | 14 | 16 | 20 | 24;
  mode?: 'light' | 'dark';
};

const MultipleBreakpointsLight: FC<
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
    <path
      d="M9.975 8.975a5.5 5.5 0 0 0-4.95-4.95 4.5 4.5 0 1 1 4.95 4.95"
      fill="#E55765"
    />
    <path d="M9 9.5a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0" fill="#E55765" />
  </svg>
);

const MultipleBreakpointsDark: FC<
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
    <path
      d="M9.975 8.975a5.5 5.5 0 0 0-4.95-4.95 4.5 4.5 0 1 1 4.95 4.95"
      fill="#DB5C5C"
    />
    <path d="M9 9.5a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0" fill="#DB5C5C" />
  </svg>
);

export const MultipleBreakpoints: FC<MultipleBreakpointsProps> = ({
  size = 16,
  mode = 'light',
  className,
  'aria-label': ariaLabel,
  ...props
}) => {
  const SvgComponent =
    mode === 'light' ? MultipleBreakpointsLight : MultipleBreakpointsDark;

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

export default MultipleBreakpoints;
