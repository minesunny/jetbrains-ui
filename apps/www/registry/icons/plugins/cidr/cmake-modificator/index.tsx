import React from 'react';
import { cn } from '@/lib/utils';
import { type IconProps, type SvgProps, sizeMap } from '../../types';

export type CMakeModificatorProps = IconProps;

const CMakeModificatorLight: React.FC<SvgProps> = ({
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
    <path d="m12 8 .416 4.08-1.777 1.578-.006-.003L8 16z" fill="url(#a)" />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M10.633 13.655 16 16H8z"
      fill="url(#b)"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="m12 8 4 8-3.333-1.46z"
      fill="url(#c)"
    />
    <defs>
      <linearGradient
        id="a"
        x1="9.906"
        y1="4.808"
        x2="3.6"
        y2="8.515"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#7777E9" />
        <stop offset="1" stopColor="#01009A" />
      </linearGradient>
      <linearGradient
        id="b"
        x1="17.6"
        y1="15.019"
        x2="15.354"
        y2="11.355"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#01B202" />
        <stop offset="1" stopColor="#0FE90F" />
      </linearGradient>
      <linearGradient
        id="c"
        x1="10.055"
        y1="12.22"
        x2="16.35"
        y2="15.281"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#B83535" />
        <stop offset="1" stopColor="#FD5B5A" />
      </linearGradient>
    </defs>
  </svg>
);

const CMakeModificatorDark: React.FC<SvgProps> = ({
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
    <path d="m12 8 .416 4.08-1.777 1.578-.006-.003L8 16z" fill="url(#a)" />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M10.633 13.655 16 16H8z"
      fill="url(#b)"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="m12 8 4 8-3.333-1.46z"
      fill="url(#c)"
    />
    <defs>
      <linearGradient
        id="a"
        x1="9.906"
        y1="4.808"
        x2="3.6"
        y2="8.515"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#7777E9" />
        <stop offset="1" stopColor="#01009A" />
      </linearGradient>
      <linearGradient
        id="b"
        x1="17.6"
        y1="15.019"
        x2="15.354"
        y2="11.355"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#01B202" />
        <stop offset="1" stopColor="#0FE90F" />
      </linearGradient>
      <linearGradient
        id="c"
        x1="10.055"
        y1="12.22"
        x2="16.35"
        y2="15.281"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#B83535" />
        <stop offset="1" stopColor="#FD5B5A" />
      </linearGradient>
    </defs>
  </svg>
);

export const CMakeModificator: React.FC<CMakeModificatorProps> = ({
  size = 'md',
  mode = 'light',
  className,
  'aria-label': ariaLabel,
  title,
  ...props
}) => {
  const SvgComponent =
    mode === 'light' ? CMakeModificatorLight : CMakeModificatorDark;

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
