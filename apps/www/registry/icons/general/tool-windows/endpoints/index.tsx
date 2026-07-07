/**
 * Copyright 2000-2024 JetBrains s.r.o. and contributors.
 * Use of this source code is governed by the Apache 2.0 license.
 */
import type { FC } from 'react';
import { cn } from '@/lib/utils';
import { type SvgProps, sizeMap } from '../../../utils';

export type EndpointsProps = SvgProps;

const EndpointsLight: FC<SvgProps> = ({
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
      d="M8 2c-1.458 0-2.794.52-3.834 1.384a.5.5 0 0 1-.64-.768 7 7 0 1 1 0 10.769.5.5 0 1 1 .64-.77A6 6 0 1 0 8 2"
      fill="#6C707E"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M0 8a.5.5 0 0 1 .5-.5h4.541a3 3 0 1 1 0 1H.5A.5.5 0 0 1 0 8m6 0a2 2 0 1 0 4 0 2 2 0 0 0-4 0"
      fill="#6C707E"
    />
  </svg>
);

const EndpointsDark: FC<SvgProps> = ({
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
      d="M8 2c-1.458 0-2.794.52-3.834 1.384a.5.5 0 0 1-.64-.768 7 7 0 1 1 0 10.769.5.5 0 1 1 .64-.77A6 6 0 1 0 8 2"
      fill="#CED0D6"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M0 8a.5.5 0 0 1 .5-.5h4.541a3 3 0 1 1 0 1H.5A.5.5 0 0 1 0 8m6 0a2 2 0 1 0 4 0 2 2 0 0 0-4 0"
      fill="#CED0D6"
    />
  </svg>
);

export const Endpoints: FC<EndpointsProps> = ({
  size = 'md',
  mode = 'light',
  className,
  'aria-label': ariaLabel,
  ...props
}) => {
  const SvgComponent = mode === 'light' ? EndpointsLight : EndpointsDark;

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

export default Endpoints;
