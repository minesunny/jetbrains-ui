import React from 'react';
import { cn } from '@/lib/utils';
import { type IconProps, type SvgProps, sizeMap } from '../../types';

export type InheritedAttributeOverlayProps = IconProps;

const InheritedAttributeOverlayLight: React.FC<SvgProps> = ({
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
      d="M3.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 1 1-.708.708L4 1.707V7.5a.5.5 0 0 1-1 0V1.707L.854 3.854a.5.5 0 1 1-.708-.708z"
      fill="#DB3B4B"
    />
  </svg>
);

const InheritedAttributeOverlayDark: React.FC<SvgProps> = ({
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
      d="M3.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 1 1-.708.708L4 1.707V7.5a.5.5 0 0 1-1 0V1.707L.854 3.854a.5.5 0 1 1-.708-.708z"
      fill="#DB5C5C"
    />
  </svg>
);

export const InheritedAttributeOverlay: React.FC<
  InheritedAttributeOverlayProps
> = ({
  size = 'md',
  mode = 'light',
  className,
  'aria-label': ariaLabel,
  title,
  ...props
}) => {
  const SvgComponent =
    mode === 'light'
      ? InheritedAttributeOverlayLight
      : InheritedAttributeOverlayDark;

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
