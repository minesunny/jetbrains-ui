import React from 'react';
import { cn } from '@/lib/utils';
import { type IconProps, type SvgProps, sizeMap } from '../../types';

export type СoreDumpDebugProps = IconProps;

const СoreDumpDebugLight: React.FC<SvgProps> = ({
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
      d="M13 1H8v6h6V2a1 1 0 0 0-1-1M7 14H2a1 1 0 0 1-1-1V8h6z"
      fill="#EBECF0"
    />
    <path d="M1 2a1 1 0 0 1 1-1h5v6H1z" fill="#FFF4EB" />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M6 2H2v4h4zM2 1a1 1 0 0 0-1 1v5h6V1z"
      fill="#E66D17"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M8 7V1h5a1 1 0 0 1 1 1v5zm1-5h4v4H9z"
      fill="#6C707E"
    />
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
      fillRule="evenodd"
      clipRule="evenodd"
      d="M7 8v6H2a1 1 0 0 1-1-1V8zm-1 5V9H2v4z"
      fill="#6C707E"
    />
  </svg>
);

const СoreDumpDebugDark: React.FC<SvgProps> = ({
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
      d="M13 1H8v6h6V2a1 1 0 0 0-1-1M7 14H2a1 1 0 0 1-1-1V8h6z"
      fill="#43454A"
    />
    <path d="M1 2a1 1 0 0 1 1-1h5v6H1z" fill="#45322B" />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M6 2H2v4h4zM2 1a1 1 0 0 0-1 1v5h6V1z"
      fill="#C77D55"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M8 7V1h5a1 1 0 0 1 1 1v5zm1-5h4v4H9z"
      fill="#CED0D6"
    />
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
      fillRule="evenodd"
      clipRule="evenodd"
      d="M7 8v6H2a1 1 0 0 1-1-1V8zm-1 5V9H2v4z"
      fill="#CED0D6"
    />
  </svg>
);

export const СoreDumpDebug: React.FC<СoreDumpDebugProps> = ({
  size = 'md',
  mode = 'light',
  className,
  'aria-label': ariaLabel,
  title,
  ...props
}) => {
  const SvgComponent =
    mode === 'light' ? СoreDumpDebugLight : СoreDumpDebugDark;

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
