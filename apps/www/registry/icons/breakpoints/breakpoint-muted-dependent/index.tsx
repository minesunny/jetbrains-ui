/**
 * Copyright 2000-2024 JetBrains s.r.o. and contributors.
 * Use of this source code is governed by the Apache 2.0 license.
 */
import type { ComponentProps, FC } from 'react';
import { cn } from '@/lib/utils';

export type BreakpointMutedDependentProps = Omit<
  ComponentProps<'svg'>,
  'size'
> & {
  size?: 12 | 14 | 16 | 20 | 24;
  mode?: 'light' | 'dark';
};

const BreakpointMutedDependentLight: FC<
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
      fillRule="evenodd"
      clipRule="evenodd"
      d="M2.5 5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5"
      fill="#6C707E"
    />
    <path
      d="M5.173.24c.332.393.58.86.714 1.373Q6.427 1.5 7 1.5a5.5 5.5 0 1 1-5.387 4.387A3.5 3.5 0 0 1 .24 5.173 7 7 0 1 0 5.174.24"
      fill="#6C707E"
    />
  </svg>
);

const BreakpointMutedDependentDark: FC<
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
      fillRule="evenodd"
      clipRule="evenodd"
      d="M2.5 5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5"
      fill="#CED0D6"
    />
    <path
      d="M5.173.24c.332.393.58.86.714 1.373Q6.427 1.5 7 1.5a5.5 5.5 0 1 1-5.387 4.387A3.5 3.5 0 0 1 .24 5.173 7 7 0 1 0 5.174.24"
      fill="#CED0D6"
    />
  </svg>
);

export const BreakpointMutedDependent: FC<BreakpointMutedDependentProps> = ({
  size = 16,
  mode = 'light',
  className,
  'aria-label': ariaLabel,
  ...props
}) => {
  const SvgComponent =
    mode === 'light'
      ? BreakpointMutedDependentLight
      : BreakpointMutedDependentDark;

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

export default BreakpointMutedDependent;
