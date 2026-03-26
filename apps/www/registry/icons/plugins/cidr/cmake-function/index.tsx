import React from 'react';
import { cn } from '@/lib/utils';
import { type IconProps, type SvgProps, sizeMap } from '../../types';

export type CMakeFunctionProps = IconProps;

const CMakeFunctionLight: React.FC<SvgProps> = ({
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
    <path d="M14.464 10.692a7 7 0 1 0-7.069 4.283L12 5.763z" fill="#FFF7F7" />
    <path
      d="M7.258 12h1.017V7.327H9.83V6.43H8.275v-.95c0-.36.246-.606.6-.606h1.006V4H8.778c-.903 0-1.52.571-1.52 1.406V6.43H6.121v.897h1.137z"
      fill="#DB3B4B"
    />
    <path
      d="M13.83 9.424Q13.998 8.737 14 8a6 6 0 1 0-6.117 5.999l-.488.975a7 7 0 1 1 7.069-4.283z"
      fill="#DB3B4B"
    />
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

const CMakeFunctionDark: React.FC<SvgProps> = ({
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
    <path d="M14.464 10.692a7 7 0 1 0-7.069 4.283L12 5.763z" fill="#402929" />
    <path
      d="M7.258 12h1.017V7.327H9.83V6.43H8.275v-.95c0-.36.246-.606.6-.606h1.006V4H8.778c-.903 0-1.52.571-1.52 1.406V6.43H6.121v.897h1.137z"
      fill="#DB5C5C"
    />
    <path
      d="M13.83 9.424Q13.998 8.737 14 8a6 6 0 1 0-6.117 5.999l-.488.975a7 7 0 1 1 7.069-4.283z"
      fill="#DB5C5C"
    />
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

export const CMakeFunction: React.FC<CMakeFunctionProps> = ({
  size = 'md',
  mode = 'light',
  className,
  'aria-label': ariaLabel,
  title,
  ...props
}) => {
  const SvgComponent =
    mode === 'light' ? CMakeFunctionLight : CMakeFunctionDark;

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
