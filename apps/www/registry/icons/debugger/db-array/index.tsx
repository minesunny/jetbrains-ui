import type { FC } from 'react';
import { cn } from '@/lib/utils';
import { type IconProps, type SvgProps, sizeMap } from '../types';

export type DbArrayProps = IconProps;

const DbArrayLight: FC<SvgProps> = ({
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
      d="M6 9.5h8a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5H6a.5.5 0 0 1-.5-.5v-2a.5.5 0 0 1 .5-.5ZM6 3.5h8a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5H6a.5.5 0 0 1-.5-.5V4a.5.5 0 0 1 .5-.5Z"
      fill="#EDF3FF"
      stroke="#3574F0"
    />
    <path
      d="M2.763 3.075A.5.5 0 0 1 3 3.5V6h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H2V4.309l-.276.138a.5.5 0 1 1-.447-.894l1-.5a.5.5 0 0 1 .486.022M2.5 8.5A1.5 1.5 0 0 0 1 10a.5.5 0 0 0 1 0 .5.5 0 0 1 1 0v.06a.56.56 0 0 1-.164.397l-1.69 1.69A.5.5 0 0 0 1.5 13h2a.5.5 0 0 0 0-1h-.793l.836-.836A1.56 1.56 0 0 0 4 10.061V10a1.5 1.5 0 0 0-1.5-1.5"
      fill="#6C707E"
    />
  </svg>
);

const DbArrayDark: FC<SvgProps> = ({
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
      d="M6 9.5h8a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5H6a.5.5 0 0 1-.5-.5v-2a.5.5 0 0 1 .5-.5ZM6 3.5h8a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5H6a.5.5 0 0 1-.5-.5V4a.5.5 0 0 1 .5-.5Z"
      fill="#25324D"
      stroke="#548AF7"
    />
    <path
      d="M2.763 3.075A.5.5 0 0 1 3 3.5V6h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H2V4.309l-.276.138a.5.5 0 1 1-.447-.894l1-.5a.5.5 0 0 1 .486.022M2.5 8.5A1.5 1.5 0 0 0 1 10a.5.5 0 0 0 1 0 .5.5 0 0 1 1 0v.06a.56.56 0 0 1-.164.397l-1.69 1.69A.5.5 0 0 0 1.5 13h2a.5.5 0 0 0 0-1h-.793l.836-.836A1.56 1.56 0 0 0 4 10.061V10a1.5 1.5 0 0 0-1.5-1.5"
      fill="#CED0D6"
    />
  </svg>
);

export const DbArray: FC<DbArrayProps> = ({
  size = 'md',
  mode = 'light',
  className,
  'aria-label': ariaLabel,
  title,
  ...props
}) => {
  const SvgComponent = mode === 'light' ? DbArrayLight : DbArrayDark;

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
