import React from 'react';
import { cn } from '@/lib/utils';
import { type IconProps, type SvgProps, sizeMap } from '../../types';

export type FieldValueProps = IconProps;

const FieldValueLight: React.FC<SvgProps> = ({
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
      d="M2 4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2z"
      fill="#FAF5FF"
    />
    <path
      d="M7.547 11.4h.92l2.355-6H9.791l-1.746 4.705L6.24 5.4H5.18zM9 3h3a1 1 0 0 1 1 1v3h1V4a2 2 0 0 0-2-2H9zM7 3V2H4a2 2 0 0 0-2 2v3h1V4a1 1 0 0 1 1-1zM3 9H2v3a2 2 0 0 0 2 2h3v-1H4a1 1 0 0 1-1-1zM9 13v1h3a2 2 0 0 0 2-2V9h-1v3a1 1 0 0 1-1 1z"
      fill="#834DF0"
    />
  </svg>
);

const FieldValueDark: React.FC<SvgProps> = ({
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
      d="M2 4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2z"
      fill="#2F2936"
    />
    <path
      d="M7.547 11.4h.92l2.355-6H9.791l-1.746 4.705L6.24 5.4H5.18zM9 3h3a1 1 0 0 1 1 1v3h1V4a2 2 0 0 0-2-2H9zM7 3V2H4a2 2 0 0 0-2 2v3h1V4a1 1 0 0 1 1-1zM3 9H2v3a2 2 0 0 0 2 2h3v-1H4a1 1 0 0 1-1-1zM9 13v1h3a2 2 0 0 0 2-2V9h-1v3a1 1 0 0 1-1 1z"
      fill="#B589EC"
    />
  </svg>
);

export const FieldValue: React.FC<FieldValueProps> = ({
  size = 'md',
  mode = 'light',
  className,
  'aria-label': ariaLabel,
  title,
  ...props
}) => {
  const SvgComponent = mode === 'light' ? FieldValueLight : FieldValueDark;

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
