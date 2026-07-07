/**
 * Copyright 2000-2024 JetBrains s.r.o. and contributors.
 * Use of this source code is governed by the Apache 2.0 license.
 */
import type { FC } from 'react';
import { cn } from '@/lib/utils';
import { type SvgProps, sizeMap } from '../../../utils';

export type SbtShellProps = SvgProps;

const SbtShellLight: FC<SvgProps> = ({
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
      d="M3 2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h4.416a5 5 0 0 1-.316-1H3a1 1 0 0 1-1-1V6h12v1.416q.537.235 1 .584V4a2 2 0 0 0-2-2zm10 1H3a1 1 0 0 0-1 1v1h12V4a1 1 0 0 0-1-1"
      fill="#6C707E"
    />
    <path
      d="m9.852 9.47 2.743-.735a.5.5 0 0 1 .484.13l2.027 2.046a.5.5 0 0 1 .129.48l-.733 2.784a.5.5 0 0 1-.354.355l-2.743.735a.5.5 0 0 1-.484-.13l-2.027-2.046a.5.5 0 0 1-.129-.48l.733-2.784a.5.5 0 0 1 .354-.355Z"
      stroke="#6C707E"
    />
  </svg>
);

const SbtShellDark: FC<SvgProps> = ({
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
      d="M3 2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h4.416a5 5 0 0 1-.316-1H3a1 1 0 0 1-1-1V6h12v1.416q.537.235 1 .584V4a2 2 0 0 0-2-2zm10 1H3a1 1 0 0 0-1 1v1h12V4a1 1 0 0 0-1-1"
      fill="#CED0D6"
    />
    <path
      d="m9.852 9.47 2.743-.735a.5.5 0 0 1 .484.13l2.027 2.046a.5.5 0 0 1 .129.48l-.733 2.784a.5.5 0 0 1-.354.355l-2.743.735a.5.5 0 0 1-.484-.13l-2.027-2.046a.5.5 0 0 1-.129-.48l.733-2.784a.5.5 0 0 1 .354-.355Z"
      stroke="#CED0D6"
    />
  </svg>
);

export const SbtShell: FC<SbtShellProps> = ({
  size = 'md',
  mode = 'light',
  className,
  'aria-label': ariaLabel,
  ...props
}) => {
  const SvgComponent = mode === 'light' ? SbtShellLight : SbtShellDark;

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

export default SbtShell;
