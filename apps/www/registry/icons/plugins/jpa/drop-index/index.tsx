import React from 'react';
import { cn } from '@/lib/utils';
import { type IconProps, type SvgProps, sizeMap } from '../../types';

export type DropIndexProps = IconProps;

const DropIndexLight: React.FC<SvgProps> = ({
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
      d="M10.146 10.146a.5.5 0 0 1 .708 0L13 12.293l2.146-2.147a.5.5 0 0 1 .708.708L13.707 13l2.147 2.146a.5.5 0 0 1-.708.708L13 13.707l-2.146 2.147a.5.5 0 0 1-.708-.708L12.293 13l-2.147-2.146a.5.5 0 0 1 0-.708"
      fill="#DB3B4B"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M7 8.969a4 4 0 1 1 1 0V14.5a.5.5 0 0 1-1 0V14H5.5a.5.5 0 0 1 0-1H7v-1H5.5a.5.5 0 0 1 0-1H7zM4.5 5a3 3 0 1 0 6 0 3 3 0 0 0-6 0"
      fill="#E66D17"
    />
  </svg>
);

const DropIndexDark: React.FC<SvgProps> = ({
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
      d="M10.146 10.146a.5.5 0 0 1 .708 0L13 12.293l2.146-2.147a.5.5 0 0 1 .708.708L13.707 13l2.147 2.146a.5.5 0 0 1-.708.708L13 13.707l-2.146 2.147a.5.5 0 0 1-.708-.708L12.293 13l-2.147-2.146a.5.5 0 0 1 0-.708"
      fill="#DB5C5C"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M7 8.969a4 4 0 1 1 1 0V14.5a.5.5 0 0 1-1 0V14H5.5a.5.5 0 0 1 0-1H7v-1H5.5a.5.5 0 0 1 0-1H7zM4.5 5a3 3 0 1 0 6 0 3 3 0 0 0-6 0"
      fill="#F2C55C"
    />
  </svg>
);

export const DropIndex: React.FC<DropIndexProps> = ({
  size = 'md',
  mode = 'light',
  className,
  'aria-label': ariaLabel,
  title,
  ...props
}) => {
  const SvgComponent = mode === 'light' ? DropIndexLight : DropIndexDark;

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
