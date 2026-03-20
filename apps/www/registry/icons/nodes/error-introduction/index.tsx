import type { FC } from 'react';
import { cn } from '@/lib/utils';
import { type IconProps, type SvgProps, sizeMap } from '../types';

export type ErrorIntroductionProps = IconProps;

const ErrorIntroductionLight: FC<SvgProps> = ({
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
    <circle cx="8" cy="8" r="6.5" fill="#FFF7F7" stroke="#DB3B4B" />
    <path
      d="M8 4.5v4"
      stroke="#DB3B4B"
      strokeWidth="1.2"
      strokeLinecap="round"
    />
    <circle
      cx="8"
      cy="10.8"
      r=".5"
      fill="#DB3B4B"
      stroke="#DB3B4B"
      strokeWidth=".6"
    />
  </svg>
);

const ErrorIntroductionDark: FC<SvgProps> = ({
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
    <circle cx="8" cy="8" r="6.5" fill="#402929" stroke="#DB5C5C" />
    <path
      d="M8 4.5v4"
      stroke="#DB5C5C"
      strokeWidth="1.2"
      strokeLinecap="round"
    />
    <circle
      cx="8"
      cy="10.8"
      r=".5"
      fill="#DB5C5C"
      stroke="#DB5C5C"
      strokeWidth=".6"
    />
  </svg>
);

export const ErrorIntroduction: FC<ErrorIntroductionProps> = ({
  size = 'md',
  mode = 'light',
  className,
  'aria-label': ariaLabel,
  title,
  ...props
}) => {
  const SvgComponent =
    mode === 'light' ? ErrorIntroductionLight : ErrorIntroductionDark;

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
