import React from 'react';
import { cn } from '@/lib/utils';
import { type IconProps, type SvgProps, sizeMap } from '../../types';

export type AndroidProps = IconProps;

const AndroidLight: React.FC<SvgProps> = ({
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
      d="M2.934 1.252a.5.5 0 0 0-.868.496l1.08 1.892A8 8 0 0 0 .224 8.118 8 8 0 0 0 0 10h16c0-.69-.088-1.36-.252-2a8 8 0 0 0-2.895-4.36l1.081-1.892a.5.5 0 0 0-.868-.496l-1.046 1.83A7.96 7.96 0 0 0 8 2a7.96 7.96 0 0 0-4.02 1.082zM11 8a1 1 0 1 0 0-2 1 1 0 0 0 0 2M5 8a1 1 0 1 0 0-2 1 1 0 0 0 0 2"
      fill="#55A76A"
    />
  </svg>
);

const AndroidDark: React.FC<SvgProps> = ({
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
      d="M2.934 1.252a.5.5 0 0 0-.868.496l1.08 1.892A8 8 0 0 0 .224 8.118 8 8 0 0 0 0 10h16c0-.69-.088-1.36-.252-2a8 8 0 0 0-2.895-4.36l1.081-1.892a.5.5 0 0 0-.868-.496l-1.046 1.83A7.96 7.96 0 0 0 8 2a7.96 7.96 0 0 0-4.02 1.082zM11 8a1 1 0 1 0 0-2 1 1 0 0 0 0 2M5 8a1 1 0 1 0 0-2 1 1 0 0 0 0 2"
      fill="#57965C"
    />
  </svg>
);

export const Android: React.FC<AndroidProps> = ({
  size = 'md',
  mode = 'light',
  className,
  'aria-label': ariaLabel,
  title,
  ...props
}) => {
  const SvgComponent = mode === 'light' ? AndroidLight : AndroidDark;

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
