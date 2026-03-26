import type { FC } from 'react';
import { cn } from '@/lib/utils';
import { type IconProps, type SvgProps, sizeMap } from '../types';

export type YarnLockProps = IconProps;

const YarnLockLight: FC<SvgProps> = ({
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
    <path fill="#EBECF0" d="M11 12H15V15H11z" />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M15 11v-1a2 2 0 1 0-4 0v1a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1m-3-1a1 1 0 1 1 2 0v1h-2zm-1 5v-3h4v3z"
      fill="#6C707E"
    />
    <path
      d="M9 14.609a.8.8 0 0 1-.286.102A31 31 0 0 1 5.491 15c-.582.004-.938-.15-1.037-.388a.787.787 0 0 1 .433-1.037 2 2 0 0 1-.257-.19c-.03-.03-.06-.069-.088-.106-.053-.07-.097-.129-.115-.088a3 3 0 0 0-.098.348c-.075.309-.167.693-.376.902-.415.42-1.2.28-1.664.036-.51-.27.036-.906.036-.906a.367.367 0 0 1-.496-.172 2.42 2.42 0 0 1-.333-1.474 2.7 2.7 0 0 1 .874-1.448c-.069-.749.044-1.504.33-2.2a5.2 5.2 0 0 1 1.582-1.83s-.97-1.074-.608-2.039c.22-.593.317-.625.392-.65q.007 0 .014-.004c.272-.084.52-.23.726-.428a2.63 2.63 0 0 1 2.205-.85S7.599.699 8.137 1.044q.448.687.767 1.444s.64-.374.712-.235c.369.978.46 2.04.262 3.066a7 7 0 0 1-1.3 2.706c-.02.033.04.088.147.186.257.235.786.719 1.16 1.757q.058.157.099.31C9.394 10.624 9 11.266 9 12z"
      fill="#498DB7"
    />
  </svg>
);

const YarnLockDark: FC<SvgProps> = ({
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
    <path fill="#43454A" d="M11 12H15V15H11z" />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M15 11v-1a2 2 0 1 0-4 0v1a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1m-3-1a1 1 0 1 1 2 0v1h-2zm-1 5v-3h4v3z"
      fill="#CED0D6"
    />
    <path
      d="M9 14.609a.8.8 0 0 1-.286.102A31 31 0 0 1 5.491 15c-.582.004-.938-.15-1.037-.388a.787.787 0 0 1 .433-1.037 2 2 0 0 1-.257-.19c-.03-.03-.06-.069-.088-.106-.053-.07-.097-.129-.115-.088a3 3 0 0 0-.098.348c-.075.309-.167.693-.376.902-.415.42-1.2.28-1.664.036-.51-.27.036-.906.036-.906a.367.367 0 0 1-.496-.172 2.42 2.42 0 0 1-.333-1.474 2.7 2.7 0 0 1 .874-1.448c-.069-.749.044-1.504.33-2.2a5.2 5.2 0 0 1 1.582-1.83s-.97-1.074-.608-2.039c.22-.593.317-.625.392-.65q.007 0 .014-.004c.272-.084.52-.23.726-.428a2.63 2.63 0 0 1 2.205-.85S7.599.699 8.137 1.044q.448.687.767 1.444s.64-.374.712-.235c.369.978.46 2.04.262 3.066a7 7 0 0 1-1.3 2.706c-.02.033.04.088.147.186.257.235.786.719 1.16 1.757q.058.157.099.31C9.394 10.624 9 11.266 9 12z"
      fill="#498DB7"
    />
  </svg>
);

export const YarnLock: FC<YarnLockProps> = ({
  size = 'md',
  mode = 'light',
  className,
  'aria-label': ariaLabel,
  title,
  ...props
}) => {
  const SvgComponent = mode === 'light' ? YarnLockLight : YarnLockDark;

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
