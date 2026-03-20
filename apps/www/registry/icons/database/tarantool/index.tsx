import type { FC } from 'react';
import { cn } from '@/lib/utils';
import { type IconProps, type SvgProps, sizeMap } from '../types';

export type TarantoolProps = IconProps;

const TarantoolLight: FC<SvgProps> = ({
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
      d="M7.583 9.824a2.556 2.556 0 0 1 0-3.614L9.11 4.683a2.556 2.556 0 0 1 3.614 0l1.527 1.527a2.556 2.556 0 0 1 0 3.614l-1.527 1.528a2.556 2.556 0 0 1-3.614 0z"
      fill="url(#a)"
    />
    <path
      d="M1.922 10.224a3.15 3.15 0 0 1 0-4.453l1.979-1.979a3.15 3.15 0 0 1 4.453 0l1.979 1.98a3.15 3.15 0 0 1 0 4.452l-1.979 1.979a3.15 3.15 0 0 1-4.453 0z"
      fill="url(#b)"
    />
    <path
      d="m9.178 4.62 1.155 1.154a3.15 3.15 0 0 1 0 4.453L9.158 11.4l-.048-.047-1.528-1.527a2.556 2.556 0 0 1 0-3.614L9.11 4.685z"
      fill="#FF0D2A"
    />
    <defs>
      <linearGradient
        id="a"
        x1="15"
        y1="7.87"
        x2="1"
        y2="7.87"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#FF0D2A" />
        <stop offset=".417" stopColor="#FF0D2A" stopOpacity=".55" />
        <stop offset="1" stopColor="#FF0D2A" />
      </linearGradient>
      <linearGradient
        id="b"
        x1="15"
        y1="7.87"
        x2="1"
        y2="7.87"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#FF0D2A" />
        <stop offset=".417" stopColor="#FF0D2A" stopOpacity=".55" />
        <stop offset="1" stopColor="#FF0D2A" />
      </linearGradient>
    </defs>
  </svg>
);

const TarantoolDark: FC<SvgProps> = ({
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
      d="M7.583 9.824a2.556 2.556 0 0 1 0-3.614L9.11 4.683a2.556 2.556 0 0 1 3.614 0l1.527 1.527a2.556 2.556 0 0 1 0 3.614l-1.527 1.528a2.556 2.556 0 0 1-3.614 0z"
      fill="url(#a)"
    />
    <path
      d="M1.922 10.224a3.15 3.15 0 0 1 0-4.453l1.979-1.979a3.15 3.15 0 0 1 4.453 0l1.979 1.98a3.15 3.15 0 0 1 0 4.452l-1.979 1.979a3.15 3.15 0 0 1-4.453 0z"
      fill="url(#b)"
    />
    <path
      d="m9.178 4.62 1.155 1.154a3.15 3.15 0 0 1 0 4.453L9.158 11.4l-.048-.047-1.528-1.527a2.556 2.556 0 0 1 0-3.614L9.11 4.685z"
      fill="#FF0D2A"
    />
    <defs>
      <linearGradient
        id="a"
        x1="15"
        y1="7.87"
        x2="1"
        y2="7.87"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#FF0D2A" />
        <stop offset=".417" stopColor="#FF0D2A" stopOpacity=".55" />
        <stop offset="1" stopColor="#FF0D2A" />
      </linearGradient>
      <linearGradient
        id="b"
        x1="15"
        y1="7.87"
        x2="1"
        y2="7.87"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#FF0D2A" />
        <stop offset=".417" stopColor="#FF0D2A" stopOpacity=".55" />
        <stop offset="1" stopColor="#FF0D2A" />
      </linearGradient>
    </defs>
  </svg>
);

export const Tarantool: FC<TarantoolProps> = ({
  size = 'md',
  mode = 'light',
  className,
  'aria-label': ariaLabel,
  title,
  ...props
}) => {
  const SvgComponent = mode === 'light' ? TarantoolLight : TarantoolDark;

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
