import React from 'react';
import { cn } from '@/lib/utils';
import { type IconProps, type SvgProps, sizeMap } from '../../types';

export type AfterAdviceProps = IconProps;

const AfterAdviceLight: React.FC<SvgProps> = ({
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
      d="M12.95 3.05a7 7 0 1 1-9.898 9.9 7 7 0 0 1 9.899-9.9"
      fill="#FFF7F7"
    />
    <path
      d="M10.066 5.246c-.812 0-1.43.401-1.77 1.07-.292-.673-.89-1.07-1.689-1.07-.758 0-1.326.363-1.645 1.003v-.877H4v5.382h.999V7.59c0-.91.515-1.482 1.33-1.482.746 0 1.177.51 1.177 1.33v3.316h.988V7.59c0-.91.526-1.482 1.33-1.482.752 0 1.177.51 1.177 1.33v3.316H12V7.36c0-1.288-.783-2.113-1.934-2.113"
      fill="#DB3B4B"
    />
    <path
      d="M1.07 9A7.002 7.002 0 0 0 14.93 9h-1.013A6.002 6.002 0 0 1 2.082 9z"
      fill="#6C707E"
    />
    <path
      d="M13.917 7h1.011A7.001 7.001 0 0 0 1.07 7h1.012a6.002 6.002 0 0 1 11.834 0"
      fill="#DB3B4B"
    />
  </svg>
);

const AfterAdviceDark: React.FC<SvgProps> = ({
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
      d="M12.95 3.05a7 7 0 1 1-9.898 9.9 7 7 0 0 1 9.899-9.9"
      fill="#402929"
    />
    <path
      d="M10.066 5.246c-.812 0-1.43.401-1.77 1.07-.292-.673-.89-1.07-1.689-1.07-.758 0-1.326.363-1.645 1.003v-.877H4v5.382h.999V7.59c0-.91.515-1.482 1.33-1.482.746 0 1.177.51 1.177 1.33v3.316h.988V7.59c0-.91.526-1.482 1.33-1.482.752 0 1.177.51 1.177 1.33v3.316H12V7.36c0-1.288-.783-2.113-1.934-2.113"
      fill="#DB5C5C"
    />
    <path
      d="M1.07 9A7.002 7.002 0 0 0 14.93 9h-1.013A6.002 6.002 0 0 1 2.082 9z"
      fill="#CED0D6"
    />
    <path
      d="M13.917 7h1.011A7.001 7.001 0 0 0 1.07 7h1.012a6.002 6.002 0 0 1 11.834 0"
      fill="#DB5C5C"
    />
  </svg>
);

export const AfterAdvice: React.FC<AfterAdviceProps> = ({
  size = 'md',
  mode = 'light',
  className,
  'aria-label': ariaLabel,
  title,
  ...props
}) => {
  const SvgComponent = mode === 'light' ? AfterAdviceLight : AfterAdviceDark;

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
