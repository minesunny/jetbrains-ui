import type { FC } from 'react';
import { cn } from '@/lib/utils';
import { type IconProps, type SvgProps, sizeMap } from '../types';

export type InspectionsMixedProps = IconProps;

const InspectionsMixedLight: FC<SvgProps> = ({
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
      d="M6.5 14a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9m0-7a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2a.5.5 0 0 1 .5-.5m.5 4.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0"
      fill="#E55765"
    />
    <path
      d="M14.719 6.032 12.318 2.03c-.824-1.373-2.813-1.373-3.636 0L7.451 4.082c.957.167 1.83.581 2.549 1.175V3.5a.5.5 0 0 1 1 0v2.837A5.47 5.47 0 0 1 11.978 9h1.06c1.524 0 2.465-1.662 1.68-2.968"
      fill="#FFAF0F"
    />
  </svg>
);

const InspectionsMixedDark: FC<SvgProps> = ({
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
      d="M6.5 14a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9m0-7a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2a.5.5 0 0 1 .5-.5m.5 4.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0"
      fill="#DB5C5C"
    />
    <path
      d="M14.719 6.032 12.318 2.03c-.824-1.373-2.813-1.373-3.636 0L7.451 4.082c.957.167 1.83.581 2.549 1.175V3.5a.5.5 0 0 1 1 0v2.837A5.47 5.47 0 0 1 11.978 9h1.06c1.524 0 2.465-1.662 1.68-2.968"
      fill="#F2C55C"
    />
  </svg>
);

export const InspectionsMixed: FC<InspectionsMixedProps> = ({
  size = 'md',
  mode = 'light',
  className,
  'aria-label': ariaLabel,
  title,
  ...props
}) => {
  const SvgComponent =
    mode === 'light' ? InspectionsMixedLight : InspectionsMixedDark;

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
