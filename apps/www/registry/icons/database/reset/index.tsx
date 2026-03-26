import type { FC } from 'react';
import { cn } from '@/lib/utils';
import { type IconProps, type SvgProps, sizeMap } from '../types';

export type ResetProps = IconProps;

const ResetLight: FC<SvgProps> = ({
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
      d="M5.854 2.354a.5.5 0 1 0-.707-.708l-3.5 3.5-.354.354.354.354 3.5 3.5a.5.5 0 1 0 .707-.708L3.207 6H10.5a3.5 3.5 0 1 1 0 7h-5a.5.5 0 0 0 0 1h5a4.5 4.5 0 1 0 0-9H3.207z"
      fill="#6C707E"
    />
  </svg>
);

const ResetDark: FC<SvgProps> = ({
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
      d="M5.854 2.354a.5.5 0 1 0-.707-.708l-3.5 3.5-.354.354.354.354 3.5 3.5a.5.5 0 1 0 .707-.708L3.207 6H10.5a3.5 3.5 0 1 1 0 7h-5a.5.5 0 0 0 0 1h5a4.5 4.5 0 1 0 0-9H3.207z"
      fill="#CED0D6"
    />
  </svg>
);

export const Reset: FC<ResetProps> = ({
  size = 'md',
  mode = 'light',
  className,
  'aria-label': ariaLabel,
  title,
  ...props
}) => {
  const SvgComponent = mode === 'light' ? ResetLight : ResetDark;

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
