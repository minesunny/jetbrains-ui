import React from 'react';
import { cn } from '@/lib/utils';
import { type IconProps, type SvgProps, sizeMap } from '../../types';

export type DockerComposeScaledServiceStoppedProps = IconProps;

const DockerComposeScaledServiceStoppedLight: React.FC<SvgProps> = ({
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
    {title && <title>{title}</title>}
    <rect x="7" y="4" width="3" height="3" rx="1" fill="#A8ADBD" />
    <rect x="7" width="3" height="3" rx="1" fill="#A8ADBD" />
    <rect x="3" y="4" width="3" height="3" rx="1" fill="#A8ADBD" />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M15.251 7.039c-.039-.03-.4-.304-1.162-.304q-.303.002-.6.052c-.148-1.01-.984-1.504-1.022-1.526l-.205-.118-.134.194a2.7 2.7 0 0 0-.364.85c-.137.578-.054 1.12.24 1.584-.355.197-.923.245-1.037.25H1.966c-.539 0-.979.426-.953.963.033.69.13 1.6.4 2.212.488 1.104 1.03 1.814 1.934 2.244.902.43 1.458.576 2.752.576a9.4 9.4 0 0 0 1.743-.158 7.3 7.3 0 0 0 2.274-.826 6.3 6.3 0 0 0 1.553-1.27c.593-.673.996-1.787 1.302-2.634.078-.216.15-.415.216-.584h.132c.816 0 1.317-.327 1.594-.6.184-.175.327-.387.42-.623l.059-.17zM5.001 12a1 1 0 1 0 0-2 1 1 0 0 0 0 2"
      fill="#A8ADBD"
    />
  </svg>
);

const DockerComposeScaledServiceStoppedDark: React.FC<SvgProps> = ({
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
    {title && <title>{title}</title>}
    <rect x="7" y="4" width="3" height="3" rx="1" fill="#6F737A" />
    <rect x="7" width="3" height="3" rx="1" fill="#6F737A" />
    <rect x="3" y="4" width="3" height="3" rx="1" fill="#6F737A" />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M15.251 7.039c-.039-.03-.4-.304-1.162-.304q-.303.002-.6.052c-.148-1.01-.984-1.504-1.022-1.526l-.205-.118-.134.194a2.7 2.7 0 0 0-.364.85c-.137.578-.054 1.12.24 1.584-.355.197-.923.245-1.037.25H1.966c-.539 0-.979.426-.953.963.033.69.13 1.6.4 2.212.488 1.104 1.03 1.814 1.934 2.244.902.43 1.458.576 2.752.576a9.4 9.4 0 0 0 1.743-.158 7.3 7.3 0 0 0 2.274-.826 6.3 6.3 0 0 0 1.553-1.27c.593-.673.996-1.787 1.302-2.634.078-.216.15-.415.216-.584h.132c.816 0 1.317-.327 1.594-.6.184-.175.327-.387.42-.623l.059-.17zM5.001 12a1 1 0 1 0 0-2 1 1 0 0 0 0 2"
      fill="#6F737A"
    />
  </svg>
);

export const DockerComposeScaledServiceStopped: React.FC<
  DockerComposeScaledServiceStoppedProps
> = ({
  size = 'md',
  mode = 'light',
  className,
  'aria-label': ariaLabel,
  title,
  ...props
}) => {
  const SvgComponent =
    mode === 'light'
      ? DockerComposeScaledServiceStoppedLight
      : DockerComposeScaledServiceStoppedDark;

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
