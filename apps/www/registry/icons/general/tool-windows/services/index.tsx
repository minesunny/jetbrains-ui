/**
 * Copyright 2000-2024 JetBrains s.r.o. and contributors.
 * Use of this source code is governed by the Apache 2.0 license.
 */
import type { FC } from 'react';
import { cn } from '@/lib/utils';
import { type SvgProps, sizeMap } from '../../../utils';

export type ServicesProps = SvgProps;

const ServicesLight: FC<SvgProps> = ({
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
      d="M15.212 7.5a1 1 0 0 1 0 1L12.039 14a1 1 0 0 1-.867.5H4.828a1 1 0 0 1-.867-.5L.788 8.5a1 1 0 0 1 0-1L3.961 2a1 1 0 0 1 .867-.5h6.344a1 1 0 0 1 .867.5z"
      stroke="#6C707E"
    />
    <path
      d="M10.5 7.567a.5.5 0 0 1 0 .866l-3.75 2.165a.5.5 0 0 1-.75-.433v-4.33a.5.5 0 0 1 .75-.433z"
      stroke="#6C707E"
    />
  </svg>
);

const ServicesDark: FC<SvgProps> = ({
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
      d="M15.212 7.5a1 1 0 0 1 0 1L12.039 14a1 1 0 0 1-.867.5H4.828a1 1 0 0 1-.867-.5L.788 8.5a1 1 0 0 1 0-1L3.961 2a1 1 0 0 1 .867-.5h6.344a1 1 0 0 1 .867.5z"
      stroke="#CED0D6"
    />
    <path
      d="M10.5 7.567a.5.5 0 0 1 0 .866l-3.75 2.165a.5.5 0 0 1-.75-.433v-4.33a.5.5 0 0 1 .75-.433z"
      stroke="#CED0D6"
    />
  </svg>
);

export const Services: FC<ServicesProps> = ({
  size = 'md',
  mode = 'light',
  className,
  'aria-label': ariaLabel,
  ...props
}) => {
  const SvgComponent = mode === 'light' ? ServicesLight : ServicesDark;

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

export default Services;
