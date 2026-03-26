import type { FC } from 'react';
import { cn } from '@/lib/utils';
import { type IconProps, type SvgProps, sizeMap } from '../types';

export type PinSelectedHoveredProps = IconProps;

const PinSelectedHoveredLight: FC<SvgProps> = ({
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
      d="M5 2.5h6a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5.996.996 0 0 0-.985 1.137l.212 1.492c.047.323.245.584.496.736 1.019.617 1.455 1.564 1.643 2.277a.24.24 0 0 1-.053.232.42.42 0 0 1-.313.126H4a.42.42 0 0 1-.312-.126.24.24 0 0 1-.054-.232c.188-.713.624-1.66 1.643-2.277.251-.152.45-.412.495-.735l.213-1.493A.996.996 0 0 0 5 4.5a.5.5 0 0 1-.5-.5V3a.5.5 0 0 1 .5-.5Z"
      fill="#EDF3FF"
      stroke="#3574F0"
    />
    <path d="M7.5 11h1v3.5a.5.5 0 0 1-1 0z" fill="#3574F0" />
  </svg>
);

const PinSelectedHoveredDark: FC<SvgProps> = ({
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
      d="M5 2.5h6a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5.996.996 0 0 0-.985 1.137l.212 1.492c.047.323.245.584.496.736 1.019.617 1.455 1.564 1.643 2.277a.24.24 0 0 1-.053.232.42.42 0 0 1-.313.126H4a.42.42 0 0 1-.312-.126.24.24 0 0 1-.054-.232c.188-.713.624-1.66 1.643-2.277.251-.152.45-.412.495-.735l.213-1.493A.996.996 0 0 0 5 4.5a.5.5 0 0 1-.5-.5V3a.5.5 0 0 1 .5-.5Z"
      fill="#25324D"
      stroke="#548AF7"
    />
    <path d="M7.5 11h1v3.5a.5.5 0 0 1-1 0z" fill="#548AF7" />
  </svg>
);

export const PinSelectedHovered: FC<PinSelectedHoveredProps> = ({
  size = 'md',
  mode = 'light',
  className,
  'aria-label': ariaLabel,
  title,
  ...props
}) => {
  const SvgComponent =
    mode === 'light' ? PinSelectedHoveredLight : PinSelectedHoveredDark;

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
