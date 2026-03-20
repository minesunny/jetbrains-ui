import type { FC } from 'react';
import { cn } from '@/lib/utils';
import { type IconProps, type SvgProps, sizeMap } from '../types';

export type TestErrorProps = IconProps;

const TestErrorLight: FC<SvgProps> = ({
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
      d="M15 8A7 7 0 1 1 1 8a7 7 0 0 1 14 0M8 4a1 1 0 0 1 1 1v2.5a1 1 0 1 1-2 0V5a1 1 0 0 1 1-1m1 7a1 1 0 1 1-2 0 1 1 0 0 1 2 0"
      fill="#E55765"
    />
  </svg>
);

const TestErrorDark: FC<SvgProps> = ({
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
      d="M15 8A7 7 0 1 1 1 8a7 7 0 0 1 14 0M8 4a1 1 0 0 1 1 1v2.5a1 1 0 1 1-2 0V5a1 1 0 0 1 1-1m1 7a1 1 0 1 1-2 0 1 1 0 0 1 2 0"
      fill="#DB5C5C"
    />
  </svg>
);

export const TestError: FC<TestErrorProps> = ({
  size = 'md',
  mode = 'light',
  className,
  'aria-label': ariaLabel,
  title,
  ...props
}) => {
  const SvgComponent = mode === 'light' ? TestErrorLight : TestErrorDark;

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
