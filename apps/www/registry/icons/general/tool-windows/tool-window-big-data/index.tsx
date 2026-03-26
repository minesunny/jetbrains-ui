import type { FC } from 'react';
import { cn } from '@/lib/utils';
import { type IconProps, type SvgProps, sizeMap } from '../../types';

export type ToolWindowBigDataProps = IconProps;

const ToolWindowBigDataLight: FC<SvgProps> = ({
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
      d="M5 3.875v8.25c0 .483.392.875.875.875H7A5 5 0 0 0 7 3H5.875A.875.875 0 0 0 5 3.875M7 12H6V4h1a4 4 0 1 1 0 8"
      fill="#6C707E"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M3 3v10a2 2 0 0 0 2 2h2A7 7 0 1 0 7 1H5a2 2 0 0 0-2 2m1 10V3a1 1 0 0 1 1-1h2a6 6 0 0 1 0 12H5a1 1 0 0 1-1-1"
      fill="#6C707E"
    />
  </svg>
);

const ToolWindowBigDataDark: FC<SvgProps> = ({
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
      d="M5 3.875v8.25c0 .483.392.875.875.875H7A5 5 0 0 0 7 3H5.875A.875.875 0 0 0 5 3.875M7 12H6V4h1a4 4 0 1 1 0 8"
      fill="#CED0D6"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M3 3v10a2 2 0 0 0 2 2h2A7 7 0 1 0 7 1H5a2 2 0 0 0-2 2m1 10V3a1 1 0 0 1 1-1h2a6 6 0 0 1 0 12H5a1 1 0 0 1-1-1"
      fill="#CED0D6"
    />
  </svg>
);

export const ToolWindowBigData: FC<ToolWindowBigDataProps> = ({
  size = 'md',
  mode = 'light',
  className,
  'aria-label': ariaLabel,
  title,
  ...props
}) => {
  const SvgComponent =
    mode === 'light' ? ToolWindowBigDataLight : ToolWindowBigDataDark;

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
