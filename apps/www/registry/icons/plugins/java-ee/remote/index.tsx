import React from 'react';
import { cn } from '@/lib/utils';
import { type IconProps, type SvgProps, sizeMap } from '../../types';

export type RemoteProps = IconProps;

const RemoteLight: React.FC<SvgProps> = ({
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
      d="M14.9 9.19q.099-.58.1-1.19a7 7 0 1 0-5 6.71V9h3.622c.437 0 .87.062 1.277.19"
      fill="#F2FCF3"
    />
    <path d="M10 4.5v1H8.5v5H10v1H6v-1h1.5v-5H6v-1z" fill="#208A3C" />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12 13v-2h1.537c.766 0 1.463.313 1.463.954S14.285 13 13.547 13zm2.36.828c.815-.238 1.64-.718 1.64-1.915S14.949 10 13.622 10H11v6h1v-2h1.328l1.445 2H16z"
      fill="#6C707E"
    />
    <path
      d="M10 13.659a6 6 0 1 1 3.915-4.65c.337.022.669.082.984.182Q15 8.61 15 8a7 7 0 1 0-5 6.71z"
      fill="#208A3C"
    />
  </svg>
);

const RemoteDark: React.FC<SvgProps> = ({
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
      d="M14.9 9.19q.099-.58.1-1.19a7 7 0 1 0-5 6.71V9h3.622c.437 0 .87.062 1.277.19"
      fill="#253627"
    />
    <path d="M10 4.5v1H8.5v5H10v1H6v-1h1.5v-5H6v-1z" fill="#57965C" />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12 13v-2h1.537c.766 0 1.463.313 1.463.954S14.285 13 13.547 13zm2.36.828c.815-.238 1.64-.718 1.64-1.915S14.949 10 13.622 10H11v6h1v-2h1.328l1.445 2H16z"
      fill="#CED0D6"
    />
    <path
      d="M10 13.659a6 6 0 1 1 3.915-4.65c.337.022.669.082.984.182Q15 8.61 15 8a7 7 0 1 0-5 6.71z"
      fill="#57965C"
    />
  </svg>
);

export const Remote: React.FC<RemoteProps> = ({
  size = 'md',
  mode = 'light',
  className,
  'aria-label': ariaLabel,
  title,
  ...props
}) => {
  const SvgComponent = mode === 'light' ? RemoteLight : RemoteDark;

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
