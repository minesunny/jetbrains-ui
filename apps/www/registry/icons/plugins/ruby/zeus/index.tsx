import React from 'react';
import { cn } from '@/lib/utils';
import { type IconProps, type SvgProps, sizeMap } from '../../types';

export type ZeusProps = IconProps;

const ZeusLight: React.FC<SvgProps> = ({
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
    <path d="M6 4H4v1h2z" fill="#6C707E" />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M2 6V3a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1m1-3v3h10V3z"
      fill="#6C707E"
    />
    <path d="M6 11H4v1h2z" fill="#6C707E" />
    <path
      d="M2 13v-3a1 1 0 0 1 1-1h8.92l-.8 1H3v3h5.72l-.8 1H3a1 1 0 0 1-1-1"
      fill="#6C707E"
    />
    <path d="m10 13 4-5-.5 3H16l-4 5 .5-3z" fill="#E66D17" />
  </svg>
);

const ZeusDark: React.FC<SvgProps> = ({
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
    <path d="M6 4H4v1h2z" fill="#CED0D6" />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M2 6V3a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1m1-3v3h10V3z"
      fill="#CED0D6"
    />
    <path d="M6 11H4v1h2z" fill="#CED0D6" />
    <path
      d="M2 13v-3a1 1 0 0 1 1-1h8.92l-.8 1H3v3h5.72l-.8 1H3a1 1 0 0 1-1-1"
      fill="#CED0D6"
    />
    <path d="m10 13 4-5-.5 3H16l-4 5 .5-3z" fill="#F2C55C" />
  </svg>
);

export const Zeus: React.FC<ZeusProps> = ({
  size = 'md',
  mode = 'light',
  className,
  'aria-label': ariaLabel,
  title,
  ...props
}) => {
  const SvgComponent = mode === 'light' ? ZeusLight : ZeusDark;

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
