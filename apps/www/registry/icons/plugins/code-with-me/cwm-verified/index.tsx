import React from 'react';
import { cn } from '@/lib/utils';
import { type IconProps, type SvgProps, sizeMap } from '../../types';

export type CwmVerifiedProps = IconProps;

const CwmVerifiedLight: React.FC<SvgProps> = ({
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
    viewBox="0 0 14 14"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    role={role}
    aria-label={ariaLabel}
    aria-hidden={ariaHidden}
  >
    {title && <title>{title}</title>}
    <path
      d="M6.293 1.414a1 1 0 0 1 1.414 0l.5.5a2 2 0 0 0 1.414.586h.879a1 1 0 0 1 1 1v.879a2 2 0 0 0 .586 1.414l.611.611a1 1 0 0 1 .074 1.332l-.833 1.04a2 2 0 0 0-.438 1.25v.474a1 1 0 0 1-1 1h-.879a2 2 0 0 0-1.414.586l-.5.5a1 1 0 0 1-1.414 0l-.5-.5a2 2 0 0 0-1.414-.586H3.5a1 1 0 0 1-1-1v-.474a2 2 0 0 0-.438-1.249l-.833-1.04a1 1 0 0 1 .074-1.333l.611-.611A2 2 0 0 0 2.5 4.379V3.5a1 1 0 0 1 1-1h.879c.53 0 1.039-.211 1.414-.586z"
      fill="#F2FCF3"
      stroke="#208A3C"
    />
    <path
      d="m9.5 5.5-3 3L5 7"
      stroke="#208A3C"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const CwmVerifiedDark: React.FC<SvgProps> = ({
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
    viewBox="0 0 14 14"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    role={role}
    aria-label={ariaLabel}
    aria-hidden={ariaHidden}
  >
    {title && <title>{title}</title>}
    <path
      d="M6.293 1.414a1 1 0 0 1 1.414 0l.5.5a2 2 0 0 0 1.414.586h.879a1 1 0 0 1 1 1v.879a2 2 0 0 0 .586 1.414l.611.611a1 1 0 0 1 .074 1.332l-.833 1.04a2 2 0 0 0-.438 1.25v.474a1 1 0 0 1-1 1h-.879a2 2 0 0 0-1.414.586l-.5.5a1 1 0 0 1-1.414 0l-.5-.5a2 2 0 0 0-1.414-.586H3.5a1 1 0 0 1-1-1v-.474a2 2 0 0 0-.438-1.249l-.833-1.04a1 1 0 0 1 .074-1.333l.611-.611A2 2 0 0 0 2.5 4.379V3.5a1 1 0 0 1 1-1h.879c.53 0 1.039-.211 1.414-.586z"
      fill="#253627"
      stroke="#57965C"
    />
    <path
      d="m9.5 5.5-3 3L5 7"
      stroke="#57965C"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const CwmVerified: React.FC<CwmVerifiedProps> = ({
  size = 'md',
  mode = 'light',
  className,
  'aria-label': ariaLabel,
  title,
  ...props
}) => {
  const SvgComponent = mode === 'light' ? CwmVerifiedLight : CwmVerifiedDark;

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
