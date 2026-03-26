import React from 'react';
import { cn } from '@/lib/utils';
import { type IconProps, type SvgProps, sizeMap } from '../../types';

export type LombokProps = IconProps;

const LombokLight: React.FC<SvgProps> = ({
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
      d="M3 8v-.5a2.5 2.5 0 0 1 5 0V8a6 6 0 0 0 5.627 5.989A7 7 0 0 1 3 8"
      fill="#E55765"
    />
    <path
      d="M7.275 1.916a.5.5 0 0 0-.555-.832 3.87 3.87 0 0 0-1.722 3.219v.747a2.5 2.5 0 0 0-.748.283 1.5 1.5 0 0 0 2.495 0 2.5 2.5 0 0 0-.747-.283v-.747c0-.96.479-1.855 1.277-2.387"
      fill="#55A76A"
    />
  </svg>
);

const LombokDark: React.FC<SvgProps> = ({
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
      d="M3 8v-.5a2.5 2.5 0 0 1 5 0V8a6 6 0 0 0 5.627 5.989A7 7 0 0 1 3 8"
      fill="#DB5C5C"
    />
    <path
      d="M7.275 1.916a.5.5 0 0 0-.555-.832 3.87 3.87 0 0 0-1.722 3.219v.747a2.5 2.5 0 0 0-.748.283 1.5 1.5 0 0 0 2.495 0 2.5 2.5 0 0 0-.747-.283v-.747c0-.96.479-1.855 1.277-2.387"
      fill="#57965C"
    />
  </svg>
);

export const Lombok: React.FC<LombokProps> = ({
  size = 'md',
  mode = 'light',
  className,
  'aria-label': ariaLabel,
  title,
  ...props
}) => {
  const SvgComponent = mode === 'light' ? LombokLight : LombokDark;

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
