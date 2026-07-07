/**
 * Copyright 2000-2024 JetBrains s.r.o. and contributors.
 * Use of this source code is governed by the Apache 2.0 license.
 */
import type { FC } from 'react';
import { cn } from '@/lib/utils';
import { type SvgProps, sizeMap } from '../../../utils';

export type UnspecifiedClusterProps = SvgProps;

const UnspecifiedClusterLight: FC<SvgProps> = ({
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
      d="M1.5 3.5V12.5C1.5 13.6046 2.39543 14.5 3.5 14.5H12.5C13.6046 14.5 14.5 13.6046 14.5 12.5V3.5C14.5 2.39543 13.6046 1.5 12.5 1.5H3.5C2.39543 1.5 1.5 2.39543 1.5 3.5Z"
      stroke="#6C707E"
    />
    <path
      d="M3.5 9.5V3.5H7.5V9.5H3.5Z"
      stroke="#6C707E"
      strokeLinejoin="round"
    />
    <path d="M4 5.5H7" stroke="#6C707E" />
    <path d="M4 7.5H7" stroke="#6C707E" />
  </svg>
);

const UnspecifiedClusterDark: FC<SvgProps> = ({
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
      d="M1.5 3.5V12.5C1.5 13.6046 2.39543 14.5 3.5 14.5H12.5C13.6046 14.5 14.5 13.6046 14.5 12.5V3.5C14.5 2.39543 13.6046 1.5 12.5 1.5H3.5C2.39543 1.5 1.5 2.39543 1.5 3.5Z"
      stroke="#CED0D6"
    />
    <path
      d="M3.5 9.5V3.5H7.5V9.5H3.5Z"
      stroke="#CED0D6"
      strokeLinejoin="round"
    />
    <path d="M4 5.5H7" stroke="#CED0D6" />
    <path d="M4 7.5H7" stroke="#CED0D6" />
  </svg>
);

export const UnspecifiedCluster: FC<UnspecifiedClusterProps> = ({
  size = 'md',
  mode = 'light',
  className,
  'aria-label': ariaLabel,
  ...props
}) => {
  const SvgComponent =
    mode === 'light' ? UnspecifiedClusterLight : UnspecifiedClusterDark;

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

export default UnspecifiedCluster;
