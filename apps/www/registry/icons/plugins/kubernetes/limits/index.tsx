import React from 'react';
import { cn } from '@/lib/utils';
import { type IconProps, type SvgProps, sizeMap } from '../../types';

export type LimitsProps = IconProps;

const LimitsLight: React.FC<SvgProps> = ({
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
      d="M3 6.5h5A1.5 1.5 0 0 1 9.5 8v4A1.5 1.5 0 0 1 8 13.5H3A1.5 1.5 0 0 1 1.5 12V8A1.5 1.5 0 0 1 3 6.5Z"
      fill="#EBECF0"
      stroke="#6C707E"
    />
    <path
      d="M3 2a2 2 0 0 0-2 2v.5a.5.5 0 0 0 1 0V4a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1h-1.5a.5.5 0 0 0 0 1H13a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2z"
      fill="#6C707E"
    />
  </svg>
);

const LimitsDark: React.FC<SvgProps> = ({
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
      d="M3 6.5h5A1.5 1.5 0 0 1 9.5 8v4A1.5 1.5 0 0 1 8 13.5H3A1.5 1.5 0 0 1 1.5 12V8A1.5 1.5 0 0 1 3 6.5Z"
      fill="#43454A"
      stroke="#CED0D6"
    />
    <path
      d="M3 2a2 2 0 0 0-2 2v.5a.5.5 0 0 0 1 0V4a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1h-1.5a.5.5 0 0 0 0 1H13a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2z"
      fill="#CED0D6"
    />
  </svg>
);

export const Limits: React.FC<LimitsProps> = ({
  size = 'md',
  mode = 'light',
  className,
  'aria-label': ariaLabel,
  title,
  ...props
}) => {
  const SvgComponent = mode === 'light' ? LimitsLight : LimitsDark;

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
