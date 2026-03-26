import React from 'react';
import { cn } from '@/lib/utils';
import { type IconProps, type SvgProps, sizeMap } from '../../types';

export type RendererKitProps = IconProps;

const RendererKitLight: React.FC<SvgProps> = ({
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
      d="M5 15v-3l6.703-6.703a1 1 0 0 1 1.414 0l1.586 1.586a1 1 0 0 1 0 1.414L8 15zm1-1v-1.586l4.354-4.353 1.585 1.585L7.586 14zm6.646-5.06 1.35-1.35-1.586-1.586-1.35 1.35z"
      fill="#6C707E"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M1 11V8l6.703-6.703a1 1 0 0 1 1.414 0l1.586 1.586a1 1 0 0 1 0 1.414L4 11zm1-1V8.414l4.354-4.353 1.585 1.585L3.586 10zm6.646-5.06 1.35-1.35L8.41 2.004l-1.35 1.35z"
      fill="#208A3C"
    />
  </svg>
);

const RendererKitDark: React.FC<SvgProps> = ({
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
    viewBox="0 0 17 16"
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
      d="M6 15v-3l6.703-6.703a1 1 0 0 1 1.414 0l1.586 1.586a1 1 0 0 1 0 1.414L9 15zm1-1v-1.586l4.354-4.353 1.585 1.585L8.586 14zm6.646-5.06 1.35-1.35-1.586-1.586-1.35 1.35z"
      fill="#CED0D6"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M2 11V8l6.703-6.703a1 1 0 0 1 1.414 0l1.586 1.586a1 1 0 0 1 0 1.414L5 11zm1-1V8.414l4.354-4.353 1.585 1.585L4.586 10zm6.646-5.06 1.35-1.35L9.41 2.004l-1.35 1.35z"
      fill="#57965C"
    />
  </svg>
);

export const RendererKit: React.FC<RendererKitProps> = ({
  size = 'md',
  mode = 'light',
  className,
  'aria-label': ariaLabel,
  title,
  ...props
}) => {
  const SvgComponent = mode === 'light' ? RendererKitLight : RendererKitDark;

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
