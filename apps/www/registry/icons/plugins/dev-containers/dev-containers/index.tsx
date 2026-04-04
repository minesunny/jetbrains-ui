import React from 'react';
import { cn } from '@/lib/utils';
import { type SvgProps, sizeMap } from '../../types';

export type DevContainersProps = SvgProps;

const DevContainersLight: React.FC<SvgProps> = ({
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
      d="m8 7.5 4.5-2M8 7.5l-4.5-2m4.5 2v5"
      stroke="#3574F0"
      strokeLinecap="round"
    />
    <path
      d="M14.5 11.52V4.5L8 1.5l-6.5 3v7.02L8 14.5z"
      stroke="#3574F0"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const DevContainersDark: React.FC<SvgProps> = ({
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
      d="m8 7.5 4.5-2M8 7.5l-4.5-2m4.5 2v5"
      stroke="#548AF7"
      strokeLinecap="round"
    />
    <path
      d="M14.5 11.52V4.5L8 1.5l-6.5 3v7.02L8 14.5z"
      stroke="#548AF7"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const DevContainers: React.FC<DevContainersProps> = ({
  size = 'md',
  mode = 'light',
  className,
  'aria-label': ariaLabel,
  ...props
}) => {
  const SvgComponent =
    mode === 'light' ? DevContainersLight : DevContainersDark;

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
