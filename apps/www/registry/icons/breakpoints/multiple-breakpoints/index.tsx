/**
 * Copyright 2000-2024 JetBrains s.r.o. and contributors.
 * Use of this source code is governed by the Apache 2.0 license.
 */
import type { FC } from 'react';
import { cn } from '@/lib/utils';
import { type SvgProps, sizeMap } from '../../utils';

export type MultipleBreakpointsProps = SvgProps;

const MultipleBreakpointsLight: FC<SvgProps> = ({
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

const MultipleBreakpointsDark: FC<SvgProps> = ({
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
  size = 'md',
  mode = 'light',
  className,
  'aria-label': ariaLabel,
  ...props
}) => {
  const SvgComponent =
    mode === 'light' ? MultipleBreakpointsLight : MultipleBreakpointsDark;

  return (
    <SvgComponent
      size={sizeMap[size]}
      className={cn('inline-block flex-shrink-0', className)}
      role={ariaLabel ? 'img' : 'presentation'}
      aria-label={ariaLabel}
      aria-hidden={!ariaLabel}
      {...props}
    />
  );
};

export default MultipleBreakpoints;
