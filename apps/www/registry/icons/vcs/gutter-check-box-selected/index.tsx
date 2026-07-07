/**
 * Copyright 2000-2024 JetBrains s.r.o. and contributors.
 * Use of this source code is governed by the Apache 2.0 license.
 */
import type { FC } from 'react';
import { cn } from '@/lib/utils';
import { type SvgProps, sizeMap } from '../../utils';

export type GutterCheckBoxSelectedProps = SvgProps;

const GutterCheckBoxSelectedLight: FC<SvgProps> = ({
  size,
  className,
  role,
  'aria-label': ariaLabel,
  'aria-hidden': ariaHidden,
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 14 14"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    role={role}
    aria-label={ariaLabel}
    aria-hidden={ariaHidden}
  >
    <path
      d="M2 .5h10A1.5 1.5 0 0 1 13.5 2v10a1.5 1.5 0 0 1-1.5 1.5H2A1.5 1.5 0 0 1 .5 12V2A1.5 1.5 0 0 1 2 .5Z"
      stroke="#6C707E"
    />
    <path
      d="M3.75 6.75 6 9l4.242-4.242"
      stroke="#6C707E"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const GutterCheckBoxSelectedDark: FC<SvgProps> = ({
  size,
  className,
  role,
  'aria-label': ariaLabel,
  'aria-hidden': ariaHidden,
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 14 14"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    role={role}
    aria-label={ariaLabel}
    aria-hidden={ariaHidden}
  >
    <path
      d="M2 .5h10A1.5 1.5 0 0 1 13.5 2v10a1.5 1.5 0 0 1-1.5 1.5H2A1.5 1.5 0 0 1 .5 12V2A1.5 1.5 0 0 1 2 .5Z"
      stroke="#CED0D6"
    />
    <path
      d="M3.75 6.75 6 9l4.242-4.242"
      stroke="#CED0D6"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const GutterCheckBoxSelected: FC<GutterCheckBoxSelectedProps> = ({
  size = 'md',
  mode = 'light',
  className,
  'aria-label': ariaLabel,
  ...props
}) => {
  const SvgComponent =
    mode === 'light' ? GutterCheckBoxSelectedLight : GutterCheckBoxSelectedDark;

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

export default GutterCheckBoxSelected;
