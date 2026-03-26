import React from 'react';
import { cn } from '@/lib/utils';
import { type IconProps, type SvgProps, sizeMap } from '../../types';

export type HamlProps = IconProps;

const HamlLight: React.FC<SvgProps> = ({
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
      d="m11.804 2 2.12 2.121-.763.764a3.75 3.75 0 0 1-3.66 6.04V14H6.499V8.621L2 4.121l2.121-2.12 3.841 3.84 2.274-2.274.014-.067h.053zM9.5 9.896a2.752 2.752 0 0 0 2.948-4.298L9.5 8.546z"
      fill="#FFAF0F"
    />
  </svg>
);

const HamlDark: React.FC<SvgProps> = ({
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
      d="m11.804 2 2.12 2.121-.763.764a3.75 3.75 0 0 1-3.66 6.04V14H6.499V8.621L2 4.121l2.121-2.12 3.841 3.84 2.274-2.274.014-.067h.053zM9.5 9.896a2.752 2.752 0 0 0 2.948-4.298L9.5 8.546z"
      fill="#F2C55C"
    />
  </svg>
);

export const Haml: React.FC<HamlProps> = ({
  size = 'md',
  mode = 'light',
  className,
  'aria-label': ariaLabel,
  title,
  ...props
}) => {
  const SvgComponent = mode === 'light' ? HamlLight : HamlDark;

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
