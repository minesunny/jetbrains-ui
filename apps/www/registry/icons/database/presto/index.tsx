import type { FC } from 'react';
import { cn } from '@/lib/utils';
import { type IconProps, type SvgProps, sizeMap } from '../types';

export type PrestoProps = IconProps;

const PrestoLight: FC<SvgProps> = ({
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
      d="M5.212 3.28a.572.572 0 1 0 0-1.143.572.572 0 0 0 0 1.143M6.979 5.118a.643.643 0 1 0 0-1.286.643.643 0 0 0 0 1.286M9.46 6.242a.714.714 0 1 1-1.429 0 .714.714 0 0 1 1.429 0M10.512 8.794a.786.786 0 1 0 0-1.57.786.786 0 0 0 0 1.57M13.136 9.775a.857.857 0 1 1-1.714 0 .857.857 0 0 1 1.714 0"
      fill="#5890FF"
    />
    <path
      d="M2.18 2.709a.5.5 0 1 1-1.001 0 .5.5 0 0 1 1 0M4.018 4.475a.572.572 0 1 1-1.144 0 .572.572 0 0 1 1.144 0M5.213 6.885a.643.643 0 1 0 0-1.286.643.643 0 0 0 0 1.286M7.694 8.009a.714.714 0 1 1-1.429 0 .714.714 0 0 1 1.429 0M8.746 10.561a.786.786 0 1 0 0-1.571.786.786 0 0 0 0 1.571M11.37 11.542a.857.857 0 1 1-1.714 0 .857.857 0 0 1 1.714 0"
      fill="#0F2648"
    />
    <path
      d="M9.389 2.709a.643.643 0 1 1-1.286 0 .643.643 0 0 1 1.286 0M11.227 4.475a.714.714 0 1 1-1.429 0 .714.714 0 0 1 1.429 0M12.28 7.028a.786.786 0 1 0 0-1.571.786.786 0 0 0 0 1.57M14.903 8.009a.857.857 0 1 1-1.714 0 .857.857 0 0 1 1.714 0M5.213 10.347a.572.572 0 1 0 0-1.143.572.572 0 0 0 0 1.143M4.018 11.542a.572.572 0 1 1-1.144 0 .572.572 0 0 1 1.144 0M1.68 13.88a.572.572 0 1 0 0-1.143.572.572 0 0 0 0 1.143M5.784 13.309a.572.572 0 1 1-1.143 0 .572.572 0 0 1 1.143 0M8.746 13.88a.572.572 0 1 0 0-1.143.572.572 0 0 0 0 1.143M7.551 11.542a.572.572 0 1 1-1.143 0 .572.572 0 0 1 1.143 0"
      fill="#1EDCFF"
    />
  </svg>
);

const PrestoDark: FC<SvgProps> = ({
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
      d="M5.212 3.28a.572.572 0 1 0 0-1.143.572.572 0 0 0 0 1.143M6.979 5.118a.643.643 0 1 0 0-1.286.643.643 0 0 0 0 1.286M9.46 6.242a.714.714 0 1 1-1.429 0 .714.714 0 0 1 1.429 0M10.512 8.794a.786.786 0 1 0 0-1.57.786.786 0 0 0 0 1.57M13.136 9.775a.857.857 0 1 1-1.714 0 .857.857 0 0 1 1.714 0"
      fill="#5890FF"
    />
    <path
      d="M2.18 2.709a.5.5 0 1 1-1.001 0 .5.5 0 0 1 1 0M4.018 4.475a.572.572 0 1 1-1.144 0 .572.572 0 0 1 1.144 0M5.213 6.885a.643.643 0 1 0 0-1.286.643.643 0 0 0 0 1.286M7.694 8.009a.714.714 0 1 1-1.429 0 .714.714 0 0 1 1.429 0M8.746 10.561a.786.786 0 1 0 0-1.571.786.786 0 0 0 0 1.571M11.37 11.542a.857.857 0 1 1-1.714 0 .857.857 0 0 1 1.714 0"
      fill="#0F2648"
    />
    <path
      d="M9.389 2.709a.643.643 0 1 1-1.286 0 .643.643 0 0 1 1.286 0M11.227 4.475a.714.714 0 1 1-1.429 0 .714.714 0 0 1 1.429 0M12.28 7.028a.786.786 0 1 0 0-1.571.786.786 0 0 0 0 1.57M14.903 8.009a.857.857 0 1 1-1.714 0 .857.857 0 0 1 1.714 0M5.213 10.347a.572.572 0 1 0 0-1.143.572.572 0 0 0 0 1.143M4.018 11.542a.572.572 0 1 1-1.144 0 .572.572 0 0 1 1.144 0M1.68 13.88a.572.572 0 1 0 0-1.143.572.572 0 0 0 0 1.143M5.784 13.309a.572.572 0 1 1-1.143 0 .572.572 0 0 1 1.143 0M8.746 13.88a.572.572 0 1 0 0-1.143.572.572 0 0 0 0 1.143M7.551 11.542a.572.572 0 1 1-1.143 0 .572.572 0 0 1 1.143 0"
      fill="#1EDCFF"
    />
  </svg>
);

export const Presto: FC<PrestoProps> = ({
  size = 'md',
  mode = 'light',
  className,
  'aria-label': ariaLabel,
  title,
  ...props
}) => {
  const SvgComponent = mode === 'light' ? PrestoLight : PrestoDark;

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
