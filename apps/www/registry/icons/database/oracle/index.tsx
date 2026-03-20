import type { FC } from 'react';
import { cn } from '@/lib/utils';
import { type IconProps, type SvgProps, sizeMap } from '../types';

export type OracleProps = IconProps;

const OracleLight: FC<SvgProps> = ({
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
    <path fill="#F80000" d="M1 1H15V15H1z" />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M2 8.003C2 10.213 3.7 12 5.795 12h4.41C12.302 12 14 10.212 14 8.003S12.301 4 10.206 4H5.795C3.7 4 2 5.794 2 8.003m10.564 0c0 1.43-1.1 2.586-2.456 2.586H5.892c-1.356 0-2.456-1.156-2.456-2.586s1.1-2.592 2.456-2.592h4.216c1.357 0 2.456 1.162 2.456 2.592"
      fill="#fff"
    />
  </svg>
);

const OracleDark: FC<SvgProps> = ({
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
    <path fill="#F80000" d="M1 1H15V15H1z" />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M2 8.003C2 10.213 3.7 12 5.795 12h4.41C12.302 12 14 10.212 14 8.003S12.301 4 10.206 4H5.795C3.7 4 2 5.794 2 8.003m10.564 0c0 1.43-1.1 2.586-2.456 2.586H5.892c-1.356 0-2.456-1.156-2.456-2.586s1.1-2.592 2.456-2.592h4.216c1.357 0 2.456 1.162 2.456 2.592"
      fill="#fff"
    />
  </svg>
);

export const Oracle: FC<OracleProps> = ({
  size = 'md',
  mode = 'light',
  className,
  'aria-label': ariaLabel,
  title,
  ...props
}) => {
  const SvgComponent = mode === 'light' ? OracleLight : OracleDark;

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
