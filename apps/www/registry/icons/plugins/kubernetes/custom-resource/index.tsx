import React from 'react';
import { cn } from '@/lib/utils';
import { type IconProps, type SvgProps, sizeMap } from '../../types';

export type CustomResourceProps = IconProps;

const CustomResourceLight: React.FC<SvgProps> = ({
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
      d="M5.5 2.5a2 2 0 1 1 4 0v1h3v3h1a2 2 0 1 1 0 4h-1v3h-10v-3h1a2 2 0 1 0 0-4h-1v-3h3z"
      fill="#EDF3FF"
    />
    <path
      d="M9.5 3.5H9a.5.5 0 0 0 .5.5zm3 0h.5a.5.5 0 0 0-.5-.5zm0 3H12a.5.5 0 0 0 .5.5zm0 4V10a.5.5 0 0 0-.5.5zm0 3v.5a.5.5 0 0 0 .5-.5zm-10 0H2a.5.5 0 0 0 .5.5zm3-10V4a.5.5 0 0 0 .5-.5zm-3 0V3a.5.5 0 0 0-.5.5zm0 3H2a.5.5 0 0 0 .5.5zm0 4V10a.5.5 0 0 0-.5.5zM7.5 0A2.5 2.5 0 0 0 5 2.5h1A1.5 1.5 0 0 1 7.5 1zM10 2.5A2.5 2.5 0 0 0 7.5 0v1A1.5 1.5 0 0 1 9 2.5zm0 1v-1H9v1zm2.5-.5h-3v1h3zm.5 3.5v-3h-1v3zm-.5.5h1V6h-1zm1 0A1.5 1.5 0 0 1 15 8.5h1A2.5 2.5 0 0 0 13.5 6zM15 8.5a1.5 1.5 0 0 1-1.5 1.5v1A2.5 2.5 0 0 0 16 8.5zM13.5 10h-1v1h1zm-.5 3.5v-3h-1v3zM2.5 14h10v-1h-10zm3-11h-3v1h3zM5 2.5v1h1v-1zm-3 1v3h1v-3zm0 7v3h1v-3zM2.5 7h1V6h-1zm1 3h-1v1h1zM5 8.5A1.5 1.5 0 0 1 3.5 10v1A2.5 2.5 0 0 0 6 8.5zM3.5 7A1.5 1.5 0 0 1 5 8.5h1A2.5 2.5 0 0 0 3.5 6z"
      fill="#3574F0"
    />
  </svg>
);

const CustomResourceDark: React.FC<SvgProps> = ({
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
      d="M5.5 2.5a2 2 0 1 1 4 0v1h3v3h1a2 2 0 1 1 0 4h-1v3h-10v-3h1a2 2 0 1 0 0-4h-1v-3h3z"
      fill="#25324D"
    />
    <path
      d="M9.5 3.5H9a.5.5 0 0 0 .5.5zm3 0h.5a.5.5 0 0 0-.5-.5zm0 3H12a.5.5 0 0 0 .5.5zm0 4V10a.5.5 0 0 0-.5.5zm0 3v.5a.5.5 0 0 0 .5-.5zm-10 0H2a.5.5 0 0 0 .5.5zm3-10V4a.5.5 0 0 0 .5-.5zm-3 0V3a.5.5 0 0 0-.5.5zm0 3H2a.5.5 0 0 0 .5.5zm0 4V10a.5.5 0 0 0-.5.5zM7.5 0A2.5 2.5 0 0 0 5 2.5h1A1.5 1.5 0 0 1 7.5 1zM10 2.5A2.5 2.5 0 0 0 7.5 0v1A1.5 1.5 0 0 1 9 2.5zm0 1v-1H9v1zm2.5-.5h-3v1h3zm.5 3.5v-3h-1v3zm-.5.5h1V6h-1zm1 0A1.5 1.5 0 0 1 15 8.5h1A2.5 2.5 0 0 0 13.5 6zM15 8.5a1.5 1.5 0 0 1-1.5 1.5v1A2.5 2.5 0 0 0 16 8.5zM13.5 10h-1v1h1zm-.5 3.5v-3h-1v3zM2.5 14h10v-1h-10zm3-11h-3v1h3zM5 2.5v1h1v-1zm-3 1v3h1v-3zm0 7v3h1v-3zM2.5 7h1V6h-1zm1 3h-1v1h1zM5 8.5A1.5 1.5 0 0 1 3.5 10v1A2.5 2.5 0 0 0 6 8.5zM3.5 7A1.5 1.5 0 0 1 5 8.5h1A2.5 2.5 0 0 0 3.5 6z"
      fill="#548AF7"
    />
  </svg>
);

export const CustomResource: React.FC<CustomResourceProps> = ({
  size = 'md',
  mode = 'light',
  className,
  'aria-label': ariaLabel,
  title,
  ...props
}) => {
  const SvgComponent =
    mode === 'light' ? CustomResourceLight : CustomResourceDark;

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
