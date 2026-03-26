import React from 'react';
import { cn } from '@/lib/utils';
import { type IconProps, type SvgProps, sizeMap } from '../../types';

export type ClassProps = IconProps;

const ClassLight: React.FC<SvgProps> = ({
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
      fill="#EDF3FF"
    />
    <path
      d="M14.967 8.683Q15 8.345 15 8a7 7 0 1 0-6.099 6.943 5 5 0 0 1-.096-.17l-.001-.002a4.5 4.5 0 0 1-.331-.79 6 6 0 1 1 5.523-5.759q.256.085.503.204.245.115.468.257"
      fill="#3574F0"
    />
    <path
      d="M8.352 11.494a4 4 0 0 1-.22.006c-1.918 0-3.344-1.494-3.344-3.5s1.426-3.5 3.345-3.5c1.489 0 2.765.9 3.08 2.175h-1.016c-.314-.73-1.092-1.252-2.064-1.252-1.34 0-2.306 1.074-2.306 2.577s.967 2.577 2.306 2.577q.276 0 .529-.054-.21.466-.31.97"
      fill="#3574F0"
    />
  </svg>
);

const ClassDark: React.FC<SvgProps> = ({
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
      fill="#25324D"
    />
    <path
      d="M14.967 8.683Q15 8.345 15 8a7 7 0 1 0-6.099 6.943 5 5 0 0 1-.096-.17l-.001-.002a4.5 4.5 0 0 1-.331-.79 6 6 0 1 1 5.523-5.759q.256.085.503.204.245.115.468.257"
      fill="#548AF7"
    />
    <path
      d="M8.352 11.494a4 4 0 0 1-.22.006c-1.918 0-3.344-1.494-3.344-3.5s1.426-3.5 3.345-3.5c1.489 0 2.765.9 3.08 2.175h-1.016c-.314-.73-1.092-1.252-2.064-1.252-1.34 0-2.306 1.074-2.306 2.577s.967 2.577 2.306 2.577q.276 0 .529-.054-.21.466-.31.97"
      fill="#548AF7"
    />
  </svg>
);

export const Class: React.FC<ClassProps> = ({
  size = 'md',
  mode = 'light',
  className,
  'aria-label': ariaLabel,
  title,
  ...props
}) => {
  const SvgComponent = mode === 'light' ? ClassLight : ClassDark;

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
