import React from 'react';
import { cn } from '@/lib/utils';
import { type IconProps, type SvgProps, sizeMap } from '../../types';

export type AssocColumnProps = IconProps;

const AssocColumnLight: React.FC<SvgProps> = ({
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
    <path d="M2 4a1 1 0 0 1 1-1h2v10H3a1 1 0 0 1-1-1z" fill="#EBECF0" />
    <path
      d="M11.562 10.148a.5.5 0 1 1-.707-.708l.677-.677a2.615 2.615 0 0 1 3.699.006 2.615 2.615 0 0 1 .006 3.699l-.677.677a.5.5 0 1 1-.708-.707l.678-.677a1.615 1.615 0 0 0-.006-2.285 1.615 1.615 0 0 0-2.285-.006zM10.148 10.855a.5.5 0 0 1 0 .707l-.678.677a1.615 1.615 0 0 0 .006 2.285 1.615 1.615 0 0 0 2.285.006l.677-.678a.5.5 0 0 1 .707.707l-.677.678a2.615 2.615 0 0 1-3.699-.006 2.615 2.615 0 0 1-.006-3.699l.677-.677a.5.5 0 0 1 .708 0"
      fill="#3574F0"
    />
    <path
      d="M13.854 10.854a.5.5 0 0 0-.708-.708l-3 3a.5.5 0 0 0 .708.708z"
      fill="#3574F0"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M1 4a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v3.384a3.6 3.6 0 0 0-1-.33V4a1 1 0 0 0-1-1H6v10h1.02c-.035.333-.024.67.034 1H3a2 2 0 0 1-2-2zm2-1h2v10H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1"
      fill="#6C707E"
    />
  </svg>
);

const AssocColumnDark: React.FC<SvgProps> = ({
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
    <g clipPath="url(#a)">
      <path d="M2 4a1 1 0 0 1 1-1h2v10H3a1 1 0 0 1-1-1z" fill="#43454A" />
      <path
        d="M11.562 10.148a.5.5 0 1 1-.707-.708l.677-.677a2.615 2.615 0 0 1 3.699.006 2.615 2.615 0 0 1 .006 3.699l-.677.677a.5.5 0 1 1-.708-.707l.678-.677a1.615 1.615 0 0 0-.006-2.285 1.615 1.615 0 0 0-2.285-.006zM10.148 10.855a.5.5 0 0 1 0 .707l-.678.677a1.615 1.615 0 0 0 .006 2.285 1.615 1.615 0 0 0 2.285.006l.677-.678a.5.5 0 0 1 .707.707l-.677.678a2.615 2.615 0 0 1-3.699-.006 2.615 2.615 0 0 1-.006-3.699l.677-.677a.5.5 0 0 1 .708 0"
        fill="#548AF7"
      />
      <path
        d="M13.854 10.854a.5.5 0 0 0-.708-.708l-3 3a.5.5 0 0 0 .708.708z"
        fill="#548AF7"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M1 4a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v3.384a3.6 3.6 0 0 0-1-.33V4a1 1 0 0 0-1-1H6v10h1.02c-.035.333-.024.67.034 1H3a2 2 0 0 1-2-2zm2-1h2v10H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1"
        fill="#CED0D6"
      />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M0 0H16V16H0z" />
      </clipPath>
    </defs>
  </svg>
);

export const AssocColumn: React.FC<AssocColumnProps> = ({
  size = 'md',
  mode = 'light',
  className,
  'aria-label': ariaLabel,
  title,
  ...props
}) => {
  const SvgComponent = mode === 'light' ? AssocColumnLight : AssocColumnDark;

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
