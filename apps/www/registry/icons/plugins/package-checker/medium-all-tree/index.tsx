import React from 'react';
import { cn } from '@/lib/utils';
import { type IconProps, type SvgProps, sizeMap } from '../../types';

export type MediumAllTreeProps = IconProps;

const MediumAllTreeLight: React.FC<SvgProps> = ({
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
      d="M14 3.5 8 1 2 3.5v5.679c0 1.766.892 3.057 2.032 4.079.839.751 1.86 1.395 2.797 1.987.31.196.613.387.896.573L8 16l.275-.182c.283-.186.585-.377.896-.573.937-.592 1.958-1.236 2.797-1.987C13.108 12.236 14 10.945 14 9.178zM6.35 5H5v6h1V7l1.5 4h1.091L10 7v4h1V5H9.65L8 9.6z"
      fill="#FFAF0F"
    />
  </svg>
);

const MediumAllTreeDark: React.FC<SvgProps> = ({
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
      d="M14 3.5 8 1 2 3.5v5.679c0 1.766.892 3.057 2.032 4.079.839.751 1.86 1.395 2.797 1.987.31.196.613.387.896.573L8 16l.275-.182c.283-.186.585-.377.896-.573.937-.592 1.958-1.236 2.797-1.987C13.108 12.236 14 10.945 14 9.178zM6.35 5H5v6h1V7l1.5 4h1.091L10 7v4h1V5H9.65L8 9.6z"
      fill="#F2C55C"
    />
  </svg>
);

export const MediumAllTree: React.FC<MediumAllTreeProps> = ({
  size = 'md',
  mode = 'light',
  className,
  'aria-label': ariaLabel,
  title,
  ...props
}) => {
  const SvgComponent =
    mode === 'light' ? MediumAllTreeLight : MediumAllTreeDark;

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
