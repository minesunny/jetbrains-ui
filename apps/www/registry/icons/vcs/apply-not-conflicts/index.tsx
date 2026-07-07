/**
 * Copyright 2000-2024 JetBrains s.r.o. and contributors.
 * Use of this source code is governed by the Apache 2.0 license.
 */
import type { FC } from 'react';
import { cn } from '@/lib/utils';
import { type SvgProps, sizeMap } from '../../utils';

export type ApplyNotConflictsProps = SvgProps;

const ApplyNotConflictsLight: FC<SvgProps> = ({
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
      d="m4.5 2.5 3 3-3 3m-4 0 3-3-3-3M11.5 13.5l-3-3 3-3m4 0-3 3 3 3"
      stroke="#6C707E"
      strokeLinecap="round"
    />
  </svg>
);

const ApplyNotConflictsDark: FC<SvgProps> = ({
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
      d="m4.5 2.5 3 3-3 3m-4 0 3-3-3-3M11.5 13.5l-3-3 3-3m4 0-3 3 3 3"
      stroke="#CED0D6"
      strokeLinecap="round"
    />
  </svg>
);

export const ApplyNotConflicts: FC<ApplyNotConflictsProps> = ({
  size = 'md',
  mode = 'light',
  className,
  'aria-label': ariaLabel,
  ...props
}) => {
  const SvgComponent =
    mode === 'light' ? ApplyNotConflictsLight : ApplyNotConflictsDark;

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

export default ApplyNotConflicts;
