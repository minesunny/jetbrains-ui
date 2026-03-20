import React from 'react';
import { cn } from '@/lib/utils';
import { type IconProps, type SvgProps, sizeMap } from '../../types';

export type LombokFieldProps = IconProps;

const LombokFieldLight: React.FC<SvgProps> = ({
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
      d="M14.93 7H13.5A1.5 1.5 0 0 0 12 8.52V11a4 4 0 0 1-.6 2.108A4 4 0 0 1 8 15a7 7 0 1 1 6.93-8"
      fill="#FFF4EB"
    />
    <path
      d="M14.93 7A7.001 7.001 0 0 0 1 8a7 7 0 0 0 7 7v-1a6 6 0 1 1 5.917-7z"
      fill="#E66D17"
    />
    <path
      d="M7.257 12h1.017V7.327H9.83V6.43H8.274v-.95c0-.36.246-.606.6-.606H9.88V4H8.777c-.903 0-1.52.571-1.52 1.406V6.43H6.12v.897h1.137z"
      fill="#E66D17"
    />
    <path
      d="M15 10a1 1 0 0 1 1 1 5 5 0 0 1-5.836 4.93c-.208-.034-.219-.318-.028-.408A5 5 0 0 0 12.999 11a1 1 0 0 1 1-1z"
      fill="#E55765"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M13.5 9a.5.5 0 0 1 .5.5v.5h1v-.5A1.5 1.5 0 0 0 13.5 8a.5.5 0 0 0 0 1"
      fill="#55A76A"
    />
  </svg>
);

const LombokFieldDark: React.FC<SvgProps> = ({
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
      d="M14.93 7H13.5A1.5 1.5 0 0 0 12 8.52V11a4 4 0 0 1-.6 2.108A4 4 0 0 1 8 15a7 7 0 1 1 6.93-8"
      fill="#45322B"
    />
    <path
      d="M14.93 7A7.001 7.001 0 0 0 1 8a7 7 0 0 0 7 7v-1a6 6 0 1 1 5.917-7z"
      fill="#C77D55"
    />
    <path
      d="M7.257 12h1.017V7.327H9.83V6.43H8.274v-.95c0-.36.246-.606.6-.606H9.88V4H8.777c-.903 0-1.52.571-1.52 1.406V6.43H6.12v.897h1.137z"
      fill="#C77D55"
    />
    <path
      d="M15 10a1 1 0 0 1 1 1 5 5 0 0 1-5.836 4.93c-.208-.034-.219-.318-.028-.408A5 5 0 0 0 12.999 11a1 1 0 0 1 1-1z"
      fill="#DB5C5C"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M13.5 9a.5.5 0 0 1 .5.5v.5h1v-.5A1.5 1.5 0 0 0 13.5 8a.5.5 0 0 0 0 1"
      fill="#57965C"
    />
  </svg>
);

export const LombokField: React.FC<LombokFieldProps> = ({
  size = 'md',
  mode = 'light',
  className,
  'aria-label': ariaLabel,
  title,
  ...props
}) => {
  const SvgComponent = mode === 'light' ? LombokFieldLight : LombokFieldDark;

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
