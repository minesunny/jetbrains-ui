import type { FC } from 'react';
import { cn } from '@/lib/utils';
import { type IconProps, type SvgProps, sizeMap } from '../../types';

export type RunAnythingProps = IconProps;

const RunAnythingLight: FC<SvgProps> = ({
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
    <rect x="1.5" y="2.5" width="13" height="11" rx="1.5" stroke="#6C707E" />
    <path
      d="M7.95 9.327a.2.2 0 0 1 0 .346l-3.15 1.82a.2.2 0 0 1-.3-.175V7.682a.2.2 0 0 1 .3-.174z"
      stroke="#6C707E"
    />
    <path stroke="#6C707E" strokeWidth=".5" d="M1.25 5.25H14.75V5.75H1.25z" />
  </svg>
);

const RunAnythingDark: FC<SvgProps> = ({
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
    <rect x="1.5" y="2.5" width="13" height="11" rx="1.5" stroke="#CED0D6" />
    <path
      d="M7.95 9.327a.2.2 0 0 1 0 .346l-3.15 1.82a.2.2 0 0 1-.3-.175V7.682a.2.2 0 0 1 .3-.174z"
      stroke="#CED0D6"
    />
    <path stroke="#CED0D6" strokeWidth=".5" d="M1.25 5.25H14.75V5.75H1.25z" />
  </svg>
);

export const RunAnything: FC<RunAnythingProps> = ({
  size = 'md',
  mode = 'light',
  className,
  'aria-label': ariaLabel,
  title,
  ...props
}) => {
  const SvgComponent = mode === 'light' ? RunAnythingLight : RunAnythingDark;

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
