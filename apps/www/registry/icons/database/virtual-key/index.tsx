/**
 * Copyright 2000-2024 JetBrains s.r.o. and contributors.
 * Use of this source code is governed by the Apache 2.0 license.
 */
import type { FC } from 'react';
import { cn } from '@/lib/utils';
import { type SvgProps, sizeMap } from '../../utils';

export type VirtualKeyProps = SvgProps;

const VirtualKeyLight: FC<SvgProps> = ({
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
    <path d="M7.5 1.5a3.5 3.5 0 1 1 0 7 3.5 3.5 0 0 1 0-7Z" stroke="#955AE0" />
    <path
      d="M7.5 8.5v6M8 13.5h2.5M8 11.5h2.5"
      stroke="#955AE0"
      strokeLinecap="round"
    />
  </svg>
);

const VirtualKeyDark: FC<SvgProps> = ({
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
    <path d="M7.5 1.5a3.5 3.5 0 1 1 0 7 3.5 3.5 0 0 1 0-7Z" stroke="#B589EC" />
    <path
      d="M7.5 8.5v6M8 13.5h2.5M8 11.5h2.5"
      stroke="#B589EC"
      strokeLinecap="round"
    />
  </svg>
);

export const VirtualKey: FC<VirtualKeyProps> = ({
  size = 'md',
  mode = 'light',
  className,
  'aria-label': ariaLabel,
  ...props
}) => {
  const SvgComponent = mode === 'light' ? VirtualKeyLight : VirtualKeyDark;

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

export default VirtualKey;
