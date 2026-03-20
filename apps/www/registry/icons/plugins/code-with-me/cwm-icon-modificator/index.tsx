import React from 'react';
import { cn } from '@/lib/utils';
import { type IconProps, type SvgProps, sizeMap } from '../../types';

export type CwmIconModificatorProps = IconProps;

const CwmIconModificatorLight: React.FC<SvgProps> = ({
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
    viewBox="0 0 17 17"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    role={role}
    aria-label={ariaLabel}
    aria-hidden={ariaHidden}
  >
    {title && <title>{title}</title>}
    <path
      d="M4.5 8.5a4 4 0 0 1 3.873 3H11.5a1 1 0 1 1 0 2v1a1 1 0 1 1-2 0v-1H8.373a4 4 0 1 1-3.873-5Zm0 2a2 2 0 1 0 0 4 2 2 0 0 0 0-4Z"
      fill="#6C707E"
      stroke="#fff"
      strokeLinecap="round"
    />
  </svg>
);

const CwmIconModificatorDark: React.FC<SvgProps> = ({
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
    viewBox="0 0 17 17"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    role={role}
    aria-label={ariaLabel}
    aria-hidden={ariaHidden}
  >
    {title && <title>{title}</title>}
    <path
      d="M4.5 8.5a4 4 0 0 1 3.873 3H11.5a1 1 0 1 1 0 2v1a1 1 0 1 1-2 0v-1H8.373a4 4 0 1 1-3.873-5Zm0 2a2 2 0 1 0 0 4 2 2 0 0 0 0-4Z"
      fill="#CED0D6"
      stroke="#27282E"
      strokeLinecap="round"
    />
  </svg>
);

export const CwmIconModificator: React.FC<CwmIconModificatorProps> = ({
  size = 'md',
  mode = 'light',
  className,
  'aria-label': ariaLabel,
  title,
  ...props
}) => {
  const SvgComponent =
    mode === 'light' ? CwmIconModificatorLight : CwmIconModificatorDark;

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
