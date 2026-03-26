import type { FC } from 'react';
import { cn } from '@/lib/utils';
import { type IconProps, type SvgProps, sizeMap } from '../types';

export type MavenIgnoredProps = IconProps;

const MavenIgnoredLight: FC<SvgProps> = ({
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
      d="M16 12.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0m-1 0a2.5 2.5 0 0 1-3.879 2.086l3.465-3.465c.262.396.414.87.414 1.379m-4.586 1.379 3.465-3.465a2.5 2.5 0 0 0-3.465 3.465"
      fill="#6C707E"
    />
    <path
      d="M13.162 3.201c2.062 0 2.42 1.735 2.062 3.298l-.466 2.108a4.5 4.5 0 0 0-1.596-.559l.341-1.55c.57-2.478-2.664-2.172-3.977-.331l-1.415 6.35c-.096.431-.541.708-.995.617l-.055-.013c-.432-.106-.704-.518-.611-.939l1.255-5.687c.262-1.12-.275-1.67-1.055-1.766-.928-.1-2.2.447-2.91 1.442v-.007l-.002.003-1.42 6.355c-.096.432-.542.708-.996.617-.454-.092-.744-.517-.647-.95L2.503 4c.096-.433.542-.709.996-.617.516.105.728.578.629 1.031.95-.748 2.056-1.276 3.32-1.207 1.235.025 1.839.689 2.036 1.556 1.139-.973 2.1-1.56 3.678-1.56"
      fill="#3574F0"
    />
  </svg>
);

const MavenIgnoredDark: FC<SvgProps> = ({
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
      d="M16 12.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0m-1 0a2.5 2.5 0 0 1-3.879 2.086l3.465-3.465c.262.396.414.87.414 1.379m-4.586 1.379 3.465-3.465a2.5 2.5 0 0 0-3.465 3.465"
      fill="#CED0D6"
    />
    <path
      d="M13.162 3.201c2.062 0 2.42 1.735 2.062 3.298l-.466 2.108a4.5 4.5 0 0 0-1.596-.559l.341-1.55c.57-2.478-2.664-2.172-3.977-.331l-1.415 6.35c-.096.431-.541.708-.995.617l-.055-.013c-.432-.106-.704-.518-.611-.939l1.255-5.687c.262-1.12-.275-1.67-1.055-1.766-.928-.1-2.2.447-2.91 1.442v-.007l-.002.003-1.42 6.355c-.096.432-.542.708-.996.617-.454-.092-.744-.517-.647-.95L2.503 4c.096-.433.542-.709.996-.617.516.105.728.578.629 1.031.95-.748 2.056-1.276 3.32-1.207 1.235.025 1.839.689 2.036 1.556 1.139-.973 2.1-1.56 3.678-1.56"
      fill="#548AF7"
    />
  </svg>
);

export const MavenIgnored: FC<MavenIgnoredProps> = ({
  size = 'md',
  mode = 'light',
  className,
  'aria-label': ariaLabel,
  title,
  ...props
}) => {
  const SvgComponent = mode === 'light' ? MavenIgnoredLight : MavenIgnoredDark;

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
