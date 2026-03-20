import React from 'react';
import { cn } from '@/lib/utils';
import { type IconProps, type SvgProps, sizeMap } from '../../types';

export type TypeAliasProps = IconProps;

const TypeAliasLight: React.FC<SvgProps> = ({
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
    <circle cx="8" cy="8" r="6.5" fill="#FAF5FF" stroke="#834DF0" />
    <path
      d="M8.461 11.5h.999v-.906h-.868a.56.56 0 0 1-.573-.573V6.82h1.44l.006-.906H8.02V4.5h-.944v.95a.444.444 0 0 1-.463.463h-.704l-.006.906h1.08l.006 3.295c0 .797.622 1.386 1.473 1.386"
      fill="#834DF0"
    />
  </svg>
);

const TypeAliasDark: React.FC<SvgProps> = ({
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
    <circle cx="8" cy="8" r="6.5" fill="#2F2936" stroke="#B589EC" />
    <path
      d="M8.461 11.5h.999v-.906h-.868a.56.56 0 0 1-.573-.573V6.82h1.44l.006-.906H8.02V4.5h-.944v.95a.444.444 0 0 1-.463.463h-.704l-.006.906h1.08l.006 3.295c0 .797.622 1.386 1.473 1.386"
      fill="#B589EC"
    />
  </svg>
);

export const TypeAlias: React.FC<TypeAliasProps> = ({
  size = 'md',
  mode = 'light',
  className,
  'aria-label': ariaLabel,
  title,
  ...props
}) => {
  const SvgComponent = mode === 'light' ? TypeAliasLight : TypeAliasDark;

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
