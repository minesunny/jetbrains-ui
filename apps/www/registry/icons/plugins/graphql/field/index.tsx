import React from 'react';
import { cn } from '@/lib/utils';
import { type IconProps, type SvgProps, sizeMap } from '../../types';

export type FieldProps = IconProps;

const FieldLight: React.FC<SvgProps> = ({
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
    <rect
      x="2.5"
      y="2.5"
      width="11"
      height="11"
      rx="1.5"
      fill="#FAF5FF"
      stroke="#834DF0"
    />
    <path
      d="M7.258 12h1.017V7.327H9.83V6.43H8.275v-.95c0-.36.246-.606.6-.606h1.006V4H8.778c-.903 0-1.52.571-1.52 1.406V6.43H6.121v.897h1.137z"
      fill="#834DF0"
    />
  </svg>
);

const FieldDark: React.FC<SvgProps> = ({
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
    <rect
      x="2.5"
      y="2.5"
      width="11"
      height="11"
      rx="1.5"
      fill="#2F2936"
      stroke="#A571E6"
    />
    <path
      d="M7.258 12h1.017V7.327H9.83V6.43H8.275v-.95c0-.36.246-.606.6-.606h1.006V4H8.778c-.903 0-1.52.571-1.52 1.406V6.43H6.121v.897h1.137z"
      fill="#A571E6"
    />
  </svg>
);

export const Field: React.FC<FieldProps> = ({
  size = 'md',
  mode = 'light',
  className,
  'aria-label': ariaLabel,
  title,
  ...props
}) => {
  const SvgComponent = mode === 'light' ? FieldLight : FieldDark;

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
