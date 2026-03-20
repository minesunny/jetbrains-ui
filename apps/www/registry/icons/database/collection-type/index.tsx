import type { FC } from 'react';
import { cn } from '@/lib/utils';
import { type IconProps, type SvgProps, sizeMap } from '../types';

export type CollectionTypeProps = IconProps;

const CollectionTypeLight: FC<SvgProps> = ({
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
    <circle cx="11" cy="8" r="1" fill="#3574F0" />
    <circle cx="8" cy="11" r="1" fill="#3574F0" />
    <circle cx="8" cy="5" r="1" fill="#3574F0" />
    <circle cx="5" cy="8" r="1" fill="#3574F0" />
  </svg>
);

const CollectionTypeDark: FC<SvgProps> = ({
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
    <circle cx="11" cy="8" r="1" fill="#548AF7" />
    <circle cx="8" cy="11" r="1" fill="#548AF7" />
    <circle cx="8" cy="5" r="1" fill="#548AF7" />
    <circle cx="5" cy="8" r="1" fill="#548AF7" />
  </svg>
);

export const CollectionType: FC<CollectionTypeProps> = ({
  size = 'md',
  mode = 'light',
  className,
  'aria-label': ariaLabel,
  title,
  ...props
}) => {
  const SvgComponent =
    mode === 'light' ? CollectionTypeLight : CollectionTypeDark;

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
