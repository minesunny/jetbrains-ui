import React from 'react';
import { cn } from '@/lib/utils';
import { type IconProps, type SvgProps, sizeMap } from '../../types';

export type ObjectCompanionProps = IconProps;

const ObjectCompanionLight: React.FC<SvgProps> = ({
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
        fill="#FFF4EB"
        stroke="#E66D17"
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

const ObjectCompanionDark: React.FC<SvgProps> = ({
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
        fill="#45322B"
        stroke="#C77D55"
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

export const ObjectCompanion: React.FC<ObjectCompanionProps> = ({
  size = 'md',
  mode = 'light',
  className,
  'aria-label': ariaLabel,
  title,
  ...props
}) => {
  const SvgComponent =
    mode === 'light' ? ObjectCompanionLight : ObjectCompanionDark;

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
