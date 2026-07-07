/**
 * Copyright 2000-2024 JetBrains s.r.o. and contributors.
 * Use of this source code is governed by the Apache 2.0 license.
 */
import type { FC } from 'react';
import { cn } from '@/lib/utils';
import { type SvgProps, sizeMap } from '../../../utils';

export type DatabaseProps = SvgProps;

const DatabaseLight: FC<SvgProps> = ({
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
      d="M2.5 12V6C2.5 5.17157 3.17157 4.5 4 4.5H10C10.8284 4.5 11.5 5.17157 11.5 6V12C11.5 12.8284 10.8284 13.5 10 13.5H4C3.17157 13.5 2.5 12.8284 2.5 12Z"
      fill="#EDF3FF"
      stroke="#3574F0"
    />
    <path
      d="M5.5 2.5H12C12.8284 2.5 13.5 3.17157 13.5 4V10.5"
      stroke="#3574F0"
      strokeLinecap="round"
    />
  </svg>
);

const DatabaseDark: FC<SvgProps> = ({
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
      d="M2.5 12V6C2.5 5.17157 3.17157 4.5 4 4.5H10C10.8284 4.5 11.5 5.17157 11.5 6V12C11.5 12.8284 10.8284 13.5 10 13.5H4C3.17157 13.5 2.5 12.8284 2.5 12Z"
      fill="#25324D"
      stroke="#548AF7"
    />
    <path
      d="M5.5 2.5H12C12.8284 2.5 13.5 3.17157 13.5 4V10.5"
      stroke="#548AF7"
      strokeLinecap="round"
    />
  </svg>
);

export const Database: FC<DatabaseProps> = ({
  size = 'md',
  mode = 'light',
  className,
  'aria-label': ariaLabel,
  ...props
}) => {
  const SvgComponent = mode === 'light' ? DatabaseLight : DatabaseDark;

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

export default Database;
