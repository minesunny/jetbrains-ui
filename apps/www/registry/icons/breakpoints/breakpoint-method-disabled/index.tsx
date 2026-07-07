/**
 * Copyright 2000-2024 JetBrains s.r.o. and contributors.
 * Use of this source code is governed by the Apache 2.0 license.
 */
import type { FC } from 'react';
import { cn } from '@/lib/utils';
import { type SvgProps, sizeMap } from '../../utils';

export type BreakpointMethodDisabledProps = SvgProps;

const BreakpointMethodDisabledLight: FC<SvgProps> = ({
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
      d="M6.823 1.237a.25.25 0 0 1 .354 0l5.586 5.586a.25.25 0 0 1 0 .354l-5.586 5.586a.25.25 0 0 1-.354 0L1.237 7.177a.25.25 0 0 1 0-.354z"
      stroke="#E55765"
      strokeWidth={1.5}
    />
  </svg>
);

const BreakpointMethodDisabledDark: FC<SvgProps> = ({
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
      d="M6.823 1.237a.25.25 0 0 1 .354 0l5.586 5.586a.25.25 0 0 1 0 .354l-5.586 5.586a.25.25 0 0 1-.354 0L1.237 7.177a.25.25 0 0 1 0-.354z"
      stroke="#DB5C5C"
      strokeWidth={1.5}
    />
  </svg>
);

export const BreakpointMethodDisabled: FC<BreakpointMethodDisabledProps> = ({
  size = 'md',
  mode = 'light',
  className,
  'aria-label': ariaLabel,
  ...props
}) => {
  const SvgComponent =
    mode === 'light'
      ? BreakpointMethodDisabledLight
      : BreakpointMethodDisabledDark;

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

export default BreakpointMethodDisabled;
