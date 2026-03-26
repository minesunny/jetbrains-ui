import type { FC } from 'react';
import { cn } from '@/lib/utils';
import { type IconProps, type SvgProps, sizeMap } from '../../types';

export type LocateProps = IconProps;

const LocateLight: FC<SvgProps> = ({
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
      d="M8.5 5V2.02a6 6 0 0 1 5.48 5.48H11a.5.5 0 0 0 0 1h2.98a6 6 0 0 1-5.48 5.48V11a.5.5 0 0 0-1 0v2.98A6 6 0 0 1 2.02 8.5H5a.5.5 0 0 0 0-1H2.02A6 6 0 0 1 7.5 2.02V5a.5.5 0 0 0 1 0M1 8a7 7 0 1 1 14 0A7 7 0 0 1 1 8"
      fill="#6C707E"
    />
  </svg>
);

const LocateDark: FC<SvgProps> = ({
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
      d="M8.5 5V2.02a6 6 0 0 1 5.48 5.48H11a.5.5 0 0 0 0 1h2.98a6 6 0 0 1-5.48 5.48V11a.5.5 0 0 0-1 0v2.98A6 6 0 0 1 2.02 8.5H5a.5.5 0 0 0 0-1H2.02A6 6 0 0 1 7.5 2.02V5a.5.5 0 0 0 1 0M1 8a7 7 0 1 1 14 0A7 7 0 0 1 1 8"
      fill="#CED0D6"
    />
  </svg>
);

export const Locate: FC<LocateProps> = ({
  size = 'md',
  mode = 'light',
  className,
  'aria-label': ariaLabel,
  title,
  ...props
}) => {
  const SvgComponent = mode === 'light' ? LocateLight : LocateDark;

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
