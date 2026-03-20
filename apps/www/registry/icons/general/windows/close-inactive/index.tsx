import type { FC } from 'react';
import { cn } from '@/lib/utils';
import { type IconProps, type SvgProps, sizeMap } from '../../types';

export type CloseInactiveProps = IconProps;

const CloseInactiveLight: FC<SvgProps> = ({
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
      fill="#818594"
      d="M3.758 3.05H16.758V4.05H3.758z"
    />
    <path
      transform="scale(-1 1)rotate(45 -9.804 -13.254)"
      fill="#818594"
      d="M0 0H13V1H0z"
    />
  </svg>
);

const CloseInactiveDark: FC<SvgProps> = ({
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
      fill="#6F737A"
      d="M3.758 3.05H16.758V4.05H3.758z"
    />
    <path
      transform="scale(-1 1)rotate(45 -9.804 -13.254)"
      fill="#6F737A"
      d="M0 0H13V1H0z"
    />
  </svg>
);

export const CloseInactive: FC<CloseInactiveProps> = ({
  size = 'md',
  mode = 'light',
  className,
  'aria-label': ariaLabel,
  title,
  ...props
}) => {
  const SvgComponent =
    mode === 'light' ? CloseInactiveLight : CloseInactiveDark;

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
