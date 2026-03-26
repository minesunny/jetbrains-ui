import React from 'react';
import { cn } from '@/lib/utils';
import { type IconProps, type SvgProps, sizeMap } from '../../types';

export type ScalaSDKProps = IconProps;

const ScalaSDKLight: React.FC<SvgProps> = ({
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
      d="M1 3.867C1 2.836 1.731 2 2.633 2h3.489a1 1 0 0 1 .721.308L8.467 4H13a2 2 0 0 1 2 2v2.043l-4.65.464A1.5 1.5 0 0 0 9 10v4H2.633C1.731 14 1 13.164 1 12.133z"
      fill="#EBECF0"
    />
    <path
      d="m15.5 9.5-5 .5m5 2.25-5 .5m5 2.25-5 .5"
      stroke="#DB3B4B"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M6.122 3H2.633C2.405 3 2 3.258 2 3.867v8.266c0 .609.405.867.633.867H9v1H2.633C1.731 14 1 13.164 1 12.133V3.867C1 2.836 1.731 2 2.633 2h3.489a1 1 0 0 1 .721.308L8.467 4H13a2 2 0 0 1 2 2v2.043l-1 .1V6a1 1 0 0 0-1-1H8.04z"
      fill="#6C707E"
    />
  </svg>
);

const ScalaSDKDark: React.FC<SvgProps> = ({
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
      d="M1 3.867C1 2.836 1.731 2 2.633 2h3.489a1 1 0 0 1 .721.308L8.467 4H13a2 2 0 0 1 2 2v2.043l-4.65.464A1.5 1.5 0 0 0 9 10v4H2.633C1.731 14 1 13.164 1 12.133z"
      fill="#43454A"
    />
    <path
      d="m15.5 9.5-5 .5m5 2.25-5 .5m5 2.25-5 .5"
      stroke="#DB5C5C"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M6.122 3H2.633C2.405 3 2 3.258 2 3.867v8.266c0 .609.405.867.633.867H9v1H2.633C1.731 14 1 13.164 1 12.133V3.867C1 2.836 1.731 2 2.633 2h3.489a1 1 0 0 1 .721.308L8.467 4H13a2 2 0 0 1 2 2v2.043l-1 .1V6a1 1 0 0 0-1-1H8.04z"
      fill="#CED0D6"
    />
  </svg>
);

export const ScalaSDK: React.FC<ScalaSDKProps> = ({
  size = 'md',
  mode = 'light',
  className,
  'aria-label': ariaLabel,
  title,
  ...props
}) => {
  const SvgComponent = mode === 'light' ? ScalaSDKLight : ScalaSDKDark;

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
