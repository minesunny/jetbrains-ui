import React from 'react';
import { cn } from '@/lib/utils';
import { type IconProps, type SvgProps, sizeMap } from '../../types';

export type InteceptorMethodProps = IconProps;

const InteceptorMethodLight: React.FC<SvgProps> = ({
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
      d="M14.65 10.193a7 7 0 1 0-4.456 4.456 3.5 3.5 0 0 1 4.456-4.456"
      fill="#FFF7F7"
    />
    <path
      d="M10.066 5.246c-.812 0-1.43.401-1.77 1.07-.292-.673-.89-1.07-1.689-1.07-.758 0-1.326.363-1.645 1.003v-.877H4v5.382h.999V7.59c0-.91.515-1.482 1.33-1.482.746 0 1.177.51 1.177 1.33v3.316h.988V7.59c0-.91.526-1.482 1.33-1.482.752 0 1.177.51 1.177 1.33v3.316H12V7.36c0-1.288-.783-2.113-1.934-2.113"
      fill="#DB3B4B"
    />
    <path d="M16 13.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0" fill="#55A76A" />
    <path
      d="M10.004 13.657a6 6 0 1 1 3.654-3.654q.52.025.992.19a7 7 0 1 0-4.456 4.456 3.5 3.5 0 0 1-.19-.992"
      fill="#DB3B4B"
    />
  </svg>
);

const InteceptorMethodDark: React.FC<SvgProps> = ({
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
      d="M14.65 10.193a7 7 0 1 0-4.456 4.456 3.5 3.5 0 0 1 4.456-4.456"
      fill="#402929"
    />
    <path
      d="M10.066 5.246c-.812 0-1.43.401-1.77 1.07-.292-.673-.89-1.07-1.689-1.07-.758 0-1.326.363-1.645 1.003v-.877H4v5.382h.999V7.59c0-.91.515-1.482 1.33-1.482.746 0 1.177.51 1.177 1.33v3.316h.988V7.59c0-.91.526-1.482 1.33-1.482.752 0 1.177.51 1.177 1.33v3.316H12V7.36c0-1.288-.783-2.113-1.934-2.113"
      fill="#DB5C5C"
    />
    <path d="M16 13.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0" fill="#57965C" />
    <path
      d="M10.004 13.657a6 6 0 1 1 3.654-3.654q.52.025.992.19a7 7 0 1 0-4.456 4.456 3.5 3.5 0 0 1-.19-.992"
      fill="#DB5C5C"
    />
  </svg>
);

export const InteceptorMethod: React.FC<InteceptorMethodProps> = ({
  size = 'md',
  mode = 'light',
  className,
  'aria-label': ariaLabel,
  title,
  ...props
}) => {
  const SvgComponent =
    mode === 'light' ? InteceptorMethodLight : InteceptorMethodDark;

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
