import type { FC } from 'react';
import { cn } from '@/lib/utils';
import { type IconProps, type SvgProps, sizeMap } from '../types';

export type TestIgnoredProps = IconProps;

const TestIgnoredLight: FC<SvgProps> = ({
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
      d="M14.962 8.733Q15 8.37 15 8a7 7 0 1 0-6.267 6.962 4.5 4.5 0 0 1 6.23-6.23"
      fill="#FFF7F7"
    />
    <path
      d="M8.254 13.995a6 6 0 1 1 5.74-5.74c.344.12.669.282.968.478Q15 8.37 15 8a7 7 0 1 0-6.267 6.962 4.5 4.5 0 0 1-.479-.967"
      fill="#DB3B4B"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M8.432 10.573a.56.56 0 0 1-.412-.552V6.82h1.44l.006-.906H8.02V4.5h-.944v.95a.444.444 0 0 1-.463.463h-.704l-.006.906h1.08l.006 3.295c0 .685.46 1.217 1.13 1.352q.11-.467.313-.893M16 12.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0m-1 0a2.5 2.5 0 0 1-3.879 2.086l3.465-3.465c.262.396.414.87.414 1.379m-4.586 1.379 3.465-3.465a2.5 2.5 0 0 0-3.465 3.465"
      fill="#DB3B4B"
    />
  </svg>
);

const TestIgnoredDark: FC<SvgProps> = ({
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
      d="M14.962 8.733Q15 8.37 15 8a7 7 0 1 0-6.267 6.962 4.5 4.5 0 0 1 6.23-6.23"
      fill="#402929"
    />
    <path
      d="M8.254 13.995a6 6 0 1 1 5.74-5.74c.344.12.669.282.968.478Q15 8.37 15 8a7 7 0 1 0-6.267 6.962 4.5 4.5 0 0 1-.479-.967"
      fill="#DB5C5C"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M8.432 10.573a.56.56 0 0 1-.412-.552V6.82h1.44l.006-.906H8.02V4.5h-.944v.95a.444.444 0 0 1-.463.463h-.704l-.006.906h1.08l.006 3.295c0 .685.46 1.217 1.13 1.352q.11-.467.313-.893M16 12.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0m-1 0a2.5 2.5 0 0 1-3.879 2.086l3.465-3.465c.262.396.414.87.414 1.379m-4.586 1.379 3.465-3.465a2.5 2.5 0 0 0-3.465 3.465"
      fill="#DB5C5C"
    />
  </svg>
);

export const TestIgnored: FC<TestIgnoredProps> = ({
  size = 'md',
  mode = 'light',
  className,
  'aria-label': ariaLabel,
  title,
  ...props
}) => {
  const SvgComponent = mode === 'light' ? TestIgnoredLight : TestIgnoredDark;

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
