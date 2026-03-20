import React from 'react';
import { cn } from '@/lib/utils';
import { type IconProps, type SvgProps, sizeMap } from '../../types';

export type CMakeDebugProps = IconProps;

const CMakeDebugLight: React.FC<SvgProps> = ({
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
    <path d="m8 .52.768 7.385-3.281 2.856-.01-.004L.615 15z" fill="url(#a)" />
    <path
      d="M14 10q0 .127-.015.25A3 3 0 0 0 12 9.5c-.76 0-1.456.283-1.985.75A2 2 0 1 1 14 10M14 12.5a2 2 0 1 0-4 0v.5a2 2 0 1 0 4 0z"
      fill="#F2FCF3"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M14 10q0 .127-.015.25.21.185.38.405l.858-.571a.5.5 0 1 1 .554.832l-.934.623q.155.455.157.961v.5c0 .486-.116.946-.321 1.352l1.098.732a.5.5 0 1 1-.554.832l-1.138-.759A3 3 0 0 1 12 16a3 3 0 0 1-2.085-.843l-1.138.759a.5.5 0 1 1-.554-.832l1.098-.732A3 3 0 0 1 9 13v-.5c0-.336.055-.66.157-.96l-.934-.624a.5.5 0 0 1 .554-.832l.857.571q.172-.22.381-.405A2 2 0 1 1 14 10m-3.608 4.189.016.021A1.997 1.997 0 0 0 14 13v-.5a2 2 0 1 0-4 0v.5c0 .445.146.857.392 1.189m.671-4.54a1 1 0 0 1 1.874 0 3 3 0 0 0-1.874 0"
      fill="#208A3C"
    />
    <path
      d="m7.512 11.628-2.035-.871L.615 15h6.47c.105-.296.302-.562.583-.75l.447-.297A4 4 0 0 1 8 13v-.5q0-.258.032-.51l-.364-.242a2 2 0 0 1-.156-.12"
      fill="url(#b)"
    />
    <path
      d="M11.342 7.073 8 .52l.887 8.53q.122.032.24.087a3 3 0 0 1 2.214-2.064"
      fill="url(#c)"
    />
    <defs>
      <linearGradient
        id="a"
        x1="4.134"
        y1="-5.259"
        x2="-7.39"
        y2="1.649"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#7777E9" />
        <stop offset="1" stopColor="#01009A" />
      </linearGradient>
      <linearGradient
        id="b"
        x1="18.339"
        y1="13.225"
        x2="14.309"
        y2="6.521"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#01B202" />
        <stop offset="1" stopColor="#0FE90F" />
      </linearGradient>
      <linearGradient
        id="c"
        x1="4.409"
        y1="8.158"
        x2="15.942"
        y2="13.878"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#B83535" />
        <stop offset="1" stopColor="#FD5B5A" />
      </linearGradient>
    </defs>
  </svg>
);

const CMakeDebugDark: React.FC<SvgProps> = ({
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
    <path d="m8 .52.768 7.385-3.281 2.856-.01-.004L.615 15z" fill="url(#a)" />
    <path
      d="M14 10q0 .127-.015.25A3 3 0 0 0 12 9.5c-.76 0-1.456.283-1.985.75A2 2 0 1 1 14 10M14 12.5a2 2 0 1 0-4 0v.5a2 2 0 1 0 4 0z"
      fill="#253627"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M14 10q0 .127-.015.25.21.185.38.405l.858-.571a.5.5 0 1 1 .554.832l-.934.623q.155.455.157.961v.5c0 .486-.116.946-.321 1.352l1.098.732a.5.5 0 1 1-.554.832l-1.138-.759A3 3 0 0 1 12 16a3 3 0 0 1-2.085-.843l-1.138.759a.5.5 0 1 1-.554-.832l1.098-.732A3 3 0 0 1 9 13v-.5c0-.336.055-.66.157-.96l-.934-.624a.5.5 0 0 1 .554-.832l.857.571q.172-.22.381-.405A2 2 0 1 1 14 10m-3.608 4.189.016.021A1.997 1.997 0 0 0 14 13v-.5a2 2 0 1 0-4 0v.5c0 .445.146.857.392 1.189m.671-4.54a1 1 0 0 1 1.874 0 3 3 0 0 0-1.874 0"
      fill="#57965C"
    />
    <path
      d="m7.512 11.628-2.035-.871L.615 15h6.47c.105-.296.302-.562.583-.75l.447-.297A4 4 0 0 1 8 13v-.5q0-.258.032-.51l-.364-.242a2 2 0 0 1-.156-.12"
      fill="url(#b)"
    />
    <path
      d="M11.342 7.073 8 .52l.887 8.53q.122.032.24.087a3 3 0 0 1 2.214-2.064"
      fill="url(#c)"
    />
    <defs>
      <linearGradient
        id="a"
        x1="4.134"
        y1="-5.259"
        x2="-7.39"
        y2="1.649"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#7777E9" />
        <stop offset="1" stopColor="#01009A" />
      </linearGradient>
      <linearGradient
        id="b"
        x1="18.339"
        y1="13.225"
        x2="14.309"
        y2="6.521"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#01B202" />
        <stop offset="1" stopColor="#0FE90F" />
      </linearGradient>
      <linearGradient
        id="c"
        x1="4.409"
        y1="8.158"
        x2="15.942"
        y2="13.878"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#B83535" />
        <stop offset="1" stopColor="#FD5B5A" />
      </linearGradient>
    </defs>
  </svg>
);

export const CMakeDebug: React.FC<CMakeDebugProps> = ({
  size = 'md',
  mode = 'light',
  className,
  'aria-label': ariaLabel,
  title,
  ...props
}) => {
  const SvgComponent = mode === 'light' ? CMakeDebugLight : CMakeDebugDark;

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
