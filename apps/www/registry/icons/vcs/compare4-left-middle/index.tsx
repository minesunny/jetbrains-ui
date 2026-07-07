/**
 * Copyright 2000-2024 JetBrains s.r.o. and contributors.
 * Use of this source code is governed by the Apache 2.0 license.
 */
import type { FC } from 'react';
import { cn } from '@/lib/utils';
import { type SvgProps, sizeMap } from '../../utils';

export type Compare4LeftMiddleProps = SvgProps;

const Compare4LeftMiddleLight: FC<SvgProps> = ({
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
      d="M2 1.5h2a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-.5.5H2a.5.5 0 0 1-.5-.5V2a.5.5 0 0 1 .5-.5ZM7 1.5h2a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-.5.5H7a.5.5 0 0 1-.5-.5V2a.5.5 0 0 1 .5-.5ZM13 2.5a.5.5 0 0 1 .5.5v5a.5.5 0 0 1-1 0V3a.5.5 0 0 1 .5-.5Z"
      stroke="#6C707E"
    />
    <rect x={1.5} y={12.5} width={13} height={1} rx={0.5} stroke="#6C707E" />
  </svg>
);

const Compare4LeftMiddleDark: FC<SvgProps> = ({
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
      d="M2 1.5h2a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-.5.5H2a.5.5 0 0 1-.5-.5V2a.5.5 0 0 1 .5-.5ZM7 1.5h2a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-.5.5H7a.5.5 0 0 1-.5-.5V2a.5.5 0 0 1 .5-.5ZM13 2.5a.5.5 0 0 1 .5.5v5a.5.5 0 0 1-1 0V3a.5.5 0 0 1 .5-.5Z"
      stroke="#CED0D6"
    />
    <rect x={1.5} y={12.5} width={13} height={1} rx={0.5} stroke="#CED0D6" />
  </svg>
);

export const Compare4LeftMiddle: FC<Compare4LeftMiddleProps> = ({
  size = 'md',
  mode = 'light',
  className,
  'aria-label': ariaLabel,
  ...props
}) => {
  const SvgComponent =
    mode === 'light' ? Compare4LeftMiddleLight : Compare4LeftMiddleDark;

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

export default Compare4LeftMiddle;
