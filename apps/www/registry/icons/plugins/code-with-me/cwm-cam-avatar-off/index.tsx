import React from 'react';
import { cn } from '@/lib/utils';
import { type IconProps, type SvgProps, sizeMap } from '../../types';

export type CwmCamAvatarOffProps = IconProps;

const CwmCamAvatarOffLight: React.FC<SvgProps> = ({
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
      d="M3.854 3.146a.5.5 0 1 0-.708.708l.309.308A1 1 0 0 0 3 5v3a1 1 0 0 0 1 1h3a1 1 0 0 0 .838-.455l1.308 1.309a.5.5 0 0 0 .708-.708l-3-3zM7 7.707 4.293 5H4v3h3z"
      fill="#DB3B4B"
    />
    <path
      d="M10 4.81v3.069l-1-1v-1.26l-.84.42L6.12 4H7a1 1 0 0 1 1 1l1.276-.638a.5.5 0 0 1 .724.447"
      fill="#DB3B4B"
    />
  </svg>
);

const CwmCamAvatarOffDark: React.FC<SvgProps> = ({
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
      d="M3.854 3.146a.5.5 0 1 0-.708.708l.309.308A1 1 0 0 0 3 5v3a1 1 0 0 0 1 1h3a1 1 0 0 0 .838-.455l1.308 1.309a.5.5 0 0 0 .708-.708l-3-3zM7 7.707 4.293 5H4v3h3z"
      fill="#DB5C5C"
    />
    <path
      d="M10 4.81v3.069l-1-1v-1.26l-.84.42L6.12 4H7a1 1 0 0 1 1 1l1.276-.638a.5.5 0 0 1 .724.447"
      fill="#DB5C5C"
    />
  </svg>
);

export const CwmCamAvatarOff: React.FC<CwmCamAvatarOffProps> = ({
  size = 'md',
  mode = 'light',
  className,
  'aria-label': ariaLabel,
  title,
  ...props
}) => {
  const SvgComponent =
    mode === 'light' ? CwmCamAvatarOffLight : CwmCamAvatarOffDark;

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
