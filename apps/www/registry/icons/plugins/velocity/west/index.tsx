import React from 'react';
import { cn } from '@/lib/utils';
import { type IconProps, type SvgProps, sizeMap } from '../../types';

export type WestProps = IconProps;

const WestLight: React.FC<SvgProps> = ({
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
    <path d="m4 12-3 1 1.907 2z" fill="#7929D2" />
    <path d="m4 12 6.5-6.5L14 10z" fill="url(#a)" />
    <path d="M4 12 6 2l4.5 3.5z" fill="url(#b)" />
    <path d="M6 2h8l-3.5 3.5z" fill="url(#c)" />
    <path d="M14 10V2l-3.5 3.5z" fill="url(#d)" />
    <defs>
      <linearGradient
        id="a"
        x1="6.199"
        y1="8.839"
        x2="14.999"
        y2="8.839"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#7929D2" />
        <stop offset="1" stopColor="#0070C5" />
      </linearGradient>
      <linearGradient
        id="b"
        x1="6.798"
        y1="1.086"
        x2="6.725"
        y2="9.785"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#00AEFF" />
        <stop offset="1" stopColor="#9454DB" />
      </linearGradient>
      <linearGradient
        id="c"
        x1="11.643"
        y1="4.693"
        x2="9.764"
        y2="1.439"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#66A9DC" />
        <stop offset="1" stopColor="#B1E4FA" />
      </linearGradient>
      <linearGradient
        id="d"
        x1="12.062"
        y1="2.144"
        x2="13.129"
        y2="9.527"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#00AEFF" />
        <stop offset="1" stopColor="#9454DB" />
      </linearGradient>
    </defs>
  </svg>
);

const WestDark: React.FC<SvgProps> = ({
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
    <path d="m4 12-3 1 1.907 2z" fill="#AF7FE4" />
    <path d="m4 12 6.5-6.5L14 10z" fill="url(#a)" />
    <path d="M4 12 6 2l4.5 3.5z" fill="url(#b)" />
    <path d="M6 2h8l-3.5 3.5z" fill="url(#c)" />
    <path d="M14 10V2l-3.5 3.5z" fill="url(#d)" />
    <defs>
      <linearGradient
        id="a"
        x1="6.199"
        y1="8.839"
        x2="14.999"
        y2="8.839"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#7929D2" />
        <stop offset="1" stopColor="#0070C5" />
      </linearGradient>
      <linearGradient
        id="b"
        x1="6.798"
        y1="1.086"
        x2="6.725"
        y2="9.785"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#00AEFF" />
        <stop offset="1" stopColor="#9454DB" />
      </linearGradient>
      <linearGradient
        id="c"
        x1="11.643"
        y1="4.693"
        x2="9.764"
        y2="1.439"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#66A9DC" />
        <stop offset="1" stopColor="#B1E4FA" />
      </linearGradient>
      <linearGradient
        id="d"
        x1="12.062"
        y1="2.144"
        x2="13.129"
        y2="9.527"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#00AEFF" />
        <stop offset="1" stopColor="#9454DB" />
      </linearGradient>
    </defs>
  </svg>
);

export const West: React.FC<WestProps> = ({
  size = 'md',
  mode = 'light',
  className,
  'aria-label': ariaLabel,
  title,
  ...props
}) => {
  const SvgComponent = mode === 'light' ? WestLight : WestDark;

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
