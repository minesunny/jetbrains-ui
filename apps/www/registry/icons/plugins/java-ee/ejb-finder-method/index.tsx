import React from 'react';
import { cn } from '@/lib/utils';
import { type IconProps, type SvgProps, sizeMap } from '../../types';

export type EjbFinderMethodProps = IconProps;

const EjbFinderMethodLight: React.FC<SvgProps> = ({
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
    <circle cx="12" cy="12" r="2" fill="#EBECF0" />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M13.738 14.445a3 3 0 1 1 .707-.707l1.409 1.408a.5.5 0 0 1-.708.708zM14 12a2 2 0 1 1-4 0 2 2 0 0 1 4 0"
      fill="#6C707E"
    />
    <path
      d="M14.891 9.236Q15 8.634 15 8a7 7 0 1 0-5.764 6.891 4 4 0 1 1 5.655-5.655"
      fill="#FFF7F7"
    />
    <path
      d="M8.522 13.978a6 6 0 1 1 5.455-5.455c.34.192.647.433.914.713Q15 8.634 15 8a7 7 0 1 0-5.764 6.891 4 4 0 0 1-.714-.913"
      fill="#DB3B4B"
    />
  </svg>
);

const EjbFinderMethodDark: React.FC<SvgProps> = ({
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
    <circle cx="12" cy="12" r="2" fill="#43454A" />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M13.738 14.445a3 3 0 1 1 .707-.707l1.409 1.408a.5.5 0 0 1-.708.708zM14 12a2 2 0 1 1-4 0 2 2 0 0 1 4 0"
      fill="#CED0D6"
    />
    <path
      d="M14.891 9.236Q15 8.634 15 8a7 7 0 1 0-5.764 6.891 4 4 0 1 1 5.655-5.655"
      fill="#402929"
    />
    <path
      d="M8.522 13.978a6 6 0 1 1 5.455-5.455c.34.192.647.433.914.713Q15 8.634 15 8a7 7 0 1 0-5.764 6.891 4 4 0 0 1-.714-.913"
      fill="#DB5C5C"
    />
  </svg>
);

export const EjbFinderMethod: React.FC<EjbFinderMethodProps> = ({
  size = 'md',
  mode = 'light',
  className,
  'aria-label': ariaLabel,
  title,
  ...props
}) => {
  const SvgComponent =
    mode === 'light' ? EjbFinderMethodLight : EjbFinderMethodDark;

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
