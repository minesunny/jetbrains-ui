/**
 * Copyright 2000-2024 JetBrains s.r.o. and contributors.
 * Use of this source code is governed by the Apache 2.0 license.
 */
import type { FC } from 'react';
import { cn } from '@/lib/utils';
import { type SvgProps, sizeMap } from '../../../utils';

export type AccessPrivateProps = SvgProps;

const AccessPrivateLight: FC<SvgProps> = ({
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
    <path fill="#FFF7F7" d="M6 8H10V11H6z" />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M10 7V6a2 2 0 1 0-4 0v1a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1V8a1 1 0 0 0-1-1M7 6a1 1 0 0 1 2 0v1H7zm-1 5V8h4v3z"
      fill="#DB3B4B"
    />
  </svg>
);

const AccessPrivateDark: FC<SvgProps> = ({
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
    <path fill="#402929" d="M6 8H10V11H6z" />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M10 7V6a2 2 0 1 0-4 0v1a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1V8a1 1 0 0 0-1-1M7 6a1 1 0 0 1 2 0v1H7zm-1 5V8h4v3z"
      fill="#DB5C5C"
    />
  </svg>
);

export const AccessPrivate: FC<AccessPrivateProps> = ({
  size = 'md',
  mode = 'light',
  className,
  'aria-label': ariaLabel,
  ...props
}) => {
  const SvgComponent =
    mode === 'light' ? AccessPrivateLight : AccessPrivateDark;

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

export default AccessPrivate;
