import type { FC } from 'react';
import { cn } from '@/lib/utils';
import { type IconProps, type SvgProps, sizeMap } from '../types';

export type ContextsProps = IconProps;

const ContextsLight: FC<SvgProps> = ({
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
    <rect
      x="2.5"
      y="4.5"
      width="9"
      height="9"
      rx="1.5"
      fill="#EDF3FF"
      stroke="#3574F0"
    />
    <path
      d="M13.5 10.5V4A1.5 1.5 0 0 0 12 2.5H5.5"
      stroke="#3574F0"
      strokeLinecap="round"
    />
  </svg>
);

const ContextsDark: FC<SvgProps> = ({
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
    <rect
      x="2.5"
      y="4.5"
      width="9"
      height="9"
      rx="1.5"
      fill="#2E436E"
      stroke="#548AF7"
    />
    <path
      d="M13.5 10.5V4A1.5 1.5 0 0 0 12 2.5H5.5"
      stroke="#548AF7"
      strokeLinecap="round"
    />
  </svg>
);

export const Contexts: FC<ContextsProps> = ({
  size = 'md',
  mode = 'light',
  className,
  'aria-label': ariaLabel,
  title,
  ...props
}) => {
  const SvgComponent = mode === 'light' ? ContextsLight : ContextsDark;

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
