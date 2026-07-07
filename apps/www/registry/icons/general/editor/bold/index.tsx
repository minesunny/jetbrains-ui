/**
 * Copyright 2000-2024 JetBrains s.r.o. and contributors.
 * Use of this source code is governed by the Apache 2.0 license.
 */
import type { FC } from 'react';
import { cn } from '@/lib/utils';
import { type SvgProps, sizeMap } from '../../../utils';

export type BoldProps = SvgProps;

const BoldLight: FC<SvgProps> = ({
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
      d="M5 3.75A.75.75 0 0 1 5.75 3h3a2.75 2.75 0 0 1 2.041 4.593A3 3 0 0 1 9 13H5.75a.75.75 0 0 1-.75-.75zM6.5 8.5v3H9a1.5 1.5 0 0 0 0-3zm0-1.5h2.25a1.25 1.25 0 1 0 0-2.5H6.5z"
      fill="#6C707E"
    />
  </svg>
);

const BoldDark: FC<SvgProps> = ({
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
      d="M5 3.75A.75.75 0 0 1 5.75 3h3a2.75 2.75 0 0 1 2.041 4.593A3 3 0 0 1 9 13H5.75a.75.75 0 0 1-.75-.75zM6.5 8.5v3H9a1.5 1.5 0 0 0 0-3zm0-1.5h2.25a1.25 1.25 0 1 0 0-2.5H6.5z"
      fill="#CED0D6"
    />
  </svg>
);

export const Bold: FC<BoldProps> = ({
  size = 'md',
  mode = 'light',
  className,
  'aria-label': ariaLabel,
  ...props
}) => {
  const SvgComponent = mode === 'light' ? BoldLight : BoldDark;

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

export default Bold;
