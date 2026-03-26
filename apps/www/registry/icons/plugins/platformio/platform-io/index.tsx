import React from 'react';
import { cn } from '@/lib/utils';
import { type IconProps, type SvgProps, sizeMap } from '../../types';

export type PlatformIOProps = IconProps;

const PlatformIOLight: React.FC<SvgProps> = ({
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
      d="M7.992 15V3.706a9.3 9.3 0 0 1 2.181.27l.415-1.44a.81.81 0 0 1-.41-.7.845.845 0 0 1 1.69 0 .827.827 0 0 1-.77.813l-.421 1.468c1.6.505 3.321 1.629 3.321 4.132-.012 3.495-4.89 6.75-6.006 6.75"
      fill="#CE6117"
    />
    <path
      d="M9.504 11.302c-.95-1.469-.55-4.889 1.937-5.377a1.62 1.62 0 0 1 1.762 1.288c.62 2.04-3.032 4.895-3.699 4.09"
      fill="#fff"
    />
    <path
      d="M10.997 8.154a.745.745 0 1 0 .77.745.76.76 0 0 0-.77-.745"
      fill="#CE6117"
    />
    <path
      d="m5.805 4.01-.412-1.497a.81.81 0 0 0 .392-.689.845.845 0 0 0-1.69 0 .83.83 0 0 0 .841.817l.412 1.5C3.742 4.654 2 5.783 2 8.248c.035 3.563 4.88 6.75 5.994 6.75V3.707a9.5 9.5 0 0 0-2.189.304"
      fill="#E66D17"
    />
    <path
      d="M6.653 11.303c-.666.807-4.32-2.05-3.7-4.09a1.62 1.62 0 0 1 1.765-1.288c2.486.489 2.888 3.908 1.937 5.379z"
      fill="#fff"
    />
    <path
      d="M5.115 8.177a.745.745 0 1 0 .77.744.76.76 0 0 0-.77-.744"
      fill="#E66D17"
    />
  </svg>
);

const PlatformIODark: React.FC<SvgProps> = ({
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
      d="M7.992 15V3.706a9.3 9.3 0 0 1 2.181.27l.415-1.44a.81.81 0 0 1-.41-.7.845.845 0 0 1 1.69 0 .827.827 0 0 1-.77.813l-.421 1.468c1.6.505 3.321 1.629 3.321 4.132-.012 3.495-4.89 6.75-6.006 6.75"
      fill="#A36B4E"
    />
    <path
      d="M9.504 11.302c-.95-1.469-.55-4.889 1.937-5.377a1.62 1.62 0 0 1 1.762 1.288c.62 2.04-3.032 4.895-3.699 4.09"
      fill="#fff"
    />
    <path
      d="M10.997 8.154a.745.745 0 1 0 .77.745.76.76 0 0 0-.77-.745"
      fill="#A36B4E"
    />
    <path
      d="m5.805 4.01-.412-1.497a.81.81 0 0 0 .392-.689.845.845 0 0 0-1.69 0 .83.83 0 0 0 .841.817l.412 1.5C3.742 4.654 2 5.783 2 8.248c.035 3.563 4.88 6.75 5.994 6.75V3.707a9.5 9.5 0 0 0-2.189.304"
      fill="#C77D55"
    />
    <path
      d="M6.653 11.303c-.666.807-4.32-2.05-3.7-4.09a1.62 1.62 0 0 1 1.765-1.288c2.486.489 2.888 3.908 1.937 5.379z"
      fill="#fff"
    />
    <path
      d="M5.115 8.177a.745.745 0 1 0 .77.744.76.76 0 0 0-.77-.744"
      fill="#C77D55"
    />
  </svg>
);

export const PlatformIO: React.FC<PlatformIOProps> = ({
  size = 'md',
  mode = 'light',
  className,
  'aria-label': ariaLabel,
  title,
  ...props
}) => {
  const SvgComponent = mode === 'light' ? PlatformIOLight : PlatformIODark;

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
