import type { FC } from 'react';
import { cn } from '@/lib/utils';
import { type IconProps, type SvgProps, sizeMap } from '../types';

export type MongoDBProps = IconProps;

const MongoDBLight: FC<SvgProps> = ({
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
      d="M11.75 8c0 5-3.25 6-3.25 6s-.5-.5-.5-2V0s3.75 3 3.75 8"
      fill="#12924F"
    />
    <path
      d="M4.25 8c0 5 3.25 6 3.25 6s.5-.5.5-2V0S4.25 3 4.25 8"
      fill="#10AA50"
    />
    <path
      d="m7.5 14 .25 2h.5l.25-2s-.5-.5-.5-2c0 1.5-.5 2-.5 2"
      fill="#B8C4C2"
    />
  </svg>
);

const MongoDBDark: FC<SvgProps> = ({
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
      d="M11.75 8c0 5-3.25 6-3.25 6s-.5-.5-.5-2V0s3.75 3 3.75 8"
      fill="#12924F"
    />
    <path
      d="M4.25 8c0 5 3.25 6 3.25 6s.5-.5.5-2V0S4.25 3 4.25 8"
      fill="#10AA50"
    />
    <path
      d="m7.5 14 .25 2h.5l.25-2s-.5-.5-.5-2c0 1.5-.5 2-.5 2"
      fill="#B8C4C2"
    />
  </svg>
);

export const MongoDB: FC<MongoDBProps> = ({
  size = 'md',
  mode = 'light',
  className,
  'aria-label': ariaLabel,
  title,
  ...props
}) => {
  const SvgComponent = mode === 'light' ? MongoDBLight : MongoDBDark;

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
