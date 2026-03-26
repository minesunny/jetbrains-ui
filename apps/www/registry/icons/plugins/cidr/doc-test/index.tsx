import React from 'react';
import { cn } from '@/lib/utils';
import { type IconProps, type SvgProps, sizeMap } from '../../types';

export type DocTestProps = IconProps;

const DocTestLight: React.FC<SvgProps> = ({
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
      d="M5 13a1 1 0 0 0 1-1 2 2 0 0 1 2-2 1 1 0 0 0 0-2 2 2 0 0 1-2-2 1 1 0 0 0-2 0 2 2 0 0 1-2 2 1 1 0 0 0 0 2 2 2 0 0 1 2 2 1 1 0 0 0 1 1"
      fill="#5BC447"
    />
    <path
      d="M11 9a1 1 0 0 0 1-1 2 2 0 0 1 2-2 1 1 0 1 0 0-2 2 2 0 0 1-2-2 1 1 0 1 0-2 0 2 2 0 0 1-2 2 1 1 0 0 0 0 2 2 2 0 0 1 2 2 1 1 0 0 0 1 1"
      fill="#534BBA"
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
  </svg>
);

const DocTestDark: React.FC<SvgProps> = ({
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
      d="M5 13a1 1 0 0 0 1-1 2 2 0 0 1 2-2 1 1 0 0 0 0-2 2 2 0 0 1-2-2 1 1 0 0 0-2 0 2 2 0 0 1-2 2 1 1 0 0 0 0 2 2 2 0 0 1 2 2 1 1 0 0 0 1 1"
      fill="#5BC447"
    />
    <path
      d="M11 9a1 1 0 0 0 1-1 2 2 0 0 1 2-2 1 1 0 1 0 0-2 2 2 0 0 1-2-2 1 1 0 1 0-2 0 2 2 0 0 1-2 2 1 1 0 0 0 0 2 2 2 0 0 1 2 2 1 1 0 0 0 1 1"
      fill="#534BBA"
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
  </svg>
);

export const DocTest: React.FC<DocTestProps> = ({
  size = 'md',
  mode = 'light',
  className,
  'aria-label': ariaLabel,
  title,
  ...props
}) => {
  const SvgComponent = mode === 'light' ? DocTestLight : DocTestDark;

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
