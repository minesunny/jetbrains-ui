import type { FC } from 'react';
import { cn } from '@/lib/utils';
import { type IconProps, type SvgProps, sizeMap } from '../types';

export type TestSkippedProps = IconProps;

const TestSkippedLight: FC<SvgProps> = ({
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
      d="M7.646 1.99 1.99 7.646a.5.5 0 0 0 0 .708l5.656 5.656a.5.5 0 0 0 .707 0l5.657-5.656a.5.5 0 0 0 0-.708L8.353 1.99a.5.5 0 0 0-.707 0M.93 6.586a2 2 0 0 0 0 2.828l5.657 5.657a2 2 0 0 0 2.828 0l5.657-5.657a2 2 0 0 0 0-2.828L9.414.929a2 2 0 0 0-2.828 0z"
      fill="#FFAF0F"
    />
    <path d="M6 8h4" stroke="#FFAF0F" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

const TestSkippedDark: FC<SvgProps> = ({
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
      d="M7.646 1.99 1.99 7.646a.5.5 0 0 0 0 .708l5.656 5.656a.5.5 0 0 0 .707 0l5.657-5.656a.5.5 0 0 0 0-.708L8.353 1.99a.5.5 0 0 0-.707 0M.93 6.586a2 2 0 0 0 0 2.828l5.657 5.657a2 2 0 0 0 2.828 0l5.657-5.657a2 2 0 0 0 0-2.828L9.414.929a2 2 0 0 0-2.828 0z"
      fill="#F2C55C"
    />
    <path d="M6 8h4" stroke="#F2C55C" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

export const TestSkipped: FC<TestSkippedProps> = ({
  size = 'md',
  mode = 'light',
  className,
  'aria-label': ariaLabel,
  title,
  ...props
}) => {
  const SvgComponent = mode === 'light' ? TestSkippedLight : TestSkippedDark;

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
