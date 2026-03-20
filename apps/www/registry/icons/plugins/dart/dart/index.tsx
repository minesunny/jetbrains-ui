import React from 'react';
import { cn } from '@/lib/utils';
import { type IconProps, type SvgProps, sizeMap } from '../../types';

export type DartProps = IconProps;

const DartLight: React.FC<SvgProps> = ({
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
      d="m3.38 10.272-.007-6.898-2.182 4.552c-.255.543-.363 1.207.382 1.95l2.138 2.139c-.379-.38-.327-.998-.332-1.744m9.146-6.05-.511-.511c-.38-.38-.997-.327-1.743-.332l-6.899-.005L12 12h3V6.697z"
      fill="#01579B"
    />
    <path
      d="m3.375 3.373 6.897.006h.258c.63-.001 1.152-.003 1.486.332L9.878 1.573C9.134.829 8.47.936 7.926 1.191zM12.001 12 3.375 3.373l.006 6.898v.257c-.001.631-.002 1.152.332 1.486l.51.512L6.697 15H12z"
      fill="#29B6F6"
    />
  </svg>
);

const DartDark: React.FC<SvgProps> = ({
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
      d="m3.38 10.272-.007-6.898-2.182 4.552c-.255.543-.363 1.207.382 1.95l2.138 2.139c-.379-.38-.327-.998-.332-1.744m9.146-6.05-.511-.511c-.38-.38-.997-.327-1.743-.332l-6.899-.005L12 12h3V6.697z"
      fill="#01579B"
    />
    <path
      d="m3.375 3.373 6.897.006h.258c.63-.001 1.152-.003 1.486.332L9.878 1.573C9.134.829 8.47.936 7.926 1.191zM12.001 12 3.375 3.373l.006 6.898v.257c-.001.631-.002 1.152.332 1.486l.51.512L6.697 15H12z"
      fill="#29B6F6"
    />
  </svg>
);

export const Dart: React.FC<DartProps> = ({
  size = 'md',
  mode = 'light',
  className,
  'aria-label': ariaLabel,
  title,
  ...props
}) => {
  const SvgComponent = mode === 'light' ? DartLight : DartDark;

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
