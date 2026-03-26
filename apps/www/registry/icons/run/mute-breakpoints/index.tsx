import type { FC } from 'react';
import { cn } from '@/lib/utils';
import { type IconProps, type SvgProps, sizeMap } from '../types';

export type MuteBreakpointsProps = IconProps;

const MuteBreakpointsLight: FC<SvgProps> = ({
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
      d="M10.403 3.051a5.5 5.5 0 0 0-7.352 7.352zM5.597 12.95a5.5 5.5 0 0 0 7.352-7.352z"
      fill="#FFF7F7"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M10.403 3.051a5.5 5.5 0 0 0-7.352 7.352l.759-.758A4.5 4.5 0 0 1 9.645 3.81zm-4.048 9.14a4.5 4.5 0 0 0 5.834-5.834l.76-.76c.353.726.55 1.541.55 2.403a5.5 5.5 0 0 1-7.902 4.949z"
      fill="#DB3B4B"
    />
    <rect
      x="13.657"
      y="1.636"
      width="1"
      height="17"
      rx=".5"
      transform="rotate(45 13.657 1.636)"
      fill="#6C707E"
    />
  </svg>
);

const MuteBreakpointsDark: FC<SvgProps> = ({
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
      d="M10.403 3.051a5.5 5.5 0 0 0-7.352 7.352zM5.597 12.95a5.5 5.5 0 0 0 7.352-7.352z"
      fill="#402929"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M10.403 3.051a5.5 5.5 0 0 0-7.352 7.352l.759-.758A4.5 4.5 0 0 1 9.645 3.81zm-4.048 9.14a4.5 4.5 0 0 0 5.834-5.834l.76-.76c.353.726.55 1.541.55 2.403a5.5 5.5 0 0 1-7.902 4.949z"
      fill="#DB5C5C"
    />
    <rect
      x="13.657"
      y="1.636"
      width="1"
      height="17"
      rx=".5"
      transform="rotate(45 13.657 1.636)"
      fill="#CED0D6"
    />
  </svg>
);

export const MuteBreakpoints: FC<MuteBreakpointsProps> = ({
  size = 'md',
  mode = 'light',
  className,
  'aria-label': ariaLabel,
  title,
  ...props
}) => {
  const SvgComponent =
    mode === 'light' ? MuteBreakpointsLight : MuteBreakpointsDark;

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
