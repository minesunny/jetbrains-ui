import React from 'react';
import { cn } from '@/lib/utils';
import { type IconProps, type SvgProps, sizeMap } from '../../types';

export type CwmPermissionFullProps = IconProps;

const CwmPermissionFullLight: React.FC<SvgProps> = ({
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
      x="1.5"
      y="2.5"
      width="13"
      height="11"
      rx="1.5"
      fill="#FFF7F7"
      stroke="#DB3B4B"
    />
    <path
      d="M7.5 10.5h3M4.48 9.48 6.46 7.5 4.48 5.52"
      stroke="#DB3B4B"
      strokeLinecap="round"
    />
  </svg>
);

const CwmPermissionFullDark: React.FC<SvgProps> = ({
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
      x="1.5"
      y="2.5"
      width="13"
      height="11"
      rx="1.5"
      fill="#402929"
      stroke="#DB5C5C"
    />
    <path
      d="M7.5 10.5h3M4.48 9.48 6.46 7.5 4.48 5.52"
      stroke="#DB5C5C"
      strokeLinecap="round"
    />
  </svg>
);

export const CwmPermissionFull: React.FC<CwmPermissionFullProps> = ({
  size = 'md',
  mode = 'light',
  className,
  'aria-label': ariaLabel,
  title,
  ...props
}) => {
  const SvgComponent =
    mode === 'light' ? CwmPermissionFullLight : CwmPermissionFullDark;

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
