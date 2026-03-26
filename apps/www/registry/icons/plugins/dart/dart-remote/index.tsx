import React from 'react';
import { cn } from '@/lib/utils';
import { type IconProps, type SvgProps, sizeMap } from '../../types';

export type DartRemoteProps = IconProps;

const DartRemoteLight: React.FC<SvgProps> = ({
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
      fillRule="evenodd"
      clipRule="evenodd"
      d="M11 10.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-1 0v-2.793l-4.146 4.147a.5.5 0 0 1-.708-.708L14.293 11H11.5a.5.5 0 0 1-.5-.5"
      fill="#6C707E"
    />
    <path
      d="m10.272 3.379-6.897-.006 4.551-2.182c.544-.255 1.208-.362 1.952.382l2.138 2.138c-.335-.335-.856-.333-1.486-.332zM10.065 10.064l-6.69-6.691.006 6.898v.257c-.001.631-.002 1.152.332 1.486l.51.512L6.697 15H8.88l3-3h-.38a1.5 1.5 0 0 1-1.435-1.936"
      fill="#29B6F6"
    />
    <path
      d="m3.373 3.374.006 6.897v.258c-.001.63-.002 1.151.332 1.486L1.573 9.877c-.745-.744-.637-1.408-.382-1.951zM15 9V6.697l-2.474-2.474-.511-.512c-.335-.335-.855-.334-1.486-.332h-.257l-6.899-.005 6.691 6.69A1.5 1.5 0 0 1 11.5 9z"
      fill="#01579B"
    />
  </svg>
);

const DartRemoteDark: React.FC<SvgProps> = ({
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
      fillRule="evenodd"
      clipRule="evenodd"
      d="M11 10.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-1 0v-2.793l-4.146 4.147a.5.5 0 0 1-.708-.708L14.293 11H11.5a.5.5 0 0 1-.5-.5"
      fill="#CED0D6"
    />
    <path
      d="m10.272 3.379-6.897-.006 4.551-2.182c.544-.255 1.208-.362 1.952.382l2.138 2.138c-.335-.335-.856-.333-1.486-.332zM10.065 10.064l-6.69-6.691.006 6.898v.257c-.001.631-.002 1.152.332 1.486l.51.512L6.697 15H8.88l3-3h-.38a1.5 1.5 0 0 1-1.435-1.936"
      fill="#29B6F6"
    />
    <path
      d="m3.373 3.374.006 6.897v.258c-.001.63-.002 1.151.332 1.486L1.573 9.877c-.745-.744-.637-1.408-.382-1.951zM15 9V6.697l-2.474-2.474-.511-.512c-.335-.335-.855-.334-1.486-.332h-.257l-6.899-.005 6.691 6.69A1.5 1.5 0 0 1 11.5 9z"
      fill="#01579B"
    />
  </svg>
);

export const DartRemote: React.FC<DartRemoteProps> = ({
  size = 'md',
  mode = 'light',
  className,
  'aria-label': ariaLabel,
  title,
  ...props
}) => {
  const SvgComponent = mode === 'light' ? DartRemoteLight : DartRemoteDark;

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
