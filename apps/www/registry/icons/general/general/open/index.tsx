/**
 * Copyright 2000-2024 JetBrains s.r.o. and contributors.
 * Use of this source code is governed by the Apache 2.0 license.
 */
import type { FC } from 'react';
import { cn } from '@/lib/utils';
import { type SvgProps, sizeMap } from '../../../utils';

export type OpenProps = SvgProps;

const OpenLight: FC<SvgProps> = ({
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
      d="M2.75 2.5h3.288a.5.5 0 0 1 .349.142L8.15 4.358l.146.142H13A1.5 1.5 0 0 1 14.5 6v6.134c0 .785-.59 1.366-1.25 1.366H2.75c-.66 0-1.25-.58-1.25-1.366V3.866c0-.785.59-1.366 1.25-1.366Z"
      stroke="#6C707E"
    />
  </svg>
);

const OpenDark: FC<SvgProps> = ({
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
      d="M2.75 2.5h3.288a.5.5 0 0 1 .349.142L8.15 4.358l.146.142H13A1.5 1.5 0 0 1 14.5 6v6.134c0 .785-.59 1.366-1.25 1.366H2.75c-.66 0-1.25-.58-1.25-1.366V3.866c0-.785.59-1.366 1.25-1.366Z"
      stroke="#CED0D6"
    />
  </svg>
);

export const Open: FC<OpenProps> = ({
  size = 'md',
  mode = 'light',
  className,
  'aria-label': ariaLabel,
  ...props
}) => {
  const SvgComponent = mode === 'light' ? OpenLight : OpenDark;

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

export default Open;
