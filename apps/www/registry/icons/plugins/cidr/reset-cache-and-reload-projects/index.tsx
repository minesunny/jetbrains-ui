import React from 'react';
import { cn } from '@/lib/utils';
import { type IconProps, type SvgProps, sizeMap } from '../../types';

export type ResetCacheAndReloadProjectsProps = IconProps;

const ResetCacheAndReloadProjectsLight: React.FC<SvgProps> = ({
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
    viewBox="0 0 17 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    role={role}
    aria-label={ariaLabel}
    aria-hidden={ariaHidden}
  >
    {title && <title>{title}</title>}
    <path
      d="M2.621 9V8a5.5 5.5 0 0 1 8.5-4.61M5.121 12.61a5.5 5.5 0 0 0 8.5-4.61V7"
      stroke="#DB3B4B"
      strokeLinecap="round"
    />
    <path
      d="M.5 7.321 2.62 9.443 4.742 7.32M11.5 8.679l2.121-2.122 2.121 2.122"
      stroke="#DB3B4B"
      strokeLinecap="round"
    />
  </svg>
);

const ResetCacheAndReloadProjectsDark: React.FC<SvgProps> = ({
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
    viewBox="0 0 17 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    role={role}
    aria-label={ariaLabel}
    aria-hidden={ariaHidden}
  >
    {title && <title>{title}</title>}
    <path
      d="M2.621 9V8a5.5 5.5 0 0 1 8.5-4.61M5.121 12.61a5.5 5.5 0 0 0 8.5-4.61V7"
      stroke="#DB5C5C"
      strokeLinecap="round"
    />
    <path
      d="M.5 7.321 2.62 9.443 4.742 7.32M11.5 8.679l2.121-2.122 2.121 2.122"
      stroke="#DB5C5C"
      strokeLinecap="round"
    />
  </svg>
);

export const ResetCacheAndReloadProjects: React.FC<
  ResetCacheAndReloadProjectsProps
> = ({
  size = 'md',
  mode = 'light',
  className,
  'aria-label': ariaLabel,
  title,
  ...props
}) => {
  const SvgComponent =
    mode === 'light'
      ? ResetCacheAndReloadProjectsLight
      : ResetCacheAndReloadProjectsDark;

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
