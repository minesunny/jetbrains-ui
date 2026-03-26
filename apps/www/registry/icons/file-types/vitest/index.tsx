import type { FC } from 'react';
import { cn } from '@/lib/utils';
import { type IconProps, type SvgProps, sizeMap } from '../types';

export type VitestProps = IconProps;

const VitestLight: FC<SvgProps> = ({
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
      d="m12.007 5.426-3.825 5.53a.329.329 0 0 1-.598-.201l.153-3.053-2.472-.525a.33.33 0 0 1-.257-.356.3.3 0 0 1 .056-.149l3.825-5.53a.329.329 0 0 1 .598.201l-.153 3.053 2.472.524a.33.33 0 0 1 .257.357.3.3 0 0 1-.056.149"
      fill="#FCC72B"
    />
    <path
      d="M8.002 15.773a.77.77 0 0 1-.548-.227L3.84 11.932a.774.774 0 0 1 1.095-1.096l3.067 3.067 6.68-6.68a.775.775 0 0 1 1.095 1.095L8.55 15.546a.77.77 0 0 1-.547.227"
      fill="#729B1B"
    />
    <path
      d="M7.998 15.773a.77.77 0 0 0 .548-.227l3.614-3.614a.774.774 0 0 0-1.095-1.096l-3.067 3.067-6.68-6.68A.775.775 0 0 0 .222 8.317l7.229 7.228a.77.77 0 0 0 .547.227"
      fill="#729B1B"
      fillOpacity=".5"
    />
  </svg>
);

const VitestDark: FC<SvgProps> = ({
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
      d="m12.007 5.426-3.825 5.53a.329.329 0 0 1-.598-.201l.153-3.053-2.472-.525a.33.33 0 0 1-.257-.356.3.3 0 0 1 .056-.149l3.825-5.53a.329.329 0 0 1 .598.201l-.153 3.053 2.472.524a.33.33 0 0 1 .257.357.3.3 0 0 1-.056.149"
      fill="#FCC72B"
    />
    <path
      d="M8.002 15.773a.77.77 0 0 1-.548-.227L3.84 11.932a.774.774 0 0 1 1.095-1.096l3.067 3.067 6.68-6.68a.775.775 0 0 1 1.095 1.095L8.55 15.546a.77.77 0 0 1-.547.227"
      fill="#729B1B"
    />
    <path
      d="M7.998 15.773a.77.77 0 0 0 .548-.227l3.614-3.614a.774.774 0 0 0-1.095-1.096l-3.067 3.067-6.68-6.68A.775.775 0 0 0 .222 8.317l7.229 7.228a.77.77 0 0 0 .547.227"
      fill="#729B1B"
      fillOpacity=".5"
    />
  </svg>
);

export const Vitest: FC<VitestProps> = ({
  size = 'md',
  mode = 'light',
  className,
  'aria-label': ariaLabel,
  title,
  ...props
}) => {
  const SvgComponent = mode === 'light' ? VitestLight : VitestDark;

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
