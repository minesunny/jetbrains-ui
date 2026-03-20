import type { FC } from 'react';
import { cn } from '@/lib/utils';
import { type IconProps, type SvgProps, sizeMap } from '../types';

export type RollbackProps = IconProps;

const RollbackLight: FC<SvgProps> = ({
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
      d="M2.7 2a.5.5 0 0 1 1 0v1.816a6 6 0 1 1-1.119 6.761.5.5 0 1 1 .903-.43A5 5 0 1 0 4.43 4.5H6.2a.5.5 0 0 1 0 1H2.7z"
      fill="#DB3B4B"
    />
  </svg>
);

const RollbackDark: FC<SvgProps> = ({
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
      d="M2.7 2a.5.5 0 0 1 1 0v1.816a6 6 0 1 1-1.119 6.761.5.5 0 1 1 .903-.43A5 5 0 1 0 4.43 4.5H6.2a.5.5 0 0 1 0 1H2.7z"
      fill="#DB5C5C"
    />
  </svg>
);

export const Rollback: FC<RollbackProps> = ({
  size = 'md',
  mode = 'light',
  className,
  'aria-label': ariaLabel,
  title,
  ...props
}) => {
  const SvgComponent = mode === 'light' ? RollbackLight : RollbackDark;

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
