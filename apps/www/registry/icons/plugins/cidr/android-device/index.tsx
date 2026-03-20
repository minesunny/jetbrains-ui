import React from 'react';
import { cn } from '@/lib/utils';
import { type IconProps, type SvgProps, sizeMap } from '../../types';

export type AndroidDeviceProps = IconProps;

const AndroidDeviceLight: React.FC<SvgProps> = ({
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
      d="M5 2h6a1 1 0 0 1 1 1v8q.509 0 .992.099l.008-.014V3a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h2.1c.07-.348.178-.682.316-1H5a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1"
      fill="#6C707E"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M9.929 11.243a.5.5 0 0 0-.858.514l.596.993A4 4 0 0 0 8 16h8a4 4 0 0 0-1.667-3.25l.596-.993a.5.5 0 1 0-.858-.514l-.617 1.03A4 4 0 0 0 12 12a4 4 0 0 0-1.453.272zM10 14h1v1h-1zm4 0h-1v1h1z"
      fill="#55A76A"
    />
  </svg>
);

const AndroidDeviceDark: React.FC<SvgProps> = ({
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
      d="M5 2h6a1 1 0 0 1 1 1v8q.509 0 .992.099l.008-.014V3a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h2.1c.07-.348.178-.682.316-1H5a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1"
      fill="#CED0D6"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M9.929 11.243a.5.5 0 0 0-.858.514l.596.993A4 4 0 0 0 8 16h8a4 4 0 0 0-1.667-3.25l.596-.993a.5.5 0 1 0-.858-.514l-.617 1.03A4 4 0 0 0 12 12a4 4 0 0 0-1.453.272zM10 14h1v1h-1zm4 0h-1v1h1z"
      fill="#57965C"
    />
  </svg>
);

export const AndroidDevice: React.FC<AndroidDeviceProps> = ({
  size = 'md',
  mode = 'light',
  className,
  'aria-label': ariaLabel,
  title,
  ...props
}) => {
  const SvgComponent =
    mode === 'light' ? AndroidDeviceLight : AndroidDeviceDark;

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
