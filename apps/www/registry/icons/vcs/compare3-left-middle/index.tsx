/**
 * Copyright 2000-2024 JetBrains s.r.o. and contributors.
 * Use of this source code is governed by the Apache 2.0 license.
 */
import type { FC } from 'react';
import { cn } from '@/lib/utils';
import { type SvgProps, sizeMap } from '../../utils';

export type Compare3LeftMiddleProps = SvgProps;

const Compare3LeftMiddleLight: FC<SvgProps> = ({
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
      d="M2 1.5h2a.5.5 0 0 1 .5.5v12a.5.5 0 0 1-.5.5H2a.5.5 0 0 1-.5-.5V2l.01-.1A.5.5 0 0 1 2 1.5ZM7 1.5h2a.5.5 0 0 1 .5.5v12a.5.5 0 0 1-.5.5H7a.5.5 0 0 1-.5-.5V2l.01-.1A.5.5 0 0 1 7 1.5ZM13 3.5a.5.5 0 0 1 .5.5v8a.5.5 0 0 1-1 0V4a.5.5 0 0 1 .5-.5Z"
      stroke="#6C707E"
    />
  </svg>
);

const Compare3LeftMiddleDark: FC<SvgProps> = ({
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
      d="M2 1.5h2a.5.5 0 0 1 .5.5v12a.5.5 0 0 1-.5.5H2a.5.5 0 0 1-.5-.5V2l.01-.1A.5.5 0 0 1 2 1.5ZM7 1.5h2a.5.5 0 0 1 .5.5v12a.5.5 0 0 1-.5.5H7a.5.5 0 0 1-.5-.5V2l.01-.1A.5.5 0 0 1 7 1.5ZM13 3.5a.5.5 0 0 1 .5.5v8a.5.5 0 0 1-1 0V4a.5.5 0 0 1 .5-.5Z"
      stroke="#CED0D6"
    />
  </svg>
);

export const Compare3LeftMiddle: FC<Compare3LeftMiddleProps> = ({
  size = 'md',
  mode = 'light',
  className,
  'aria-label': ariaLabel,
  ...props
}) => {
  const SvgComponent =
    mode === 'light' ? Compare3LeftMiddleLight : Compare3LeftMiddleDark;

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

export default Compare3LeftMiddle;
