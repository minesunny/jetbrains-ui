/**
 * Copyright 2000-2024 JetBrains s.r.o. and contributors.
 * Use of this source code is governed by the Apache 2.0 license.
 */
import type { FC } from 'react';
import { cn } from '@/lib/utils';
import { type SvgProps, sizeMap } from '../../utils';

export type BreakpointMethodUnsuspendentProps = SvgProps;

const BreakpointMethodUnsuspendentLight: FC<SvgProps> = ({
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
      d="M6.293.707a1 1 0 0 1 1.414 0l5.586 5.586a1 1 0 0 1 0 1.414l-5.586 5.586a1 1 0 0 1-1.414 0L.707 7.707a1 1 0 0 1 0-1.414z"
      fill="#FFAF0F"
    />
  </svg>
);

const BreakpointMethodUnsuspendentDark: FC<SvgProps> = ({
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
      d="M6.293.707a1 1 0 0 1 1.414 0l5.586 5.586a1 1 0 0 1 0 1.414l-5.586 5.586a1 1 0 0 1-1.414 0L.707 7.707a1 1 0 0 1 0-1.414z"
      fill="#F2C55C"
    />
  </svg>
);

export const BreakpointMethodUnsuspendent: FC<
  BreakpointMethodUnsuspendentProps
> = ({
  size = 'md',
  mode = 'light',
  className,
  'aria-label': ariaLabel,
  ...props
}) => {
  const SvgComponent =
    mode === 'light'
      ? BreakpointMethodUnsuspendentLight
      : BreakpointMethodUnsuspendentDark;

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

export default BreakpointMethodUnsuspendent;
