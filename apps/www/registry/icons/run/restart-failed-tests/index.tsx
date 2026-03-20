import type { FC } from 'react';
import { cn } from '@/lib/utils';
import { type IconProps, type SvgProps, sizeMap } from '../types';

export type RestartFailedTestsProps = IconProps;

const RestartFailedTestsLight: FC<SvgProps> = ({
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
    <circle cx="12.5" cy="11.5" r="3.5" fill="#E55765" />
    <path
      d="M12.5 9a.5.5 0 0 0-.5.5v2a.5.5 0 0 0 1 0v-2a.5.5 0 0 0-.5-.5M12.5 14a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1"
      fill="#fff"
    />
    <path
      d="M14 1.5a.5.5 0 0 0-1 0v3.182a6 6 0 1 0-4.271 9.274 4.5 4.5 0 0 1-.475-.962A5 5 0 1 1 12 5H9.5a.5.5 0 0 0 0 1H14z"
      fill="#6C707E"
    />
  </svg>
);

const RestartFailedTestsDark: FC<SvgProps> = ({
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
    <circle cx="12.5" cy="11.5" r="3.5" fill="#DB5C5C" />
    <path
      d="M12.5 9a.5.5 0 0 0-.5.5v2a.5.5 0 0 0 1 0v-2a.5.5 0 0 0-.5-.5M12.5 14a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1"
      fill="#fff"
    />
    <path
      d="M14 1.5a.5.5 0 0 0-1 0v3.182a6 6 0 1 0-4.271 9.274 4.5 4.5 0 0 1-.475-.962A5 5 0 1 1 12 5H9.5a.5.5 0 0 0 0 1H14z"
      fill="#CED0D6"
    />
  </svg>
);

export const RestartFailedTests: FC<RestartFailedTestsProps> = ({
  size = 'md',
  mode = 'light',
  className,
  'aria-label': ariaLabel,
  title,
  ...props
}) => {
  const SvgComponent =
    mode === 'light' ? RestartFailedTestsLight : RestartFailedTestsDark;

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
