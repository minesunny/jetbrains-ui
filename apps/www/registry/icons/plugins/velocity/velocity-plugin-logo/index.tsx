import React from 'react';
import { cn } from '@/lib/utils';
import { type IconProps, type SvgProps, sizeMap } from '../../types';

export type VelocityPluginLogoProps = IconProps;

const VelocityPluginLogoLight: React.FC<SvgProps> = ({
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
    viewBox="0 0 40 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    role={role}
    aria-label={ariaLabel}
    aria-hidden={ariaHidden}
  >
    {title && <title>{title}</title>}
    <path
      d="M31.5 20c0 6.351-5.149 11.5-11.5 11.5S8.5 26.351 8.5 20 13.649 8.5 20 8.5 31.5 13.649 31.5 20Z"
      stroke="#6C707E"
      strokeWidth="3"
    />
    <path
      d="M8.5 20V4.5M20 8.5h15.5M31.5 20v15.5M20 31.5H4.5"
      stroke="#6C707E"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const VelocityPluginLogoDark: React.FC<SvgProps> = ({
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
    viewBox="0 0 40 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    role={role}
    aria-label={ariaLabel}
    aria-hidden={ariaHidden}
  >
    {title && <title>{title}</title>}
    <path
      d="M31.5 20c0 6.351-5.149 11.5-11.5 11.5S8.5 26.351 8.5 20 13.649 8.5 20 8.5 31.5 13.649 31.5 20Z"
      stroke="#CED0D6"
      strokeWidth="3"
    />
    <path
      d="M8.5 20V4.5M20 8.5h15.5M31.5 20v15.5M20 31.5H4.5"
      stroke="#CED0D6"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const VelocityPluginLogo: React.FC<VelocityPluginLogoProps> = ({
  size = 'md',
  mode = 'light',
  className,
  'aria-label': ariaLabel,
  title,
  ...props
}) => {
  const SvgComponent =
    mode === 'light' ? VelocityPluginLogoLight : VelocityPluginLogoDark;

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
