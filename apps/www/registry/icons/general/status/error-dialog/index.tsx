/**
 * Copyright 2000-2024 JetBrains s.r.o. and contributors.
 * Use of this source code is governed by the Apache 2.0 license.
 */
import type { FC } from 'react';
import { cn } from '@/lib/utils';
import { type SvgProps, sizeMap } from '../../../utils';

export type ErrorDialogProps = SvgProps;

const ErrorDialogLight: FC<SvgProps> = ({
  size,
  className,
  role,
  'aria-label': ariaLabel,
  'aria-hidden': ariaHidden,
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 28 28"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    role={role}
    aria-label={ariaLabel}
    aria-hidden={ariaHidden}
  >
    <circle cx={14} cy={14} r={12} fill="#E55765" />
    <path
      d="M15 8a1 1 0 1 0-2 0v6a1 1 0 1 0 2 0zM14 21a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3"
      fill="#fff"
    />
  </svg>
);

const ErrorDialogDark: FC<SvgProps> = ({
  size,
  className,
  role,
  'aria-label': ariaLabel,
  'aria-hidden': ariaHidden,
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 28 28"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    role={role}
    aria-label={ariaLabel}
    aria-hidden={ariaHidden}
  >
    <g clipPath="url(#a)">
      <circle cx={14} cy={14} r={12} fill="#DB5C5C" />
      <path
        d="M15 8a1 1 0 1 0-2 0v6a1 1 0 1 0 2 0zM14 21a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3"
        fill="#fff"
      />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M0 0H28V28H0z" />
      </clipPath>
    </defs>
  </svg>
);

export const ErrorDialog: FC<ErrorDialogProps> = ({
  size = 'md',
  mode = 'light',
  className,
  'aria-label': ariaLabel,
  ...props
}) => {
  const SvgComponent = mode === 'light' ? ErrorDialogLight : ErrorDialogDark;

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

export default ErrorDialog;
