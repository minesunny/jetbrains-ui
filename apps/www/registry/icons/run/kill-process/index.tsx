import type { FC } from 'react';
import { cn } from '@/lib/utils';
import { type IconProps, type SvgProps, sizeMap } from '../types';

export type KillProcessProps = IconProps;

const KillProcessLight: FC<SvgProps> = ({
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
      d="M14.5 11.087 11.087 14.5H4.913L1.5 11.087V4.913L4.913 1.5h6.174L14.5 4.913z"
      stroke="#DB3B4B"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M5.172 5.172a.5.5 0 0 0 0 .707L7.293 8l-2.121 2.121a.5.5 0 1 0 .707.707L8 8.708l2.121 2.12a.5.5 0 1 0 .707-.707L8.709 8l2.12-2.121a.5.5 0 1 0-.707-.707l-2.12 2.12-2.122-2.12a.5.5 0 0 0-.707 0"
      fill="#DB3B4B"
    />
  </svg>
);

const KillProcessDark: FC<SvgProps> = ({
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
      d="M14.5 11.087 11.087 14.5H4.913L1.5 11.087V4.913L4.913 1.5h6.174L14.5 4.913z"
      stroke="#DB5C5C"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M5.172 5.172a.5.5 0 0 0 0 .707L7.293 8l-2.121 2.121a.5.5 0 1 0 .707.707L8 8.708l2.121 2.12a.5.5 0 1 0 .707-.707L8.709 8l2.12-2.121a.5.5 0 1 0-.707-.707l-2.12 2.12-2.122-2.12a.5.5 0 0 0-.707 0"
      fill="#DB5C5C"
    />
  </svg>
);

export const KillProcess: FC<KillProcessProps> = ({
  size = 'md',
  mode = 'light',
  className,
  'aria-label': ariaLabel,
  title,
  ...props
}) => {
  const SvgComponent = mode === 'light' ? KillProcessLight : KillProcessDark;

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
