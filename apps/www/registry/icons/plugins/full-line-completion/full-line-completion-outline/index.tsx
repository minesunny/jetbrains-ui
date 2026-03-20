import React from 'react';
import { cn } from '@/lib/utils';
import { type IconProps, type SvgProps, sizeMap } from '../../types';

export type FullLineCompletionOutlineProps = IconProps;

const FullLineCompletionOutlineLight: React.FC<SvgProps> = ({
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
    <circle cx="8" cy="8" r="6.5" stroke="#6C707E" />
    <path
      d="M10.827 9.964a.75.75 0 0 1-.863.863l-3.526-.587a.75.75 0 0 1-.407-1.27l2.938-2.94a.75.75 0 0 1 1.27.408z"
      stroke="#6C707E"
    />
  </svg>
);

const FullLineCompletionOutlineDark: React.FC<SvgProps> = ({
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
    <circle cx="8" cy="8" r="6.5" stroke="#CED0D6" />
    <path
      d="M10.827 9.964a.75.75 0 0 1-.863.863l-3.526-.587a.75.75 0 0 1-.407-1.27l2.938-2.94a.75.75 0 0 1 1.27.408z"
      stroke="#CED0D6"
    />
  </svg>
);

export const FullLineCompletionOutline: React.FC<
  FullLineCompletionOutlineProps
> = ({
  size = 'md',
  mode = 'light',
  className,
  'aria-label': ariaLabel,
  title,
  ...props
}) => {
  const SvgComponent =
    mode === 'light'
      ? FullLineCompletionOutlineLight
      : FullLineCompletionOutlineDark;

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
