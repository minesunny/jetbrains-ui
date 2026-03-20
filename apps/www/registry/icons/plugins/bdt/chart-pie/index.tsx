import React from 'react';
import { cn } from '@/lib/utils';
import { type IconProps, type SvgProps, sizeMap } from '../../types';

export type ChartPieProps = IconProps;

const ChartPieLight: React.FC<SvgProps> = ({
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
      d="M7.5 8.5h5.977A5.5 5.5 0 1 1 7.5 2.523z"
      fill="#EBECF0"
      stroke="#6C707E"
    />
    <path
      d="M9.5 1.523A5.5 5.5 0 0 1 14.477 6.5H9.5z"
      fill="#EDF3FF"
      stroke="#3574F0"
    />
  </svg>
);

const ChartPieDark: React.FC<SvgProps> = ({
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
      d="M7.5 8.5h5.977A5.5 5.5 0 1 1 7.5 2.523z"
      fill="#43454A"
      stroke="#CED0D6"
    />
    <path
      d="M9.5 1.523A5.5 5.5 0 0 1 14.477 6.5H9.5z"
      fill="#25324D"
      stroke="#548AF7"
    />
  </svg>
);

export const ChartPie: React.FC<ChartPieProps> = ({
  size = 'md',
  mode = 'light',
  className,
  'aria-label': ariaLabel,
  title,
  ...props
}) => {
  const SvgComponent = mode === 'light' ? ChartPieLight : ChartPieDark;

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
