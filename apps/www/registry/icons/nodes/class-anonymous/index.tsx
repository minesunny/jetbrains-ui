/**
 * Copyright 2000-2024 JetBrains s.r.o. and contributors.
 * Use of this source code is governed by the Apache 2.0 license.
 */
import type { FC } from 'react';
import { cn } from '@/lib/utils';
import { type SvgProps, sizeMap } from '../../utils';

export type ClassAnonymousProps = SvgProps;

const ClassAnonymousLight: FC<SvgProps> = ({
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
      d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14m0-5a2 2 0 1 0 0-4 2 2 0 0 0 0 4"
      fill="#EDF3FF"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12m3-6a3 3 0 1 1-6 0 3 3 0 0 1 6 0m4 0A7 7 0 1 1 1 8a7 7 0 0 1 14 0m-5 0a2 2 0 1 1-4 0 2 2 0 0 1 4 0"
      fill="#3574F0"
    />
  </svg>
);

const ClassAnonymousDark: FC<SvgProps> = ({
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
      d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14m0-5a2 2 0 1 0 0-4 2 2 0 0 0 0 4"
      fill="#25324D"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12m3-6a3 3 0 1 1-6 0 3 3 0 0 1 6 0m4 0A7 7 0 1 1 1 8a7 7 0 0 1 14 0m-5 0a2 2 0 1 1-4 0 2 2 0 0 1 4 0"
      fill="#548AF7"
    />
  </svg>
);

export const ClassAnonymous: FC<ClassAnonymousProps> = ({
  size = 'md',
  mode = 'light',
  className,
  'aria-label': ariaLabel,
  ...props
}) => {
  const SvgComponent =
    mode === 'light' ? ClassAnonymousLight : ClassAnonymousDark;

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

export default ClassAnonymous;
