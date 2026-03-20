import React from 'react';
import { cn } from '@/lib/utils';
import { type IconProps, type SvgProps, sizeMap } from '../../types';

export type ParameterProps = IconProps;

const ParameterLight: React.FC<SvgProps> = ({
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
    <circle cx="8" cy="8" r="6.5" fill="#FFF4EB" stroke="#E66D17" />
    <path
      d="M8.57 5c-.844 0-1.508.371-1.888.998v-.875h-.983V12h1.003V9.52c.384.607 1.039.965 1.868.965 1.458 0 2.476-1.115 2.476-2.742S10.028 5 8.57 5m-.21 4.585c-.977 0-1.658-.752-1.658-1.842S7.382 5.9 8.36 5.9c.972 0 1.643.752 1.643 1.842s-.67 1.842-1.643 1.842"
      fill="#E66D17"
    />
  </svg>
);

const ParameterDark: React.FC<SvgProps> = ({
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
    <circle cx="8" cy="8" r="6.5" fill="#45322B" stroke="#C77D55" />
    <path
      d="M8.57 5c-.844 0-1.508.371-1.888.998v-.875h-.983V12h1.003V9.52c.384.607 1.039.965 1.868.965 1.458 0 2.476-1.115 2.476-2.742S10.028 5 8.57 5m-.21 4.585c-.977 0-1.658-.752-1.658-1.842S7.382 5.9 8.36 5.9c.972 0 1.643.752 1.643 1.842s-.67 1.842-1.643 1.842"
      fill="#C77D55"
    />
  </svg>
);

export const Parameter: React.FC<ParameterProps> = ({
  size = 'md',
  mode = 'light',
  className,
  'aria-label': ariaLabel,
  title,
  ...props
}) => {
  const SvgComponent = mode === 'light' ? ParameterLight : ParameterDark;

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
