import React from 'react';
import { cn } from '@/lib/utils';
import { type IconProps, type SvgProps, sizeMap } from '../../types';

export type Play2Props = IconProps;

const Play2Light: React.FC<SvgProps> = ({
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
      d="m4.39 1.742.359-.357a1.344 1.344 0 0 1 1.954.075l4.975 5.76a1.32 1.32 0 0 1-.012 1.74l-4.957 5.582c-.51.57-1.398.6-1.943.058l-.359-.357a1.32 1.32 0 0 1-.081-1.786L7.294 8.92a1.32 1.32 0 0 0 .018-1.677L4.297 3.5a1.303 1.303 0 0 1 .093-1.757"
      fill="#92D13D"
    />
    <path
      d="M7.289 8.931 4.32 12.468a1.32 1.32 0 0 0 .082 1.786l.359.357a1.34 1.34 0 0 0 1.942-.057l1.073-1.21a5.8 5.8 0 0 0 .632-2.644 5.84 5.84 0 0 0-.94-3.18c.22.45.163 1.008-.18 1.411"
      fill="#49691F"
    />
  </svg>
);

const Play2Dark: React.FC<SvgProps> = ({
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
      d="m4.39 1.742.359-.357a1.344 1.344 0 0 1 1.954.075l4.975 5.76a1.32 1.32 0 0 1-.012 1.74l-4.957 5.582c-.51.57-1.398.6-1.943.058l-.359-.357a1.32 1.32 0 0 1-.081-1.786L7.294 8.92a1.32 1.32 0 0 0 .018-1.677L4.297 3.5a1.303 1.303 0 0 1 .093-1.757"
      fill="#92D13D"
    />
    <path
      d="M7.289 8.931 4.32 12.468a1.32 1.32 0 0 0 .082 1.786l.359.357a1.34 1.34 0 0 0 1.942-.057l1.073-1.21a5.8 5.8 0 0 0 .632-2.644 5.84 5.84 0 0 0-.94-3.18c.22.45.163 1.008-.18 1.411"
      fill="#49691F"
    />
  </svg>
);

export const Play2: React.FC<Play2Props> = ({
  size = 'md',
  mode = 'light',
  className,
  'aria-label': ariaLabel,
  title,
  ...props
}) => {
  const SvgComponent = mode === 'light' ? Play2Light : Play2Dark;

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
