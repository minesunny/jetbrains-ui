import React from 'react';
import { cn } from '@/lib/utils';
import { type IconProps, type SvgProps, sizeMap } from '../../types';

export type FullLineCompletionProps = IconProps;

const FullLineCompletionLight: React.FC<SvgProps> = ({
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
      d="M10.827 9.964a.75.75 0 0 1-.863.863l-3.526-.587a.75.75 0 0 1-.407-1.27l2.938-2.94a.75.75 0 0 1 1.27.408z"
      stroke="#834DF0"
    />
  </svg>
);

const FullLineCompletionDark: React.FC<SvgProps> = ({
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
    <circle cx="8" cy="8" r="6.5" fill="#2F2936" stroke="#A177F4" />
    <path
      d="M10.827 9.964a.75.75 0 0 1-.863.863l-3.526-.587a.75.75 0 0 1-.407-1.27l2.938-2.94a.75.75 0 0 1 1.27.408z"
      stroke="#A177F4"
    />
  </svg>
);

export const FullLineCompletion: React.FC<FullLineCompletionProps> = ({
  size = 'md',
  mode = 'light',
  className,
  'aria-label': ariaLabel,
  title,
  ...props
}) => {
  const SvgComponent =
    mode === 'light' ? FullLineCompletionLight : FullLineCompletionDark;

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
