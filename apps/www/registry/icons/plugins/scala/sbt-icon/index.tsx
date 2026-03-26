import React from 'react';
import { cn } from '@/lib/utils';
import { type IconProps, type SvgProps, sizeMap } from '../../types';

export type SbtIconProps = IconProps;

const SbtIconLight: React.FC<SvgProps> = ({
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
      d="M8.683 2.55c.518-.138 1.07.01 1.45.39l2.928 2.927c.379.38.527.932.388 1.45l-1.072 3.998a1.5 1.5 0 0 1-1.062 1.062l-3.998 1.072a1.5 1.5 0 0 1-1.45-.389L2.94 10.134a1.5 1.5 0 0 1-.388-1.45l1.072-3.998a1.5 1.5 0 0 1 1.062-1.062z"
      stroke="#A46704"
    />
  </svg>
);

const SbtIconDark: React.FC<SvgProps> = ({
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
      d="M8.683 2.55c.518-.138 1.07.01 1.45.39l2.928 2.927c.379.38.527.932.388 1.45l-1.072 3.998a1.5 1.5 0 0 1-1.062 1.062l-3.998 1.072a1.5 1.5 0 0 1-1.45-.389L2.94 10.134a1.5 1.5 0 0 1-.388-1.45l1.072-3.998a1.5 1.5 0 0 1 1.062-1.062z"
      stroke="#BA9752"
    />
  </svg>
);

export const SbtIcon: React.FC<SbtIconProps> = ({
  size = 'md',
  mode = 'light',
  className,
  'aria-label': ariaLabel,
  title,
  ...props
}) => {
  const SvgComponent = mode === 'light' ? SbtIconLight : SbtIconDark;

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
