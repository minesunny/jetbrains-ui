import type { FC } from 'react';
import { cn } from '@/lib/utils';
import { type IconProps, type SvgProps, sizeMap } from '../../types';

export type PullRequestsProps = IconProps;

const PullRequestsLight: FC<SvgProps> = ({
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
    <circle cx="12.25" cy="12" r="2" stroke="#6C707E" />
    <path d="M12.25 10V5.6a1.6 1.6 0 0 0-1.6-1.6H8" stroke="#6C707E" />
    <path d="m9.75 6-2-2 2-2" stroke="#6C707E" strokeLinecap="round" />
    <circle cx="3.75" cy="12" r="2" stroke="#6C707E" />
    <path d="M3.75 6v4" stroke="#6C707E" />
    <circle cx="3.75" cy="4" r="2" stroke="#6C707E" />
  </svg>
);

const PullRequestsDark: FC<SvgProps> = ({
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
    <circle cx="12.25" cy="12" r="2" stroke="#CED0D6" />
    <path d="M12.25 10V5.6a1.6 1.6 0 0 0-1.6-1.6H8" stroke="#CED0D6" />
    <path d="m9.75 6-2-2 2-2" stroke="#CED0D6" strokeLinecap="round" />
    <circle cx="3.75" cy="12" r="2" stroke="#CED0D6" />
    <path d="M3.75 6v4" stroke="#CED0D6" />
    <circle cx="3.75" cy="4" r="2" stroke="#CED0D6" />
  </svg>
);

export const PullRequests: FC<PullRequestsProps> = ({
  size = 'md',
  mode = 'light',
  className,
  'aria-label': ariaLabel,
  title,
  ...props
}) => {
  const SvgComponent = mode === 'light' ? PullRequestsLight : PullRequestsDark;

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
