/**
 * Copyright 2000-2024 JetBrains s.r.o. and contributors.
 * Use of this source code is governed by the Apache 2.0 license.
 */
import type { FC } from 'react';
import { cn } from '@/lib/utils';
import { type SvgProps, sizeMap } from '../../utils';

export type AbortProps = SvgProps;

const AbortLight: FC<SvgProps> = ({
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
      d="M2.146 13.146a.5.5 0 0 0 .708.708L8 8.707l5.147 5.147a.5.5 0 0 0 .707-.707L8.707 8l5.147-5.146a.5.5 0 0 0-.708-.708L8 7.293 2.854 2.147a.5.5 0 0 0-.707.707L7.293 8z"
      fill="#6C707E"
    />
  </svg>
);

const AbortDark: FC<SvgProps> = ({
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
      d="M2.146 13.146a.5.5 0 0 0 .708.708L8 8.707l5.147 5.147a.5.5 0 0 0 .707-.707L8.707 8l5.147-5.146a.5.5 0 0 0-.708-.708L8 7.293 2.854 2.147a.5.5 0 0 0-.707.707L7.293 8z"
      fill="#CED0D6"
    />
  </svg>
);

export const Abort: FC<AbortProps> = ({
  size = 'md',
  mode = 'light',
  className,
  'aria-label': ariaLabel,
  ...props
}) => {
  const SvgComponent = mode === 'light' ? AbortLight : AbortDark;

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

export default Abort;
