import type { FC } from 'react';
import { cn } from '@/lib/utils';
import { type IconProps, type SvgProps, sizeMap } from '../../types';

export type WarningProps = IconProps;

const WarningLight: FC<SvgProps> = ({
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
      fillRule="evenodd"
      clipRule="evenodd"
      d="M1.276 10.863 6.303 1.99C7.05.67 8.949.67 9.696 1.989l5.027 8.874c.793 1.4-.218 3.137-1.827 3.137H3.103c-1.609 0-2.62-1.736-1.827-3.137"
      fill="#FFAF0F"
    />
    <path
      d="M9 5a1 1 0 0 0-2 0v2.5a1 1 0 1 0 2 0zM8 12a1 1 0 1 0 0-2 1 1 0 0 0 0 2"
      fill="#fff"
    />
  </svg>
);

const WarningDark: FC<SvgProps> = ({
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
      fillRule="evenodd"
      clipRule="evenodd"
      d="M1.276 10.863 6.303 1.99C7.05.67 8.949.67 9.696 1.989l5.027 8.874c.793 1.4-.218 3.137-1.827 3.137H3.103c-1.609 0-2.62-1.736-1.827-3.137"
      fill="#F2C55C"
    />
    <path
      d="M9 5a1 1 0 0 0-2 0v2.5a1 1 0 1 0 2 0zM8 12a1 1 0 1 0 0-2 1 1 0 0 0 0 2"
      fill="#5E4D33"
    />
  </svg>
);

export const Warning: FC<WarningProps> = ({
  size = 'md',
  mode = 'light',
  className,
  'aria-label': ariaLabel,
  title,
  ...props
}) => {
  const SvgComponent = mode === 'light' ? WarningLight : WarningDark;

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
