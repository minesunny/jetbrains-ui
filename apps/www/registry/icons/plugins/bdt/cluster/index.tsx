import React from 'react';
import { cn } from '@/lib/utils';
import { type IconProps, type SvgProps, sizeMap } from '../../types';

export type ClusterProps = IconProps;

const ClusterLight: React.FC<SvgProps> = ({
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
      d="M9 3a1 1 0 1 1-2 0 1 1 0 0 1 2 0M3 7.5a1 1 0 1 0 0-2 1 1 0 0 0 0 2M13 7.5a1 1 0 1 0 0-2 1 1 0 0 0 0 2M5 13a1 1 0 1 0 0-2 1 1 0 0 0 0 2M12 12a1 1 0 1 1-2 0 1 1 0 0 1 2 0"
      fill="#EBECF0"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M9.874 3.701a2 2 0 1 0-3.747 0L4.3 4.98A2 2 0 1 0 3.192 8.49l.676 1.86a2 2 0 1 0 3.069 2.15h2.126a2 2 0 1 0 3.069-2.15l.676-1.86q.095.009.192.009a2 2 0 1 0-1.3-3.52zm-.574.82C8.95 4.818 8.496 5 8 5s-.95-.18-1.3-.48L4.874 5.8a1.998 1.998 0 0 1-.742 2.35l.676 1.86A2 2 0 0 1 6.937 11.5h2.126a2 2 0 0 1 2.129-1.49l.676-1.86a2 2 0 0 1-.742-2.351zm-.304-1.434Q9 3.043 9 3a1 1 0 1 0-.004.087m1.83 7.928A.998.998 0 0 1 12 12a1 1 0 1 1-1.174-.985m-4.96.485a1 1 0 0 1 0 1 .999.999 0 1 1 0-1m-2.1-4.357A1 1 0 0 1 3 7.5a1 1 0 1 1 .766-.357M13 7.5a1 1 0 1 0 0-2 1 1 0 0 0 0 2"
      fill="#6C707E"
    />
  </svg>
);

const ClusterDark: React.FC<SvgProps> = ({
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
      d="M9 3a1 1 0 1 1-2 0 1 1 0 0 1 2 0M3 7.5a1 1 0 1 0 0-2 1 1 0 0 0 0 2M13 7.5a1 1 0 1 0 0-2 1 1 0 0 0 0 2M5 13a1 1 0 1 0 0-2 1 1 0 0 0 0 2M12 12a1 1 0 1 1-2 0 1 1 0 0 1 2 0"
      fill="#43454A"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M9.874 3.701a2 2 0 1 0-3.747 0L4.3 4.98A2 2 0 1 0 3.192 8.49l.676 1.86a2 2 0 1 0 3.069 2.15h2.126a2 2 0 1 0 3.069-2.15l.676-1.86q.095.009.192.009a2 2 0 1 0-1.3-3.52zm-.574.82C8.95 4.818 8.496 5 8 5s-.95-.18-1.3-.48L4.874 5.8a1.998 1.998 0 0 1-.742 2.35l.676 1.86A2 2 0 0 1 6.937 11.5h2.126a2 2 0 0 1 2.129-1.49l.676-1.86a2 2 0 0 1-.742-2.351zm-.304-1.434Q9 3.043 9 3a1 1 0 1 0-.004.087m1.83 7.928A.998.998 0 0 1 12 12a1 1 0 1 1-1.174-.985m-4.96.485a1 1 0 0 1 0 1 .999.999 0 1 1 0-1m-2.1-4.357A1 1 0 0 1 3 7.5a1 1 0 1 1 .766-.357M13 7.5a1 1 0 1 0 0-2 1 1 0 0 0 0 2"
      fill="#CED0D6"
    />
  </svg>
);

export const Cluster: React.FC<ClusterProps> = ({
  size = 'md',
  mode = 'light',
  className,
  'aria-label': ariaLabel,
  title,
  ...props
}) => {
  const SvgComponent = mode === 'light' ? ClusterLight : ClusterDark;

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
