import React from 'react';
import { cn } from '@/lib/utils';
import { type IconProps, type SvgProps, sizeMap } from '../../types';

export type CwmInviteProps = IconProps;

const CwmInviteLight: React.FC<SvgProps> = ({
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
      d="M11.708 9.586a.5.5 0 0 1 0-.707l1.343-1.343A3.243 3.243 0 0 0 8.465 2.95L7.122 4.293a.5.5 0 0 1-.707-.707l1.343-1.343a4.243 4.243 0 0 1 6 6l-1.343 1.343a.5.5 0 0 1-.707 0"
      fill="#6C707E"
    />
    <path
      d="M10.647 4.647a.5.5 0 1 1 .707.707l-6 6a.5.5 0 0 1-.707-.707z"
      fill="#6C707E"
    />
    <path
      d="M4.293 6.415a.5.5 0 0 1 0 .707l-1.34 1.34a3.243 3.243 0 0 0 4.586 4.585l1.34-1.34a.5.5 0 1 1 .707.708l-1.34 1.34a4.243 4.243 0 0 1-6-6l1.34-1.34a.5.5 0 0 1 .707 0"
      fill="#6C707E"
    />
  </svg>
);

const CwmInviteDark: React.FC<SvgProps> = ({
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
      d="M11.708 9.586a.5.5 0 0 1 0-.707l1.343-1.343A3.243 3.243 0 0 0 8.465 2.95L7.122 4.293a.5.5 0 0 1-.707-.707l1.343-1.343a4.243 4.243 0 0 1 6 6l-1.343 1.343a.5.5 0 0 1-.707 0"
      fill="#CED0D6"
    />
    <path
      d="M10.647 4.647a.5.5 0 1 1 .707.707l-6 6a.5.5 0 0 1-.707-.707z"
      fill="#CED0D6"
    />
    <path
      d="M4.293 6.415a.5.5 0 0 1 0 .707l-1.34 1.34a3.243 3.243 0 0 0 4.586 4.585l1.34-1.34a.5.5 0 1 1 .707.708l-1.34 1.34a4.243 4.243 0 0 1-6-6l1.34-1.34a.5.5 0 0 1 .707 0"
      fill="#CED0D6"
    />
  </svg>
);

export const CwmInvite: React.FC<CwmInviteProps> = ({
  size = 'md',
  mode = 'light',
  className,
  'aria-label': ariaLabel,
  title,
  ...props
}) => {
  const SvgComponent = mode === 'light' ? CwmInviteLight : CwmInviteDark;

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
