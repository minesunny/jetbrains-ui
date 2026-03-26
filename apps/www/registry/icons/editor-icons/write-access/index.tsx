import type { FC } from 'react';
import { cn } from '@/lib/utils';
import { type IconProps, type SvgProps, sizeMap } from '../types';

export type WriteAccessProps = IconProps;

const WriteAccessLight: FC<SvgProps> = ({
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
    viewBox="0 0 14 14"
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
      d="M4.854 10.354a.5.5 0 0 1-.708-.708L6.293 7.5H.5a.5.5 0 0 1 0-1h5.793L4.146 4.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708z"
      fill="#6C707E"
    />
    <path
      d="m7.857 5.236 1.709-2.984a.5.5 0 0 1 .868 0l2.433 4.25c.177.307.177.686 0 .994l-2.433 4.252a.5.5 0 0 1-.868 0L7.858 8.764l-.733.732 1.573 2.749a1.5 1.5 0 0 0 2.603 0l2.434-4.251a2 2 0 0 0 0-1.99L11.3 1.754a1.5 1.5 0 0 0-2.603 0L7.124 4.504z"
      fill="#DB3B4B"
    />
  </svg>
);

const WriteAccessDark: FC<SvgProps> = ({
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
    viewBox="0 0 14 14"
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
      d="M4.854 10.354a.5.5 0 0 1-.708-.708L6.293 7.5H.5a.5.5 0 0 1 0-1h5.793L4.146 4.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708z"
      fill="#CED0D6"
    />
    <path
      d="m7.857 5.236 1.709-2.984a.5.5 0 0 1 .868 0l2.433 4.25c.177.307.177.686 0 .994l-2.433 4.252a.5.5 0 0 1-.868 0L7.858 8.764l-.733.732 1.573 2.749a1.5 1.5 0 0 0 2.603 0l2.434-4.251a2 2 0 0 0 0-1.99L11.3 1.754a1.5 1.5 0 0 0-2.603 0L7.124 4.504z"
      fill="#DB5C5C"
    />
  </svg>
);

export const WriteAccess: FC<WriteAccessProps> = ({
  size = 'md',
  mode = 'light',
  className,
  'aria-label': ariaLabel,
  title,
  ...props
}) => {
  const SvgComponent = mode === 'light' ? WriteAccessLight : WriteAccessDark;

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
