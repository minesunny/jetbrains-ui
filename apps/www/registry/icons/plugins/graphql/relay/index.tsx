import React from 'react';
import { cn } from '@/lib/utils';
import { type IconProps, type SvgProps, sizeMap } from '../../types';

export type RelayProps = IconProps;

const RelayLight: React.FC<SvgProps> = ({
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
    <path
      d="M3.915 4a1.5 1.5 0 1 1 0-1H9.5a2.5 2.5 0 0 1 0 5h-3a1.5 1.5 0 1 0 0 3h5.585a1.5 1.5 0 1 1 0 1H6.5a2.5 2.5 0 0 1 0-5h3a1.5 1.5 0 0 0 0-3z"
      fill="#E66D17"
    />
  </svg>
);

const RelayDark: React.FC<SvgProps> = ({
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
    <path
      d="M3.915 4a1.5 1.5 0 1 1 0-1H9.5a2.5 2.5 0 0 1 0 5h-3a1.5 1.5 0 1 0 0 3h5.585a1.5 1.5 0 1 1 0 1H6.5a2.5 2.5 0 0 1 0-5h3a1.5 1.5 0 0 0 0-3z"
      fill="#C77D55"
    />
  </svg>
);

export const Relay: React.FC<RelayProps> = ({
  size = 'md',
  mode = 'light',
  className,
  'aria-label': ariaLabel,
  title,
  ...props
}) => {
  const SvgComponent = mode === 'light' ? RelayLight : RelayDark;

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
