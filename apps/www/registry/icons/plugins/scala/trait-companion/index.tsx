import React from 'react';
import { cn } from '@/lib/utils';
import { type IconProps, type SvgProps, sizeMap } from '../../types';

export type TraitCompanionProps = IconProps;

const TraitCompanionLight: React.FC<SvgProps> = ({
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
        d="M7 .5a6.5 6.5 0 0 1 6.48 6H.52A6.5 6.5 0 0 1 7 .5Z"
        fill="#F2FCF3"
        stroke="#208A3C"
      />
      <path
        d="M4.5 10.5 7 13l2.5-2.5"
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

const TraitCompanionDark: React.FC<SvgProps> = ({
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
        d="M7 .5a6.5 6.5 0 0 1 6.48 6H.52A6.5 6.5 0 0 1 7 .5Z"
        fill="#253627"
        stroke="#57965C"
      />
      <path
        d="M4.5 10.5 7 13l2.5-2.5"
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

export const TraitCompanion: React.FC<TraitCompanionProps> = ({
  size = 'md',
  mode = 'light',
  className,
  'aria-label': ariaLabel,
  title,
  ...props
}) => {
  const SvgComponent =
    mode === 'light' ? TraitCompanionLight : TraitCompanionDark;

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
