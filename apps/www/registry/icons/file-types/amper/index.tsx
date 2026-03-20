import type { FC } from 'react';
import { cn } from '@/lib/utils';
import { type IconProps, type SvgProps, sizeMap } from '../types';

export type AmperProps = IconProps;

const AmperLight: FC<SvgProps> = ({
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
    {title ? <title>{title}</title> : null}
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M2 14h12V2h-3zm5-3h4V7h-1z"
      fill="url(#a)"
    />
    <defs>
      <linearGradient
        id="a"
        x1="4.748"
        y1="4.751"
        x2="14.516"
        y2="14.514"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset=".212" stopColor="#3BEA62" />
        <stop offset=".753" stopColor="#087CFA" />
      </linearGradient>
    </defs>
  </svg>
);

const AmperDark: FC<SvgProps> = ({
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
    {title ? <title>{title}</title> : null}
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M2 14h12V2h-3zm5-3h4V7h-1z"
      fill="url(#a)"
    />
    <defs>
      <linearGradient
        id="a"
        x1="4.748"
        y1="4.751"
        x2="14.516"
        y2="14.514"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset=".212" stopColor="#3BEA62" />
        <stop offset=".753" stopColor="#087CFA" />
      </linearGradient>
    </defs>
  </svg>
);

export const Amper: FC<AmperProps> = ({
  size = 'md',
  mode = 'light',
  className,
  'aria-label': ariaLabel,
  title,
  ...props
}) => {
  const SvgComponent = mode === 'light' ? AmperLight : AmperDark;

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
