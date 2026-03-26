import type { FC } from 'react';
import { cn } from '@/lib/utils';
import { type IconProps, type SvgProps, sizeMap } from '../types';

export type SourceRootProps = IconProps;

const SourceRootLight: FC<SvgProps> = ({
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
      d="M2.75 2.5h3.288a.5.5 0 0 1 .349.142L8.15 4.358l.146.142H13A1.5 1.5 0 0 1 14.5 6v6.134c0 .785-.59 1.366-1.25 1.366H2.75c-.66 0-1.25-.58-1.25-1.366V3.866c0-.785.59-1.366 1.25-1.366Z"
      fill="#EDF3FF"
      stroke="#3574F0"
    />
  </svg>
);

const SourceRootDark: FC<SvgProps> = ({
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
      d="M2.75 2.5h3.288a.5.5 0 0 1 .349.142L8.15 4.358l.146.142H13A1.5 1.5 0 0 1 14.5 6v6.134c0 .785-.59 1.366-1.25 1.366H2.75c-.66 0-1.25-.58-1.25-1.366V3.866c0-.785.59-1.366 1.25-1.366Z"
      fill="#25324D"
      stroke="#548AF7"
    />
  </svg>
);

export const SourceRoot: FC<SourceRootProps> = ({
  size = 'md',
  mode = 'light',
  className,
  'aria-label': ariaLabel,
  title,
  ...props
}) => {
  const SvgComponent = mode === 'light' ? SourceRootLight : SourceRootDark;

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
