import React from 'react';
import { cn } from '@/lib/utils';
import { type IconProps, type SvgProps, sizeMap } from '../../types';

export type CwmMicOnProps = IconProps;

const CwmMicOnLight: React.FC<SvgProps> = ({
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
      fillRule="evenodd"
      clipRule="evenodd"
      d="M5 4a3 3 0 0 1 6 0v4a3 3 0 0 1-6 0zm5 0v4a2 2 0 1 1-4 0V4a2 2 0 1 1 4 0"
      fill="#6C707E"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M4 8a.5.5 0 0 0-1 0 5 5 0 0 0 3 4.584v.916A1.5 1.5 0 0 0 7.5 15h1a1.5 1.5 0 0 0 1.5-1.5v-.916A5 5 0 0 0 13 8a.5.5 0 0 0-1 0 4.002 4.002 0 0 1-5.333 3.773A4 4 0 0 1 4 8m3 5.5v-.6a5 5 0 0 0 2 0v.6a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5"
      fill="#6C707E"
    />
    <path
      d="M10 8V4a2 2 0 1 0-4 0v4a2 2 0 1 0 4 0M7 12.9v.6a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-.6a5 5 0 0 1-2 0"
      fill="#EBECF0"
    />
  </svg>
);

const CwmMicOnDark: React.FC<SvgProps> = ({
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
      fillRule="evenodd"
      clipRule="evenodd"
      d="M5 4a3 3 0 0 1 6 0v4a3 3 0 0 1-6 0zm5 0v4a2 2 0 1 1-4 0V4a2 2 0 1 1 4 0"
      fill="#CED0D6"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M4 8a.5.5 0 0 0-1 0 5 5 0 0 0 3 4.584v.916A1.5 1.5 0 0 0 7.5 15h1a1.5 1.5 0 0 0 1.5-1.5v-.916A5 5 0 0 0 13 8a.5.5 0 0 0-1 0 4.002 4.002 0 0 1-5.333 3.773A4 4 0 0 1 4 8m3 5.5v-.6a5 5 0 0 0 2 0v.6a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5"
      fill="#CED0D6"
    />
    <path
      d="M10 8V4a2 2 0 1 0-4 0v4a2 2 0 1 0 4 0M7 12.9v.6a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-.6a5 5 0 0 1-2 0"
      fill="#43454A"
    />
  </svg>
);

export const CwmMicOn: React.FC<CwmMicOnProps> = ({
  size = 'md',
  mode = 'light',
  className,
  'aria-label': ariaLabel,
  title,
  ...props
}) => {
  const SvgComponent = mode === 'light' ? CwmMicOnLight : CwmMicOnDark;

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
