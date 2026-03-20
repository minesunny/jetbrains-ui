import React from 'react';
import { cn } from '@/lib/utils';
import { type IconProps, type SvgProps, sizeMap } from '../../types';

export type JsProps = IconProps;

const JsLight: React.FC<SvgProps> = ({
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
      d="M14 4a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2z"
      fill="#FFAF0F"
    />
    <path
      d="M9.554 11.86q.492.23 1.129.23.633 0 1.124-.235t.765-.646q.274-.414.274-.927a1.76 1.76 0 0 0-.722-1.428 1.8 1.8 0 0 0-.783-.33l-.996-.162a.82.82 0 0 1-.491-.26.74.74 0 0 1-.189-.505q0-.247.129-.436a.83.83 0 0 1 .359-.29q.231-.104.534-.103.303 0 .535.107a.84.84 0 0 1 .359.303.77.77 0 0 1 .128.436h1.013a1.6 1.6 0 0 0-.265-.889 1.74 1.74 0 0 0-.727-.607 2.44 2.44 0 0 0-1.056-.218q-.58 0-1.043.226a1.75 1.75 0 0 0-.722.62 1.6 1.6 0 0 0-.257.89q0 .414.171.765.175.345.496.577.32.23.757.308l1.013.17q.333.057.534.3.201.24.201.573a.8.8 0 0 1-.14.47.9.9 0 0 1-.394.312q-.257.111-.594.111-.346 0-.616-.12a1 1 0 0 1-.415-.346.9.9 0 0 1-.15-.504H8.504q.004.538.282.957.278.416.77.65M5.222 11h-1.01v1H5.32q.492 0 .872-.205.381-.21.594-.582.214-.372.214-.855V6H6v4.222a.84.84 0 0 1-.098.41.67.67 0 0 1-.274.274.85.85 0 0 1-.406.094"
      fill="#000"
    />
  </svg>
);

const JsDark: React.FC<SvgProps> = ({
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
      d="M14 4a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2z"
      fill="#F2C55C"
    />
    <path
      d="M9.554 11.86q.492.23 1.129.23.633 0 1.124-.235t.765-.646q.274-.414.274-.927a1.76 1.76 0 0 0-.722-1.428 1.8 1.8 0 0 0-.783-.33l-.996-.162a.82.82 0 0 1-.491-.26.74.74 0 0 1-.189-.505q0-.247.129-.436a.83.83 0 0 1 .359-.29q.231-.104.534-.103.303 0 .535.107a.84.84 0 0 1 .359.303.77.77 0 0 1 .128.436h1.013a1.6 1.6 0 0 0-.265-.889 1.74 1.74 0 0 0-.727-.607 2.44 2.44 0 0 0-1.056-.218q-.58 0-1.043.226a1.75 1.75 0 0 0-.722.62 1.6 1.6 0 0 0-.257.89q0 .414.171.765.175.345.496.577.32.23.757.308l1.013.17q.333.057.534.3.201.24.201.573a.8.8 0 0 1-.14.47.9.9 0 0 1-.394.312q-.257.111-.594.111-.346 0-.616-.12a1 1 0 0 1-.415-.346.9.9 0 0 1-.15-.504H8.504q.004.538.282.957.278.416.77.65M5.222 11h-1.01v1H5.32q.492 0 .872-.205.381-.21.594-.582.214-.372.214-.855V6H6v4.222a.84.84 0 0 1-.098.41.67.67 0 0 1-.274.274.85.85 0 0 1-.406.094"
      fill="#1E1F22"
    />
  </svg>
);

export const Js: React.FC<JsProps> = ({
  size = 'md',
  mode = 'light',
  className,
  'aria-label': ariaLabel,
  title,
  ...props
}) => {
  const SvgComponent = mode === 'light' ? JsLight : JsDark;

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
