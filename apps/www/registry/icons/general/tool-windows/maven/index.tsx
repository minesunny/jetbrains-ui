import type { FC } from 'react';
import { cn } from '@/lib/utils';
import { type IconProps, type SvgProps, sizeMap } from '../../types';

export type MavenProps = IconProps;

const MavenLight: FC<SvgProps> = ({
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
      d="M13.162 3.201c2.062 0 2.42 1.735 2.062 3.298l-1.328 6.013c-.095.432-.54.709-.995.618-.453-.09-.744-.515-.649-.948L13.503 6.5c.57-2.479-2.664-2.173-3.977-.332l-1.415 6.35c-.096.431-.541.708-.995.617l-.055-.013c-.432-.106-.704-.518-.611-.939l1.255-5.687c.262-1.12-.275-1.67-1.055-1.766-.928-.1-2.2.447-2.91 1.442v-.007l-.002.003-1.42 6.355c-.096.432-.542.708-.996.617-.454-.092-.744-.517-.647-.95L2.503 4c.096-.433.542-.709.996-.617.516.105.728.578.629 1.031.95-.748 2.056-1.276 3.32-1.207 1.235.025 1.839.689 2.036 1.556 1.139-.973 2.1-1.56 3.678-1.56"
      fill="#6C707E"
    />
  </svg>
);

const MavenDark: FC<SvgProps> = ({
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
      d="M13.162 3.201c2.062 0 2.42 1.735 2.062 3.298l-1.328 6.013c-.095.432-.54.709-.995.618-.453-.09-.744-.515-.649-.948L13.503 6.5c.57-2.479-2.664-2.173-3.977-.332l-1.415 6.35c-.096.431-.541.708-.995.617l-.055-.013c-.432-.106-.704-.518-.611-.939l1.255-5.687c.262-1.12-.275-1.67-1.055-1.766-.928-.1-2.2.447-2.91 1.442v-.007l-.002.003-1.42 6.355c-.096.432-.542.708-.996.617-.454-.092-.744-.517-.647-.95L2.503 4c.096-.433.542-.709.996-.617.516.105.728.578.629 1.031.95-.748 2.056-1.276 3.32-1.207 1.235.025 1.839.689 2.036 1.556 1.139-.973 2.1-1.56 3.678-1.56"
      fill="#CED0D6"
    />
  </svg>
);

export const Maven: FC<MavenProps> = ({
  size = 'md',
  mode = 'light',
  className,
  'aria-label': ariaLabel,
  title,
  ...props
}) => {
  const SvgComponent = mode === 'light' ? MavenLight : MavenDark;

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
