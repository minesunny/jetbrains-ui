import type { FC } from 'react';
import { cn } from '@/lib/utils';
import { type IconProps, type SvgProps, sizeMap } from '../../types';

export type VcsProps = IconProps;

const VcsLight: FC<SvgProps> = ({
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
    <path d="M4.5 11.5h4a2 2 0 0 0 2-2V8" stroke="#6C707E" />
    <path
      d="M4.5 6.5v8"
      stroke="#6C707E"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <circle cx="10.5" cy="6" r="2" stroke="#6C707E" />
    <circle cx="4.5" cy="4" r="2" stroke="#6C707E" />
  </svg>
);

const VcsDark: FC<SvgProps> = ({
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
    <path d="M4.5 11.5h4a2 2 0 0 0 2-2V8" stroke="#CED0D6" />
    <path
      d="M4.5 6.5v8"
      stroke="#CED0D6"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <circle cx="10.5" cy="6" r="2" stroke="#CED0D6" />
    <circle cx="4.5" cy="4" r="2" stroke="#CED0D6" />
  </svg>
);

export const Vcs: FC<VcsProps> = ({
  size = 'md',
  mode = 'light',
  className,
  'aria-label': ariaLabel,
  title,
  ...props
}) => {
  const SvgComponent = mode === 'light' ? VcsLight : VcsDark;

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
