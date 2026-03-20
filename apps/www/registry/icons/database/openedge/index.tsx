import type { FC } from 'react';
import { cn } from '@/lib/utils';
import { type IconProps, type SvgProps, sizeMap } from '../types';

export type OpenedgeProps = IconProps;

const OpenedgeLight: FC<SvgProps> = ({
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
    <path d="M4.714 14.263v-3.807l-3.193 1.842z" fill="#5CE400" />
    <path
      d="M6.188 9.596V15l3.255-1.903V7.754L4.714 4.991 1.521 6.895z"
      fill="#5CE400"
    />
    <path
      d="M8.03 1 4.47 3.088l6.509 3.807v7.491l3.5-2.088V4.746z"
      fill="#5CE400"
    />
  </svg>
);

const OpenedgeDark: FC<SvgProps> = ({
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
    <path d="M4.714 14.263v-3.807l-3.193 1.842z" fill="#5CE400" />
    <path
      d="M6.188 9.596V15l3.255-1.903V7.754L4.714 4.991 1.521 6.895z"
      fill="#5CE400"
    />
    <path
      d="M8.03 1 4.47 3.088l6.509 3.807v7.491l3.5-2.088V4.746z"
      fill="#5CE400"
    />
  </svg>
);

export const Openedge: FC<OpenedgeProps> = ({
  size = 'md',
  mode = 'light',
  className,
  'aria-label': ariaLabel,
  title,
  ...props
}) => {
  const SvgComponent = mode === 'light' ? OpenedgeLight : OpenedgeDark;

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
