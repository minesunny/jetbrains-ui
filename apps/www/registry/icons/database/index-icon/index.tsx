import type { FC } from 'react';
import { cn } from '@/lib/utils';
import { type IconProps, type SvgProps, sizeMap } from '../types';

export type IndexProps = IconProps;

const IndexLight: FC<SvgProps> = ({
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
      d="M7 2a.5.5 0 0 0-.5.5v.974a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5V2.5A.5.5 0 0 0 8 2zM4.5 6.5A.5.5 0 0 1 5 6h2.5a.5.5 0 0 1 .5.5V14h2.5a.5.5 0 0 1 0 1h-6a.5.5 0 0 1 0-1H7V7H5a.5.5 0 0 1-.5-.5"
      fill="#3574F0"
    />
  </svg>
);

const IndexDark: FC<SvgProps> = ({
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
      d="M7 2a.5.5 0 0 0-.5.5v.974a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5V2.5A.5.5 0 0 0 8 2zM4.5 6.5A.5.5 0 0 1 5 6h2.5a.5.5 0 0 1 .5.5V14h2.5a.5.5 0 0 1 0 1h-6a.5.5 0 0 1 0-1H7V7H5a.5.5 0 0 1-.5-.5"
      fill="#548AF7"
    />
  </svg>
);

export const Index: FC<IndexProps> = ({
  size = 'md',
  mode = 'light',
  className,
  'aria-label': ariaLabel,
  title,
  ...props
}) => {
  const SvgComponent = mode === 'light' ? IndexLight : IndexDark;

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
