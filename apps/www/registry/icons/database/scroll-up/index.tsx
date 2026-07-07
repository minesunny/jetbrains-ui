/**
 * Copyright 2000-2024 JetBrains s.r.o. and contributors.
 * Use of this source code is governed by the Apache 2.0 license.
 */
import type { FC } from 'react';
import { cn } from '@/lib/utils';
import { type SvgProps, sizeMap } from '../../utils';

export type ScrollUpProps = SvgProps;

const ScrollUpLight: FC<SvgProps> = ({
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
      d="M1.5 3.5h13M1.5 8h5M1.5 12.5h5"
      stroke="#6C707E"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M14.147 9.354a.5.5 0 1 0 .707-.708l-3-3-.354-.353-.354.353-3 3a.5.5 0 1 0 .708.708L11 7.207V12.5a.5.5 0 0 0 1 0V7.207z"
      fill="#6C707E"
    />
  </svg>
);

const ScrollUpDark: FC<SvgProps> = ({
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
      d="M1.5 3.5h13M1.5 8h5M1.5 12.5h5"
      stroke="#CED0D6"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M14.147 9.354a.5.5 0 1 0 .707-.708l-3-3-.354-.353-.354.353-3 3a.5.5 0 1 0 .708.708L11 7.207V12.5a.5.5 0 0 0 1 0V7.207z"
      fill="#CED0D6"
    />
  </svg>
);

export const ScrollUp: FC<ScrollUpProps> = ({
  size = 'md',
  mode = 'light',
  className,
  'aria-label': ariaLabel,
  ...props
}) => {
  const SvgComponent = mode === 'light' ? ScrollUpLight : ScrollUpDark;

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

export default ScrollUp;
