import React from 'react';
import { cn } from '@/lib/utils';
import { type IconProps, type SvgProps, sizeMap } from '../../types';

export type HibernateProps = IconProps;

const HibernateLight: React.FC<SvgProps> = ({
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
    {title && <title>{title}</title>}
    <path d="m3.962 1 2.693 4.664-2.694 4.67-2.691-4.67z" fill="#59666C" />
    <path d="M9.348 1H3.963l2.693 4.664h5.386z" fill="#BCAE79" />
    <path d="m12.039 15-2.693-4.664 2.694-4.67 2.69 4.67z" fill="#59666C" />
    <path d="M6.653 15h5.386l-2.69-4.664h-5.39z" fill="#BCAE79" />
  </svg>
);

const HibernateDark: React.FC<SvgProps> = ({
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
    {title && <title>{title}</title>}
    <path d="m3.962 1 2.693 4.664-2.694 4.67-2.691-4.67z" fill="#59666C" />
    <path d="M9.348 1H3.963l2.693 4.664h5.386z" fill="#BCAE79" />
    <path d="m12.039 15-2.693-4.664 2.694-4.67 2.69 4.67z" fill="#59666C" />
    <path d="M6.653 15h5.386l-2.69-4.664h-5.39z" fill="#BCAE79" />
  </svg>
);

export const Hibernate: React.FC<HibernateProps> = ({
  size = 'md',
  mode = 'light',
  className,
  'aria-label': ariaLabel,
  title,
  ...props
}) => {
  const SvgComponent = mode === 'light' ? HibernateLight : HibernateDark;

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
