import React from 'react';
import { cn } from '@/lib/utils';
import { type IconProps, type SvgProps, sizeMap } from '../../types';

export type ApolloProps = IconProps;

const ApolloLight: React.FC<SvgProps> = ({
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
      d="M8 2a6 6 0 1 0 4.243 10.243.5.5 0 0 1 .707.707 7 7 0 1 1-1.261-10.9 1 1 0 1 1-.671.763A5.97 5.97 0 0 0 8 2"
      fill="#000"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M7.47 4.98h1.062L10.8 11H9.797l-.53-1.483H6.792l-.49 1.484H5.277zm1.523 3.75L8.09 6.223l-.095-.374-.095.374-.855 2.507z"
      fill="#000"
    />
  </svg>
);

const ApolloDark: React.FC<SvgProps> = ({
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
      d="M8 2a6 6 0 1 0 4.243 10.243.5.5 0 0 1 .707.707 7 7 0 1 1-1.261-10.9 1 1 0 1 1-.671.763A5.97 5.97 0 0 0 8 2"
      fill="#fff"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M7.47 4.98h1.062L10.8 11H9.797l-.53-1.483H6.792l-.49 1.484H5.277zm1.523 3.75L8.09 6.223l-.095-.374-.095.374-.855 2.507z"
      fill="#fff"
    />
  </svg>
);

export const Apollo: React.FC<ApolloProps> = ({
  size = 'md',
  mode = 'light',
  className,
  'aria-label': ariaLabel,
  title,
  ...props
}) => {
  const SvgComponent = mode === 'light' ? ApolloLight : ApolloDark;

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
