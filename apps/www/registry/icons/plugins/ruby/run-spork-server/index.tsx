import React from 'react';
import { cn } from '@/lib/utils';
import { type IconProps, type SvgProps, sizeMap } from '../../types';

export type RunSporkServerProps = IconProps;

const RunSporkServerLight: React.FC<SvgProps> = ({
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
    <path d="M4 4h2v1H4z" fill="#6C707E" />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M2 3v3a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1m1 3V3h10v3z"
      fill="#6C707E"
    />
    <path
      d="M8 9H3a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h5v-1H3v-3h5z"
      fill="#6C707E"
    />
    <path d="M4 11h2v1H4z" fill="#6C707E" />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M16 12c0 2.21-1.567 4-3.5 4S9 14.21 9 12V9.5a.5.5 0 0 1 1 0V11h1V8.5a.5.5 0 0 1 1 0V11h1V8.5a.5.5 0 0 1 1 0V11h1V9.5a.5.5 0 0 1 1 0zm-3.5 3c1.38 0 2.5-1.343 2.5-3h-5c0 1.657 1.12 3 2.5 3"
      fill="#DB3B4B"
    />
    <path d="M15 12c0 1.657-1.12 3-2.5 3S10 13.657 10 12z" fill="#FFF7F7" />
  </svg>
);

const RunSporkServerDark: React.FC<SvgProps> = ({
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
    <path d="M4 4h2v1H4z" fill="#CED0D6" />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M2 3v3a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1m1 3V3h10v3z"
      fill="#CED0D6"
    />
    <path
      d="M8 9H3a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h5v-1H3v-3h5z"
      fill="#CED0D6"
    />
    <path d="M4 11h2v1H4z" fill="#CED0D6" />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M16 12c0 2.21-1.567 4-3.5 4S9 14.21 9 12V9.5a.5.5 0 0 1 1 0V11h1V8.5a.5.5 0 0 1 1 0V11h1V8.5a.5.5 0 0 1 1 0V11h1V9.5a.5.5 0 0 1 1 0zm-3.5 3c1.38 0 2.5-1.343 2.5-3h-5c0 1.657 1.12 3 2.5 3"
      fill="#DB5C5C"
    />
    <path d="M15 12c0 1.657-1.12 3-2.5 3S10 13.657 10 12z" fill="#402929" />
  </svg>
);

export const RunSporkServer: React.FC<RunSporkServerProps> = ({
  size = 'md',
  mode = 'light',
  className,
  'aria-label': ariaLabel,
  title,
  ...props
}) => {
  const SvgComponent =
    mode === 'light' ? RunSporkServerLight : RunSporkServerDark;

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
