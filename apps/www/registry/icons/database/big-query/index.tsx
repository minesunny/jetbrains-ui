import type { FC } from 'react';
import { cn } from '@/lib/utils';
import { type IconProps, type SvgProps, sizeMap } from '../types';

export type BigQueryProps = IconProps;

const BigQueryLight: FC<SvgProps> = ({
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
      d="m.284 8.496 3.428 6A1 1 0 0 0 4.58 15h6.84a1 1 0 0 0 .868-.504l3.428-6a1 1 0 0 0 0-.992l-3.428-6A1 1 0 0 0 11.42 1H4.58a1 1 0 0 0-.868.504l-3.428 6a1 1 0 0 0 0 .992"
      fill="#4485F9"
    />
    <path
      d="M8 10.5q.257 0 .5-.05V7h-1v3.45q.243.05.5.05M7 8v2.292A2.5 2.5 0 0 1 6 9.5V8zM9 10.292a2.5 2.5 0 0 0 1-.792V8H9z"
      fill="#fff"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M10.453 11.16a4 4 0 1 1 .707-.707l1.194 1.193a.5.5 0 0 1-.708.708zM11 8a3 3 0 1 1-6 0 3 3 0 0 1 6 0"
      fill="#fff"
    />
    <path
      opacity=".5"
      d="M15.148 9.491 10.87 5.213C11.57 5.933 12 6.917 12 8c0 .924-.313 1.776-.84 2.453l1.194 1.194a.5.5 0 1 1-.707.707l-1.194-1.194A4 4 0 0 1 8 12a3.99 3.99 0 0 1-2.787-1.13L9.343 15h2.077a1 1 0 0 0 .868-.504z"
      fill="#417BDC"
    />
  </svg>
);

const BigQueryDark: FC<SvgProps> = ({
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
      d="m.284 8.496 3.428 6A1 1 0 0 0 4.58 15h6.84a1 1 0 0 0 .868-.504l3.428-6a1 1 0 0 0 0-.992l-3.428-6A1 1 0 0 0 11.42 1H4.58a1 1 0 0 0-.868.504l-3.428 6a1 1 0 0 0 0 .992"
      fill="#4485F9"
    />
    <path
      d="M8 10.5q.257 0 .5-.05V7h-1v3.45q.243.05.5.05M7 8v2.292A2.5 2.5 0 0 1 6 9.5V8zM9 10.292a2.5 2.5 0 0 0 1-.792V8H9z"
      fill="#fff"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M10.453 11.16a4 4 0 1 1 .707-.707l1.194 1.193a.5.5 0 0 1-.708.708zM11 8a3 3 0 1 1-6 0 3 3 0 0 1 6 0"
      fill="#fff"
    />
    <path
      opacity=".5"
      d="M15.148 9.491 10.87 5.213C11.57 5.933 12 6.917 12 8c0 .924-.313 1.776-.84 2.453l1.194 1.194a.5.5 0 1 1-.707.707l-1.194-1.194A4 4 0 0 1 8 12a3.99 3.99 0 0 1-2.787-1.13L9.343 15h2.077a1 1 0 0 0 .868-.504z"
      fill="#417BDC"
    />
  </svg>
);

export const BigQuery: FC<BigQueryProps> = ({
  size = 'md',
  mode = 'light',
  className,
  'aria-label': ariaLabel,
  title,
  ...props
}) => {
  const SvgComponent = mode === 'light' ? BigQueryLight : BigQueryDark;

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
