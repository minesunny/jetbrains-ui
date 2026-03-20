import React from 'react';
import { cn } from '@/lib/utils';
import { type IconProps, type SvgProps, sizeMap } from '../../types';

export type DebugTargetComputerProps = IconProps;

const DebugTargetComputerLight: React.FC<SvgProps> = ({
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
      d="M2 4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2H8v-.03l.332-.222a1.5 1.5 0 0 0-1.458-2.611A3 3 0 0 0 2 7.764z"
      fill="#EBECF0"
    />
    <path
      d="M2 4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2H8v-.03l.332-.222c.28-.187.478-.452.582-.748H12a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v3.17a3 3 0 0 0-1 .594zM8 13h3.5a.5.5 0 1 1 0 1H8z"
      fill="#6C707E"
    />
    <path
      d="M6 10q0 .127-.016.25A3 3 0 0 0 4 9.5c-.76 0-1.456.283-1.985.75A2 2 0 1 1 6 10M6 12.5a2 2 0 1 0-4 0v.5a2 2 0 1 0 4 0z"
      fill="#F2FCF3"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M6 10q0 .127-.016.25.21.185.382.405l.857-.571a.5.5 0 1 1 .554.832l-.934.623q.155.455.157.961v.5c0 .486-.116.946-.321 1.352l1.098.732a.5.5 0 1 1-.554.832l-1.138-.759A3 3 0 0 1 4 16a3 3 0 0 1-2.085-.843l-1.138.759a.5.5 0 1 1-.554-.832l1.098-.732A3 3 0 0 1 1 13v-.5c0-.336.055-.66.157-.96l-.934-.624a.5.5 0 0 1 .554-.832l.857.571q.172-.22.381-.405A2 2 0 1 1 6 10m-3.608 4.189.015.021c.366.48.943.79 1.593.79.651 0 1.23-.311 1.594-.793l.013-.016C5.854 13.86 6 13.447 6 13v-.5a2 2 0 1 0-4 0v.5c0 .445.146.857.392 1.189m.671-4.54a1 1 0 0 1 1.874 0 3 3 0 0 0-1.874 0"
      fill="#208A3C"
    />
  </svg>
);

const DebugTargetComputerDark: React.FC<SvgProps> = ({
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
      d="M2 4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2H8v-.03l.332-.222a1.5 1.5 0 0 0-1.458-2.611A3 3 0 0 0 2 7.764z"
      fill="#43454A"
    />
    <path
      d="M2 4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2H8v-.03l.332-.222c.28-.187.478-.452.582-.748H12a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v3.17a3 3 0 0 0-1 .594zM8 13h3.5a.5.5 0 1 1 0 1H8z"
      fill="#CED0D6"
    />
    <path
      d="M6 10q0 .127-.016.25A3 3 0 0 0 4 9.5c-.76 0-1.456.283-1.985.75A2 2 0 1 1 6 10M6 12.5a2 2 0 1 0-4 0v.5a2 2 0 1 0 4 0z"
      fill="#253627"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M6 10q0 .127-.016.25.21.185.382.405l.857-.571a.5.5 0 1 1 .554.832l-.934.623q.155.455.157.961v.5c0 .486-.116.946-.321 1.352l1.098.732a.5.5 0 1 1-.554.832l-1.138-.759A3 3 0 0 1 4 16a3 3 0 0 1-2.085-.843l-1.138.759a.5.5 0 1 1-.554-.832l1.098-.732A3 3 0 0 1 1 13v-.5c0-.336.055-.66.157-.96l-.934-.624a.5.5 0 0 1 .554-.832l.857.571q.172-.22.381-.405A2 2 0 1 1 6 10m-3.608 4.189.015.021c.366.48.943.79 1.593.79.651 0 1.23-.311 1.594-.793l.013-.016C5.854 13.86 6 13.447 6 13v-.5a2 2 0 1 0-4 0v.5c0 .445.146.857.392 1.189m.671-4.54a1 1 0 0 1 1.874 0 3 3 0 0 0-1.874 0"
      fill="#57965C"
    />
  </svg>
);

export const DebugTargetComputer: React.FC<DebugTargetComputerProps> = ({
  size = 'md',
  mode = 'light',
  className,
  'aria-label': ariaLabel,
  title,
  ...props
}) => {
  const SvgComponent =
    mode === 'light' ? DebugTargetComputerLight : DebugTargetComputerDark;

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
