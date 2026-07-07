/**
 * Copyright 2000-2024 JetBrains s.r.o. and contributors.
 * Use of this source code is governed by the Apache 2.0 license.
 */
import type { FC } from 'react';
import { cn } from '@/lib/utils';
import { type SvgProps, sizeMap } from '../../utils';

export type SkipCommitProps = SvgProps;

const SkipCommitLight: FC<SvgProps> = ({
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
    <path d="M11.5 12.5v-9" stroke="#6C707E" strokeLinecap="round" />
    <path
      d="M4 12.5 8.5 8 4 3.5"
      stroke="#6C707E"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const SkipCommitDark: FC<SvgProps> = ({
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
    <path d="M11.5 12.5v-9" stroke="#CED0D6" strokeLinecap="round" />
    <path
      d="M4 12.5 8.5 8 4 3.5"
      stroke="#CED0D6"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const SkipCommit: FC<SkipCommitProps> = ({
  size = 'md',
  mode = 'light',
  className,
  'aria-label': ariaLabel,
  ...props
}) => {
  const SvgComponent = mode === 'light' ? SkipCommitLight : SkipCommitDark;

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

export default SkipCommit;
