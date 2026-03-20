import React from 'react';
import { cn } from '@/lib/utils';
import { type IconProps, type SvgProps, sizeMap } from '../../types';

export type NamespaceProps = IconProps;

const NamespaceLight: React.FC<SvgProps> = ({
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
      d="M3 4a1 1 0 0 1 1-1h2a.5.5 0 0 0 0-1H4a2 2 0 0 0-2 2v1.5a.5.5 0 0 0 1 0zM13 4v1.5a.5.5 0 0 0 1 0V4a2 2 0 0 0-2-2h-1.5a.5.5 0 0 0 0 1H12a1 1 0 0 1 1 1M10.5 13H12a1 1 0 0 0 1-1v-1.5a.5.5 0 0 1 1 0V12a2 2 0 0 1-2 2h-1.5a.5.5 0 0 1 0-1M4 13a1 1 0 0 1-1-1v-1.5a.5.5 0 0 0-1 0V12a2 2 0 0 0 2 2h1.5a.5.5 0 0 0 0-1z"
      fill="#6C707E"
    />
  </svg>
);

const NamespaceDark: React.FC<SvgProps> = ({
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
      d="M3 4a1 1 0 0 1 1-1h2a.5.5 0 0 0 0-1H4a2 2 0 0 0-2 2v1.5a.5.5 0 0 0 1 0zM13 4v1.5a.5.5 0 0 0 1 0V4a2 2 0 0 0-2-2h-1.5a.5.5 0 0 0 0 1H12a1 1 0 0 1 1 1M10.5 13H12a1 1 0 0 0 1-1v-1.5a.5.5 0 0 1 1 0V12a2 2 0 0 1-2 2h-1.5a.5.5 0 0 1 0-1M4 13a1 1 0 0 1-1-1v-1.5a.5.5 0 0 0-1 0V12a2 2 0 0 0 2 2h1.5a.5.5 0 0 0 0-1z"
      fill="#CED0D6"
    />
  </svg>
);

export const Namespace: React.FC<NamespaceProps> = ({
  size = 'md',
  mode = 'light',
  className,
  'aria-label': ariaLabel,
  title,
  ...props
}) => {
  const SvgComponent = mode === 'light' ? NamespaceLight : NamespaceDark;

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
