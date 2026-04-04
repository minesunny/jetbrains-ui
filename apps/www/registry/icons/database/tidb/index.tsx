import type { FC } from 'react';
import { cn } from '@/lib/utils';
import { type SvgProps, sizeMap } from '../types';

export type TidbProps = SvgProps;

const TidbLight: FC<SvgProps> = ({
  size,
  className,
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
    <path d="M1.5 4.5 8 .5l6.5 4v7l-6.5 4-6.5-4z" fill="#E30C34" />
    <path
      d="M8.002 3 3.68 5.49v2.528L5.84 6.76l.019 5.002L8.002 13V5.504l2.137-1.242zM12.325 5.48l-2.122 1.301v4.989l2.122-1.247z"
      fill="#fff"
    />
  </svg>
);

const TidbDark: FC<SvgProps> = ({
  size,
  className,
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
    <path d="M1.5 4.5 8 .5l6.5 4v7l-6.5 4-6.5-4z" fill="#E30C34" />
    <path
      d="M8.002 3 3.68 5.49v2.528L5.84 6.76l.019 5.002L8.002 13V5.504l2.137-1.242zM12.325 5.48l-2.122 1.301v4.989l2.122-1.247z"
      fill="#fff"
    />
  </svg>
);

export const Tidb: FC<TidbProps> = ({
  size = 'md',
  mode = 'light',
  className,
  'aria-label': ariaLabel,
  ...props
}) => {
  const SvgComponent = mode === 'light' ? TidbLight : TidbDark;

  return (
    <SvgComponent
      size={sizeMap[size]}
      className={cn('inline-block flex-shrink-0', className)}
      role={ariaLabel ? 'img' : 'presentation'}
      aria-label={ariaLabel}
      aria-hidden={!ariaLabel}
      {...props}
    />
  );
};
