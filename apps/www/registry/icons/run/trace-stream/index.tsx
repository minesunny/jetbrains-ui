import type { FC } from 'react';
import { cn } from '@/lib/utils';
import { type IconProps, type SvgProps, sizeMap } from '../types';

export type TraceStreamProps = IconProps;

const TraceStreamLight: FC<SvgProps> = ({
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
    <rect x="2" y="3" width="4" height="1" rx=".5" fill="#6C707E" />
    <rect x="10" y="7.5" width="4" height="1" rx=".5" fill="#6C707E" />
    <rect x="10" y="12" width="4" height="1" rx=".5" fill="#6C707E" />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M10.18 3.115A.5.5 0 0 1 10.5 3h3a.5.5 0 0 1 0 1h-2.706l-4.852 8.734A.5.5 0 0 1 5.5 13h-3a.5.5 0 0 1 0-1h2.706l2.04-3.672L10 4 7 7l-.002.012-1.679 1.373A.5.5 0 0 1 5 8.5H2.5a.5.5 0 0 1 0-1h2.322z"
      fill="#3574F0"
    />
  </svg>
);

const TraceStreamDark: FC<SvgProps> = ({
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
    <rect x="2" y="3" width="4" height="1" rx=".5" fill="#CED0D6" />
    <rect x="10" y="7.5" width="4" height="1" rx=".5" fill="#CED0D6" />
    <rect x="10" y="12" width="4" height="1" rx=".5" fill="#CED0D6" />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M10.18 3.115A.5.5 0 0 1 10.5 3h3a.5.5 0 0 1 0 1h-2.706l-4.852 8.734A.5.5 0 0 1 5.5 13h-3a.5.5 0 0 1 0-1h2.706l2.04-3.672L10 4 7 7l-.002.012-1.679 1.373A.5.5 0 0 1 5 8.5H2.5a.5.5 0 0 1 0-1h2.322z"
      fill="#3574F0"
    />
  </svg>
);

export const TraceStream: FC<TraceStreamProps> = ({
  size = 'md',
  mode = 'light',
  className,
  'aria-label': ariaLabel,
  title,
  ...props
}) => {
  const SvgComponent = mode === 'light' ? TraceStreamLight : TraceStreamDark;

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
