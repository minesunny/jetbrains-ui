import type { FC } from 'react';
import { cn } from '@/lib/utils';
import { type IconProps, type SvgProps, sizeMap } from '../types';

export type PpWebProps = IconProps;

const PpWebLight: FC<SvgProps> = ({
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
    <circle cx="8" cy="8" r="6.5" stroke="#6C707E" />
    <path
      d="M8 1.5c.245 0 .52.114.816.406.299.295.59.745.846 1.341.51 1.19.838 2.871.838 4.753s-.328 3.562-.838 4.753c-.255.596-.547 1.047-.846 1.34-.296.293-.57.407-.816.407-.245 0-.52-.114-.816-.406-.299-.294-.59-.745-.846-1.341C5.828 11.563 5.5 9.882 5.5 8s.328-3.562.838-4.753c.255-.596.547-1.046.846-1.34.296-.293.57-.407.816-.407ZM14.222 5.5H1.777M14.222 10.5H1.777"
      stroke="#6C707E"
    />
  </svg>
);

const PpWebDark: FC<SvgProps> = ({
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
    <circle cx="8" cy="8" r="6.5" stroke="#CED0D6" />
    <path
      d="M8 1.5c.245 0 .52.114.816.406.299.295.59.745.846 1.341.51 1.19.838 2.871.838 4.753s-.328 3.562-.838 4.753c-.255.596-.547 1.047-.846 1.34-.296.293-.57.407-.816.407-.245 0-.52-.114-.816-.406-.299-.294-.59-.745-.846-1.341C5.828 11.563 5.5 9.882 5.5 8s.328-3.562.838-4.753c.255-.596.547-1.046.846-1.34.296-.293.57-.407.816-.407ZM14.222 5.5H1.777M14.222 10.5H1.777"
      stroke="#CED0D6"
    />
  </svg>
);

export const PpWeb: FC<PpWebProps> = ({
  size = 'md',
  mode = 'light',
  className,
  'aria-label': ariaLabel,
  title,
  ...props
}) => {
  const SvgComponent = mode === 'light' ? PpWebLight : PpWebDark;

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
