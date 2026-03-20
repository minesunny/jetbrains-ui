import React from 'react';
import { cn } from '@/lib/utils';
import { type IconProps, type SvgProps, sizeMap } from '../../types';

export type EnumScalaProps = IconProps;

const EnumScalaLight: React.FC<SvgProps> = ({
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
      d="m15.5 9.5-5 .5m5 2.25-5 .5m5 2.25-5 .5"
      stroke="#DB3B4B"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M15 8v.043l-4.65.464A1.5 1.5 0 0 0 9 10v4.93Q8.51 15 8 15a7 7 0 1 1 7-7"
      fill="#FAF5FF"
    />
    <path
      d="M9 11.5H5.49v-7h4.92v.915H6.48v2.1h3.59v.92H6.48v2.15H9z"
      fill="#834DF0"
    />
    <path
      d="M9 13.917Q8.511 14 8 14a6 6 0 1 1 5.998-5.857l1.002-.1V8a7 7 0 1 0-6 6.93z"
      fill="#834DF0"
    />
  </svg>
);

const EnumScalaDark: React.FC<SvgProps> = ({
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
      d="m15.5 9.5-5 .5m5 2.25-5 .5m5 2.25-5 .5"
      stroke="#DB5C5C"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M15 8v.043l-4.65.464A1.5 1.5 0 0 0 9 10v4.93Q8.51 15 8 15a7 7 0 1 1 7-7"
      fill="#2F2936"
    />
    <path
      d="M9 11.5H5.49v-7h4.92v.915H6.48v2.1h3.59v.92H6.48v2.15H9z"
      fill="#A571E6"
    />
    <path
      d="M9 13.917Q8.511 14 8 14a6 6 0 1 1 5.998-5.857l1.002-.1V8a7 7 0 1 0-6 6.93z"
      fill="#A571E6"
    />
  </svg>
);

export const EnumScala: React.FC<EnumScalaProps> = ({
  size = 'md',
  mode = 'light',
  className,
  'aria-label': ariaLabel,
  title,
  ...props
}) => {
  const SvgComponent = mode === 'light' ? EnumScalaLight : EnumScalaDark;

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
