import type { FC } from 'react';
import { cn } from '@/lib/utils';
import { type IconProps, type SvgProps, sizeMap } from '../../types';

export type NotificationsProps = IconProps;

const NotificationsLight: FC<SvgProps> = ({
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
      d="M9.049 14.458a1.141 1.141 0 0 1-2.091 0z"
      stroke="#6C707E"
      strokeWidth=".916"
    />
    <path
      d="M8.009 1.5c.914.002 1.91.305 2.672 1C11.43 3.185 12 4.292 12 6v2a.5.5 0 0 0 .053.224l1.797 3.592a.473.473 0 0 1-.423.684H2.573a.473.473 0 0 1-.423-.684l1.797-3.592A.5.5 0 0 0 4 8V6c0-1.707.571-2.815 1.324-3.5.764-.695 1.763-.998 2.677-1z"
      stroke="#6C707E"
      strokeLinejoin="round"
    />
  </svg>
);

const NotificationsDark: FC<SvgProps> = ({
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
      d="M9.049 14.458a1.141 1.141 0 0 1-2.091 0z"
      stroke="#CED0D6"
      strokeWidth=".916"
    />
    <path
      d="M8.009 1.5c.914.002 1.91.305 2.672 1C11.43 3.185 12 4.292 12 6v2a.5.5 0 0 0 .053.224l1.797 3.592a.473.473 0 0 1-.423.684H2.573a.473.473 0 0 1-.423-.684l1.797-3.592A.5.5 0 0 0 4 8V6c0-1.707.571-2.815 1.324-3.5.764-.695 1.763-.998 2.677-1z"
      stroke="#CED0D6"
      strokeLinejoin="round"
    />
  </svg>
);

export const Notifications: FC<NotificationsProps> = ({
  size = 'md',
  mode = 'light',
  className,
  'aria-label': ariaLabel,
  title,
  ...props
}) => {
  const SvgComponent =
    mode === 'light' ? NotificationsLight : NotificationsDark;

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
