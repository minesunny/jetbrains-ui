/**
 * Copyright 2000-2024 JetBrains s.r.o. and contributors.
 * Use of this source code is governed by the Apache 2.0 license.
 */
import type { FC } from 'react';
import { cn } from '@/lib/utils';
import { type SvgProps, sizeMap } from '../../utils';

export type Compare4RightBottomProps = SvgProps;

const Compare4RightBottomLight: FC<SvgProps> = ({
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
      d="M8 2.5a.5.5 0 0 1 .5.5v5a.5.5 0 0 1-1 0V3a.5.5 0 0 1 .5-.5ZM12 1.5h2a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5V2a.5.5 0 0 1 .5-.5ZM3 2.5a.5.5 0 0 1 .5.5v5a.5.5 0 0 1-1 0V3a.5.5 0 0 1 .5-.5Z"
      stroke="#6C707E"
    />
    <rect x={1.5} y={11.5} width={13} height={3} rx={0.5} stroke="#6C707E" />
  </svg>
);

const Compare4RightBottomDark: FC<SvgProps> = ({
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
      d="M8 2.5a.5.5 0 0 1 .5.5v5a.5.5 0 0 1-1 0V3a.5.5 0 0 1 .5-.5ZM12 1.5h2a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5V2a.5.5 0 0 1 .5-.5ZM3 2.5a.5.5 0 0 1 .5.5v5a.5.5 0 0 1-1 0V3a.5.5 0 0 1 .5-.5Z"
      stroke="#CED0D6"
    />
    <rect x={1.5} y={11.5} width={13} height={3} rx={0.5} stroke="#CED0D6" />
  </svg>
);

export const Compare4RightBottom: FC<Compare4RightBottomProps> = ({
  size = 'md',
  mode = 'light',
  className,
  'aria-label': ariaLabel,
  ...props
}) => {
  const SvgComponent =
    mode === 'light' ? Compare4RightBottomLight : Compare4RightBottomDark;

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

export default Compare4RightBottom;
