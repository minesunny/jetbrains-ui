import React from 'react';
import { cn } from '@/lib/utils';
import { type IconProps, type SvgProps, sizeMap } from '../../types';

export type RemoteFileSystemsProps = IconProps;

const RemoteFileSystemsLight: React.FC<SvgProps> = ({
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
      d="M8.5 13v2.5m0 0h4m-4 0h-5"
      stroke="#6C707E"
      strokeLinecap="round"
    />
    <path
      d="M6.414 1.586 3.586 4.414A2 2 0 0 0 3 5.828V11a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2H7.828a2 2 0 0 0-1.414.586"
      fill="#EBECF0"
    />
    <path
      d="M7.828 1.5H11A1.5 1.5 0 0 1 12.5 3v8a1.5 1.5 0 0 1-1.5 1.5H5A1.5 1.5 0 0 1 3.5 11V5.828c0-.398.158-.78.44-1.06l2.828-2.829a1.5 1.5 0 0 1 .912-.431z"
      stroke="#6C707E"
    />
  </svg>
);

const RemoteFileSystemsDark: React.FC<SvgProps> = ({
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
      d="M8.5 13v2.5m0 0h4m-4 0h-5"
      stroke="#CED0D6"
      strokeLinecap="round"
    />
    <path
      d="M6.414 1.586 3.586 4.414A2 2 0 0 0 3 5.828V11a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2H7.828a2 2 0 0 0-1.414.586"
      fill="#43454A"
    />
    <path
      d="M7.828 1.5H11A1.5 1.5 0 0 1 12.5 3v8a1.5 1.5 0 0 1-1.5 1.5H5A1.5 1.5 0 0 1 3.5 11V5.828c0-.398.158-.78.44-1.06l2.828-2.829a1.5 1.5 0 0 1 .912-.431z"
      stroke="#CED0D6"
    />
  </svg>
);

export const RemoteFileSystems: React.FC<RemoteFileSystemsProps> = ({
  size = 'md',
  mode = 'light',
  className,
  'aria-label': ariaLabel,
  title,
  ...props
}) => {
  const SvgComponent =
    mode === 'light' ? RemoteFileSystemsLight : RemoteFileSystemsDark;

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
