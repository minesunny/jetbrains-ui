import React from 'react';
import { cn } from '@/lib/utils';
import { type IconProps, type SvgProps, sizeMap } from '../../types';

export type ManyToOneProps = IconProps;

const ManyToOneLight: React.FC<SvgProps> = ({
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
    <circle cx="8" cy="8" r="4.5" stroke="#6C707E" />
    <circle cx="11.5" cy="4.5" r="3" fill="#FFF4EB" stroke="#E66D17" />
    <circle cx="4.5" cy="11.5" r="3" fill="#FFF4EB" stroke="#E66D17" />
    <circle cx="4.5" cy="11.5" r="1.5" fill="#6C707E" />
  </svg>
);

const ManyToOneDark: React.FC<SvgProps> = ({
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
    <circle cx="8" cy="8" r="4.5" stroke="#CED0D6" />
    <circle cx="11.5" cy="4.5" r="3" fill="#45322B" stroke="#C77D55" />
    <circle cx="4.5" cy="11.5" r="3" fill="#45322B" stroke="#C77D55" />
    <circle cx="4.5" cy="11.5" r="1.5" fill="#CED0D6" />
  </svg>
);

export const ManyToOne: React.FC<ManyToOneProps> = ({
  size = 'md',
  mode = 'light',
  className,
  'aria-label': ariaLabel,
  title,
  ...props
}) => {
  const SvgComponent = mode === 'light' ? ManyToOneLight : ManyToOneDark;

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
