/**
 * Copyright 2000-2024 JetBrains s.r.o. and contributors.
 * Use of this source code is governed by the Apache 2.0 license.
 */
import type { FC } from 'react';
import { cn } from '@/lib/utils';
import { type SvgProps, sizeMap } from '../../../utils';

export type SciViewProps = SvgProps;

const SciViewLight: FC<SvgProps> = ({
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
      d="M4 11.5a.5.5 0 0 1 1 0v3a.5.5 0 0 1-1 0zM11 8.5a.5.5 0 0 1 1 0v6a.5.5 0 0 1-1 0zM7.5 7.5a.5.5 0 0 1 1 0v7a.5.5 0 0 1-1 0z"
      fill="#6C707E"
    />
    <path
      d="m2 8 5.571-5.143L11 5l3-3"
      stroke="#6C707E"
      strokeLinecap="round"
    />
  </svg>
);

const SciViewDark: FC<SvgProps> = ({
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
      d="M4 11.5a.5.5 0 0 1 1 0v3a.5.5 0 0 1-1 0zM11 8.5a.5.5 0 0 1 1 0v6a.5.5 0 0 1-1 0zM7.5 7.5a.5.5 0 0 1 1 0v7a.5.5 0 0 1-1 0z"
      fill="#CED0D6"
    />
    <path
      d="m2 8 5.571-5.143L11 5l3-3"
      stroke="#CED0D6"
      strokeLinecap="round"
    />
  </svg>
);

export const SciView: FC<SciViewProps> = ({
  size = 'md',
  mode = 'light',
  className,
  'aria-label': ariaLabel,
  ...props
}) => {
  const SvgComponent = mode === 'light' ? SciViewLight : SciViewDark;

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

export default SciView;
