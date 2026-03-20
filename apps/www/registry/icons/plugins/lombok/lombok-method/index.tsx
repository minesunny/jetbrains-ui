import React from 'react';
import { cn } from '@/lib/utils';
import { type IconProps, type SvgProps, sizeMap } from '../../types';

export type LombokMethodProps = IconProps;

const LombokMethodLight: React.FC<SvgProps> = ({
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
      d="M14.93 7H13.5A1.5 1.5 0 0 0 12 8.5V11a4 4 0 0 1-.617 2.136A4 4 0 0 1 8 15a7 7 0 1 1 6.93-8"
      fill="#FFF7F7"
    />
    <path
      d="M14.93 7A7.001 7.001 0 0 0 1 8a7 7 0 0 0 7 7v-1a6 6 0 1 1 5.917-7z"
      fill="#DB3B4B"
    />
    <path
      d="M12 8.48V7.358c0-1.288-.783-2.113-1.934-2.113-.812 0-1.43.401-1.77 1.07-.292-.674-.89-1.07-1.689-1.07-.758 0-1.326.363-1.645 1.002v-.876H4v5.382h.999V7.59c0-.91.515-1.482 1.33-1.482.746 0 1.177.51 1.177 1.33v3.316h.988V7.59c0-.91.526-1.482 1.33-1.482.752 0 1.177.51 1.177 1.33v3.316H12V8.48"
      fill="#DB3B4B"
    />
    <path
      d="M15 10a1 1 0 0 1 1 1 5 5 0 0 1-5.836 4.93c-.208-.034-.219-.318-.028-.408A5 5 0 0 0 12.999 11a1 1 0 0 1 1-1z"
      fill="#E55765"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M13.5 9a.5.5 0 0 1 .5.5v.5h1v-.5A1.5 1.5 0 0 0 13.5 8a.5.5 0 0 0 0 1"
      fill="#55A76A"
    />
  </svg>
);

const LombokMethodDark: React.FC<SvgProps> = ({
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
      d="M14.93 7H13.5A1.5 1.5 0 0 0 12 8.5V11a4 4 0 0 1-.617 2.136A4 4 0 0 1 8 15a7 7 0 1 1 6.93-8"
      fill="#402929"
    />
    <path
      d="M14.93 7A7.001 7.001 0 0 0 1 8a7 7 0 0 0 7 7v-1a6 6 0 1 1 5.917-7z"
      fill="#DB5C5C"
    />
    <path
      d="M12 8.48V7.358c0-1.288-.783-2.113-1.934-2.113-.812 0-1.43.401-1.77 1.07-.292-.674-.89-1.07-1.689-1.07-.758 0-1.326.363-1.645 1.002v-.876H4v5.382h.999V7.59c0-.91.515-1.482 1.33-1.482.746 0 1.177.51 1.177 1.33v3.316h.988V7.59c0-.91.526-1.482 1.33-1.482.752 0 1.177.51 1.177 1.33v3.316H12V8.48M15 10a1 1 0 0 1 1 1 5 5 0 0 1-5.836 4.93c-.208-.034-.219-.318-.028-.408A5 5 0 0 0 12.999 11a1 1 0 0 1 1-1z"
      fill="#DB5C5C"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M13.5 9a.5.5 0 0 1 .5.5v.5h1v-.5A1.5 1.5 0 0 0 13.5 8a.5.5 0 0 0 0 1"
      fill="#57965C"
    />
  </svg>
);

export const LombokMethod: React.FC<LombokMethodProps> = ({
  size = 'md',
  mode = 'light',
  className,
  'aria-label': ariaLabel,
  title,
  ...props
}) => {
  const SvgComponent = mode === 'light' ? LombokMethodLight : LombokMethodDark;

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
