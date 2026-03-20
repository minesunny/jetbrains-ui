import type { FC } from 'react';
import { cn } from '@/lib/utils';
import { type IconProps, type SvgProps, sizeMap } from '../types';

export type WatchLastReturnValueProps = IconProps;

const WatchLastReturnValueLight: FC<SvgProps> = ({
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
      d="M7.5 16a2.5 2.5 0 0 0 2.45-3h1.1q-.05.243-.05.5a2.5 2.5 0 1 0 .5-1.5h-2a2.5 2.5 0 1 0-2 4m0-1a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3m6 0a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3"
      fill="#6C707E"
    />
    <path
      d="M14.65 10.193a7 7 0 1 0-10.64 3.558A3.5 3.5 0 0 1 9.949 11h1.1a3.5 3.5 0 0 1 2.45-1c.403 0 .79.068 1.15.193"
      fill="#FFF7F7"
    />
    <path
      d="M14.65 10.193a7 7 0 1 0-10.64 3.558 3.6 3.6 0 0 1 .112-1.172 6 6 0 1 1 9.535-2.575q.522.024.993.19"
      fill="#DB3B4B"
    />
    <path
      d="M12 10.337V7.359c0-1.288-.783-2.113-1.934-2.113-.812 0-1.43.402-1.77 1.07-.292-.673-.89-1.07-1.689-1.07-.758 0-1.326.364-1.645 1.003v-.877H4v5.383h.999V7.59c0-.909.515-1.482 1.33-1.482.746 0 1.177.51 1.177 1.33V10c.343 0 .675.05.988.143V7.59c0-.909.526-1.482 1.33-1.482.752 0 1.177.51 1.177 1.33v3.317h.328q.31-.246.671-.418"
      fill="#DB3B4B"
    />
  </svg>
);

const WatchLastReturnValueDark: FC<SvgProps> = ({
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
      d="M7.5 16a2.5 2.5 0 0 0 2.45-3h1.1q-.05.243-.05.5a2.5 2.5 0 1 0 .5-1.5h-2a2.5 2.5 0 1 0-2 4m0-1a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3m6 0a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3"
      fill="#CED0D6"
    />
    <path
      d="M14.65 10.193a7 7 0 1 0-10.64 3.558A3.5 3.5 0 0 1 9.949 11h1.1a3.5 3.5 0 0 1 2.45-1c.403 0 .79.068 1.15.193"
      fill="#402929"
    />
    <path
      d="M14.65 10.193a7 7 0 1 0-10.64 3.558 3.6 3.6 0 0 1 .112-1.172 6 6 0 1 1 9.535-2.575q.522.024.993.19"
      fill="#DB5C5C"
    />
    <path
      d="M12 10.337V7.359c0-1.288-.783-2.113-1.934-2.113-.812 0-1.43.402-1.77 1.07-.292-.673-.89-1.07-1.689-1.07-.758 0-1.326.364-1.645 1.003v-.877H4v5.383h.999V7.59c0-.909.515-1.482 1.33-1.482.746 0 1.177.51 1.177 1.33V10c.343 0 .675.05.988.143V7.59c0-.909.526-1.482 1.33-1.482.752 0 1.177.51 1.177 1.33v3.317h.328q.31-.246.671-.418"
      fill="#DB5C5C"
    />
  </svg>
);

export const WatchLastReturnValue: FC<WatchLastReturnValueProps> = ({
  size = 'md',
  mode = 'light',
  className,
  'aria-label': ariaLabel,
  title,
  ...props
}) => {
  const SvgComponent =
    mode === 'light' ? WatchLastReturnValueLight : WatchLastReturnValueDark;

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
