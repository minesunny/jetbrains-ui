/**
 * Copyright 2000-2024 JetBrains s.r.o. and contributors.
 * Use of this source code is governed by the Apache 2.0 license.
 */
import type { FC } from 'react';
import { cn } from '@/lib/utils';
import { type SvgProps, sizeMap } from '../../utils';

export type BreakpointFieldUnsuspendentDisabledProps = SvgProps;

const BreakpointFieldUnsuspendentDisabledLight: FC<SvgProps> = ({
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
      d="M0 7c.75-2.672 3.64-5 7-5s6.25 2.328 7 5c-.75 2.672-3.64 5-7 5S.75 9.672 0 7m7 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7"
      fill="#FFAF0F"
    />
  </svg>
);

const BreakpointFieldUnsuspendentDisabledDark: FC<SvgProps> = ({
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
      d="M0 7c.75-2.672 3.64-5 7-5s6.25 2.328 7 5c-.75 2.672-3.64 5-7 5S.75 9.672 0 7m7 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7"
      fill="#F2C55C"
    />
  </svg>
);

export const BreakpointFieldUnsuspendentDisabled: FC<
  BreakpointFieldUnsuspendentDisabledProps
> = ({
  size = 'md',
  mode = 'light',
  className,
  'aria-label': ariaLabel,
  ...props
}) => {
  const SvgComponent =
    mode === 'light'
      ? BreakpointFieldUnsuspendentDisabledLight
      : BreakpointFieldUnsuspendentDisabledDark;

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

export default BreakpointFieldUnsuspendentDisabled;
