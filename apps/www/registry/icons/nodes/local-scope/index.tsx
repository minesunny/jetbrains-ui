/**
 * Copyright 2000-2024 JetBrains s.r.o. and contributors.
 * Use of this source code is governed by the Apache 2.0 license.
 */
import type { FC } from 'react';
import { cn } from '@/lib/utils';
import { type SvgProps, sizeMap } from '../../utils';

export type LocalScopeProps = SvgProps;

const LocalScopeLight: FC<SvgProps> = ({
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
    <circle cx={8} cy={8} r={6.5} fill="#EBECF0" stroke="#6C707E" />
    <path
      d="M8 5.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Z"
      fill="#EDF3FF"
      stroke="#3574F0"
    />
  </svg>
);

const LocalScopeDark: FC<SvgProps> = ({
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
    <circle cx={8} cy={8} r={6.5} fill="#43454A" stroke="#CED0D6" />
    <path
      d="M8 5.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Z"
      fill="#25324D"
      stroke="#548AF7"
    />
  </svg>
);

export const LocalScope: FC<LocalScopeProps> = ({
  size = 'md',
  mode = 'light',
  className,
  'aria-label': ariaLabel,
  ...props
}) => {
  const SvgComponent = mode === 'light' ? LocalScopeLight : LocalScopeDark;

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

export default LocalScope;
