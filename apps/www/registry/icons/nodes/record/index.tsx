import type { FC } from 'react';
import { cn } from '@/lib/utils';
import { type IconProps, type SvgProps, sizeMap } from '../types';

export type RecordProps = IconProps;

const RecordLight: FC<SvgProps> = ({
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
      d="M7.93 8.405h1.095l1.9 3.095h-1.15zM5.7 4.5h2.885q.696 0 1.215.26.525.255.81.725.285.465.285 1.09 0 .62-.29 1.095a1.93 1.93 0 0 1-.82.735q-.53.255-1.24.255H6.7v2.84h-1zm2.86 3.27q.39 0 .68-.145t.45-.415.16-.635q0-.36-.16-.625a1.06 1.06 0 0 0-.45-.415 1.5 1.5 0 0 0-.68-.145H6.7v2.38z"
      fill="#3574F0"
    />
  </svg>
);

const RecordDark: FC<SvgProps> = ({
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
      d="M7.93 8.405h1.095l1.9 3.095h-1.15zM5.7 4.5h2.885q.696 0 1.215.26.525.255.81.725.285.465.285 1.09 0 .62-.29 1.095a1.93 1.93 0 0 1-.82.735q-.53.255-1.24.255H6.7v2.84h-1zm2.86 3.27q.39 0 .68-.145t.45-.415.16-.635q0-.36-.16-.625a1.06 1.06 0 0 0-.45-.415 1.5 1.5 0 0 0-.68-.145H6.7v2.38z"
      fill="#548AF7"
    />
  </svg>
);

export const Record: FC<RecordProps> = ({
  size = 'md',
  mode = 'light',
  className,
  'aria-label': ariaLabel,
  title,
  ...props
}) => {
  const SvgComponent = mode === 'light' ? RecordLight : RecordDark;

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
