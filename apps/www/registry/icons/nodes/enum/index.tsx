import type { FC } from 'react';
import { cn } from '@/lib/utils';
import { type IconProps, type SvgProps, sizeMap } from '../types';

export type EnumProps = IconProps;

const EnumLight: FC<SvgProps> = ({
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
    <circle cx="8" cy="8" r="6.5" fill="#FAF5FF" stroke="#834DF0" />
    <path
      d="M5.49 11.5h5.02v-.915H6.48v-2.15h3.59v-.92H6.48v-2.1h3.93V4.5H5.49z"
      fill="#834DF0"
    />
  </svg>
);

const EnumDark: FC<SvgProps> = ({
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
    <circle cx="8" cy="8" r="6.5" fill="#2F2936" stroke="#A571E6" />
    <path
      d="M5.49 11.5h5.02v-.915H6.48v-2.15h3.59v-.92H6.48v-2.1h3.93V4.5H5.49z"
      fill="#A571E6"
    />
  </svg>
);

export const Enum: FC<EnumProps> = ({
  size = 'md',
  mode = 'light',
  className,
  'aria-label': ariaLabel,
  title,
  ...props
}) => {
  const SvgComponent = mode === 'light' ? EnumLight : EnumDark;

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
