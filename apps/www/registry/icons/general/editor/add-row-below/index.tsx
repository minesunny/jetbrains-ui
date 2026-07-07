/**
 * Copyright 2000-2024 JetBrains s.r.o. and contributors.
 * Use of this source code is governed by the Apache 2.0 license.
 */
import type { FC } from 'react';
import { cn } from '@/lib/utils';
import { type SvgProps, sizeMap } from '../../../utils';

export type AddRowBelowProps = SvgProps;

const AddRowBelowLight: FC<SvgProps> = ({
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
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M2 6a2 2 0 0 0 2 2h7a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2zm1-3v3a1 1 0 0 0 1 1h3V2H4a1 1 0 0 0-1 1m8 4H8V2h3a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1"
      fill="#6C707E"
    />
    <path
      d="M8 10.5a.5.5 0 0 0-1 0V12H5.5a.5.5 0 0 0 0 1H7v1.5a.5.5 0 0 0 1 0V13h1.5a.5.5 0 0 0 0-1H8z"
      fill="#6C707E"
    />
  </svg>
);

const AddRowBelowDark: FC<SvgProps> = ({
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
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M2 6a2 2 0 0 0 2 2h7a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2zm1-3v3a1 1 0 0 0 1 1h3V2H4a1 1 0 0 0-1 1m8 4H8V2h3a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1"
      fill="#CED0D6"
    />
    <path
      d="M8 10.5a.5.5 0 0 0-1 0V12H5.5a.5.5 0 0 0 0 1H7v1.5a.5.5 0 0 0 1 0V13h1.5a.5.5 0 0 0 0-1H8z"
      fill="#CED0D6"
    />
  </svg>
);

export const AddRowBelow: FC<AddRowBelowProps> = ({
  size = 'md',
  mode = 'light',
  className,
  'aria-label': ariaLabel,
  ...props
}) => {
  const SvgComponent = mode === 'light' ? AddRowBelowLight : AddRowBelowDark;

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

export default AddRowBelow;
