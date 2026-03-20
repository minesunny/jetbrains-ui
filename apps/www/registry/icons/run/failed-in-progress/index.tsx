import type { FC } from 'react';
import { cn } from '@/lib/utils';
import { type IconProps, type SvgProps, sizeMap } from '../types';

export type FailedInProgressProps = IconProps;

const FailedInProgressLight: FC<SvgProps> = ({
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
      fillRule="evenodd"
      clipRule="evenodd"
      d="M3.036 4.128a.75.75 0 0 1 .254 1.03A5.47 5.47 0 0 0 2.5 8c0 1.042.29 2.015.791 2.844a.75.75 0 0 1-1.283.777A6.97 6.97 0 0 1 1 8a6.97 6.97 0 0 1 1.006-3.618.75.75 0 0 1 1.03-.254"
      fill="#E55765"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M4.127 12.963a.75.75 0 0 1 1.03-.254c.83.502 1.801.791 2.843.791a5.47 5.47 0 0 0 2.838-.788.75.75 0 1 1 .776 1.284A6.97 6.97 0 0 1 8 15a6.97 6.97 0 0 1-3.62-1.008.75.75 0 0 1-.253-1.03"
      fill="#E46A76"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12.96 4.125a.75.75 0 0 1 1.03.253A6.97 6.97 0 0 1 15 8a6.97 6.97 0 0 1-1.008 3.62.75.75 0 1 1-1.283-.777A5.47 5.47 0 0 0 13.499 8a5.47 5.47 0 0 0-.791-2.845.75.75 0 0 1 .253-1.03"
      fill="#ED99A1"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M8 2.5a5.47 5.47 0 0 0-2.84.79.75.75 0 0 1-.777-1.284A6.97 6.97 0 0 1 8 1a6.97 6.97 0 0 1 3.612 1.003.75.75 0 1 1-.775 1.284A5.47 5.47 0 0 0 8 2.5"
      fill="#DB3B4B"
    />
    <path
      d="M9 5a1 1 0 0 0-2 0v2.5a1 1 0 1 0 2 0zM8 12a1 1 0 1 0 0-2 1 1 0 0 0 0 2"
      fill="#DB3B4B"
    />
  </svg>
);

const FailedInProgressDark: FC<SvgProps> = ({
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
      fillRule="evenodd"
      clipRule="evenodd"
      d="M3.036 4.128a.75.75 0 0 1 .254 1.03A5.47 5.47 0 0 0 2.5 8c0 1.042.29 2.015.791 2.844a.75.75 0 0 1-1.283.777A6.97 6.97 0 0 1 1 8a6.97 6.97 0 0 1 1.006-3.618.75.75 0 0 1 1.03-.254"
      fill="#BD5757"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M4.127 12.963a.75.75 0 0 1 1.03-.254c.83.502 1.801.791 2.843.791a5.47 5.47 0 0 0 2.838-.788.75.75 0 1 1 .776 1.284A6.97 6.97 0 0 1 8 15a6.97 6.97 0 0 1-3.62-1.008.75.75 0 0 1-.253-1.03"
      fill="#9C4E4E"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12.96 4.125a.75.75 0 0 1 1.03.253A6.97 6.97 0 0 1 15 8a6.97 6.97 0 0 1-1.008 3.62.75.75 0 1 1-1.283-.777A5.47 5.47 0 0 0 13.499 8a5.47 5.47 0 0 0-.791-2.845.75.75 0 0 1 .253-1.03"
      fill="#7A4343"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M8 2.5a5.47 5.47 0 0 0-2.84.79.75.75 0 0 1-.777-1.284A6.97 6.97 0 0 1 8 1a6.97 6.97 0 0 1 3.612 1.003.75.75 0 1 1-.775 1.284A5.47 5.47 0 0 0 8 2.5"
      fill="#DB5C5C"
    />
    <path
      d="M9 5a1 1 0 0 0-2 0v2.5a1 1 0 1 0 2 0zM8 12a1 1 0 1 0 0-2 1 1 0 0 0 0 2"
      fill="#DB5C5C"
    />
  </svg>
);

export const FailedInProgress: FC<FailedInProgressProps> = ({
  size = 'md',
  mode = 'light',
  className,
  'aria-label': ariaLabel,
  title,
  ...props
}) => {
  const SvgComponent =
    mode === 'light' ? FailedInProgressLight : FailedInProgressDark;

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
