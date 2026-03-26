import React from 'react';
import { cn } from '@/lib/utils';
import { type IconProps, type SvgProps, sizeMap } from '../../types';

export type ClassInitializerProps = IconProps;

const ClassInitializerLight: React.FC<SvgProps> = ({
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
      d="M10.875 15.55q.759.45 1.707.45a3.3 3.3 0 0 0 1.624-.401q.725-.406 1.131-1.117.411-.715.411-1.605v-.541h-2.78v.962h1.61a1.7 1.7 0 0 1-.275.807q-.261.396-.71.619a2.24 2.24 0 0 1-.997.217q-.613 0-1.102-.31a2.15 2.15 0 0 1-.764-.864q-.27-.556-.27-1.267t.27-1.262q.276-.556.76-.865.487-.315 1.097-.314.483 0 .899.188.42.189.696.508.28.319.362.71h1.165a2.5 2.5 0 0 0-.517-1.247 3 3 0 0 0-1.121-.89A3.4 3.4 0 0 0 12.58 9q-.946 0-1.706.454-.759.45-1.189 1.252-.43.798-.43 1.794t.43 1.798a3.2 3.2 0 0 0 1.19 1.252"
      fill="#208A3C"
    />
    <path
      d="M14.967 8.683Q15 8.345 15 8a7 7 0 1 0-6.099 6.943 5 5 0 0 1-.096-.17l-.001-.002a4.74 4.74 0 0 1-.549-2.271c0-.812.177-1.576.55-2.267.37-.69.891-1.242 1.558-1.638A4.26 4.26 0 0 1 12.58 8a4.4 4.4 0 0 1 2.386.683"
      fill="#FFF4EB"
    />
    <path
      d="M14.967 8.683Q15 8.345 15 8a7 7 0 1 0-6.099 6.943 5 5 0 0 1-.096-.17l-.001-.002a4.5 4.5 0 0 1-.331-.79 6 6 0 1 1 5.523-5.759q.256.085.503.204.245.115.468.257"
      fill="#E66D17"
    />
    <path
      d="M9.794 9a4.2 4.2 0 0 0-.856 1H5a.5.5 0 1 1 0-1zM4.5 6.5A.5.5 0 0 1 5 6h6a.5.5 0 0 1 0 1H5a.5.5 0 0 1-.5-.5"
      fill="#E66D17"
    />
  </svg>
);

const ClassInitializerDark: React.FC<SvgProps> = ({
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
      d="M10.875 15.55q.759.45 1.707.45a3.3 3.3 0 0 0 1.624-.401q.725-.406 1.131-1.117.411-.715.411-1.605v-.541h-2.78v.962h1.61a1.7 1.7 0 0 1-.275.807q-.261.396-.71.619a2.24 2.24 0 0 1-.997.217q-.613 0-1.102-.31a2.15 2.15 0 0 1-.764-.864q-.27-.556-.27-1.267t.27-1.262q.276-.556.76-.865.487-.315 1.097-.314.483 0 .899.188.42.189.696.508.28.319.362.71h1.165a2.5 2.5 0 0 0-.517-1.247 3 3 0 0 0-1.121-.89A3.4 3.4 0 0 0 12.58 9q-.946 0-1.706.454-.759.45-1.189 1.252-.43.798-.43 1.794t.43 1.798a3.2 3.2 0 0 0 1.19 1.252"
      fill="#57965C"
    />
    <path
      d="M14.967 8.683Q15 8.345 15 8a7 7 0 1 0-6.099 6.943 5 5 0 0 1-.096-.17l-.001-.002a4.74 4.74 0 0 1-.549-2.271c0-.812.177-1.576.55-2.267.37-.69.891-1.242 1.558-1.638A4.26 4.26 0 0 1 12.58 8a4.4 4.4 0 0 1 2.386.683"
      fill="#45322B"
    />
    <path
      d="M14.967 8.683Q15 8.345 15 8a7 7 0 1 0-6.099 6.943 5 5 0 0 1-.096-.17l-.001-.002a4.5 4.5 0 0 1-.331-.79 6 6 0 1 1 5.523-5.759q.256.085.503.204.245.115.468.257"
      fill="#C77D55"
    />
    <path
      d="M9.794 9a4.2 4.2 0 0 0-.856 1H5a.5.5 0 1 1 0-1zM4.5 6.5A.5.5 0 0 1 5 6h6a.5.5 0 0 1 0 1H5a.5.5 0 0 1-.5-.5"
      fill="#C77D55"
    />
  </svg>
);

export const ClassInitializer: React.FC<ClassInitializerProps> = ({
  size = 'md',
  mode = 'light',
  className,
  'aria-label': ariaLabel,
  title,
  ...props
}) => {
  const SvgComponent =
    mode === 'light' ? ClassInitializerLight : ClassInitializerDark;

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
