import React from 'react';
import { cn } from '@/lib/utils';
import { type IconProps, type SvgProps, sizeMap } from '../../types';

export type UnfreezeProps = IconProps;

const UnfreezeLight: React.FC<SvgProps> = ({
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
      d="M8 14.5A4.5 4.5 0 0 1 3.5 10c0-1.83 1.162-3.966 2.407-5.709a27 27 0 0 1 1.687-2.116c.154-.175.293-.323.406-.446.113.123.252.271.406.446.461.522 1.074 1.259 1.687 2.116C11.338 6.034 12.5 8.171 12.5 10A4.5 4.5 0 0 1 8 14.5Z"
      fill="#F2FCF3"
      stroke="#208A3C"
    />
  </svg>
);

const UnfreezeDark: React.FC<SvgProps> = ({
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
    <g clipPath="url(#a)">
      <path
        d="M8 14.5A4.5 4.5 0 0 1 3.5 10c0-1.83 1.162-3.966 2.407-5.709a27 27 0 0 1 1.687-2.116c.154-.175.293-.323.406-.446.113.123.252.271.406.446.461.522 1.074 1.259 1.687 2.116C11.338 6.034 12.5 8.171 12.5 10A4.5 4.5 0 0 1 8 14.5Z"
        fill="#253627"
        stroke="#57965C"
      />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M0 0H16V16H0z" />
      </clipPath>
    </defs>
  </svg>
);

export const Unfreeze: React.FC<UnfreezeProps> = ({
  size = 'md',
  mode = 'light',
  className,
  'aria-label': ariaLabel,
  title,
  ...props
}) => {
  const SvgComponent = mode === 'light' ? UnfreezeLight : UnfreezeDark;

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
