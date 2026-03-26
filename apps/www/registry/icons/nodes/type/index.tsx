import type { FC } from 'react';
import { cn } from '@/lib/utils';
import { type IconProps, type SvgProps, sizeMap } from '../types';

export type TypeProps = IconProps;

const TypeLight: FC<SvgProps> = ({
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
    <path d="M1 8a7 7 0 1 1 14 0A7 7 0 0 1 1 8" fill="#EDF3FF" />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M2 8a6 6 0 1 0 12 0A6 6 0 0 0 2 8m6-7a7 7 0 1 0 0 14A7 7 0 0 0 8 1"
      fill="#3574F0"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M7.5 6H5V5h6v1H8.5v6h-1z"
      fill="#3574F0"
    />
  </svg>
);

const TypeDark: FC<SvgProps> = ({
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
    <path d="M1 8a7 7 0 1 1 14 0A7 7 0 0 1 1 8" fill="#25324D" />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M2 8a6 6 0 1 0 12 0A6 6 0 0 0 2 8m6-7a7 7 0 1 0 0 14A7 7 0 0 0 8 1"
      fill="#548AF7"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M7.5 6H5V5h6v1H8.5v6h-1z"
      fill="#548AF7"
    />
  </svg>
);

export const Type: FC<TypeProps> = ({
  size = 'md',
  mode = 'light',
  className,
  'aria-label': ariaLabel,
  title,
  ...props
}) => {
  const SvgComponent = mode === 'light' ? TypeLight : TypeDark;

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
