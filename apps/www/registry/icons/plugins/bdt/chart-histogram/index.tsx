import React from 'react';
import { cn } from '@/lib/utils';
import { type IconProps, type SvgProps, sizeMap } from '../../types';

export type ChartHistogramProps = IconProps;

const ChartHistogramLight: React.FC<SvgProps> = ({
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
      fillRule="evenodd"
      clipRule="evenodd"
      d="M4 3a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v11H4zm3 0H5v10h2z"
      fill="#3574F0"
    />
    <path d="M5 3h2v10H5z" fill="#EDF3FF" />
    <path d="M8 6v7h2V6zM11 13V9h2v4zM4 13V8H2v5z" fill="#EBECF0" />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M13 14H2a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1h2v1H2v5h8V6H8V5h2a1 1 0 0 1 1 1v2h2a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1m-2-1V9h2v4z"
      fill="#6C707E"
    />
  </svg>
);

const ChartHistogramDark: React.FC<SvgProps> = ({
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
      fillRule="evenodd"
      clipRule="evenodd"
      d="M4 3a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v11H4zm3 0H5v10h2z"
      fill="#548AF7"
    />
    <path d="M5 3h2v10H5z" fill="#25324D" />
    <path d="M8 6v7h2V6zM11 13V9h2v4zM4 13V8H2v5z" fill="#43454A" />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M13 14H2a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1h2v1H2v5h8V6H8V5h2a1 1 0 0 1 1 1v2h2a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1m-2-1V9h2v4z"
      fill="#CED0D6"
    />
  </svg>
);

export const ChartHistogram: React.FC<ChartHistogramProps> = ({
  size = 'md',
  mode = 'light',
  className,
  'aria-label': ariaLabel,
  title,
  ...props
}) => {
  const SvgComponent =
    mode === 'light' ? ChartHistogramLight : ChartHistogramDark;

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
