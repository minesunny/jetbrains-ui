import type { FC } from 'react';
import { cn } from '@/lib/utils';
import { type IconProps, type SvgProps, sizeMap } from '../types';

export type RoutineProps = IconProps;

const RoutineLight: FC<SvgProps> = ({
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
    <circle cx="8" cy="8" r="6.5" fill="#EDF3FF" stroke="#3574F0" />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M7 8V6h1.537C9.303 6 10 6.313 10 6.954 10 7.594 9.285 8 8.547 8zm2.36.828C10.175 8.59 11 8.11 11 6.913S9.949 5 8.622 5H6v6h1V9h1.328l1.445 2H11z"
      fill="#3574F0"
    />
  </svg>
);

const RoutineDark: FC<SvgProps> = ({
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
    <circle cx="8" cy="8" r="6.5" fill="#25324D" stroke="#548AF7" />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M7 8V6h1.537C9.303 6 10 6.313 10 6.954 10 7.594 9.285 8 8.547 8zm2.36.828C10.175 8.59 11 8.11 11 6.913S9.949 5 8.622 5H6v6h1V9h1.328l1.445 2H11z"
      fill="#548AF7"
    />
  </svg>
);

export const Routine: FC<RoutineProps> = ({
  size = 'md',
  mode = 'light',
  className,
  'aria-label': ariaLabel,
  title,
  ...props
}) => {
  const SvgComponent = mode === 'light' ? RoutineLight : RoutineDark;

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
