import React from 'react';
import { cn } from '@/lib/utils';
import { type IconProps, type SvgProps, sizeMap } from '../../types';

export type DtoProps = IconProps;

const DtoLight: React.FC<SvgProps> = ({
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
      d="M5.5 4.5h2.553q.995 0 1.76.445.77.44 1.195 1.235.43.795.43 1.82t-.43 1.82a3.1 3.1 0 0 1-1.195 1.24q-.765.44-1.76.44H5.5zm2.548 6.085a2.35 2.35 0 0 0 1.23-.32q.534-.325.83-.91T10.403 8t-.295-1.355a2.16 2.16 0 0 0-.83-.905 2.3 2.3 0 0 0-1.23-.325H6.5v5.17z"
      fill="#E66D17"
    />
  </svg>
);

const DtoDark: React.FC<SvgProps> = ({
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
      d="M5.5 4.5h2.553q.995 0 1.76.445.77.44 1.195 1.235.43.795.43 1.82t-.43 1.82a3.1 3.1 0 0 1-1.195 1.24q-.765.44-1.76.44H5.5zm2.548 6.085a2.35 2.35 0 0 0 1.23-.32q.534-.325.83-.91T10.403 8t-.295-1.355a2.16 2.16 0 0 0-.83-.905 2.3 2.3 0 0 0-1.23-.325H6.5v5.17z"
      fill="#C77D55"
    />
  </svg>
);

export const Dto: React.FC<DtoProps> = ({
  size = 'md',
  mode = 'light',
  className,
  'aria-label': ariaLabel,
  title,
  ...props
}) => {
  const SvgComponent = mode === 'light' ? DtoLight : DtoDark;

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
