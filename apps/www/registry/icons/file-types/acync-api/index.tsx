import type { FC } from 'react';
import { cn } from '@/lib/utils';
import { type IconProps, type SvgProps, sizeMap } from '../types';

export type AcyncAPIProps = IconProps;

const AcyncAPILight: FC<SvgProps> = ({
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
      d="M11.964 11A3.5 3.5 0 0 1 8.5 14h-1a3.5 3.5 0 0 1-3.465-3H3.027A4.5 4.5 0 0 0 7.5 15h1a4.5 4.5 0 0 0 4.472-4zM4.035 5A3.5 3.5 0 0 1 7.5 2h1a3.5 3.5 0 0 1 3.464 3h1.008A4.5 4.5 0 0 0 8.5 1h-1a4.5 4.5 0 0 0-4.473 4z"
      fill="#3574F0"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="m8.688 10.39-5-4 .624-.78 5 4zm3 0-5-4 .624-.78 5 4z"
      fill="#369650"
    />
  </svg>
);

const AcyncAPIDark: FC<SvgProps> = ({
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
      d="M11.964 11A3.5 3.5 0 0 1 8.5 14h-1a3.5 3.5 0 0 1-3.465-3H3.027A4.5 4.5 0 0 0 7.5 15h1a4.5 4.5 0 0 0 4.472-4zM4.035 5A3.5 3.5 0 0 1 7.5 2h1a3.5 3.5 0 0 1 3.464 3h1.008A4.5 4.5 0 0 0 8.5 1h-1a4.5 4.5 0 0 0-4.473 4z"
      fill="#548AF7"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="m8.688 10.39-5-4 .624-.78 5 4zm3 0-5-4 .624-.78 5 4z"
      fill="#57965C"
    />
  </svg>
);

export const AcyncAPI: FC<AcyncAPIProps> = ({
  size = 'md',
  mode = 'light',
  className,
  'aria-label': ariaLabel,
  title,
  ...props
}) => {
  const SvgComponent = mode === 'light' ? AcyncAPILight : AcyncAPIDark;

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
