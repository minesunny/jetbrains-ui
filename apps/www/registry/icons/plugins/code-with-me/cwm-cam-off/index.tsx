import React from 'react';
import { cn } from '@/lib/utils';
import { type IconProps, type SvgProps, sizeMap } from '../../types';

export type CwmCamOffProps = IconProps;

const CwmCamOffLight: React.FC<SvgProps> = ({
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
      d="M11.414 11.414 4 4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h6c.552 0 1.052-.224 1.414-.586M13.4 10.8A1 1 0 0 0 15 10V6a1 1 0 0 0-1.6-.8L12 6.25V6a2 2 0 0 0-2-2H6.121l5.365 5.364z"
      fill="#FFF7F7"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M2.854 2.146a.5.5 0 1 0-.708.708l1.242 1.241A2 2 0 0 0 2 6v4a2 2 0 0 0 2 2h6c.37 0 .718-.101 1.016-.277l2.13 2.13a.5.5 0 0 0 .708-.707zm7.405 8.82L4.293 5H4a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h6a1 1 0 0 0 .259-.034M15 10a1 1 0 0 1-1.6.8l-1.914-1.436L11 8.88V6a1 1 0 0 0-1-1H7.121l-1-1H10a2 2 0 0 1 2 2v.25l1.4-1.05A1 1 0 0 1 15 6zm-1 0-2-1.5v-1L14 6z"
      fill="#DB3B4B"
    />
  </svg>
);

const CwmCamOffDark: React.FC<SvgProps> = ({
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
      d="M11.414 11.414 4 4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h6c.552 0 1.052-.224 1.414-.586M13.4 10.8A1 1 0 0 0 15 10V6a1 1 0 0 0-1.6-.8L12 6.25V6a2 2 0 0 0-2-2H6.121l5.365 5.364z"
      fill="#402929"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M2.854 2.146a.5.5 0 1 0-.708.708l1.242 1.241A2 2 0 0 0 2 6v4a2 2 0 0 0 2 2h6c.37 0 .718-.101 1.016-.277l2.13 2.13a.5.5 0 0 0 .708-.707zm7.405 8.82L4.293 5H4a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h6a1 1 0 0 0 .259-.034M15 10a1 1 0 0 1-1.6.8l-1.914-1.436L11 8.88V6a1 1 0 0 0-1-1H7.121l-1-1H10a2 2 0 0 1 2 2v.25l1.4-1.05A1 1 0 0 1 15 6zm-1 0-2-1.5v-1L14 6z"
      fill="#DB5C5C"
    />
  </svg>
);

export const CwmCamOff: React.FC<CwmCamOffProps> = ({
  size = 'md',
  mode = 'light',
  className,
  'aria-label': ariaLabel,
  title,
  ...props
}) => {
  const SvgComponent = mode === 'light' ? CwmCamOffLight : CwmCamOffDark;

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
