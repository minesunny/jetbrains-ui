import React from 'react';
import { cn } from '@/lib/utils';
import { type IconProps, type SvgProps, sizeMap } from '../../types';

export type ConstraintValidatorProps = IconProps;

const ConstraintValidatorLight: React.FC<SvgProps> = ({
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
      d="M15.827 11.176a.6.6 0 0 1 0 .848l-3.797 3.797a.6.6 0 0 1-.848 0l-2.006-2.006a.6.6 0 1 1 .848-.848l1.582 1.581 3.373-3.372a.6.6 0 0 1 .848 0"
      fill="#369650"
    />
    <path
      d="M14.949 9.797c.293-2.152-.691-4.417-2.528-6.254C9.556.678 5.603-.034 2.77 2.8s-2.02 6.936.72 9.675C5.037 14.024 7.006 14.982 8.95 15l-.476-.476a1.6 1.6 0 0 1 2.262-2.263l.875.875z"
      fill="#FFF4EB"
    />
    <path
      d="M14.949 9.797c.293-2.152-.691-4.417-2.528-6.254C9.556.678 5.603-.034 2.77 2.8s-2.02 6.936.72 9.675C5.037 14.024 7.006 14.982 8.95 15l-.476-.476a1.6 1.6 0 0 1-.381-.607c-1.359-.238-2.738-.994-3.894-2.15-1.236-1.235-2-2.743-2.163-4.205-.144-1.29.174-2.574 1.104-3.684l8.864 8.864.709-.708-8.866-8.865c1.115-.943 2.372-1.273 3.63-1.138 1.429.153 2.93.915 4.237 2.22 1.312 1.313 2.09 2.807 2.253 4.228a4.58 4.58 0 0 1-.632 2.933z"
      fill="#E66D17"
    />
  </svg>
);

const ConstraintValidatorDark: React.FC<SvgProps> = ({
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
      d="M15.827 11.176a.6.6 0 0 1 0 .848l-3.797 3.797a.6.6 0 0 1-.848 0l-2.006-2.006a.6.6 0 1 1 .848-.848l1.582 1.581 3.373-3.372a.6.6 0 0 1 .848 0"
      fill="#57965C"
    />
    <path
      d="M14.949 9.797c.293-2.152-.691-4.417-2.528-6.254C9.556.678 5.603-.034 2.77 2.8s-2.02 6.936.72 9.675C5.037 14.024 7.006 14.982 8.95 15l-.476-.476a1.6 1.6 0 0 1 2.262-2.263l.875.875z"
      fill="#45322B"
    />
    <path
      d="M14.949 9.797c.293-2.152-.691-4.417-2.528-6.254C9.556.678 5.603-.034 2.77 2.8s-2.02 6.936.72 9.675C5.037 14.024 7.006 14.982 8.95 15l-.476-.476a1.6 1.6 0 0 1-.381-.607c-1.359-.238-2.738-.994-3.894-2.15-1.236-1.235-2-2.743-2.163-4.205-.144-1.29.174-2.574 1.104-3.684l8.864 8.864.709-.708-8.866-8.865c1.115-.943 2.372-1.273 3.63-1.138 1.429.153 2.93.915 4.237 2.22 1.312 1.313 2.09 2.807 2.253 4.228a4.58 4.58 0 0 1-.632 2.933z"
      fill="#C77D55"
    />
  </svg>
);

export const ConstraintValidator: React.FC<ConstraintValidatorProps> = ({
  size = 'md',
  mode = 'light',
  className,
  'aria-label': ariaLabel,
  title,
  ...props
}) => {
  const SvgComponent =
    mode === 'light' ? ConstraintValidatorLight : ConstraintValidatorDark;

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
