import React from 'react';
import { cn } from '@/lib/utils';
import { type IconProps, type SvgProps, sizeMap } from '../../types';

export type FrameworkProps = IconProps;

const FrameworkLight: React.FC<SvgProps> = ({
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
      fillRule="evenodd"
      clipRule="evenodd"
      d="M3 13.01h10a1 1 0 0 0 1-1v-6a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1m0 1h10a2 2 0 0 0 2-2v-6a2 2 0 0 0-2-2H3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2M7 2.01a1 1 0 0 0-1 1v1H5v-1a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v1h-1v-1a1 1 0 0 0-1-1z"
      fill="#6C707E"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M14 8.01H2v-1h12zM6 8.51v-.5h1v.5a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-.5h1v.5a1.5 1.5 0 0 1-1.5 1.5h-1A1.5 1.5 0 0 1 6 8.51"
      fill="#6C707E"
    />
  </svg>
);

const FrameworkDark: React.FC<SvgProps> = ({
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
      fillRule="evenodd"
      clipRule="evenodd"
      d="M3 13.01h10a1 1 0 0 0 1-1v-6a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1m0 1h10a2 2 0 0 0 2-2v-6a2 2 0 0 0-2-2H3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2M7 2.01a1 1 0 0 0-1 1v1H5v-1a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v1h-1v-1a1 1 0 0 0-1-1z"
      fill="#CED0D6"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M14 8.01H2v-1h12zM6 8.51v-.5h1v.5a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-.5h1v.5a1.5 1.5 0 0 1-1.5 1.5h-1A1.5 1.5 0 0 1 6 8.51"
      fill="#CED0D6"
    />
  </svg>
);

export const Framework: React.FC<FrameworkProps> = ({
  size = 'md',
  mode = 'light',
  className,
  'aria-label': ariaLabel,
  title,
  ...props
}) => {
  const SvgComponent = mode === 'light' ? FrameworkLight : FrameworkDark;

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
