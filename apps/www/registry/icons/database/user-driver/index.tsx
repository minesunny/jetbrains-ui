/**
 * Copyright 2000-2024 JetBrains s.r.o. and contributors.
 * Use of this source code is governed by the Apache 2.0 license.
 */
import type { FC } from 'react';
import { cn } from '@/lib/utils';
import { type SvgProps, sizeMap } from '../../utils';

export type UserDriverProps = SvgProps;

const UserDriverLight: FC<SvgProps> = ({
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
    <path d="M2.5 11.5v-7" stroke="#6C707E" strokeLinecap="round" />
    <path d="M13.5 11.5v-7" stroke="#3574F0" strokeLinecap="round" />
    <path d="M4.5 2.5h7" stroke="#6C707E" strokeLinecap="round" />
    <path
      d="M4.5 13.5h7M6.5 13v-1m3 1v-1M13 9.5h-1m1-3h-1"
      stroke="#3574F0"
      strokeLinecap="round"
    />
    <path
      d="M9.5 3v1m-3-1v1M3 6.5h1m-1 3h1"
      stroke="#6C707E"
      strokeLinecap="round"
    />
  </svg>
);

const UserDriverDark: FC<SvgProps> = ({
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
    <path d="M2.5 11.5v-7" stroke="#CED0D6" strokeLinecap="round" />
    <path d="M13.5 11.5v-7" stroke="#548AF7" strokeLinecap="round" />
    <path d="M4.5 2.5h7" stroke="#CED0D6" strokeLinecap="round" />
    <path
      d="M4.5 13.5h7M6.5 13v-1m3 1v-1M13 9.5h-1m1-3h-1"
      stroke="#548AF7"
      strokeLinecap="round"
    />
    <path
      d="M9.5 3v1m-3-1v1M3 6.5h1m-1 3h1"
      stroke="#CED0D6"
      strokeLinecap="round"
    />
  </svg>
);

export const UserDriver: FC<UserDriverProps> = ({
  size = 'md',
  mode = 'light',
  className,
  'aria-label': ariaLabel,
  ...props
}) => {
  const SvgComponent = mode === 'light' ? UserDriverLight : UserDriverDark;

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

export default UserDriver;
