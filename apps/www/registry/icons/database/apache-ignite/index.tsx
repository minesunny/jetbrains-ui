import type { FC } from 'react';
import { cn } from '@/lib/utils';
import { type IconProps, type SvgProps, sizeMap } from '../types';

export type ApacheIgniteProps = IconProps;

const ApacheIgniteLight: FC<SvgProps> = ({
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
    {title ? <title>{title}</title> : null}
    <path
      d="M11.583 12.09s1.982-1.941.734-4.104c-.434-.753-.882-1.229-1.324-1.698-.52-.552-1.031-1.096-1.503-2.072C8.672 2.525 9.573 1 9.573 1S6.288 2.192 6.385 4.52C6.46 6.332 7.952 7.44 9.244 8.4c.41.306.8.596 1.12.89 1.219 1.122 1.219 2.8 1.219 2.8"
      fill="#ED1C24"
    />
    <path
      d="M10.28 10.301c1.359 1.927-.166 4.255-.166 4.255s-.167-1.247-1.927-2.495c-.64-.453-1.261-.823-1.835-1.165C4.715 9.92 3.465 9.176 3.28 7.39c-.205-1.99 2.606-3.7 2.606-3.7s-.82 1.193.111 2.647c.928 1.447 1.87 2.06 2.698 2.6.607.394 1.152.75 1.585 1.364"
      fill="#ED1C24"
    />
    <path
      d="M8.062 12.727C9.649 13.635 9.794 15 9.794 15s-.625-.597-1.78-.88a12.6 12.6 0 0 0-1.804-.297c-.752-.08-1.292-.139-1.967-.604-1.718-1.185-.284-3.098-.284-3.098s.095.682.776 1.15c.787.541 1.32.7 1.862.86.437.13.879.26 1.465.596"
      fill="#ED1C24"
    />
  </svg>
);

const ApacheIgniteDark: FC<SvgProps> = ({
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
    {title ? <title>{title}</title> : null}
    <path
      d="M11.583 12.09s1.982-1.941.734-4.104c-.434-.753-.882-1.229-1.324-1.698-.52-.552-1.031-1.096-1.503-2.072C8.672 2.525 9.573 1 9.573 1S6.288 2.192 6.385 4.52C6.46 6.332 7.952 7.44 9.244 8.4c.41.306.8.596 1.12.89 1.219 1.122 1.219 2.8 1.219 2.8"
      fill="#ED1C24"
    />
    <path
      d="M10.28 10.301c1.359 1.927-.166 4.255-.166 4.255s-.167-1.247-1.927-2.495c-.64-.453-1.261-.823-1.835-1.165C4.715 9.92 3.465 9.176 3.28 7.39c-.205-1.99 2.606-3.7 2.606-3.7s-.82 1.193.111 2.647c.928 1.447 1.87 2.06 2.698 2.6.607.394 1.152.75 1.585 1.364"
      fill="#ED1C24"
    />
    <path
      d="M8.062 12.727C9.649 13.635 9.794 15 9.794 15s-.625-.597-1.78-.88a12.6 12.6 0 0 0-1.804-.297c-.752-.08-1.292-.139-1.967-.604-1.718-1.185-.284-3.098-.284-3.098s.095.682.776 1.15c.787.541 1.32.7 1.862.86.437.13.879.26 1.465.596"
      fill="#ED1C24"
    />
  </svg>
);

export const ApacheIgnite: FC<ApacheIgniteProps> = ({
  size = 'md',
  mode = 'light',
  className,
  'aria-label': ariaLabel,
  title,
  ...props
}) => {
  const SvgComponent = mode === 'light' ? ApacheIgniteLight : ApacheIgniteDark;

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
