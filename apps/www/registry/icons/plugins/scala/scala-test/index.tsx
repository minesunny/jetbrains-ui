import React from 'react';
import { cn } from '@/lib/utils';
import { type IconProps, type SvgProps, sizeMap } from '../../types';

export type ScalaTestProps = IconProps;

const ScalaTestLight: React.FC<SvgProps> = ({
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
      fill="#FFF7F7"
    />
    <path
      d="M9 13.917Q8.511 14 8 14a6 6 0 1 1 5.998-5.857l1.002-.1V8a7 7 0 1 0-6 6.93z"
      fill="#DB3B4B"
    />
  </svg>
);

const ScalaTestDark: React.FC<SvgProps> = ({
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
      fill="#402929"
    />
    <path
      d="M9 13.917Q8.511 14 8 14a6 6 0 1 1 5.998-5.857l1.002-.1V8a7 7 0 1 0-6 6.93z"
      fill="#DB5C5C"
    />
  </svg>
);

export const ScalaTest: React.FC<ScalaTestProps> = ({
  size = 'md',
  mode = 'light',
  className,
  'aria-label': ariaLabel,
  title,
  ...props
}) => {
  const SvgComponent = mode === 'light' ? ScalaTestLight : ScalaTestDark;

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
