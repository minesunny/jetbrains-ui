import React from 'react';
import { cn } from '@/lib/utils';
import { type IconProps, type SvgProps, sizeMap } from '../../types';

export type InnerClassProps = IconProps;

const InnerClassLight: React.FC<SvgProps> = ({
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
    <circle cx="8" cy="8" r="6.5" fill="#EDF3FF" stroke="#3574F0" />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M10 4.5v1H8.5v5H10v1H6v-1h1.5v-5H6v-1h4"
      fill="#3574F0"
    />
  </svg>
);

const InnerClassDark: React.FC<SvgProps> = ({
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
    <circle cx="8" cy="8" r="6.5" fill="#25324D" stroke="#548AF7" />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M10 4.5v1H8.5v5H10v1H6v-1h1.5v-5H6v-1h4"
      fill="#548AF7"
    />
  </svg>
);

export const InnerClass: React.FC<InnerClassProps> = ({
  size = 'md',
  mode = 'light',
  className,
  'aria-label': ariaLabel,
  title,
  ...props
}) => {
  const SvgComponent = mode === 'light' ? InnerClassLight : InnerClassDark;

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
