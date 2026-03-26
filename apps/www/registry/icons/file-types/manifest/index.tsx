import type { FC } from 'react';
import { cn } from '@/lib/utils';
import { type IconProps, type SvgProps, sizeMap } from '../types';

export type ManifestProps = IconProps;

const ManifestLight: FC<SvgProps> = ({
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
    <rect
      x="2.5"
      y="2.5"
      width="11"
      height="11"
      rx="1.5"
      fill="#FAF5FF"
      stroke="#834DF0"
    />
    <path
      d="M5.645 11H4.547V4.7h1.426l1.93 4.55.109.35.103-.35 1.89-4.55h1.445V11h-1.103V6.518l.014-.238L8.403 11H7.58L5.63 6.311l.014.207z"
      fill="#834DF0"
    />
  </svg>
);

const ManifestDark: FC<SvgProps> = ({
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
    <rect
      x="2.5"
      y="2.5"
      width="11"
      height="11"
      rx="1.5"
      fill="#2F2936"
      stroke="#B589EC"
    />
    <path
      d="M5.645 11H4.547V4.7h1.426l1.93 4.55.109.35.103-.35 1.89-4.55h1.445V11h-1.103V6.518l.014-.238L8.403 11H7.58L5.63 6.311l.014.207z"
      fill="#B589EC"
    />
  </svg>
);

export const Manifest: FC<ManifestProps> = ({
  size = 'md',
  mode = 'light',
  className,
  'aria-label': ariaLabel,
  title,
  ...props
}) => {
  const SvgComponent = mode === 'light' ? ManifestLight : ManifestDark;

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
