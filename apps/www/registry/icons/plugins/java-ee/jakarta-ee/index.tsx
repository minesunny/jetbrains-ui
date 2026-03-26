import React from 'react';
import { cn } from '@/lib/utils';
import { type IconProps, type SvgProps, sizeMap } from '../../types';

export type JakartaEEProps = IconProps;

const JakartaEELight: React.FC<SvgProps> = ({
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
      d="M11.234 14.188 0 11.344s3.156 1.797 4.594 4.64c2.484-2.218 6.64-1.796 6.64-1.796"
      fill="#4682FA"
    />
    <path
      d="M11.539 4.416c-.114 5.596-2.905 8.739-2.905 8.739l-3.99-1.02z"
      fill="#E66D17"
    />
    <path
      d="m11.538 4.416-6.894 7.719-1.902-.487 8.664-9.785c.11.9.149 1.752.132 2.553M12.062 14.031S17.64 9.328 15.468.016l-3.93 4.4c-.114 5.596-2.905 8.738-2.905 8.738z"
      fill="#FFAF0F"
    />
  </svg>
);

const JakartaEEDark: React.FC<SvgProps> = ({
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
      d="M11.234 14.188 0 11.344s3.156 1.797 4.594 4.64c2.484-2.218 6.64-1.796 6.64-1.796"
      fill="#548AF7"
    />
    <path
      d="M11.539 4.416c-.114 5.596-2.905 8.739-2.905 8.739l-3.99-1.02z"
      fill="#C77D55"
    />
    <path
      d="m11.538 4.416-6.894 7.719-1.902-.487 8.664-9.785c.11.9.149 1.752.132 2.553M12.062 14.031S17.64 9.328 15.468.016l-3.93 4.4c-.114 5.596-2.905 8.738-2.905 8.738z"
      fill="#F2C55C"
    />
  </svg>
);

export const JakartaEE: React.FC<JakartaEEProps> = ({
  size = 'md',
  mode = 'light',
  className,
  'aria-label': ariaLabel,
  title,
  ...props
}) => {
  const SvgComponent = mode === 'light' ? JakartaEELight : JakartaEEDark;

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
