import React from 'react';
import { cn } from '@/lib/utils';
import { type IconProps, type SvgProps, sizeMap } from '../../types';

export type GoogleTestProps = IconProps;

const GoogleTestLight: React.FC<SvgProps> = ({
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
      d="M4.694 6.885c.476-1.414 1.836-2.43 3.446-2.43a3.6 3.6 0 0 1 2.26.79L12.186 3.5A6.2 6.2 0 0 0 8.14 2C5.714 2 3.628 3.357 2.629 5.342z"
      fill="#EA4335"
    />
    <path
      d="m2.629 10.66 2.065-1.544a3.5 3.5 0 0 1 0-2.231L2.629 5.342A5.9 5.9 0 0 0 2 8c0 .957.226 1.859.629 2.66"
      fill="#FBBC05"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M15.38 12.712a.4.4 0 0 1 0 .576l-2.703 2.6a.4.4 0 0 1-.677-.289v-5.195a.4.4 0 0 1 .677-.289z"
      fill="#55A76A"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M7.623 13.288a.4.4 0 0 1 0-.576l2.699-2.596a.4.4 0 0 1 .677.289v5.194a.4.4 0 0 1-.678.288z"
      fill="#E55765"
    />
    <path
      d="M8.14 7.143h5.722q.022.094.042.172c.06.242.097.394.097.685 0 .642-.079 1.237-.224 1.784l-.406-.39-.036-.032c-.56-.505-1.335-.446-1.836-.032a1.4 1.4 0 0 0-1.661-.102H8.14z"
      fill="#4285F4"
    />
    <path
      d="m7.457 11.484-.527.507a1.4 1.4 0 0 0-.136 1.867 6.1 6.1 0 0 1-4.167-3.2L4.69 9.11a3.6 3.6 0 0 0 2.766 2.373"
      fill="#34A853"
    />
  </svg>
);

const GoogleTestDark: React.FC<SvgProps> = ({
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
      d="M4.694 6.885c.476-1.414 1.836-2.43 3.446-2.43a3.6 3.6 0 0 1 2.26.79L12.186 3.5A6.2 6.2 0 0 0 8.14 2C5.714 2 3.628 3.357 2.629 5.342z"
      fill="#EA4335"
    />
    <path
      d="m2.629 10.66 2.065-1.544a3.5 3.5 0 0 1 0-2.231L2.629 5.342A5.9 5.9 0 0 0 2 8c0 .957.226 1.859.629 2.66"
      fill="#FBBC05"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M15.38 12.712a.4.4 0 0 1 0 .576l-2.703 2.6a.4.4 0 0 1-.677-.289v-5.195a.4.4 0 0 1 .677-.289z"
      fill="#57965C"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M7.623 13.288a.4.4 0 0 1 0-.576l2.699-2.596a.4.4 0 0 1 .677.289v5.194a.4.4 0 0 1-.678.288z"
      fill="#DB5C5C"
    />
    <path
      d="M8.14 7.143h5.722q.022.094.042.172c.06.242.097.394.097.685 0 .642-.079 1.237-.224 1.784l-.406-.39-.036-.032c-.56-.505-1.335-.446-1.836-.032a1.4 1.4 0 0 0-1.661-.102H8.14z"
      fill="#4285F4"
    />
    <path
      d="m7.457 11.484-.527.507a1.4 1.4 0 0 0-.136 1.867 6.1 6.1 0 0 1-4.167-3.2L4.69 9.11a3.6 3.6 0 0 0 2.766 2.373"
      fill="#34A853"
    />
  </svg>
);

export const GoogleTest: React.FC<GoogleTestProps> = ({
  size = 'md',
  mode = 'light',
  className,
  'aria-label': ariaLabel,
  title,
  ...props
}) => {
  const SvgComponent = mode === 'light' ? GoogleTestLight : GoogleTestDark;

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
