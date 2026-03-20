import React from 'react';
import { cn } from '@/lib/utils';
import { type IconProps, type SvgProps, sizeMap } from '../../types';

export type HelmRequirmentsLockProps = IconProps;

const HelmRequirmentsLockLight: React.FC<SvgProps> = ({
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
      d="M15 11v-1a2 2 0 1 0-4 0v1a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1m-3-1a1 1 0 1 1 2 0v1h-2zm-1 5v-3h4v3z"
      fill="#3574F0"
    />
    <path
      d="M14.434 7.364a4.244 4.244 0 0 0-6.676-5.122L6.415 3.586a.5.5 0 0 0 .707.707l1.343-1.344a3.243 3.243 0 0 1 4.996 4.086c.347.054.675.167.973.329M9 11.618a.5.5 0 0 0-.12.089l-1.34 1.34A3.243 3.243 0 0 1 2.953 8.46l1.34-1.34a.5.5 0 1 0-.708-.707l-1.34 1.34a4.243 4.243 0 0 0 6 6L9 13z"
      fill="#6C707E"
    />
    <path
      d="M11.354 4.646a.5.5 0 0 0-.707 0l-6 6a.5.5 0 1 0 .707.707l6-6a.5.5 0 0 0 0-.707"
      fill="#6C707E"
    />
  </svg>
);

const HelmRequirmentsLockDark: React.FC<SvgProps> = ({
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
      d="M15 11v-1a2 2 0 1 0-4 0v1a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1m-3-1a1 1 0 1 1 2 0v1h-2zm-1 5v-3h4v3z"
      fill="#548AF7"
    />
    <path
      d="M14.434 7.364a4.244 4.244 0 0 0-6.676-5.122L6.415 3.586a.5.5 0 0 0 .707.707l1.343-1.344a3.243 3.243 0 0 1 4.996 4.086c.347.054.675.167.973.329M9 11.618a.5.5 0 0 0-.12.089l-1.34 1.34A3.243 3.243 0 0 1 2.953 8.46l1.34-1.34a.5.5 0 1 0-.708-.707l-1.34 1.34a4.243 4.243 0 0 0 6 6L9 13z"
      fill="#CED0D6"
    />
    <path
      d="M11.354 4.646a.5.5 0 0 0-.707 0l-6 6a.5.5 0 1 0 .707.707l6-6a.5.5 0 0 0 0-.707"
      fill="#CED0D6"
    />
  </svg>
);

export const HelmRequirmentsLock: React.FC<HelmRequirmentsLockProps> = ({
  size = 'md',
  mode = 'light',
  className,
  'aria-label': ariaLabel,
  title,
  ...props
}) => {
  const SvgComponent =
    mode === 'light' ? HelmRequirmentsLockLight : HelmRequirmentsLockDark;

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
