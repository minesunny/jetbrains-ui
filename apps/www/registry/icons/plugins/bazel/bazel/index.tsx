import React from 'react';
import { cn } from '@/lib/utils';
import { type IconProps, type SvgProps, sizeMap } from '../../types';

export type BazelProps = IconProps;

const BazelLight: React.FC<SvgProps> = ({
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
    <path d="M4.5 1 8 4.5 4.5 8 1 4.5z" fill="#76D275" />
    <path d="M1 4.5V8l3.5 3.5V8z" fill="#43A047" />
    <path d="M11.5 1 15 4.5 11.5 8 8 4.5z" fill="#76D275" />
    <path d="M15 4.5V8l-3.5 3.5V8zM8 4.5 11.5 8 8 11.5 4.5 8z" fill="#43A047" />
    <path d="M8 11.5V15l-3.5-3.5V8z" fill="#00701A" />
    <path d="M8 11.5 11.5 8v3.5L8 15z" fill="#004300" />
  </svg>
);

const BazelDark: React.FC<SvgProps> = ({
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
    <path d="M4.5 1 8 4.5 4.5 8 1 4.5z" fill="#76D275" />
    <path d="M1 4.5V8l3.5 3.5V8z" fill="#43A047" />
    <path d="M11.5 1 15 4.5 11.5 8 8 4.5z" fill="#76D275" />
    <path d="M15 4.5V8l-3.5 3.5V8zM8 4.5 11.5 8 8 11.5 4.5 8z" fill="#43A047" />
    <path d="M8 11.5V15l-3.5-3.5V8z" fill="#00701A" />
    <path d="M8 11.5 11.5 8v3.5L8 15z" fill="#004300" />
  </svg>
);

export const Bazel: React.FC<BazelProps> = ({
  size = 'md',
  mode = 'light',
  className,
  'aria-label': ariaLabel,
  title,
  ...props
}) => {
  const SvgComponent = mode === 'light' ? BazelLight : BazelDark;

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
