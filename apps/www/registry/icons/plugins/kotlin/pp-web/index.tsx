import React from 'react';
import { cn } from '@/lib/utils';
import { type IconProps, type SvgProps, sizeMap } from '../../types';

export type PpWebProps = IconProps;

const PpWebLight: React.FC<SvgProps> = ({
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
      fillRule="evenodd"
      clipRule="evenodd"
      d="M8 1a7 7 0 1 1 0 14A7 7 0 0 1 8 1m0 13c.076 0 .232-.032.465-.262.238-.234.497-.623.737-1.182.191-.446.357-.97.487-1.556H6.311c.13.586.296 1.11.487 1.556.24.56.5.948.737 1.182.233.23.389.262.465.262m-1.867-4A15 15 0 0 1 6 8c0-.705.047-1.376.133-2h3.734c.086.624.133 1.295.133 2s-.047 1.376-.133 2zm4.578 1c-.226 1.11-.573 2.058-1.001 2.753A6.02 6.02 0 0 0 13.197 11zm2.948-1h-2.783c.08-.634.124-1.305.124-2s-.043-1.366-.124-2h2.783A6 6 0 0 1 14 8a6 6 0 0 1-.341 2m-8.535 0H2.341A6 6 0 0 1 2 8c0-.701.12-1.374.341-2h2.783C5.044 6.634 5 7.305 5 8s.043 1.366.124 2m-2.321 1h2.486c.226 1.11.573 2.058 1.001 2.753A6.02 6.02 0 0 1 2.803 11M6.31 5H9.69a9 9 0 0 0-.487-1.556c-.24-.56-.5-.948-.737-1.182C8.232 2.032 8.076 2 8 2s-.232.032-.465.262c-.238.234-.497.623-.737 1.182A9 9 0 0 0 6.31 5m4.4 0h2.486A6.02 6.02 0 0 0 9.71 2.247c.428.695.775 1.644 1.001 2.753m-4.42-2.753C5.86 2.942 5.514 3.891 5.288 5H2.803A6.02 6.02 0 0 1 6.29 2.247"
      fill="#6C707E"
    />
  </svg>
);

const PpWebDark: React.FC<SvgProps> = ({
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
      fillRule="evenodd"
      clipRule="evenodd"
      d="M8 1a7 7 0 1 1 0 14A7 7 0 0 1 8 1m0 13c.076 0 .232-.032.465-.262.238-.234.497-.623.737-1.182.191-.446.357-.97.487-1.556H6.311c.13.586.296 1.11.487 1.556.24.56.5.948.737 1.182.233.23.389.262.465.262m-1.867-4A15 15 0 0 1 6 8c0-.705.047-1.376.133-2h3.734c.086.624.133 1.295.133 2s-.047 1.376-.133 2zm4.578 1c-.226 1.11-.573 2.058-1.001 2.753A6.02 6.02 0 0 0 13.197 11zm2.948-1h-2.783c.08-.634.124-1.305.124-2s-.043-1.366-.124-2h2.783A6 6 0 0 1 14 8a6 6 0 0 1-.341 2m-8.535 0H2.341A6 6 0 0 1 2 8c0-.701.12-1.374.341-2h2.783C5.044 6.634 5 7.305 5 8s.043 1.366.124 2m-2.321 1h2.486c.226 1.11.573 2.058 1.001 2.753A6.02 6.02 0 0 1 2.803 11M6.31 5H9.69a9 9 0 0 0-.487-1.556c-.24-.56-.5-.948-.737-1.182C8.232 2.032 8.076 2 8 2s-.232.032-.465.262c-.238.234-.497.623-.737 1.182A9 9 0 0 0 6.31 5m4.4 0h2.486A6.02 6.02 0 0 0 9.71 2.247c.428.695.775 1.644 1.001 2.753m-4.42-2.753C5.86 2.942 5.514 3.891 5.288 5H2.803A6.02 6.02 0 0 1 6.29 2.247"
      fill="#CED0D6"
    />
  </svg>
);

export const PpWeb: React.FC<PpWebProps> = ({
  size = 'md',
  mode = 'light',
  className,
  'aria-label': ariaLabel,
  title,
  ...props
}) => {
  const SvgComponent = mode === 'light' ? PpWebLight : PpWebDark;

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
