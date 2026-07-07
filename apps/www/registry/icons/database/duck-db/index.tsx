/**
 * Copyright 2000-2024 JetBrains s.r.o. and contributors.
 * Use of this source code is governed by the Apache 2.0 license.
 */
import type { FC } from 'react';
import { cn } from '@/lib/utils';
import { type SvgProps, sizeMap } from '../../utils';

export type DuckDbProps = SvgProps;

const DuckDbLight: FC<SvgProps> = ({
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
      d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14"
      fill="#000"
    />
    <path
      d="M6.5 11a3 3 0 1 0 0-6 3 3 0 0 0 0 6M12 7h-1.5v2H12a1 1 0 1 0 0-2"
      fill="#FDEF50"
    />
  </svg>
);

const DuckDbDark: FC<SvgProps> = ({
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
      d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14"
      fill="#000"
    />
    <path
      d="M6.5 11a3 3 0 1 0 0-6 3 3 0 0 0 0 6M12 7h-1.5v2H12a1 1 0 1 0 0-2"
      fill="#FDEF50"
    />
  </svg>
);

export const DuckDb: FC<DuckDbProps> = ({
  size = 'md',
  mode = 'light',
  className,
  'aria-label': ariaLabel,
  ...props
}) => {
  const SvgComponent = mode === 'light' ? DuckDbLight : DuckDbDark;

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

export default DuckDb;
