import React from 'react';
import { cn } from '@/lib/utils';
import { type IconProps, type SvgProps, sizeMap } from '../../types';

export type ChartAreaProps = IconProps;

const ChartAreaLight: React.FC<SvgProps> = ({
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
      d="M2 2.5a.5.5 0 0 0-1 0V13a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1H2z"
      fill="#6C707E"
    />
    <path
      d="m2 4.86 2.5 2 4.375-3.5a1 1 0 0 1 1.25 0l4.5 3.6a1 1 0 0 1 .375.78V13H2h12V7.74l-4.5-3.6-4.375 3.5a1 1 0 0 1-1.25 0L2 6.14z"
      fill="#3574F0"
    />
    <path
      d="M2 6.14V13h12.5-.5V7.74l-4.5-3.6-4.375 3.5a1 1 0 0 1-1.25 0z"
      fill="#EDF3FF"
    />
  </svg>
);

const ChartAreaDark: React.FC<SvgProps> = ({
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
      d="M2 2.5a.5.5 0 0 0-1 0V13a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1H2z"
      fill="#CED0D6"
    />
    <path
      d="m2 4.86 2.5 2 4.375-3.5a1 1 0 0 1 1.25 0l4.5 3.6a1 1 0 0 1 .375.78V13H2h12V7.74l-4.5-3.6-4.375 3.5a1 1 0 0 1-1.25 0L2 6.14z"
      fill="#548AF7"
    />
    <path
      d="M2 6.14V13h12.5-.5V7.74l-4.5-3.6-4.375 3.5a1 1 0 0 1-1.25 0z"
      fill="#25324D"
    />
  </svg>
);

export const ChartArea: React.FC<ChartAreaProps> = ({
  size = 'md',
  mode = 'light',
  className,
  'aria-label': ariaLabel,
  title,
  ...props
}) => {
  const SvgComponent = mode === 'light' ? ChartAreaLight : ChartAreaDark;

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
