import React from 'react';
import { cn } from '@/lib/utils';
import { type IconProps, type SvgProps, sizeMap } from '../../types';

export type ClassCppProps = IconProps;

const ClassCppLight: React.FC<SvgProps> = ({
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
    <rect
      x="2.5"
      y="2.5"
      width="11"
      height="11"
      rx="1.5"
      fill="#FAF5FF"
      stroke="#834DF0"
    />
    <path
      d="M8.134 11.5c1.49 0 2.766-.9 3.08-2.175h-1.015c-.315.73-1.093 1.252-2.065 1.252-1.339 0-2.306-1.074-2.306-2.577s.967-2.577 2.306-2.577c.972 0 1.75.522 2.065 1.252h1.015C10.9 5.4 9.624 4.5 8.134 4.5 6.215 4.5 4.79 5.994 4.79 8s1.426 3.5 3.345 3.5"
      fill="#834DF0"
    />
  </svg>
);

const ClassCppDark: React.FC<SvgProps> = ({
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
    <rect
      x="2.5"
      y="2.5"
      width="11"
      height="11"
      rx="1.5"
      fill="#2F2936"
      stroke="#B589EC"
    />
    <path
      d="M8.134 11.5c1.49 0 2.766-.9 3.08-2.175h-1.015c-.315.73-1.093 1.252-2.065 1.252-1.339 0-2.306-1.074-2.306-2.577s.967-2.577 2.306-2.577c.972 0 1.75.522 2.065 1.252h1.015C10.9 5.4 9.624 4.5 8.134 4.5 6.215 4.5 4.79 5.994 4.79 8s1.426 3.5 3.345 3.5"
      fill="#B589EC"
    />
  </svg>
);

export const ClassCpp: React.FC<ClassCppProps> = ({
  size = 'md',
  mode = 'light',
  className,
  'aria-label': ariaLabel,
  title,
  ...props
}) => {
  const SvgComponent = mode === 'light' ? ClassCppLight : ClassCppDark;

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
