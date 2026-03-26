import type { FC } from 'react';
import { cn } from '@/lib/utils';
import { type IconProps, type SvgProps, sizeMap } from '../../types';

export type ProfilerProps = IconProps;

const ProfilerLight: FC<SvgProps> = ({
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
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12.157 7.202a.6.6 0 1 0-.751-.935l-2.478 1.99a1.8 1.8 0 1 0 .764.926zM8.8 9.8a.8.8 0 1 1-1.6 0 .8.8 0 0 1 1.6 0"
      fill="#6C707E"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M8 3.5A6.5 6.5 0 0 0 1.5 10c0 .89.27 2.087.64 3h11.72c.37-.913.64-2.11.64-3A6.5 6.5 0 0 0 8 3.5M.5 10a7.5 7.5 0 1 1 15 0c0 1.16-.377 2.68-.866 3.73a.48.48 0 0 1-.435.27H1.8a.48.48 0 0 1-.435-.27C.877 12.68.5 11.16.5 10"
      fill="#6C707E"
    />
  </svg>
);

const ProfilerDark: FC<SvgProps> = ({
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
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12.157 7.202a.6.6 0 1 0-.751-.935l-2.478 1.99a1.8 1.8 0 1 0 .764.926zM8.8 9.8a.8.8 0 1 1-1.6 0 .8.8 0 0 1 1.6 0"
      fill="#CED0D6"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M8 3.5A6.5 6.5 0 0 0 1.5 10c0 .89.27 2.087.64 3h11.72c.37-.913.64-2.11.64-3A6.5 6.5 0 0 0 8 3.5M.5 10a7.5 7.5 0 1 1 15 0c0 1.16-.377 2.68-.866 3.73a.48.48 0 0 1-.435.27H1.8a.48.48 0 0 1-.435-.27C.877 12.68.5 11.16.5 10"
      fill="#CED0D6"
    />
  </svg>
);

export const Profiler: FC<ProfilerProps> = ({
  size = 'md',
  mode = 'light',
  className,
  'aria-label': ariaLabel,
  title,
  ...props
}) => {
  const SvgComponent = mode === 'light' ? ProfilerLight : ProfilerDark;

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
