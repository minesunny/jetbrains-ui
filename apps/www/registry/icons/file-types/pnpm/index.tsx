import type { FC } from 'react';
import { cn } from '@/lib/utils';
import { type IconProps, type SvgProps, sizeMap } from '../types';

export type PnpmProps = IconProps;

const PnpmLight: FC<SvgProps> = ({
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
    <path fill="#FFAF0F" d="M2 2H5V5H2z" />
    <path fill="#FFAF0F" d="M6 2H9V5H6z" />
    <path fill="#FFAF0F" d="M10 2H13V5H10z" />
    <path fill="#FFAF0F" d="M10 6H13V9H10z" />
    <path fill="#6C707E" d="M6 6H9V9H6z" />
    <path fill="#6C707E" d="M6 10H9V13H6z" />
    <path fill="#6C707E" d="M10 10H13V13H10z" />
    <path fill="#6C707E" d="M2 10H5V13H2z" />
  </svg>
);

const PnpmDark: FC<SvgProps> = ({
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
    <path fill="#F2C55C" d="M2 2H5V5H2z" />
    <path fill="#F2C55C" d="M6 2H9V5H6z" />
    <path fill="#F2C55C" d="M10 2H13V5H10z" />
    <path fill="#F2C55C" d="M10 6H13V9H10z" />
    <path fill="#CED0D6" d="M6 6H9V9H6z" />
    <path fill="#CED0D6" d="M6 10H9V13H6z" />
    <path fill="#CED0D6" d="M10 10H13V13H10z" />
    <path fill="#CED0D6" d="M2 10H5V13H2z" />
  </svg>
);

export const Pnpm: FC<PnpmProps> = ({
  size = 'md',
  mode = 'light',
  className,
  'aria-label': ariaLabel,
  title,
  ...props
}) => {
  const SvgComponent = mode === 'light' ? PnpmLight : PnpmDark;

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
