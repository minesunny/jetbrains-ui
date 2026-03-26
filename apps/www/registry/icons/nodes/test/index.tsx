import type { FC } from 'react';
import { cn } from '@/lib/utils';
import { type IconProps, type SvgProps, sizeMap } from '../types';

export type TestProps = IconProps;

const TestLight: FC<SvgProps> = ({
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
      d="M8.462 11.5h.999v-.906h-.868a.56.56 0 0 1-.573-.573V6.82h1.44l.006-.906H8.02V4.5h-.944v.95a.444.444 0 0 1-.463.463h-.704l-.006.906h1.08l.006 3.295c0 .797.622 1.386 1.473 1.386"
      fill="#DB3B4B"
    />
  </svg>
);

const TestDark: FC<SvgProps> = ({
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
      d="M8.462 11.5h.999v-.906h-.868a.56.56 0 0 1-.573-.573V6.82h1.44l.006-.906H8.02V4.5h-.944v.95a.444.444 0 0 1-.463.463h-.704l-.006.906h1.08l.006 3.295c0 .797.622 1.386 1.473 1.386"
      fill="#DB5C5C"
    />
  </svg>
);

export const Test: FC<TestProps> = ({
  size = 'md',
  mode = 'light',
  className,
  'aria-label': ariaLabel,
  title,
  ...props
}) => {
  const SvgComponent = mode === 'light' ? TestLight : TestDark;

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
