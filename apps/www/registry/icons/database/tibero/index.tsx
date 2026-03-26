import type { FC } from 'react';
import { cn } from '@/lib/utils';
import { type IconProps, type SvgProps, sizeMap } from '../types';

export type TiberoProps = IconProps;

const TiberoLight: FC<SvgProps> = ({
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
    <path d="M15 2.005H1V4h5v10l4 .005v-10L15 4z" fill="#014A8E" />
    <path d="M1 4h5V2H1z" fill="#E61B1F" />
  </svg>
);

const TiberoDark: FC<SvgProps> = ({
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
    <path d="M15 2.005H1V4h5v10l4 .005v-10L15 4z" fill="#4387FB" />
    <path d="M1 4h5V2H1z" fill="#FA4347" />
  </svg>
);

export const Tibero: FC<TiberoProps> = ({
  size = 'md',
  mode = 'light',
  className,
  'aria-label': ariaLabel,
  title,
  ...props
}) => {
  const SvgComponent = mode === 'light' ? TiberoLight : TiberoDark;

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
