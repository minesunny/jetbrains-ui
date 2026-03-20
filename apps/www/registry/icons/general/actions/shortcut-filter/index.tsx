import type { FC } from 'react';
import { cn } from '@/lib/utils';
import { type IconProps, type SvgProps, sizeMap } from '../../types';

export type ShortcutFilterProps = IconProps;

const ShortcutFilterLight: FC<SvgProps> = ({
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
    <rect
      x=".5"
      y="13.5"
      width="2"
      height="2"
      rx=".5"
      fill="#EDF3FF"
      stroke="#3574F0"
    />
    <rect
      x="4.5"
      y="13.5"
      width="2"
      height="2"
      rx=".5"
      fill="#EDF3FF"
      stroke="#3574F0"
    />
    <rect
      x="2.5"
      y="9.5"
      width="2"
      height="2"
      rx=".5"
      fill="#EDF3FF"
      stroke="#3574F0"
    />
    <path
      d="M7 12a4.98 4.98 0 0 0 3.164-1.128l2.982 2.978a.5.5 0 0 0 .707-.708l-2.982-2.977a5 5 0 1 0-8.728-1.972C2.403 8.068 2.693 8 3 8h.126A4 4 0 1 1 6 10.874V11c0 .307-.069.597-.192.857Q6.382 11.998 7 12"
      fill="#6C707E"
    />
  </svg>
);

const ShortcutFilterDark: FC<SvgProps> = ({
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
    <rect
      x=".5"
      y="13.5"
      width="2"
      height="2"
      rx=".5"
      fill="#25324D"
      stroke="#548AF7"
    />
    <rect
      x="4.5"
      y="13.5"
      width="2"
      height="2"
      rx=".5"
      fill="#25324D"
      stroke="#548AF7"
    />
    <rect
      x="2.5"
      y="9.5"
      width="2"
      height="2"
      rx=".5"
      fill="#25324D"
      stroke="#548AF7"
    />
    <path
      d="M7 12a4.98 4.98 0 0 0 3.164-1.128l2.982 2.978a.5.5 0 0 0 .707-.708l-2.982-2.977a5 5 0 1 0-8.728-1.972C2.403 8.068 2.693 8 3 8h.126A4 4 0 1 1 6 10.874V11c0 .307-.069.597-.192.857Q6.382 11.998 7 12"
      fill="#CED0D6"
    />
  </svg>
);

export const ShortcutFilter: FC<ShortcutFilterProps> = ({
  size = 'md',
  mode = 'light',
  className,
  'aria-label': ariaLabel,
  title,
  ...props
}) => {
  const SvgComponent =
    mode === 'light' ? ShortcutFilterLight : ShortcutFilterDark;

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
