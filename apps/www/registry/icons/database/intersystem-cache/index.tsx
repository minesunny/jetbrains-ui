import type { FC } from 'react';
import { cn } from '@/lib/utils';
import { type IconProps, type SvgProps, sizeMap } from '../types';

export type IntersystemCacheProps = IconProps;

const IntersystemCacheLight: FC<SvgProps> = ({
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
      d="M7.01 2.283 5 1.264v12.68l3.99 2.009v-2.236l-1.98-.99z"
      fill="#2E2A94"
    />
    <path
      d="m8.99 13.717 2.01.99V2.028L7.01.048v2.235l1.98.99z"
      fill="#00B1A9"
    />
  </svg>
);

const IntersystemCacheDark: FC<SvgProps> = ({
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
      d="M7.01 2.283 5 1.264v12.68l3.99 2.009v-2.236l-1.98-.99z"
      fill="#4387FB"
    />
    <path
      d="m8.99 13.717 2.01.99V2.028L7.01.048v2.235l1.98.99z"
      fill="#248996"
    />
  </svg>
);

export const IntersystemCache: FC<IntersystemCacheProps> = ({
  size = 'md',
  mode = 'light',
  className,
  'aria-label': ariaLabel,
  title,
  ...props
}) => {
  const SvgComponent =
    mode === 'light' ? IntersystemCacheLight : IntersystemCacheDark;

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
