import type { FC } from 'react';
import { cn } from '@/lib/utils';
import { type IconProps, type SvgProps, sizeMap } from '../../types';

export type CopyProps = IconProps;

const CopyLight: FC<SvgProps> = ({
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
    <rect x="2.5" y="3.5" width="9" height="10" rx="1.5" stroke="#6C707E" />
    <rect x="5" y="6" width="4" height="1" rx=".5" fill="#6C707E" />
    <rect x="5" y="8" width="4" height="1" rx=".5" fill="#6C707E" />
    <rect x="5" y="10" width="4" height="1" rx=".5" fill="#6C707E" />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M11.002 2h.598A1.4 1.4 0 0 1 13 3.4v.51l.002.09v7.548A2.4 2.4 0 0 0 14 9.6V3.4A2.4 2.4 0 0 0 11.6 1H6.4c-.803 0-1.514.394-1.95 1h6.552"
      fill="#6C707E"
    />
  </svg>
);

const CopyDark: FC<SvgProps> = ({
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
    <rect x="2.5" y="3.5" width="9" height="10" rx="1.5" stroke="#CED0D6" />
    <rect x="5" y="6" width="4" height="1" rx=".5" fill="#CED0D6" />
    <rect x="5" y="8" width="4" height="1" rx=".5" fill="#CED0D6" />
    <rect x="5" y="10" width="4" height="1" rx=".5" fill="#CED0D6" />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M11.002 2h.598A1.4 1.4 0 0 1 13 3.4v.51l.002.09v7.548A2.4 2.4 0 0 0 14 9.6V3.4A2.4 2.4 0 0 0 11.6 1H6.4c-.803 0-1.514.394-1.95 1h6.552"
      fill="#CED0D6"
    />
  </svg>
);

export const Copy: FC<CopyProps> = ({
  size = 'md',
  mode = 'light',
  className,
  'aria-label': ariaLabel,
  title,
  ...props
}) => {
  const SvgComponent = mode === 'light' ? CopyLight : CopyDark;

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
