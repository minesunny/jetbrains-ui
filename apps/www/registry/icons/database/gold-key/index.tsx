import type { FC } from 'react';
import { cn } from '@/lib/utils';
import { type IconProps, type SvgProps, sizeMap } from '../types';

export type GoldKeyProps = IconProps;

const GoldKeyLight: FC<SvgProps> = ({
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
      d="M8 8.969a4 4 0 1 0-1 0V14.5a.5.5 0 0 0 1 0V14h1.5a.5.5 0 0 0 0-1H8v-1h1.5a.5.5 0 0 0 0-1H8zM10.5 5a3 3 0 1 1-6 0 3 3 0 0 1 6 0"
      fill="#E66D17"
    />
  </svg>
);

const GoldKeyDark: FC<SvgProps> = ({
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
      d="M8 8.969a4 4 0 1 0-1 0V14.5a.5.5 0 0 0 1 0V14h1.5a.5.5 0 0 0 0-1H8v-1h1.5a.5.5 0 0 0 0-1H8zM10.5 5a3 3 0 1 1-6 0 3 3 0 0 1 6 0"
      fill="#F2C55C"
    />
  </svg>
);

export const GoldKey: FC<GoldKeyProps> = ({
  size = 'md',
  mode = 'light',
  className,
  'aria-label': ariaLabel,
  title,
  ...props
}) => {
  const SvgComponent = mode === 'light' ? GoldKeyLight : GoldKeyDark;

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
