import React from 'react';
import { cn } from '@/lib/utils';
import { type IconProps, type SvgProps, sizeMap } from '../../types';

export type KustomizeProps = IconProps;

const KustomizeLight: React.FC<SvgProps> = ({
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
      d="M4 4.5h6A1.5 1.5 0 0 1 11.5 6v6a1.5 1.5 0 0 1-1.5 1.5H4A1.5 1.5 0 0 1 2.5 12V6A1.5 1.5 0 0 1 4 4.5Z"
      fill="#EDF3FF"
      stroke="#3574F0"
    />
    <path
      d="M5 5.98h1v2.74l2.53-2.74h1.252l-2.67 2.903L9.837 12h-1.29L6 9.119V12H5z"
      fill="#3574F0"
    />
    <path
      d="M5.5 2.5H12A1.5 1.5 0 0 1 13.5 4v6.5"
      stroke="#3574F0"
      strokeLinecap="round"
    />
  </svg>
);

const KustomizeDark: React.FC<SvgProps> = ({
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
      d="M4 4.5h6A1.5 1.5 0 0 1 11.5 6v6a1.5 1.5 0 0 1-1.5 1.5H4A1.5 1.5 0 0 1 2.5 12V6A1.5 1.5 0 0 1 4 4.5Z"
      fill="#25324D"
      stroke="#548AF7"
    />
    <path
      d="M5 5.98h1v2.74l2.53-2.74h1.252l-2.67 2.903L9.837 12h-1.29L6 9.119V12H5z"
      fill="#548AF7"
    />
    <path
      d="M5.5 2.5H12A1.5 1.5 0 0 1 13.5 4v6.5"
      stroke="#548AF7"
      strokeLinecap="round"
    />
  </svg>
);

export const Kustomize: React.FC<KustomizeProps> = ({
  size = 'md',
  mode = 'light',
  className,
  'aria-label': ariaLabel,
  title,
  ...props
}) => {
  const SvgComponent = mode === 'light' ? KustomizeLight : KustomizeDark;

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
