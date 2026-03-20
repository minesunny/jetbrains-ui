import type { FC } from 'react';
import { cn } from '@/lib/utils';
import { type IconProps, type SvgProps, sizeMap } from '../types';

export type TestTerminatedProps = IconProps;

const TestTerminatedLight: FC<SvgProps> = ({
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
      d="M13.137 11.864a.9.9 0 1 1-1.273 1.272L8 9.272l-3.864 3.864a.9.9 0 1 1-1.273-1.272L6.727 8 2.864 4.136a.9.9 0 1 1 1.273-1.272L8 6.727l3.863-3.863a.9.9 0 0 1 1.273 1.272L9.273 8z"
      fill="#818594"
    />
  </svg>
);

const TestTerminatedDark: FC<SvgProps> = ({
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
      d="M13.137 11.864a.9.9 0 1 1-1.273 1.272L8 9.272l-3.864 3.864a.9.9 0 1 1-1.273-1.272L6.727 8 2.864 4.136a.9.9 0 1 1 1.273-1.272L8 6.727l3.863-3.863a.9.9 0 0 1 1.273 1.272L9.273 8z"
      fill="#CED0D6"
    />
  </svg>
);

export const TestTerminated: FC<TestTerminatedProps> = ({
  size = 'md',
  mode = 'light',
  className,
  'aria-label': ariaLabel,
  title,
  ...props
}) => {
  const SvgComponent =
    mode === 'light' ? TestTerminatedLight : TestTerminatedDark;

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
