import React from 'react';
import { cn } from '@/lib/utils';
import { type IconProps, type SvgProps, sizeMap } from '../../types';

export type ClassKotlinProps = IconProps;

const ClassKotlinLight: React.FC<SvgProps> = ({
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
      d="M10 10h4.645l-1.97 1.97a.75.75 0 0 0 0 1.06l1.97 1.97H10z"
      fill="#FAF5FF"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M9 10a1 1 0 0 1 1-1h5.248a.75.75 0 0 1 .53 1.28l-2.22 2.22 2.22 2.22a.75.75 0 0 1-.53 1.28H10a1 1 0 0 1-1-1zm5.645 0H10v5h4.645l-1.97-1.97a.75.75 0 0 1 0-1.06z"
      fill="#834DF0"
    />
    <path d="M15 8a7 7 0 1 0-7 7v-5a2 2 0 0 1 2-2z" fill="#EDF3FF" />
    <path d="M8 15a7 7 0 1 1 7-7h-1a6 6 0 1 0-6 6z" fill="#3574F0" />
    <path
      d="M8 10.573C6.73 10.505 5.826 9.453 5.826 8c0-1.503.967-2.577 2.306-2.577.972 0 1.75.522 2.065 1.252h1.015C10.898 5.4 9.622 4.5 8.132 4.5 6.213 4.5 4.787 5.994 4.787 8c0 1.96 1.361 3.43 3.213 3.498z"
      fill="#3574F0"
    />
  </svg>
);

const ClassKotlinDark: React.FC<SvgProps> = ({
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
      d="M10 10h4.645l-1.97 1.97a.75.75 0 0 0 0 1.06l1.97 1.97H10z"
      fill="#2F2936"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M9 10a1 1 0 0 1 1-1h5.248a.75.75 0 0 1 .53 1.28l-2.22 2.22 2.22 2.22a.75.75 0 0 1-.53 1.28H10a1 1 0 0 1-1-1zm5.645 0H10v5h4.645l-1.97-1.97a.75.75 0 0 1 0-1.06z"
      fill="#A571E6"
    />
    <path d="M15 8a7 7 0 1 0-7 7v-5a2 2 0 0 1 2-2z" fill="#25324D" />
    <path d="M8 15a7 7 0 1 1 7-7h-1a6 6 0 1 0-6 6z" fill="#548AF7" />
    <path
      d="M8 10.573C6.73 10.505 5.826 9.453 5.826 8c0-1.503.967-2.577 2.306-2.577.972 0 1.75.522 2.065 1.252h1.015C10.898 5.4 9.622 4.5 8.132 4.5 6.213 4.5 4.787 5.994 4.787 8c0 1.96 1.361 3.43 3.213 3.498z"
      fill="#548AF7"
    />
  </svg>
);

export const ClassKotlin: React.FC<ClassKotlinProps> = ({
  size = 'md',
  mode = 'light',
  className,
  'aria-label': ariaLabel,
  title,
  ...props
}) => {
  const SvgComponent = mode === 'light' ? ClassKotlinLight : ClassKotlinDark;

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
