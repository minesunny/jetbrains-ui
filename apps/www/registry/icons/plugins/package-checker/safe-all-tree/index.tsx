import React from 'react';
import { cn } from '@/lib/utils';
import { type IconProps, type SvgProps, sizeMap } from '../../types';

export type SafeAllTreeProps = IconProps;

const SafeAllTreeLight: React.FC<SvgProps> = ({
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
    {title && <title>{title}</title>}
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M14 3.5 8 1 2 3.5v5.679c0 1.766.892 3.057 2.032 4.079.839.751 1.86 1.395 2.797 1.987.31.196.613.387.896.573L8 16l.275-.182c.283-.186.585-.377.896-.573.937-.592 1.958-1.236 2.797-1.987C13.108 12.236 14 10.945 14 9.178zm-2.793 3L7 10.707 4.793 8.5l.707-.707 1.5 1.5 3.5-3.5z"
      fill="#55A76A"
    />
  </svg>
);

const SafeAllTreeDark: React.FC<SvgProps> = ({
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
    {title && <title>{title}</title>}
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M14 3.5 8 1 2 3.5v5.679c0 1.766.892 3.057 2.032 4.079.839.751 1.86 1.395 2.797 1.987.31.196.613.387.896.573L8 16l.275-.182c.283-.186.585-.377.896-.573.937-.592 1.958-1.236 2.797-1.987C13.108 12.236 14 10.945 14 9.178zm-2.793 3L7 10.707 4.793 8.5l.707-.707 1.5 1.5 3.5-3.5z"
      fill="#57965C"
    />
  </svg>
);

export const SafeAllTree: React.FC<SafeAllTreeProps> = ({
  size = 'md',
  mode = 'light',
  className,
  'aria-label': ariaLabel,
  title,
  ...props
}) => {
  const SvgComponent = mode === 'light' ? SafeAllTreeLight : SafeAllTreeDark;

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
