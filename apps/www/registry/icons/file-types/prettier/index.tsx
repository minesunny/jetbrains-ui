import type { FC } from 'react';
import { cn } from '@/lib/utils';
import { type IconProps, type SvgProps, sizeMap } from '../types';

export type PrettierProps = IconProps;

const PrettierLight: FC<SvgProps> = ({
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
    <rect x="3" y="2" width="8" height="1" rx=".5" fill="#588CF3" />
    <rect x="3" y="4" width="5" height="1" rx=".5" fill="#588CF3" />
    <rect x="3" y="6" width="3" height="1" rx=".5" fill="#834DF0" />
    <rect x="9" y="4" width="4" height="1" rx=".5" fill="#834DF0" />
    <rect x="10" y="6" width="4" height="1" rx=".5" fill="#C27D04" />
    <rect x="9" y="8" width="4" height="1" rx=".5" fill="#588CF3" />
    <rect x="3" y="8" width="3" height="1" rx=".5" fill="#DB3B4B" />
    <rect x="7" y="8" width="1" height="1" rx=".5" fill="#C27D04" />
    <rect x="3" y="12" width="2" height="1" rx=".5" fill="#588CF3" />
    <rect x="6" y="12" width="1" height="1" rx=".5" fill="#834DF0" />
    <rect x="3" y="14" width="4" height="1" rx=".5" fill="#DB3B4B" />
    <rect x="5" y="10" width="6" height="1" rx=".5" fill="#C27D04" />
    <rect x="3" y="10" width="1" height="1" rx=".5" fill="#834DF0" />
  </svg>
);

const PrettierDark: FC<SvgProps> = ({
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
    <rect x="3" y="2" width="8" height="1" rx=".5" fill="#548AF7" />
    <rect x="3" y="4" width="5" height="1" rx=".5" fill="#548AF7" />
    <rect x="3" y="6" width="3" height="1" rx=".5" fill="#A571E6" />
    <rect x="9" y="4" width="4" height="1" rx=".5" fill="#A571E6" />
    <rect x="10" y="6" width="4" height="1" rx=".5" fill="#D6AE58" />
    <rect x="9" y="8" width="4" height="1" rx=".5" fill="#548AF7" />
    <rect x="3" y="8" width="3" height="1" rx=".5" fill="#DB5C5C" />
    <rect x="7" y="8" width="1" height="1" rx=".5" fill="#D6AE58" />
    <rect x="3" y="12" width="2" height="1" rx=".5" fill="#548AF7" />
    <rect x="6" y="12" width="1" height="1" rx=".5" fill="#A571E6" />
    <rect x="3" y="14" width="4" height="1" rx=".5" fill="#DB5C5C" />
    <rect x="5" y="10" width="6" height="1" rx=".5" fill="#D6AE58" />
    <rect x="3" y="10" width="1" height="1" rx=".5" fill="#A571E6" />
  </svg>
);

export const Prettier: FC<PrettierProps> = ({
  size = 'md',
  mode = 'light',
  className,
  'aria-label': ariaLabel,
  title,
  ...props
}) => {
  const SvgComponent = mode === 'light' ? PrettierLight : PrettierDark;

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
