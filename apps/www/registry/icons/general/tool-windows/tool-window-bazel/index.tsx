import type { FC } from 'react';
import { cn } from '@/lib/utils';
import { type IconProps, type SvgProps, sizeMap } from '../../types';

export type ToolWindowBazelProps = IconProps;

const ToolWindowBazelLight: FC<SvgProps> = ({
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
      d="M14.5 4.707v3.086l-6.5 6.5-6.5-6.5V4.707l3-3 3.5 3.5 3.5-3.5z"
      stroke="#6C707E"
    />
    <path
      d="M14.293 4.5 8 10.793 1.707 4.5 4.5 1.707l3.5 3.5 3.5-3.5z"
      stroke="#6C707E"
    />
    <path
      d="M10.793 8 8 10.793 5.207 8 8 5.207zM8 10.5V14M11 8v3.5M5 8v3.5"
      stroke="#6C707E"
    />
  </svg>
);

const ToolWindowBazelDark: FC<SvgProps> = ({
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
      d="M14.5 4.707v3.086l-6.5 6.5-6.5-6.5V4.707l3-3 3.5 3.5 3.5-3.5z"
      stroke="#CED0D6"
    />
    <path
      d="M14.293 4.5 8 10.793 1.707 4.5 4.5 1.707l3.5 3.5 3.5-3.5z"
      stroke="#CED0D6"
    />
    <path
      d="M10.793 8 8 10.793 5.207 8 8 5.207zM8 10.5V14M11 8v3.5M5 8v3.5"
      stroke="#CED0D6"
    />
  </svg>
);

export const ToolWindowBazel: FC<ToolWindowBazelProps> = ({
  size = 'md',
  mode = 'light',
  className,
  'aria-label': ariaLabel,
  title,
  ...props
}) => {
  const SvgComponent =
    mode === 'light' ? ToolWindowBazelLight : ToolWindowBazelDark;

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
