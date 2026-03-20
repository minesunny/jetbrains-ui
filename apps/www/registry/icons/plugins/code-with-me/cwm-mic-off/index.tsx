import React from 'react';
import { cn } from '@/lib/utils';
import { type IconProps, type SvgProps, sizeMap } from '../../types';

export type CwmMicOffProps = IconProps;

const CwmMicOffLight: React.FC<SvgProps> = ({
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
      d="M10.898 8.777Q11 8.404 11 8V4a3 3 0 0 0-5.842-.963l.845.845A2 2 0 0 1 10 4v3.879z"
      fill="#DB3B4B"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M9.738 10.445A3 3 0 0 1 5 8V5.707L2.146 2.854a.5.5 0 1 1 .708-.708l11 11a.5.5 0 0 1-.708.708l-1.982-1.983a5 5 0 0 1-1.164.713v.916A1.5 1.5 0 0 1 8.5 15h-1A1.5 1.5 0 0 1 6 13.5v-.916A5 5 0 0 1 3 8a.5.5 0 0 1 1 0 4.002 4.002 0 0 0 5.333 3.773 4 4 0 0 0 1.12-.613zm-.722-.722A2 2 0 0 1 6 8V6.707zM7 13.5v-.6a5 5 0 0 0 2 0v.6a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5"
      fill="#DB3B4B"
    />
    <path
      d="M12.434 10.313A5 5 0 0 0 13 8a.5.5 0 0 0-1 0c0 .554-.113 1.082-.316 1.562z"
      fill="#DB3B4B"
    />
    <path
      d="M6.003 3.882 10 7.879V4a2 2 0 0 0-3.997-.118M9.016 9.723A2 2 0 0 1 6 8V6.707zM7 13.5v-.6a5 5 0 0 0 2 0v.6a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5"
      fill="#FFF7F7"
    />
  </svg>
);

const CwmMicOffDark: React.FC<SvgProps> = ({
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
      d="M10.898 8.777Q11 8.404 11 8V4a3 3 0 0 0-5.842-.963l.845.845A2 2 0 0 1 10 4v3.879z"
      fill="#DB5C5C"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M9.738 10.445A3 3 0 0 1 5 8V5.707L2.146 2.854a.5.5 0 1 1 .708-.708l11 11a.5.5 0 0 1-.708.708l-1.982-1.983a5 5 0 0 1-1.164.713v.916A1.5 1.5 0 0 1 8.5 15h-1A1.5 1.5 0 0 1 6 13.5v-.916A5 5 0 0 1 3 8a.5.5 0 0 1 1 0 4.002 4.002 0 0 0 5.333 3.773 4 4 0 0 0 1.12-.613zm-.722-.722A2 2 0 0 1 6 8V6.707zM7 13.5v-.6a5 5 0 0 0 2 0v.6a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5"
      fill="#DB5C5C"
    />
    <path
      d="M12.434 10.313A5 5 0 0 0 13 8a.5.5 0 0 0-1 0c0 .554-.113 1.082-.316 1.562z"
      fill="#DB5C5C"
    />
    <path
      d="M6.003 3.882 10 7.879V4a2 2 0 0 0-3.997-.118M9.016 9.723A2 2 0 0 1 6 8V6.707zM7 13.5v-.6a5 5 0 0 0 2 0v.6a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5"
      fill="#402929"
    />
  </svg>
);

export const CwmMicOff: React.FC<CwmMicOffProps> = ({
  size = 'md',
  mode = 'light',
  className,
  'aria-label': ariaLabel,
  title,
  ...props
}) => {
  const SvgComponent = mode === 'light' ? CwmMicOffLight : CwmMicOffDark;

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
