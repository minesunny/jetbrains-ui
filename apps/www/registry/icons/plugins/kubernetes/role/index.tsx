import React from 'react';
import { cn } from '@/lib/utils';
import { type IconProps, type SvgProps, sizeMap } from '../../types';

export type RoleProps = IconProps;

const RoleLight: React.FC<SvgProps> = ({
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
    <path d="m4 5 4-1.5L12 5v3c0 3-4 5-4 5s-4-2-4-5z" fill="#EBECF0" />
    <path
      d="M4 3a1 1 0 0 0-1 1v1.5a.5.5 0 0 1-1 0V4a2 2 0 0 1 2-2h1.5a.5.5 0 0 1 0 1zM13 5.5V4a1 1 0 0 0-1-1h-1.5a.5.5 0 0 1 0-1H12a2 2 0 0 1 2 2v1.5a.5.5 0 0 1-1 0M12 13h-1.5a.5.5 0 0 0 0 1H12a2 2 0 0 0 2-2v-1.5a.5.5 0 0 0-1 0V12a1 1 0 0 1-1 1M3 12a1 1 0 0 0 1 1h1.5a.5.5 0 0 1 0 1H4a2 2 0 0 1-2-2v-1.5a.5.5 0 0 1 1 0z"
      fill="#6C707E"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12 8c0 3-4 5-4 5s-4-2-4-5V5l4-1.5L12 5zM5 8V5.693l3-1.125 3 1.125V8c0 1.054-.718 2.05-1.658 2.872a10 10 0 0 1-1.342.98l-.095-.06a10 10 0 0 1-1.247-.92C5.719 10.05 5 9.054 5 8"
      fill="#6C707E"
    />
  </svg>
);

const RoleDark: React.FC<SvgProps> = ({
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
    <path d="m4 5 4-1.5L12 5v3c0 3-4 5-4 5s-4-2-4-5z" fill="#43454A" />
    <path
      d="M4 3a1 1 0 0 0-1 1v1.5a.5.5 0 0 1-1 0V4a2 2 0 0 1 2-2h1.5a.5.5 0 0 1 0 1zM13 5.5V4a1 1 0 0 0-1-1h-1.5a.5.5 0 0 1 0-1H12a2 2 0 0 1 2 2v1.5a.5.5 0 0 1-1 0M12 13h-1.5a.5.5 0 0 0 0 1H12a2 2 0 0 0 2-2v-1.5a.5.5 0 0 0-1 0V12a1 1 0 0 1-1 1M3 12a1 1 0 0 0 1 1h1.5a.5.5 0 0 1 0 1H4a2 2 0 0 1-2-2v-1.5a.5.5 0 0 1 1 0z"
      fill="#CED0D6"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12 8c0 3-4 5-4 5s-4-2-4-5V5l4-1.5L12 5zM5 8V5.693l3-1.125 3 1.125V8c0 1.054-.718 2.05-1.658 2.872a10 10 0 0 1-1.342.98l-.095-.06a10 10 0 0 1-1.247-.92C5.719 10.05 5 9.054 5 8"
      fill="#CED0D6"
    />
  </svg>
);

export const Role: React.FC<RoleProps> = ({
  size = 'md',
  mode = 'light',
  className,
  'aria-label': ariaLabel,
  title,
  ...props
}) => {
  const SvgComponent = mode === 'light' ? RoleLight : RoleDark;

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
