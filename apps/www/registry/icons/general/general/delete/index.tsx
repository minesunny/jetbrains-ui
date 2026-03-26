import type { FC } from 'react';
import { cn } from '@/lib/utils';
import { type IconProps, type SvgProps, sizeMap } from '../../types';

export type DeleteProps = IconProps;

const DeleteLight: FC<SvgProps> = ({
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
      d="M7 2h2a1 1 0 0 1 1 1H6a1 1 0 0 1 1-1M5 3a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2h2a1 1 0 0 1 1 1v2h-1v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V6H2V4a1 1 0 0 1 1-1zm6 1H3v1h10V4zM4 6h8v7a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1zm2.5 1a.5.5 0 0 0-.5.5v4a.5.5 0 0 0 1 0v-4a.5.5 0 0 0-.5-.5m2.5.5a.5.5 0 0 1 1 0v4a.5.5 0 0 1-1 0z"
      fill="#6C707E"
    />
  </svg>
);

const DeleteDark: FC<SvgProps> = ({
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
      d="M7 2h2a1 1 0 0 1 1 1H6a1 1 0 0 1 1-1M5 3a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2h2a1 1 0 0 1 1 1v2h-1v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V6H2V4a1 1 0 0 1 1-1zm6 1H3v1h10V4zM4 6h8v7a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1zm2.5 1a.5.5 0 0 0-.5.5v4a.5.5 0 0 0 1 0v-4a.5.5 0 0 0-.5-.5m2.5.5a.5.5 0 0 1 1 0v4a.5.5 0 0 1-1 0z"
      fill="#CED0D6"
    />
  </svg>
);

export const Delete: FC<DeleteProps> = ({
  size = 'md',
  mode = 'light',
  className,
  'aria-label': ariaLabel,
  title,
  ...props
}) => {
  const SvgComponent = mode === 'light' ? DeleteLight : DeleteDark;

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
