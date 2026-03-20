import React from 'react';
import { cn } from '@/lib/utils';
import { type IconProps, type SvgProps, sizeMap } from '../../types';

export type LdProps = IconProps;

const LdLight: React.FC<SvgProps> = ({
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
      d="M3.834 3.9h1.209v7.97h2.366V13H3.834zM8.087 13V3.9h2.034q.794 0 1.32.423.533.416.793 1.28.267.858.266 2.184v1.326q0 1.327-.266 2.19-.26.86-.787 1.281-.525.417-1.32.416zm2.034-1.124a.78.78 0 0 0 .618-.293q.254-.298.377-.903.123-.611.123-1.567V7.787q0-.956-.123-1.56-.123-.61-.377-.903a.77.77 0 0 0-.618-.3H9.31v6.852z"
      fill="#369650"
    />
  </svg>
);

const LdDark: React.FC<SvgProps> = ({
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
      d="M3.834 3.9h1.209v7.97h2.366V13H3.834zM8.087 13V3.9h2.034q.794 0 1.32.423.533.416.793 1.28.267.858.266 2.184v1.326q0 1.327-.266 2.19-.26.86-.787 1.281-.525.417-1.32.416zm2.034-1.124a.78.78 0 0 0 .618-.293q.254-.298.377-.903.123-.611.123-1.567V7.787q0-.956-.123-1.56-.123-.61-.377-.903a.77.77 0 0 0-.618-.3H9.31v6.852z"
      fill="#57965C"
    />
  </svg>
);

export const Ld: React.FC<LdProps> = ({
  size = 'md',
  mode = 'light',
  className,
  'aria-label': ariaLabel,
  title,
  ...props
}) => {
  const SvgComponent = mode === 'light' ? LdLight : LdDark;

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
