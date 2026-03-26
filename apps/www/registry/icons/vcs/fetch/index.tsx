import type { FC } from 'react';
import { cn } from '@/lib/utils';
import { type IconProps, type SvgProps, sizeMap } from '../types';

export type FetchProps = IconProps;

const FetchLight: FC<SvgProps> = ({
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
      d="M12.854 3.146a.5.5 0 0 1 0 .708l-1.415 1.414a.5.5 0 1 1-.707-.707l1.414-1.415a.5.5 0 0 1 .708 0M10.025 5.975a.5.5 0 0 1 0 .707L8.611 8.096a.5.5 0 1 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0M7.197 8.803a.5.5 0 0 1 0 .707l-1.415 1.415a.5.5 0 1 1-.707-.708L6.49 8.804a.5.5 0 0 1 .707 0M3.5 5a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2a.5.5 0 0 1 .5-.5"
      fill="#6C707E"
    />
    <path
      d="M3.5 9a.5.5 0 0 1 .5.5V12h2.5a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5v-3a.5.5 0 0 1 .5-.5M8 12.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5"
      fill="#6C707E"
    />
  </svg>
);

const FetchDark: FC<SvgProps> = ({
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
      d="M12.854 3.146a.5.5 0 0 1 0 .708l-1.415 1.414a.5.5 0 1 1-.707-.707l1.414-1.415a.5.5 0 0 1 .708 0M10.025 5.975a.5.5 0 0 1 0 .707L8.611 8.096a.5.5 0 1 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0M7.197 8.803a.5.5 0 0 1 0 .707l-1.415 1.415a.5.5 0 1 1-.707-.708L6.49 8.804a.5.5 0 0 1 .707 0M3.5 5a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2a.5.5 0 0 1 .5-.5"
      fill="#CED0D6"
    />
    <path
      d="M3.5 9a.5.5 0 0 1 .5.5V12h2.5a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5v-3a.5.5 0 0 1 .5-.5M8 12.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5"
      fill="#CED0D6"
    />
  </svg>
);

export const Fetch: FC<FetchProps> = ({
  size = 'md',
  mode = 'light',
  className,
  'aria-label': ariaLabel,
  title,
  ...props
}) => {
  const SvgComponent = mode === 'light' ? FetchLight : FetchDark;

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
