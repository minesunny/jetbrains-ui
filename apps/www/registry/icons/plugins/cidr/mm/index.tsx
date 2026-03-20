import React from 'react';
import { cn } from '@/lib/utils';
import { type IconProps, type SvgProps, sizeMap } from '../../types';

export type MmProps = IconProps;

const MmLight: React.FC<SvgProps> = ({
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
      d="M1 13V2.99h2.016l1.051 6.7.079 1.365.086-1.365.972-6.7h2.052V13h-1.23V4.935l.036-1.308L4.611 13h-.958L2.187 3.677l.036 1.258V13zM8.75 13V2.99h2.017l1.05 6.7.08 1.365.085-1.365.973-6.7h2.052V13h-1.23V4.935l.036-1.308L12.36 13h-.958L9.937 3.677l.036 1.258V13z"
      fill="#3574F0"
    />
  </svg>
);

const MmDark: React.FC<SvgProps> = ({
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
      d="M1 13V2.99h2.016l1.051 6.7.079 1.365.086-1.365.972-6.7h2.052V13h-1.23V4.935l.036-1.308L4.611 13h-.958L2.187 3.677l.036 1.258V13zM8.75 13V2.99h2.017l1.05 6.7.08 1.365.085-1.365.973-6.7h2.052V13h-1.23V4.935l.036-1.308L12.36 13h-.958L9.937 3.677l.036 1.258V13z"
      fill="#548AF7"
    />
  </svg>
);

export const Mm: React.FC<MmProps> = ({
  size = 'md',
  mode = 'light',
  className,
  'aria-label': ariaLabel,
  title,
  ...props
}) => {
  const SvgComponent = mode === 'light' ? MmLight : MmDark;

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
