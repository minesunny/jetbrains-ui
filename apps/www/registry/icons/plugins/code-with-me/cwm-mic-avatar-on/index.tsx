import React from 'react';
import { cn } from '@/lib/utils';
import { type IconProps, type SvgProps, sizeMap } from '../../types';

export type CwmMicAvatarOnProps = IconProps;

const CwmMicAvatarOnLight: React.FC<SvgProps> = ({
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
    viewBox="0 0 13 13"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    role={role}
    aria-label={ariaLabel}
    aria-hidden={ariaHidden}
  >
    {title && <title>{title}</title>}
    <circle cx="6.5" cy="6.5" r="6.5" fill="#F7F8FA" />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M5 3.5a1.5 1.5 0 1 1 3 0v3a1.5 1.5 0 1 1-3 0zm2 0v3a.5.5 0 0 1-1 0v-3a.5.5 0 0 1 1 0"
      fill="#6C707E"
    />
    <path
      d="M3.5 6a.5.5 0 0 1 .5.5 2.5 2.5 0 0 0 5 0 .5.5 0 0 1 1 0 3.5 3.5 0 0 1-3 3.465v.535a.5.5 0 0 1-1 0v-.535A3.5 3.5 0 0 1 3 6.5a.5.5 0 0 1 .5-.5"
      fill="#6C707E"
    />
    <path d="M7 6.5v-3a.5.5 0 0 0-1 0v3a.5.5 0 0 0 1 0" fill="#EBECF0" />
  </svg>
);

const CwmMicAvatarOnDark: React.FC<SvgProps> = ({
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
    viewBox="0 0 13 13"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    role={role}
    aria-label={ariaLabel}
    aria-hidden={ariaHidden}
  >
    {title && <title>{title}</title>}
    <circle cx="6.5" cy="6.5" r="6.5" fill="#2B2D30" />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M5 3.5a1.5 1.5 0 1 1 3 0v3a1.5 1.5 0 1 1-3 0zm2 0v3a.5.5 0 0 1-1 0v-3a.5.5 0 0 1 1 0"
      fill="#CED0D6"
    />
    <path
      d="M3.5 6a.5.5 0 0 1 .5.5 2.5 2.5 0 0 0 5 0 .5.5 0 0 1 1 0 3.5 3.5 0 0 1-3 3.465v.535a.5.5 0 0 1-1 0v-.535A3.5 3.5 0 0 1 3 6.5a.5.5 0 0 1 .5-.5"
      fill="#CED0D6"
    />
    <path d="M7 6.5v-3a.5.5 0 0 0-1 0v3a.5.5 0 0 0 1 0" fill="#43454A" />
  </svg>
);

export const CwmMicAvatarOn: React.FC<CwmMicAvatarOnProps> = ({
  size = 'md',
  mode = 'light',
  className,
  'aria-label': ariaLabel,
  title,
  ...props
}) => {
  const SvgComponent =
    mode === 'light' ? CwmMicAvatarOnLight : CwmMicAvatarOnDark;

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
