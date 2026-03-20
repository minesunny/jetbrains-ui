import React from 'react';
import { cn } from '@/lib/utils';
import { type IconProps, type SvgProps, sizeMap } from '../../types';

export type MesonRCProps = IconProps;

const MesonRCLight: React.FC<SvgProps> = ({
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
      fillRule="evenodd"
      clipRule="evenodd"
      d="M15.38 12.712a.4.4 0 0 1 0 .576l-2.703 2.6a.4.4 0 0 1-.677-.289v-5.195a.4.4 0 0 1 .677-.289z"
      fill="#55A76A"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M7.623 13.288a.4.4 0 0 1 0-.576l2.699-2.596a.4.4 0 0 1 .677.289v5.194a.4.4 0 0 1-.678.288z"
      fill="#E55765"
    />
    <path
      d="M8.056 1C3.717 3.476 1.025 8.115 1 13.153a14.74 14.74 0 0 0 6.957 1.846l-1.028-.99-.065-.067a13.8 13.8 0 0 1-4.847-1.385C2.23 8.303 4.487 4.424 8.05 2.17a13.02 13.02 0 0 1 5.434 7.334l1.313 1.261C14.102 6.7 11.658 3.101 8.056 1"
      fill="#39207C"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M10.572 9.002A6.1 6.1 0 0 0 11 6.792C9.055 5.72 6.77 5.756 5 6.78v.016a6.04 6.04 0 0 0 2.355 4.787l2.273-2.187c.278-.267.614-.39.944-.394M9.96 7.4c-1.31-.539-2.727-.522-3.925-.019a5.03 5.03 0 0 0 1.947 3.423A5.03 5.03 0 0 0 9.96 7.4"
      fill="#39207C"
    />
  </svg>
);

const MesonRCDark: React.FC<SvgProps> = ({
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
      fillRule="evenodd"
      clipRule="evenodd"
      d="M15.38 12.712a.4.4 0 0 1 0 .576l-2.703 2.6a.4.4 0 0 1-.677-.289v-5.195a.4.4 0 0 1 .677-.289z"
      fill="#57965C"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M7.623 13.288a.4.4 0 0 1 0-.576l2.699-2.596a.4.4 0 0 1 .677.289v5.194a.4.4 0 0 1-.678.288z"
      fill="#DB5C5C"
    />
    <path
      d="M8.056 1C3.717 3.476 1.025 8.115 1 13.153a14.74 14.74 0 0 0 6.957 1.846l-1.028-.99-.065-.067a13.8 13.8 0 0 1-4.847-1.385C2.23 8.303 4.487 4.424 8.05 2.17a13.02 13.02 0 0 1 5.434 7.334l1.313 1.261C14.102 6.7 11.658 3.101 8.056 1"
      fill="#fff"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M10.572 9.002A6.1 6.1 0 0 0 11 6.792C9.055 5.72 6.77 5.756 5 6.78v.016a6.04 6.04 0 0 0 2.355 4.787l2.273-2.187c.278-.267.614-.39.944-.394M9.96 7.4c-1.31-.539-2.727-.522-3.925-.019a5.03 5.03 0 0 0 1.947 3.423A5.03 5.03 0 0 0 9.96 7.4"
      fill="#fff"
    />
  </svg>
);

export const MesonRC: React.FC<MesonRCProps> = ({
  size = 'md',
  mode = 'light',
  className,
  'aria-label': ariaLabel,
  title,
  ...props
}) => {
  const SvgComponent = mode === 'light' ? MesonRCLight : MesonRCDark;

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
