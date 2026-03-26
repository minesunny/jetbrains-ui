import type { FC } from 'react';
import { cn } from '@/lib/utils';
import { type IconProps, type SvgProps, sizeMap } from '../types';

export type PartionProps = IconProps;

const PartionLight: FC<SvgProps> = ({
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
      d="M8 2.5a5.5 5.5 0 0 1 5.477 5H7.5v5.976A5.499 5.499 0 0 1 8 2.5Z"
      stroke="#3574F0"
    />
    <path d="M14.477 9.5A5.5 5.5 0 0 1 9.5 14.476V9.5z" stroke="#3574F0" />
  </svg>
);

const PartionDark: FC<SvgProps> = ({
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
      d="M8 2.5a5.5 5.5 0 0 1 5.477 5H7.5v5.976A5.499 5.499 0 0 1 8 2.5Z"
      stroke="#548AF7"
    />
    <path d="M14.477 9.5A5.5 5.5 0 0 1 9.5 14.476V9.5z" stroke="#548AF7" />
  </svg>
);

export const Partion: FC<PartionProps> = ({
  size = 'md',
  mode = 'light',
  className,
  'aria-label': ariaLabel,
  title,
  ...props
}) => {
  const SvgComponent = mode === 'light' ? PartionLight : PartionDark;

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
