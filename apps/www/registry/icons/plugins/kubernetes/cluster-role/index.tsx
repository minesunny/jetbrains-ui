import React from 'react';
import { cn } from '@/lib/utils';
import { type IconProps, type SvgProps, sizeMap } from '../../types';

export type ClusterRoleProps = IconProps;

const ClusterRoleLight: React.FC<SvgProps> = ({
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
      d="M13.5 3.833v5.346c0 1.571-.786 2.737-1.866 3.706-.802.718-1.786 1.342-2.73 1.937l-.904.58-.904-.58c-.944-.595-1.928-1.219-2.73-1.937C3.286 11.916 2.5 10.75 2.5 9.179V3.833L8 1.542z"
      fill="#EBECF0"
      stroke="#6C707E"
    />
  </svg>
);

const ClusterRoleDark: React.FC<SvgProps> = ({
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
      d="M13.5 3.833v5.346c0 1.571-.786 2.737-1.866 3.706-.802.718-1.786 1.342-2.73 1.937l-.904.58-.904-.58c-.944-.595-1.928-1.219-2.73-1.937C3.286 11.916 2.5 10.75 2.5 9.179V3.833L8 1.542z"
      fill="#43454A"
      stroke="#CED0D6"
    />
  </svg>
);

export const ClusterRole: React.FC<ClusterRoleProps> = ({
  size = 'md',
  mode = 'light',
  className,
  'aria-label': ariaLabel,
  title,
  ...props
}) => {
  const SvgComponent = mode === 'light' ? ClusterRoleLight : ClusterRoleDark;

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
