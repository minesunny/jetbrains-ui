import React from 'react';
import { cn } from '@/lib/utils';
import { type IconProps, type SvgProps, sizeMap } from '../../types';

export type TraitCompanionSwappedProps = IconProps;

const TraitCompanionSwappedLight: React.FC<SvgProps> = ({
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
    <g clipPath="url(#a)">
      <path
        d="M7 13.5a6.5 6.5 0 0 1-6.48-6h12.96a6.5 6.5 0 0 1-6.48 6Z"
        fill="#F2FCF3"
        stroke="#208A3C"
      />
      <path
        d="M9.5 3.5 7 1 4.5 3.5"
        stroke="#6C707E"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M0 0H14V14H0z" />
      </clipPath>
    </defs>
  </svg>
);

const TraitCompanionSwappedDark: React.FC<SvgProps> = ({
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
    <g clipPath="url(#a)">
      <path
        d="M7 13.5a6.5 6.5 0 0 1-6.48-6h12.96a6.5 6.5 0 0 1-6.48 6Z"
        fill="#253627"
        stroke="#57965C"
      />
      <path
        d="M9.5 3.5 7 1 4.5 3.5"
        stroke="#CED0D6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M0 0H14V14H0z" />
      </clipPath>
    </defs>
  </svg>
);

export const TraitCompanionSwapped: React.FC<TraitCompanionSwappedProps> = ({
  size = 'md',
  mode = 'light',
  className,
  'aria-label': ariaLabel,
  title,
  ...props
}) => {
  const SvgComponent =
    mode === 'light' ? TraitCompanionSwappedLight : TraitCompanionSwappedDark;

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
