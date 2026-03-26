import type { FC } from 'react';
import { cn } from '@/lib/utils';
import { type IconProps, type SvgProps, sizeMap } from '../types';

export type LocalScopeProps = IconProps;

const LocalScopeLight: FC<SvgProps> = ({
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
    <circle cx="8" cy="8" r="6.5" fill="#EBECF0" stroke="#6C707E" />
    <path
      d="M8 5.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Z"
      fill="#EDF3FF"
      stroke="#3574F0"
    />
  </svg>
);

const LocalScopeDark: FC<SvgProps> = ({
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
    <circle cx="8" cy="8" r="6.5" fill="#43454A" stroke="#CED0D6" />
    <path
      d="M8 5.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Z"
      fill="#25324D"
      stroke="#548AF7"
    />
  </svg>
);

export const LocalScope: FC<LocalScopeProps> = ({
  size = 'md',
  mode = 'light',
  className,
  'aria-label': ariaLabel,
  title,
  ...props
}) => {
  const SvgComponent = mode === 'light' ? LocalScopeLight : LocalScopeDark;

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
