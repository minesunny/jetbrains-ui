import type { FC } from 'react';
import { cn } from '@/lib/utils';
import { type IconProps, type SvgProps, sizeMap } from '../types';

export type PythonProps = IconProps;

const PythonLight: FC<SvgProps> = ({
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
      d="M8 1c3 0 3 1 3 3v2.5A1.5 1.5 0 0 1 9.5 8h-3A2.5 2.5 0 0 0 4 10.5v.5c-2 0-3 0-3-3s1-3 3-3h3.5a.5.5 0 0 0 0-1H5c0-2 0-3 3-3M6.5 3a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1"
      fill="#4682FA"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12 5v1.5A2.5 2.5 0 0 1 9.5 9h-3A1.5 1.5 0 0 0 5 10.5V12c0 2 0 3 3 3s3-1 3-3H8.5a.5.5 0 0 1 0-1H12c2 0 3 0 3-3s-1-3-3-3m-2.5 9a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1"
      fill="#FFAF0F"
    />
  </svg>
);

const PythonDark: FC<SvgProps> = ({
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
      d="M8 1c3 0 3 1 3 3v2.5A1.5 1.5 0 0 1 9.5 8h-3A2.5 2.5 0 0 0 4 10.5v.5c-2 0-3 0-3-3s1-3 3-3h3.5a.5.5 0 0 0 0-1H5c0-2 0-3 3-3M6.5 3a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1"
      fill="#548AF7"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12 5v1.5A2.5 2.5 0 0 1 9.5 9h-3A1.5 1.5 0 0 0 5 10.5V12c0 2 0 3 3 3s3-1 3-3H8.5a.5.5 0 0 1 0-1H12c2 0 3 0 3-3s-1-3-3-3m-2.5 9a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1"
      fill="#F2C55C"
    />
  </svg>
);

export const Python: FC<PythonProps> = ({
  size = 'md',
  mode = 'light',
  className,
  'aria-label': ariaLabel,
  title,
  ...props
}) => {
  const SvgComponent = mode === 'light' ? PythonLight : PythonDark;

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
