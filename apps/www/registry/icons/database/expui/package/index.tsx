/**
 * Copyright 2000-2024 JetBrains s.r.o. and contributors.
 * Use of this source code is governed by the Apache 2.0 license.
 */
import type { FC } from 'react';
import { cn } from '@/lib/utils';
import { type SvgProps, sizeMap } from '../../../utils';

export type PackageProps = SvgProps;

const PackageLight: FC<SvgProps> = ({
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
      d="M8 7.5L14.5 4.5V11.5199L8 14.5V7.5Z"
      fill="#E7EFFD"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M8 7.5L1.5 4.5V11.5199L8 14.5V7.5Z"
      fill="#E7EFFD"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M14.5 4.5L7.99998 1.5L1.5 4.5L8 7.5L14.5 4.5Z"
      fill="#E7EFFD"
    />
    <path
      d="M8 7.5L14.5 4.5M8 7.5V14.5M8 7.5L1.5 4.5M14.5 4.5V11.5199L8 14.5M14.5 4.5L7.99998 1.5L1.5 4.5M8 14.5L1.5 11.5199V4.5"
      stroke="#3574F0"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const PackageDark: FC<SvgProps> = ({
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
      d="M8 7.5L14.5 4.5V11.5199L8 14.5V7.5Z"
      fill="#25324D"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M8 7.5L1.5 4.5V11.5199L8 14.5V7.5Z"
      fill="#25324D"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M14.5 4.5L7.99998 1.5L1.5 4.5L8 7.5L14.5 4.5Z"
      fill="#25324D"
    />
    <path
      d="M8 7.5L14.5 4.5M8 7.5V14.5M8 7.5L1.5 4.5M14.5 4.5V11.5199L8 14.5M14.5 4.5L7.99998 1.5L1.5 4.5M8 14.5L1.5 11.5199V4.5"
      stroke="#548AF7"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const Package: FC<PackageProps> = ({
  size = 'md',
  mode = 'light',
  className,
  'aria-label': ariaLabel,
  ...props
}) => {
  const SvgComponent = mode === 'light' ? PackageLight : PackageDark;

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

export default Package;
