import React from 'react';
import { cn } from '@/lib/utils';
import { type IconProps, type SvgProps, sizeMap } from '../../types';

export type CwmPermissionsGrantedProps = IconProps;

const CwmPermissionsGrantedLight: React.FC<SvgProps> = ({
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
    <g clipPath="url(#a)" fillRule="evenodd" clipRule="evenodd">
      <path
        d="M8.969 8a4 4 0 1 1 0-1H14.5a.5.5 0 0 1 0 1H14v2.5a.5.5 0 0 1-1 0V8h-1v2.5a.5.5 0 0 1-1 0V8zM5 10.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6"
        fill="#6C707E"
      />
      <path
        d="M15.827 11.176a.6.6 0 0 1 0 .848l-3.797 3.797a.6.6 0 0 1-.848 0l-2.006-2.006a.6.6 0 1 1 .848-.848l1.582 1.581 3.373-3.372a.6.6 0 0 1 .848 0"
        fill="#369650"
      />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M0 0H16V16H0z" />
      </clipPath>
    </defs>
  </svg>
);

const CwmPermissionsGrantedDark: React.FC<SvgProps> = ({
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
    <g clipPath="url(#a)" fillRule="evenodd" clipRule="evenodd">
      <path
        d="M8.969 8a4 4 0 1 1 0-1H14.5a.5.5 0 0 1 0 1H14v2.5a.5.5 0 0 1-1 0V8h-1v2.5a.5.5 0 0 1-1 0V8zM5 10.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6"
        fill="#CED0D6"
      />
      <path
        d="M15.827 11.176a.6.6 0 0 1 0 .848l-3.797 3.797a.6.6 0 0 1-.848 0l-2.006-2.006a.6.6 0 1 1 .848-.848l1.582 1.581 3.373-3.372a.6.6 0 0 1 .848 0"
        fill="#57965C"
      />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M0 0H16V16H0z" />
      </clipPath>
    </defs>
  </svg>
);

export const CwmPermissionsGranted: React.FC<CwmPermissionsGrantedProps> = ({
  size = 'md',
  mode = 'light',
  className,
  'aria-label': ariaLabel,
  title,
  ...props
}) => {
  const SvgComponent =
    mode === 'light' ? CwmPermissionsGrantedLight : CwmPermissionsGrantedDark;

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
