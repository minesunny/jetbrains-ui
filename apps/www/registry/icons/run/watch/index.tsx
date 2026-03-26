import type { FC } from 'react';
import { cn } from '@/lib/utils';
import { type IconProps, type SvgProps, sizeMap } from '../types';

export type WatchProps = IconProps;

const WatchLight: FC<SvgProps> = ({
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
      d="M6.625 6.547A3 3 0 0 0 1.171 7H.5a.5.5 0 0 0 0 1H1a3 3 0 0 0 6 0 1 1 0 0 1 2 0 3 3 0 1 0 6 0h.5a.5.5 0 0 0 0-1h-.67a3.001 3.001 0 0 0-5.455-.453A2 2 0 0 0 8 6c-.532 0-1.016.208-1.375.547M4 10a2 2 0 1 0 0-4 2 2 0 0 0 0 4m6-2a2 2 0 1 0 4 0 2 2 0 0 0-4 0"
      fill="#6C707E"
    />
  </svg>
);

const WatchDark: FC<SvgProps> = ({
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
      d="M6.625 6.547A3 3 0 0 0 1.171 7H.5a.5.5 0 0 0 0 1H1a3 3 0 0 0 6 0 1 1 0 0 1 2 0 3 3 0 1 0 6 0h.5a.5.5 0 0 0 0-1h-.67a3.001 3.001 0 0 0-5.455-.453A2 2 0 0 0 8 6c-.532 0-1.016.208-1.375.547M4 10a2 2 0 1 0 0-4 2 2 0 0 0 0 4m6-2a2 2 0 1 0 4 0 2 2 0 0 0-4 0"
      fill="#CED0D6"
    />
  </svg>
);

export const Watch: FC<WatchProps> = ({
  size = 'md',
  mode = 'light',
  className,
  'aria-label': ariaLabel,
  title,
  ...props
}) => {
  const SvgComponent = mode === 'light' ? WatchLight : WatchDark;

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
