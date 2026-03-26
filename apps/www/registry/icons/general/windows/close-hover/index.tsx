import type { FC } from 'react';
import { cn } from '@/lib/utils';
import { type IconProps, type SvgProps, sizeMap } from '../../types';

export type CloseHoverProps = IconProps;

const CloseHoverLight: FC<SvgProps> = ({
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
      transform="rotate(45 3.758 3.05)"
      fill="#fff"
      d="M3.758 3.05H16.758V4.05H3.758z"
    />
    <path
      transform="scale(-1 1)rotate(45 -9.804 -13.254)"
      fill="#fff"
      d="M0 0H13V1H0z"
    />
  </svg>
);

const CloseHoverDark: FC<SvgProps> = ({
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
      transform="rotate(45 3.758 3.05)"
      fill="#fff"
      d="M3.758 3.05H16.758V4.05H3.758z"
    />
    <path
      transform="scale(-1 1)rotate(45 -9.804 -13.254)"
      fill="#fff"
      d="M0 0H13V1H0z"
    />
  </svg>
);

export const CloseHover: FC<CloseHoverProps> = ({
  size = 'md',
  mode = 'light',
  className,
  'aria-label': ariaLabel,
  title,
  ...props
}) => {
  const SvgComponent = mode === 'light' ? CloseHoverLight : CloseHoverDark;

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
