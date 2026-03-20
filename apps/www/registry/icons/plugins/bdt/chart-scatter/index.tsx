import React from 'react';
import { cn } from '@/lib/utils';
import { type IconProps, type SvgProps, sizeMap } from '../../types';

export type ChartScatterProps = IconProps;

const ChartScatterLight: React.FC<SvgProps> = ({
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
    <rect
      x="3.5"
      y="6.5"
      width="3"
      height="3"
      rx=".5"
      fill="#EDF3FF"
      stroke="#3574F0"
    />
    <rect
      x="8.5"
      y="2.5"
      width="3"
      height="3"
      rx=".5"
      fill="#EDF3FF"
      stroke="#3574F0"
    />
    <rect
      x="11.5"
      y="7.5"
      width="3"
      height="3"
      rx=".5"
      fill="#EDF3FF"
      stroke="#3574F0"
    />
  </svg>
);

const ChartScatterDark: React.FC<SvgProps> = ({
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
    <rect
      x="3.5"
      y="6.5"
      width="3"
      height="3"
      rx=".5"
      fill="#25324D"
      stroke="#548AF7"
    />
    <rect
      x="8.5"
      y="2.5"
      width="3"
      height="3"
      rx=".5"
      fill="#25324D"
      stroke="#548AF7"
    />
    <rect
      x="11.5"
      y="7.5"
      width="3"
      height="3"
      rx=".5"
      fill="#25324D"
      stroke="#548AF7"
    />
  </svg>
);

export const ChartScatter: React.FC<ChartScatterProps> = ({
  size = 'md',
  mode = 'light',
  className,
  'aria-label': ariaLabel,
  title,
  ...props
}) => {
  const SvgComponent = mode === 'light' ? ChartScatterLight : ChartScatterDark;

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
