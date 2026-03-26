import type { FC } from 'react';
import { cn } from '@/lib/utils';
import { type IconProps, type SvgProps, sizeMap } from '../types';

export type ProtobufProps = IconProps;

const ProtobufLight: FC<SvgProps> = ({
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
    <path d="m12.512 12.247 1.363-1.84L12.091 8l-3.147 4.247z" fill="#FFC107" />
    <path
      d="M15.363 8.398a.65.65 0 0 0 0-.796l-2.852-3.849H8.944l4.931 6.655z"
      fill="#0F9D58"
    />
    <path d="m3.488 3.753-1.363 1.84L3.909 8l3.147-4.247z" fill="#DB4437" />
    <path
      d="M.637 7.602a.65.65 0 0 0 0 .796l2.852 3.849h3.567L2.125 5.592z"
      fill="#4285F4"
    />
  </svg>
);

const ProtobufDark: FC<SvgProps> = ({
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
    <path d="m12.512 12.247 1.363-1.84L12.091 8l-3.147 4.247z" fill="#FFC107" />
    <path
      d="M15.363 8.398a.65.65 0 0 0 0-.796l-2.852-3.849H8.944l4.931 6.655z"
      fill="#0F9D58"
    />
    <path d="m3.488 3.753-1.363 1.84L3.909 8l3.147-4.247z" fill="#DB4437" />
    <path
      d="M.637 7.602a.65.65 0 0 0 0 .796l2.852 3.849h3.567L2.125 5.592z"
      fill="#4285F4"
    />
  </svg>
);

export const Protobuf: FC<ProtobufProps> = ({
  size = 'md',
  mode = 'light',
  className,
  'aria-label': ariaLabel,
  title,
  ...props
}) => {
  const SvgComponent = mode === 'light' ? ProtobufLight : ProtobufDark;

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
