import React from 'react';
import { cn } from '@/lib/utils';
import { type IconProps, type SvgProps, sizeMap } from '../../types';

export type CwmEnableCallProps = IconProps;

const CwmEnableCallLight: React.FC<SvgProps> = ({
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
      d="M13.5 10.736v1.656a1.12 1.12 0 0 1-1.206 1.104C6.778 13.5 2.5 9.182 2.504 3.703A1.12 1.12 0 0 1 3.605 2.5h1.66c.268-.003.528.092.731.267.579.497.951 2.182.808 2.852-.112.523-.64.89-.998 1.247a8.84 8.84 0 0 0 3.319 3.312c.358-.358.725-.884 1.25-.996.672-.143 2.368.23 2.863.813.175.206.268.47.262.74"
      stroke="#6C707E"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const CwmEnableCallDark: React.FC<SvgProps> = ({
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
      d="M13.5 10.736v1.656a1.12 1.12 0 0 1-1.206 1.104C6.778 13.5 2.5 9.182 2.504 3.703A1.12 1.12 0 0 1 3.605 2.5h1.66c.268-.003.528.092.731.267.579.497.951 2.182.808 2.852-.112.523-.64.89-.998 1.247a8.84 8.84 0 0 0 3.319 3.312c.358-.358.725-.884 1.25-.996.672-.143 2.368.23 2.863.813.175.206.268.47.262.74"
      stroke="#CED0D6"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const CwmEnableCall: React.FC<CwmEnableCallProps> = ({
  size = 'md',
  mode = 'light',
  className,
  'aria-label': ariaLabel,
  title,
  ...props
}) => {
  const SvgComponent =
    mode === 'light' ? CwmEnableCallLight : CwmEnableCallDark;

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
