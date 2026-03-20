import React from 'react';
import { cn } from '@/lib/utils';
import { type IconProps, type SvgProps, sizeMap } from '../../types';

export type ComponentVendorProps = IconProps;

const ComponentVendorLight: React.FC<SvgProps> = ({
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
      d="M2.913 3.5h3.174a.5.5 0 0 1 .498.455l.818 9a.5.5 0 0 1-.498.545h-4.81a.5.5 0 0 1-.498-.545l.818-9a.5.5 0 0 1 .498-.455M10.867 7.5h2.266a.5.5 0 0 1 .495.43l.714 5a.5.5 0 0 1-.495.57h-3.694a.5.5 0 0 1-.495-.57l.714-5a.5.5 0 0 1 .495-.43"
      fill="#EBECF0"
      stroke="#6C707E"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="m12 5.5.293-.293a1 1 0 0 0 0-1.414l-.586-.586a1 1 0 0 1 0-1.414L12 1.5"
      stroke="#6C707E"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const ComponentVendorDark: React.FC<SvgProps> = ({
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
      d="M2.913 3.5h3.174a.5.5 0 0 1 .498.455l.818 9a.5.5 0 0 1-.498.545h-4.81a.5.5 0 0 1-.498-.545l.818-9a.5.5 0 0 1 .498-.455M10.867 7.5h2.266a.5.5 0 0 1 .495.43l.714 5a.5.5 0 0 1-.495.57h-3.694a.5.5 0 0 1-.495-.57l.714-5a.5.5 0 0 1 .495-.43"
      fill="#43454A"
      stroke="#CED0D6"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="m12 5.5.293-.293a1 1 0 0 0 0-1.414l-.586-.586a1 1 0 0 1 0-1.414L12 1.5"
      stroke="#CED0D6"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const ComponentVendor: React.FC<ComponentVendorProps> = ({
  size = 'md',
  mode = 'light',
  className,
  'aria-label': ariaLabel,
  title,
  ...props
}) => {
  const SvgComponent =
    mode === 'light' ? ComponentVendorLight : ComponentVendorDark;

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
