import React from 'react';
import { cn } from '@/lib/utils';
import { type IconProps, type SvgProps, sizeMap } from '../../types';

export type ChartLineProps = IconProps;

const ChartLineLight: React.FC<SvgProps> = ({
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
      d="M1.5 2a.5.5 0 0 1 .5.5V13h12.5a.5.5 0 0 1 0 1H2a1 1 0 0 1-1-1V2.5a.5.5 0 0 1 .5-.5"
      fill="#6C707E"
    />
    <path
      d="M14.854 4.854a.5.5 0 0 0-.708-.708L9.5 8.793 6.207 5.5a1 1 0 0 0-1.414 0L2 8.293v1.414l3.5-3.5L8.793 9.5a1 1 0 0 0 1.414 0z"
      fill="#3574F0"
    />
  </svg>
);

const ChartLineDark: React.FC<SvgProps> = ({
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
      d="M1.5 2a.5.5 0 0 1 .5.5V13h12.5a.5.5 0 0 1 0 1H2a1 1 0 0 1-1-1V2.5a.5.5 0 0 1 .5-.5"
      fill="#CED0D6"
    />
    <path
      d="M14.854 4.854a.5.5 0 0 0-.708-.708L9.5 8.793 6.207 5.5a1 1 0 0 0-1.414 0L2 8.293v1.414l3.5-3.5L8.793 9.5a1 1 0 0 0 1.414 0z"
      fill="#548AF7"
    />
  </svg>
);

export const ChartLine: React.FC<ChartLineProps> = ({
  size = 'md',
  mode = 'light',
  className,
  'aria-label': ariaLabel,
  title,
  ...props
}) => {
  const SvgComponent = mode === 'light' ? ChartLineLight : ChartLineDark;

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
