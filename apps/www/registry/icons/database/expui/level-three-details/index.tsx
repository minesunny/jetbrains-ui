/**
 * Copyright 2000-2024 JetBrains s.r.o. and contributors.
 * Use of this source code is governed by the Apache 2.0 license.
 */
import type { FC } from 'react';
import { cn } from '@/lib/utils';
import { type SvgProps, sizeMap } from '../../../utils';

export type LevelThreeDetailsProps = SvgProps;

const LevelThreeDetailsLight: FC<SvgProps> = ({
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
      d="M8 4C8 3.44772 8.44772 3 9 3H11C11.5523 3 12 3.44772 12 4V12C12 12.5523 11.5523 13 11 13H9C8.44772 13 8 12.5523 8 12V4Z"
      fill="#F9D2B6"
    />
    <path
      d="M7.5 4C7.5 3.17157 8.17157 2.5 9 2.5H11C11.8284 2.5 12.5 3.17157 12.5 4V12C12.5 12.8284 11.8284 13.5 11 13.5H9C8.17157 13.5 7.5 12.8284 7.5 12V4Z"
      stroke="#E66D17"
    />
  </svg>
);

const LevelThreeDetailsDark: FC<SvgProps> = ({
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
      d="M8 4C8 3.44772 8.44772 3 9 3H11C11.5523 3 12 3.44772 12 4V12C12 12.5523 11.5523 13 11 13H9C8.44772 13 8 12.5523 8 12V4Z"
      fill="#614438"
    />
    <path
      d="M7.5 4C7.5 3.17157 8.17157 2.5 9 2.5H11C11.8284 2.5 12.5 3.17157 12.5 4V12C12.5 12.8284 11.8284 13.5 11 13.5H9C8.17157 13.5 7.5 12.8284 7.5 12V4Z"
      stroke="#C77D55"
    />
  </svg>
);

export const LevelThreeDetails: FC<LevelThreeDetailsProps> = ({
  size = 'md',
  mode = 'light',
  className,
  'aria-label': ariaLabel,
  ...props
}) => {
  const SvgComponent =
    mode === 'light' ? LevelThreeDetailsLight : LevelThreeDetailsDark;

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

export default LevelThreeDetails;
