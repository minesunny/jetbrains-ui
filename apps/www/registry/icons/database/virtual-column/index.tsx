/**
 * Copyright 2000-2024 JetBrains s.r.o. and contributors.
 * Use of this source code is governed by the Apache 2.0 license.
 */
import type { FC } from 'react';
import { cn } from '@/lib/utils';
import { type SvgProps, sizeMap } from '../../utils';

export type VirtualColumnProps = SvgProps;

const VirtualColumnLight: FC<SvgProps> = ({
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
      d="M1 4a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2zm2-1h2v10H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1m3 0v10h7a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1z"
      fill="#955AE0"
    />
    <path d="M2 4a1 1 0 0 1 1-1h2v10H3a1 1 0 0 1-1-1z" fill="#EEE0FF" />
  </svg>
);

const VirtualColumnDark: FC<SvgProps> = ({
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
      d="M1 4a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2zm2-1h2v10H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1m3 0v10h7a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1z"
      fill="#B589EC"
    />
    <path d="M2 4a1 1 0 0 1 1-1h2v10H3a1 1 0 0 1-1-1z" fill="#2F2936" />
  </svg>
);

export const VirtualColumn: FC<VirtualColumnProps> = ({
  size = 'md',
  mode = 'light',
  className,
  'aria-label': ariaLabel,
  ...props
}) => {
  const SvgComponent =
    mode === 'light' ? VirtualColumnLight : VirtualColumnDark;

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

export default VirtualColumn;
