import React from 'react';
import { cn } from '@/lib/utils';
import { type IconProps, type SvgProps, sizeMap } from '../../types';

export type OutSightColorProps = IconProps;

const OutSightColorLight: React.FC<SvgProps> = ({
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
      d="M13 8a3 3 0 1 1-6 0 3 3 0 0 1 6 0m-1 0a2 2 0 1 1-4 0 2 2 0 0 1 4 0"
      fill="url(#a)"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M8 13.5c3.5 0 7-2.5 8-5.5-1-3-4.5-5.5-8-5.5S1 5 0 8c1 3 4.5 5.5 8 5.5m-4.366-2.446C2.445 10.227 1.533 9.142 1.066 8c.467-1.142 1.379-2.227 2.568-3.054C4.928 4.046 6.482 3.5 8 3.5s3.072.545 4.366 1.446c1.189.827 2.101 1.912 2.568 3.054-.467 1.142-1.379 2.227-2.568 3.054-1.294.9-2.848 1.446-4.366 1.446s-3.072-.546-4.366-1.446"
      fill="url(#b)"
    />
    <defs>
      <linearGradient
        id="a"
        x1="12.444"
        y1="12.134"
        x2="8.723"
        y2="3.226"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#FDB60D" />
        <stop offset=".929" stopColor="#DD1265" />
      </linearGradient>
      <linearGradient
        id="b"
        x1="12.444"
        y1="12.134"
        x2="8.723"
        y2="3.226"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#FDB60D" />
        <stop offset=".929" stopColor="#DD1265" />
      </linearGradient>
    </defs>
  </svg>
);

const OutSightColorDark: React.FC<SvgProps> = ({
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
      d="M13 8a3 3 0 1 1-6 0 3 3 0 0 1 6 0m-1 0a2 2 0 1 1-4 0 2 2 0 0 1 4 0"
      fill="url(#a)"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M8 13.5c3.5 0 7-2.5 8-5.5-1-3-4.5-5.5-8-5.5S1 5 0 8c1 3 4.5 5.5 8 5.5m-4.366-2.446C2.445 10.227 1.533 9.142 1.066 8c.467-1.142 1.379-2.227 2.568-3.054C4.928 4.046 6.482 3.5 8 3.5s3.072.545 4.366 1.446c1.189.827 2.101 1.912 2.568 3.054-.467 1.142-1.379 2.227-2.568 3.054-1.294.9-2.848 1.446-4.366 1.446s-3.072-.546-4.366-1.446"
      fill="url(#b)"
    />
    <defs>
      <linearGradient
        id="a"
        x1="12.444"
        y1="12.134"
        x2="8.723"
        y2="3.226"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#FDB60D" />
        <stop offset=".929" stopColor="#DD1265" />
      </linearGradient>
      <linearGradient
        id="b"
        x1="12.444"
        y1="12.134"
        x2="8.723"
        y2="3.226"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#FDB60D" />
        <stop offset=".929" stopColor="#DD1265" />
      </linearGradient>
    </defs>
  </svg>
);

export const OutSightColor: React.FC<OutSightColorProps> = ({
  size = 'md',
  mode = 'light',
  className,
  'aria-label': ariaLabel,
  title,
  ...props
}) => {
  const SvgComponent =
    mode === 'light' ? OutSightColorLight : OutSightColorDark;

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
