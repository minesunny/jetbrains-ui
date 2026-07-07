/**
 * Copyright 2000-2024 JetBrains s.r.o. and contributors.
 * Use of this source code is governed by the Apache 2.0 license.
 */
import type { FC } from 'react';
import { cn } from '@/lib/utils';
import { type SvgProps, sizeMap } from '../../../utils';

export type LockUltimateProps = SvgProps;

const LockUltimateLight: FC<SvgProps> = ({
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
      d="M5 11V10C5 8.89543 4.10457 8 3 8C1.89543 8 1 8.89543 1 10V11C0.447715 11 0 11.4477 0 12V15C0 15.5523 0.447715 16 1 16H5C5.55228 16 6 15.5523 6 15V12C6 11.4477 5.55228 11 5 11ZM2 10C2 9.44772 2.44772 9 3 9C3.55228 9 4 9.44772 4 10V11H2V10ZM1 15V12H5V15H1Z"
      fill="url(#paint0_linear_22834_4327)"
    />
    <defs>
      <linearGradient
        id="paint0_linear_22834_4327"
        x1={-1.4}
        y1={8}
        x2={6.15097}
        y2={15.2139}
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0.2} stopColor="#FF6B8E" />
        <stop offset={0.4} stopColor="#E748BE" />
        <stop offset={0.6} stopColor="#C85FFF" />
        <stop offset={0.9} stopColor="#5F93FF" />
      </linearGradient>
    </defs>
  </svg>
);

const LockUltimateDark: FC<SvgProps> = ({
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
      d="M5 11V10C5 8.89543 4.10457 8 3 8C1.89543 8 1 8.89543 1 10V11C0.447715 11 0 11.4477 0 12V15C0 15.5523 0.447715 16 1 16H5C5.55228 16 6 15.5523 6 15V12C6 11.4477 5.55228 11 5 11ZM2 10C2 9.44772 2.44772 9 3 9C3.55228 9 4 9.44772 4 10V11H2V10ZM1 15V12H5V15H1Z"
      fill="url(#paint0_linear_22834_4329)"
    />
    <defs>
      <linearGradient
        id="paint0_linear_22834_4329"
        x1={-1.4}
        y1={8}
        x2={6.15097}
        y2={15.2139}
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0.2} stopColor="#FF6B8E" />
        <stop offset={0.4} stopColor="#E748BE" />
        <stop offset={0.6} stopColor="#C85FFF" />
        <stop offset={0.9} stopColor="#5F93FF" />
      </linearGradient>
    </defs>
  </svg>
);

export const LockUltimate: FC<LockUltimateProps> = ({
  size = 'md',
  mode = 'light',
  className,
  'aria-label': ariaLabel,
  ...props
}) => {
  const SvgComponent = mode === 'light' ? LockUltimateLight : LockUltimateDark;

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

export default LockUltimate;
