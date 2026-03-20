import type { FC } from 'react';
import { cn } from '@/lib/utils';
import { type IconProps, type SvgProps, sizeMap } from '../../types';

export type LikeSelectedProps = IconProps;

const LikeSelectedLight: FC<SvgProps> = ({
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
      d="M1.5 7A1.5 1.5 0 0 1 3 5.5h1.5v8H3A1.5 1.5 0 0 1 1.5 12zM9.5 5.5H13A1.5 1.5 0 0 1 14.5 7v3.308c0 .426-.181.832-.498 1.116l-1.887 1.693a1.5 1.5 0 0 1-1.002.384H4.5V5.208l3.465-3.446A.9.9 0 0 1 9.5 2.4z"
      fill="#F2FCF3"
      stroke="#208A3C"
    />
  </svg>
);

const LikeSelectedDark: FC<SvgProps> = ({
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
      d="M1.5 7A1.5 1.5 0 0 1 3 5.5h1.5v8H3A1.5 1.5 0 0 1 1.5 12zM9.5 5.5H13A1.5 1.5 0 0 1 14.5 7v3.308c0 .426-.181.832-.498 1.116l-1.887 1.693a1.5 1.5 0 0 1-1.002.384H4.5V5.208l3.465-3.446A.9.9 0 0 1 9.5 2.4z"
      fill="#253627"
      stroke="#57965C"
    />
  </svg>
);

export const LikeSelected: FC<LikeSelectedProps> = ({
  size = 'md',
  mode = 'light',
  className,
  'aria-label': ariaLabel,
  title,
  ...props
}) => {
  const SvgComponent = mode === 'light' ? LikeSelectedLight : LikeSelectedDark;

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
