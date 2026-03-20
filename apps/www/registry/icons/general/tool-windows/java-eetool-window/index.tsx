import type { FC } from 'react';
import { cn } from '@/lib/utils';
import { type IconProps, type SvgProps, sizeMap } from '../../types';

export type JavaEEToolWindowProps = IconProps;

const JavaEEToolWindowLight: FC<SvgProps> = ({
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
      d="M4 3h8a1 1 0 0 1 1 1v4h1V4a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h2v-1H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1"
      fill="#6C707E"
    />
    <path
      d="M7 9h4v1H8v2h2.5v1H8v2h3v1H7zM12 16V9h4v1h-3v2h2.5v1H13v2h3v1z"
      fill="#6C707E"
    />
  </svg>
);

const JavaEEToolWindowDark: FC<SvgProps> = ({
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
      d="M4 3h8a1 1 0 0 1 1 1v4h1V4a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h2v-1H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1"
      fill="#CED0D6"
    />
    <path
      d="M7 9h4v1H8v2h2.5v1H8v2h3v1H7zM12 16V9h4v1h-3v2h2.5v1H13v2h3v1z"
      fill="#CED0D6"
    />
  </svg>
);

export const JavaEEToolWindow: FC<JavaEEToolWindowProps> = ({
  size = 'md',
  mode = 'light',
  className,
  'aria-label': ariaLabel,
  title,
  ...props
}) => {
  const SvgComponent =
    mode === 'light' ? JavaEEToolWindowLight : JavaEEToolWindowDark;

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
