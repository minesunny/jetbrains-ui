import React from 'react';
import { cn } from '@/lib/utils';
import { type IconProps, type SvgProps, sizeMap } from '../../types';

export type StopTimerProps = IconProps;

const StopTimerLight: React.FC<SvgProps> = ({
  size,
  className,
  title,
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
    {title && <title>{title}</title>}
    <rect
      x="9.5"
      y="9.5"
      width="6"
      height="6"
      rx="1.5"
      fill="#FFF7F7"
      stroke="#DB3B4B"
    />
    <path
      d="M5 1.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5M7.5 6a.5.5 0 0 1 1 0v3a.5.5 0 0 1-.243.429l-2.5 1.5a.5.5 0 1 1-.514-.858L7.5 8.717z"
      fill="#6C707E"
    />
    <path
      d="M8 15v-1a5 5 0 1 1 4.9-6h1.017A6.002 6.002 0 0 0 2 9a6 6 0 0 0 6 6"
      fill="#6C707E"
    />
  </svg>
);

const StopTimerDark: React.FC<SvgProps> = ({
  size,
  className,
  title,
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
    {title && <title>{title}</title>}
    <rect
      x="9.5"
      y="9.5"
      width="6"
      height="6"
      rx="1.5"
      fill="#402929"
      stroke="#DB5C5C"
    />
    <path
      d="M5 1.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5M7.5 6a.5.5 0 0 1 1 0v3a.5.5 0 0 1-.243.429l-2.5 1.5a.5.5 0 1 1-.514-.858L7.5 8.717z"
      fill="#CED0D6"
    />
    <path
      d="M8 15v-1a5 5 0 1 1 4.9-6h1.017A6.002 6.002 0 0 0 2 9a6 6 0 0 0 6 6"
      fill="#CED0D6"
    />
  </svg>
);

export const StopTimer: React.FC<StopTimerProps> = ({
  size = 'md',
  mode = 'light',
  className,
  'aria-label': ariaLabel,
  title,
  ...props
}) => {
  const SvgComponent = mode === 'light' ? StopTimerLight : StopTimerDark;

  return (
    <SvgComponent
      size={sizeMap[size]}
      className={cn('inline-block flex-shrink-0', className)}
      title={title}
      role={ariaLabel ? 'img' : 'presentation'}
      aria-label={ariaLabel}
      aria-hidden={!ariaLabel}
      {...props}
    />
  );
};
