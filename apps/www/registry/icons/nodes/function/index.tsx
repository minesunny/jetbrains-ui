import type { FC } from 'react';
import { cn } from '@/lib/utils';
import { type IconProps, type SvgProps, sizeMap } from '../types';

export type FunctionProps = IconProps;

const FunctionLight: FC<SvgProps> = ({
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
    <circle cx="8" cy="8" r="6.5" fill="#FFF7F7" stroke="#DB3B4B" />
    <path
      d="M7.257 12h1.017V7.327H9.83V6.43H8.274v-.95c0-.36.246-.606.6-.606H9.88V4H8.777c-.903 0-1.52.571-1.52 1.406V6.43H6.12v.897h1.137z"
      fill="#DB3B4B"
    />
  </svg>
);

const FunctionDark: FC<SvgProps> = ({
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
    <circle cx="8" cy="8" r="6.5" fill="#402929" stroke="#DB5C5C" />
    <path
      d="M7.257 12h1.017V7.327H9.83V6.43H8.274v-.95c0-.36.246-.606.6-.606H9.88V4H8.777c-.903 0-1.52.571-1.52 1.406V6.43H6.12v.897h1.137z"
      fill="#DB5C5C"
    />
  </svg>
);

export const Function: FC<FunctionProps> = ({
  size = 'md',
  mode = 'light',
  className,
  'aria-label': ariaLabel,
  title,
  ...props
}) => {
  const SvgComponent = mode === 'light' ? FunctionLight : FunctionDark;

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
