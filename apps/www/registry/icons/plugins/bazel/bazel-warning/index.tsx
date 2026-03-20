import React from 'react';
import { cn } from '@/lib/utils';
import { type IconProps, type SvgProps, sizeMap } from '../../types';

export type BazelWarningProps = IconProps;

const BazelWarningLight: React.FC<SvgProps> = ({
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
    <path d="M4.5 1 8 4.5 4.5 8 1 4.5z" fill="#76D275" />
    <path d="M1 4.5V8l3.5 3.5V8z" fill="#43A047" />
    <path d="M11.5 1 15 4.5 11.5 8 8 4.5z" fill="#76D275" />
    <path d="M8 4.5 11.5 8 8 11.5 4.5 8z" fill="#43A047" />
    <path d="M8 11.5V15l-3.5-3.5V8z" fill="#00701A" />
    <g clipPath="url(#a)">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="m15.861 14.546-2.4-4.002a1.12 1.12 0 0 0-1.922 0l-2.4 4.002A.96.96 0 0 0 9.96 16h5.077a.96.96 0 0 0 .823-1.454"
        fill="#FFAF0F"
      />
      <path
        d="M13 11.5a.5.5 0 0 0-1 0v1a.5.5 0 0 0 1 0zM12.5 15a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1"
        fill="#fff"
      />
    </g>
    <path
      d="M15 8V4.5L11.5 8v1.247a2.14 2.14 0 0 1 2.159.094z"
      fill="#43A047"
    />
    <path
      d="M11.5 8 8 11.5v3.45c.014-.31.103-.623.28-.919l2.402-4.002a2.1 2.1 0 0 1 .818-.782z"
      fill="#004300"
    />
    <defs>
      <clipPath id="a">
        <path fill="#fff" transform="translate(9 10)" d="M0 0H7V6H0z" />
      </clipPath>
    </defs>
  </svg>
);

const BazelWarningDark: React.FC<SvgProps> = ({
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
    <path d="M4.5 1 8 4.5 4.5 8 1 4.5z" fill="#76D275" />
    <path d="M1 4.5V8l3.5 3.5V8z" fill="#43A047" />
    <path d="M11.5 1 15 4.5 11.5 8 8 4.5z" fill="#76D275" />
    <path d="M8 4.5 11.5 8 8 11.5 4.5 8z" fill="#43A047" />
    <path d="M8 11.5V15l-3.5-3.5V8z" fill="#00701A" />
    <g clipPath="url(#a)">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="m15.861 14.546-2.4-4.002a1.12 1.12 0 0 0-1.922 0l-2.4 4.002A.96.96 0 0 0 9.96 16h5.077a.96.96 0 0 0 .823-1.454"
        fill="#F2C55C"
      />
      <path
        d="M13 11.5a.5.5 0 0 0-1 0v1a.5.5 0 0 0 1 0zM12.5 15a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1"
        fill="#5E4D33"
      />
    </g>
    <path
      d="M15 8V4.5L11.5 8v1.247a2.14 2.14 0 0 1 2.159.094z"
      fill="#43A047"
    />
    <path
      d="M11.5 8 8 11.5v3.45c.014-.31.103-.623.28-.919l2.402-4.002a2.1 2.1 0 0 1 .818-.782z"
      fill="#004300"
    />
    <defs>
      <clipPath id="a">
        <path fill="#fff" transform="translate(9 10)" d="M0 0H7V6H0z" />
      </clipPath>
    </defs>
  </svg>
);

export const BazelWarning: React.FC<BazelWarningProps> = ({
  size = 'md',
  mode = 'light',
  className,
  'aria-label': ariaLabel,
  title,
  ...props
}) => {
  const SvgComponent = mode === 'light' ? BazelWarningLight : BazelWarningDark;

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
