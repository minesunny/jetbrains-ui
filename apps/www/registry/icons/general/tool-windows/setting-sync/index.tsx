import type { FC } from 'react';
import { cn } from '@/lib/utils';
import { type IconProps, type SvgProps, sizeMap } from '../../types';

export type SettingSyncProps = IconProps;

const SettingSyncLight: FC<SvgProps> = ({
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
      d="M2.5 9V8A5.5 5.5 0 0 1 11 3.39M5 12.61A5.5 5.5 0 0 0 13.5 8V7"
      stroke="#6C707E"
      strokeLinecap="round"
    />
    <path
      d="m.5 7.5 2 2 2-2M11.5 8.5l2-2 2 2"
      stroke="#6C707E"
      strokeLinecap="round"
    />
  </svg>
);

const SettingSyncDark: FC<SvgProps> = ({
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
      d="M2.5 9V8A5.5 5.5 0 0 1 11 3.39M5 12.61A5.5 5.5 0 0 0 13.5 8V7"
      stroke="#CED0D6"
      strokeLinecap="round"
    />
    <path
      d="m.5 7.5 2 2 2-2M11.5 8.5l2-2 2 2"
      stroke="#CED0D6"
      strokeLinecap="round"
    />
  </svg>
);

export const SettingSync: FC<SettingSyncProps> = ({
  size = 'md',
  mode = 'light',
  className,
  'aria-label': ariaLabel,
  title,
  ...props
}) => {
  const SvgComponent = mode === 'light' ? SettingSyncLight : SettingSyncDark;

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
