import type { FC } from 'react';
import { cn } from '@/lib/utils';
import { type IconProps, type SvgProps, sizeMap } from '../../types';

export type ConflictProps = IconProps;

const ConflictLight: FC<SvgProps> = ({
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
    <circle cx="7.5" cy="7.5" r="7.5" fill="#F7F8FA" />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M10.846 10.102a.526.526 0 1 1-.744.744L7.5 8.244l-2.602 2.602a.526.526 0 0 1-.744-.744L6.756 7.5 4.154 4.897a.526.526 0 0 1 .744-.743L7.5 6.756l2.602-2.602a.526.526 0 0 1 .744.743L8.244 7.5z"
      fill="#6C707E"
    />
  </svg>
);

const ConflictDark: FC<SvgProps> = ({
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
    <circle cx="7.5" cy="7.5" r="7.5" fill="#2B2D30" />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M10.846 10.102a.526.526 0 1 1-.744.744L7.5 8.244l-2.602 2.602a.526.526 0 0 1-.744-.744L6.756 7.5 4.154 4.897a.526.526 0 0 1 .744-.743L7.5 6.756l2.602-2.602a.526.526 0 0 1 .744.743L8.244 7.5z"
      fill="#6F737A"
    />
  </svg>
);

export const Conflict: FC<ConflictProps> = ({
  size = 'md',
  mode = 'light',
  className,
  'aria-label': ariaLabel,
  title,
  ...props
}) => {
  const SvgComponent = mode === 'light' ? ConflictLight : ConflictDark;

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
