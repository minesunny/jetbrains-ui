import React from 'react';
import { cn } from '@/lib/utils';
import { type IconProps, type SvgProps, sizeMap } from '../../types';

export type EjbCreateMethodProps = IconProps;

const EjbCreateMethodLight: React.FC<SvgProps> = ({
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
      d="m12 8 1.113 2.812 2.887.244-2.2 1.981.672 2.963L12 14.412 9.528 16l.672-2.963L8 11.056l2.887-.244z"
      fill="#6C707E"
    />
    <path
      d="M14.726 9.945a7 7 0 1 0-5.988 5.017l.357-1.574-1.764-1.59a1 1 0 0 1 .585-1.739l2.27-.191.884-2.236a1 1 0 0 1 1.86 0l.884 2.236z"
      fill="#FFF7F7"
    />
    <path
      d="M8.974 13.921a6 6 0 1 1 4.778-4.21l.062.157.912.077a7 7 0 1 0-5.988 5.017z"
      fill="#DB3B4B"
    />
  </svg>
);

const EjbCreateMethodDark: React.FC<SvgProps> = ({
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
      d="m12 8 1.113 2.812 2.887.244-2.2 1.981.672 2.963L12 14.412 9.528 16l.672-2.963L8 11.056l2.887-.244z"
      fill="#CED0D6"
    />
    <path
      d="M14.726 9.945a7 7 0 1 0-5.988 5.017l.357-1.574-1.764-1.59a1 1 0 0 1 .585-1.739l2.27-.191.884-2.236a1 1 0 0 1 1.86 0l.884 2.236z"
      fill="#402929"
    />
    <path
      d="M8.974 13.921a6 6 0 1 1 4.778-4.21l.062.157.912.077a7 7 0 1 0-5.988 5.017z"
      fill="#DB5C5C"
    />
  </svg>
);

export const EjbCreateMethod: React.FC<EjbCreateMethodProps> = ({
  size = 'md',
  mode = 'light',
  className,
  'aria-label': ariaLabel,
  title,
  ...props
}) => {
  const SvgComponent =
    mode === 'light' ? EjbCreateMethodLight : EjbCreateMethodDark;

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
