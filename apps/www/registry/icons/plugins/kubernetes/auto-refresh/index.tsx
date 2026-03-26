import React from 'react';
import { cn } from '@/lib/utils';
import { type IconProps, type SvgProps, sizeMap } from '../../types';

export type AutoRefreshProps = IconProps;

const AutoRefreshLight: React.FC<SvgProps> = ({
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
    <path
      d="M3 8a5 5 0 0 1 7.727-4.192.5.5 0 0 0 .546-.837A6 6 0 0 0 2 8v.292L.854 7.147a.5.5 0 1 0-.708.707l2 2a.5.5 0 0 0 .708 0l2-2a.5.5 0 1 0-.708-.707L3 8.293zM5.273 12.192A5 5 0 0 0 13 8v-.293l-1.146 1.146a.5.5 0 0 1-.707-.707l2-2a.5.5 0 0 1 .707 0l2 2a.5.5 0 0 1-.707.707L14 7.707V8a6 6 0 0 1-9.273 5.03.5.5 0 0 1 .546-.838"
      fill="#369650"
    />
  </svg>
);

const AutoRefreshDark: React.FC<SvgProps> = ({
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
    <path
      d="M3 8a5 5 0 0 1 7.727-4.192.5.5 0 0 0 .546-.837A6 6 0 0 0 2 8v.292L.854 7.147a.5.5 0 1 0-.708.707l2 2a.5.5 0 0 0 .708 0l2-2a.5.5 0 1 0-.708-.707L3 8.293zM5.273 12.192A5 5 0 0 0 13 8v-.293l-1.146 1.146a.5.5 0 0 1-.707-.707l2-2a.5.5 0 0 1 .707 0l2 2a.5.5 0 0 1-.707.707L14 7.707V8a6 6 0 0 1-9.273 5.03.5.5 0 0 1 .546-.838"
      fill="#57965C"
    />
  </svg>
);

export const AutoRefresh: React.FC<AutoRefreshProps> = ({
  size = 'md',
  mode = 'light',
  className,
  'aria-label': ariaLabel,
  title,
  ...props
}) => {
  const SvgComponent = mode === 'light' ? AutoRefreshLight : AutoRefreshDark;

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
