import React from 'react';
import { cn } from '@/lib/utils';
import { type IconProps, type SvgProps, sizeMap } from '../../types';

export type ModelClassProps = IconProps;

const ModelClassLight: React.FC<SvgProps> = ({
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
    <path d="M15 8a7 7 0 1 0-7 7v-5a2 2 0 0 1 2-2z" fill="#EDF3FF" />
    <path d="M8 14a6 6 0 1 1 6-6h1a7 7 0 1 0-7 7z" fill="#3574F0" />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M10 9a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1v-5a1 1 0 0 0-1-1zm0 2v-1h2v1zm0 1v3h2v-3zm3 3h2v-3h-2zm2-4v-1h-2v1z"
      fill="#6C707E"
    />
    <path
      d="M8 10.573C6.73 10.505 5.826 9.453 5.826 8c0-1.503.967-2.577 2.306-2.577.972 0 1.75.522 2.065 1.252h1.015C10.898 5.4 9.622 4.5 8.132 4.5 6.213 4.5 4.787 5.994 4.787 8c0 1.96 1.361 3.43 3.213 3.498z"
      fill="#3574F0"
    />
  </svg>
);

const ModelClassDark: React.FC<SvgProps> = ({
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
    <path d="M15 8a7 7 0 1 0-7 7v-5a2 2 0 0 1 2-2z" fill="#25324D" />
    <path d="M8 14a6 6 0 1 1 6-6h1a7 7 0 1 0-7 7z" fill="#548AF7" />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M10 9a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1v-5a1 1 0 0 0-1-1zm0 2v-1h2v1zm0 1v3h2v-3zm3 3h2v-3h-2zm2-4v-1h-2v1z"
      fill="#CED0D6"
    />
    <path
      d="M8 10.573C6.73 10.505 5.826 9.453 5.826 8c0-1.503.967-2.577 2.306-2.577.972 0 1.75.522 2.065 1.252h1.015C10.898 5.4 9.622 4.5 8.132 4.5 6.213 4.5 4.787 5.994 4.787 8c0 1.96 1.361 3.43 3.213 3.498z"
      fill="#548AF7"
    />
  </svg>
);

export const ModelClass: React.FC<ModelClassProps> = ({
  size = 'md',
  mode = 'light',
  className,
  'aria-label': ariaLabel,
  title,
  ...props
}) => {
  const SvgComponent = mode === 'light' ? ModelClassLight : ModelClassDark;

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
