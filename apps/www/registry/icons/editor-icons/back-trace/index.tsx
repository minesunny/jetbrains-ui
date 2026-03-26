import type { FC } from 'react';
import { cn } from '@/lib/utils';
import { type IconProps, type SvgProps, sizeMap } from '../types';

export type BackTraceProps = IconProps;

const BackTraceLight: FC<SvgProps> = ({
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
      d="M4 10.5a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1H4.707l8.147 8.147a.5.5 0 1 1-.708.707L4 4.707z"
      fill="#6C707E"
    />
  </svg>
);

const BackTraceDark: FC<SvgProps> = ({
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
      d="M4 10.5a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1H4.707l8.147 8.147a.5.5 0 1 1-.708.707L4 4.707z"
      fill="#CED0D6"
    />
  </svg>
);

export const BackTrace: FC<BackTraceProps> = ({
  size = 'md',
  mode = 'light',
  className,
  'aria-label': ariaLabel,
  title,
  ...props
}) => {
  const SvgComponent = mode === 'light' ? BackTraceLight : BackTraceDark;

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
