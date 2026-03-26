import React from 'react';
import { cn } from '@/lib/utils';
import { type IconProps, type SvgProps, sizeMap } from '../../types';

export type AddExecutableProps = IconProps;

const AddExecutableLight: React.FC<SvgProps> = ({
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
    <path d="M14.464 10.692a7 7 0 1 0-7.069 4.283L12 5.763z" fill="#EDF3FF" />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="m10.039 9.685-.83 1.66a4 4 0 0 1-1.145.155q-.94 0-1.691-.45a3.15 3.15 0 0 1-1.176-1.248Q4.78 9 4.78 7.987q0-.986.425-1.783A3.2 3.2 0 0 1 8.064 4.5q.947 0 1.658.45.72.45 1.104 1.248.27.551.355 1.203l-.427.854h-4.91q.05.586.287 1.07.3.595.823.928t1.175.333q.438 0 .81-.105.378-.11.653-.313.28-.21.43-.483zM5.87 7.393h4.262a3 3 0 0 0-.202-.751 1.96 1.96 0 0 0-.718-.901q-.47-.32-1.136-.32t-1.175.313q-.51.307-.79.882a2.7 2.7 0 0 0-.24.777"
      fill="#3574F0"
    />
    <path
      d="M13.83 9.424Q13.998 8.737 14 8a6 6 0 1 0-6.117 5.999l-.488.975a7 7 0 1 1 7.069-4.283z"
      fill="#3574F0"
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

const AddExecutableDark: React.FC<SvgProps> = ({
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
    <path d="M14.464 10.692a7 7 0 1 0-7.069 4.283L12 5.763z" fill="#25324D" />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="m10.039 9.685-.83 1.66a4 4 0 0 1-1.145.155q-.94 0-1.691-.45a3.15 3.15 0 0 1-1.176-1.248Q4.78 9 4.78 7.987q0-.986.425-1.783A3.2 3.2 0 0 1 8.064 4.5q.947 0 1.658.45.72.45 1.104 1.248.27.551.355 1.203l-.427.854h-4.91q.05.586.287 1.07.3.595.823.928t1.175.333q.438 0 .81-.105.378-.11.653-.313.28-.21.43-.483zM5.87 7.393h4.262a3 3 0 0 0-.202-.751 1.96 1.96 0 0 0-.718-.901q-.47-.32-1.136-.32t-1.175.313q-.51.307-.79.882a2.7 2.7 0 0 0-.24.777"
      fill="#548AF7"
    />
    <path
      d="M13.83 9.424Q13.998 8.737 14 8a6 6 0 1 0-6.117 5.999l-.488.975a7 7 0 1 1 7.069-4.283z"
      fill="#548AF7"
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

export const AddExecutable: React.FC<AddExecutableProps> = ({
  size = 'md',
  mode = 'light',
  className,
  'aria-label': ariaLabel,
  title,
  ...props
}) => {
  const SvgComponent =
    mode === 'light' ? AddExecutableLight : AddExecutableDark;

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
