/**
 * Copyright 2000-2024 JetBrains s.r.o. and contributors.
 * Use of this source code is governed by the Apache 2.0 license.
 */
import type { FC } from 'react';
import { cn } from '@/lib/utils';
import { type SvgProps, sizeMap } from '../../utils';

export type InvalidConfigurationLayerProps = SvgProps;

const InvalidConfigurationLayerLight: FC<SvgProps> = ({
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
      d="M10.146.146a.5.5 0 0 1 .708 0L13 2.293 15.146.146a.5.5 0 0 1 .708.708L13.707 3l2.147 2.146a.5.5 0 0 1-.708.708L13 3.707l-2.146 2.147a.5.5 0 0 1-.708-.708L12.293 3 10.146.854a.5.5 0 0 1 0-.708"
      fill="#DB3B4B"
    />
  </svg>
);

const InvalidConfigurationLayerDark: FC<SvgProps> = ({
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
    <g clipPath="url(#a)">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10.146.146a.5.5 0 0 1 .708 0L13 2.293 15.146.146a.5.5 0 0 1 .708.708L13.707 3l2.147 2.146a.5.5 0 0 1-.708.708L13 3.707l-2.146 2.147a.5.5 0 0 1-.708-.708L12.293 3 10.146.854a.5.5 0 0 1 0-.708"
        fill="#DB5C5C"
      />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M0 0H16V16H0z" />
      </clipPath>
    </defs>
  </svg>
);

export const InvalidConfigurationLayer: FC<InvalidConfigurationLayerProps> = ({
  size = 'md',
  mode = 'light',
  className,
  'aria-label': ariaLabel,
  ...props
}) => {
  const SvgComponent =
    mode === 'light'
      ? InvalidConfigurationLayerLight
      : InvalidConfigurationLayerDark;

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

export default InvalidConfigurationLayer;
