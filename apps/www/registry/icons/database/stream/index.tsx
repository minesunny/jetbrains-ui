import type { FC } from 'react';
import { cn } from '@/lib/utils';
import { type IconProps, type SvgProps, sizeMap } from '../types';

export type StreamProps = IconProps;

const StreamLight: FC<SvgProps> = ({
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
    {title ? <title>{title}</title> : null}
    <path
      d="M1.124 4.17a.5.5 0 0 1 .705-.046L6.26 8l-4.43 3.876a.5.5 0 0 1-.658-.752L4.74 8 1.17 4.876a.5.5 0 0 1-.047-.705"
      fill="#6C707E"
    />
    <path
      d="M5.624 4.17a.5.5 0 0 1 .705-.046L10.76 8l-4.43 3.876a.5.5 0 0 1-.658-.752L9.24 8 5.67 4.876a.5.5 0 0 1-.047-.705"
      fill="#6C707E"
    />
    <path
      d="M10.83 4.124a.5.5 0 0 0-.66.752L13.74 8l-3.57 3.124a.5.5 0 1 0 .66.752L15.26 8z"
      fill="#6C707E"
    />
  </svg>
);

const StreamDark: FC<SvgProps> = ({
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
    {title ? <title>{title}</title> : null}
    <path
      d="M1.124 4.17a.5.5 0 0 1 .705-.046L6.26 8l-4.43 3.876a.5.5 0 0 1-.658-.752L4.74 8 1.17 4.876a.5.5 0 0 1-.047-.705"
      fill="#CED0D6"
    />
    <path
      d="M5.624 4.17a.5.5 0 0 1 .705-.046L10.76 8l-4.43 3.876a.5.5 0 0 1-.658-.752L9.24 8 5.67 4.876a.5.5 0 0 1-.047-.705"
      fill="#CED0D6"
    />
    <path
      d="M10.83 4.124a.5.5 0 0 0-.66.752L13.74 8l-3.57 3.124a.5.5 0 1 0 .66.752L15.26 8z"
      fill="#CED0D6"
    />
  </svg>
);

export const Stream: FC<StreamProps> = ({
  size = 'md',
  mode = 'light',
  className,
  'aria-label': ariaLabel,
  title,
  ...props
}) => {
  const SvgComponent = mode === 'light' ? StreamLight : StreamDark;

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
