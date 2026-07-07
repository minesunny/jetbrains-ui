/**
 * Copyright 2000-2024 JetBrains s.r.o. and contributors.
 * Use of this source code is governed by the Apache 2.0 license.
 */
import type { FC } from 'react';
import { cn } from '@/lib/utils';
import { type SvgProps, sizeMap } from '../../../utils';

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
    <path d="M2.5 11.5V4.5" stroke="#6C707E" strokeLinecap="round" />
    <path
      d="M13 11.5C13 11.7761 13.2239 12 13.5 12C13.7761 12 14 11.7761 14 11.5H13ZM14 4.5C14 4.22386 13.7761 4 13.5 4C13.2239 4 13 4.22386 13 4.5H14ZM14 11.5V4.5H13V11.5H14Z"
      fill="#3574F0"
    />
    <path d="M4.5 2.5H11.5" stroke="#6C707E" strokeLinecap="round" />
    <path
      d="M4.5 13C4.22386 13 4 13.2239 4 13.5C4 13.7761 4.22386 14 4.5 14V13ZM11.5 14C11.7761 14 12 13.7761 12 13.5C12 13.2239 11.7761 13 11.5 13V14ZM4.5 14H11.5V13H4.5V14Z"
      fill="#3574F0"
    />
    <path d="M6.5 13V12M9.5 13V12" stroke="#3574F0" strokeLinecap="round" />
    <path d="M13 9.5H12M13 6.5H12" stroke="#3574F0" strokeLinecap="round" />
    <path
      d="M9.5 3V4M6.5 3V4M3 6.5H4M3 9.5H4"
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
    <path d="M2.5 11.5V4.5" stroke="#CED0D6" strokeLinecap="round" />
    <path
      d="M13 11.5C13 11.7761 13.2239 12 13.5 12C13.7761 12 14 11.7761 14 11.5H13ZM14 4.5C14 4.22386 13.7761 4 13.5 4C13.2239 4 13 4.22386 13 4.5H14ZM14 11.5V4.5H13V11.5H14Z"
      fill="#548AF7"
    />
    <path d="M4.5 2.5H11.5" stroke="#CED0D6" strokeLinecap="round" />
    <path
      d="M4.5 13C4.22386 13 4 13.2239 4 13.5C4 13.7761 4.22386 14 4.5 14V13ZM11.5 14C11.7761 14 12 13.7761 12 13.5C12 13.2239 11.7761 13 11.5 13V14ZM4.5 14H11.5V13H4.5V14Z"
      fill="#548AF7"
    />
    <path d="M6.5 13V12M9.5 13V12" stroke="#548AF7" strokeLinecap="round" />
    <path d="M13 9.5H12M13 6.5H12" stroke="#548AF7" strokeLinecap="round" />
    <path
      d="M9.5 3V4M6.5 3V4M3 6.5H4M3 9.5H4"
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
