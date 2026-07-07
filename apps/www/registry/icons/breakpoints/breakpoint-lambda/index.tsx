/**
 * Copyright 2000-2024 JetBrains s.r.o. and contributors.
 * Use of this source code is governed by the Apache 2.0 license.
 */
import type { FC } from 'react';
import { cn } from '@/lib/utils';
import { type SvgProps, sizeMap } from '../../utils';

export type BreakpointLambdaProps = SvgProps;

const BreakpointLambdaLight: FC<SvgProps> = ({
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
      d="M2.847 0h1.444c1.715 0 2.573 1.01 3.117 2.385L12 14h-1.985l-2.91-7.82L3.967 14H2L6.215 3.865 5.567 2.52c-.24-.521-.722-.917-1.36-.917h-1.36z"
      fill="#E55765"
    />
  </svg>
);

const BreakpointLambdaDark: FC<SvgProps> = ({
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
      d="M2.847 0h1.444c1.715 0 2.573 1.01 3.117 2.385L12 14h-1.985l-2.91-7.82L3.967 14H2L6.215 3.865 5.567 2.52c-.24-.521-.722-.917-1.36-.917h-1.36z"
      fill="#DB5C5C"
    />
  </svg>
);

export const BreakpointLambda: FC<BreakpointLambdaProps> = ({
  size = 'md',
  mode = 'light',
  className,
  'aria-label': ariaLabel,
  ...props
}) => {
  const SvgComponent =
    mode === 'light' ? BreakpointLambdaLight : BreakpointLambdaDark;

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

export default BreakpointLambda;
