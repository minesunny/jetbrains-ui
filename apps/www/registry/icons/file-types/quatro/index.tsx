import type { FC } from 'react';
import { cn } from '@/lib/utils';
import { type IconProps, type SvgProps, sizeMap } from '../types';

export type QuatroProps = IconProps;

const QuatroLight: FC<SvgProps> = ({
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
      d="M7 1.07A7.005 7.005 0 0 0 1.07 7H7zM1.07 9A7 7 0 0 0 7 14.93V9zM9 14.93A7 7 0 0 0 14.929 9h-5.93zM14.929 7a7 7 0 0 0-5.93-5.93V7z"
      fill="#75AADB"
    />
  </svg>
);

const QuatroDark: FC<SvgProps> = ({
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
      d="M7 1.07A7.005 7.005 0 0 0 1.07 7H7zM1.07 9A7 7 0 0 0 7 14.93V9zM9 14.93A7 7 0 0 0 14.929 9h-5.93zM14.929 7a7 7 0 0 0-5.93-5.93V7z"
      fill="#75AADB"
    />
  </svg>
);

export const Quatro: FC<QuatroProps> = ({
  size = 'md',
  mode = 'light',
  className,
  'aria-label': ariaLabel,
  title,
  ...props
}) => {
  const SvgComponent = mode === 'light' ? QuatroLight : QuatroDark;

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
