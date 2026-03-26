import React from 'react';
import { cn } from '@/lib/utils';
import { type IconProps, type SvgProps, sizeMap } from '../../types';

export type ReplicaSetProps = IconProps;

const ReplicaSetLight: React.FC<SvgProps> = ({
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
    <path fill="#EBECF0" d="M2 6H10V14H2z" />
    <rect x="1.5" y="5.5" width="9" height="9" rx="1.5" stroke="#6C707E" />
    <path
      d="M4.5 3.5H11A1.5 1.5 0 0 1 12.5 5v6.5"
      stroke="#6C707E"
      strokeLinecap="round"
    />
    <path
      d="M6.5 1.5H13A1.5 1.5 0 0 1 14.5 3v6.5"
      stroke="#6C707E"
      strokeLinecap="round"
    />
  </svg>
);

const ReplicaSetDark: React.FC<SvgProps> = ({
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
    <path fill="#43454A" d="M2 6H10V14H2z" />
    <rect x="1.5" y="5.5" width="9" height="9" rx="1.5" stroke="#CED0D6" />
    <path
      d="M4.5 3.5H11A1.5 1.5 0 0 1 12.5 5v6.5"
      stroke="#CED0D6"
      strokeLinecap="round"
    />
    <path
      d="M6.5 1.5H13A1.5 1.5 0 0 1 14.5 3v6.5"
      stroke="#CED0D6"
      strokeLinecap="round"
    />
  </svg>
);

export const ReplicaSet: React.FC<ReplicaSetProps> = ({
  size = 'md',
  mode = 'light',
  className,
  'aria-label': ariaLabel,
  title,
  ...props
}) => {
  const SvgComponent = mode === 'light' ? ReplicaSetLight : ReplicaSetDark;

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
