import React from 'react';
import { cn } from '@/lib/utils';
import { type IconProps, type SvgProps, sizeMap } from '../../types';

export type ReferenceToProps = IconProps;

const ReferenceToLight: React.FC<SvgProps> = ({
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
      d="M14.5 13a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 1 0v10a.5.5 0 0 1-.5.5M7.854 3.146a.5.5 0 1 0-.708.708L10.293 7H1.5a.5.5 0 0 0 0 1h8.793l-3.147 3.146a.5.5 0 0 0 .708.708l4-4a.5.5 0 0 0 0-.708z"
      fill="#6C707E"
    />
  </svg>
);

const ReferenceToDark: React.FC<SvgProps> = ({
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
      d="M14.5 13a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 1 0v10a.5.5 0 0 1-.5.5M7.854 3.146a.5.5 0 1 0-.708.708L10.293 7H1.5a.5.5 0 0 0 0 1h8.793l-3.147 3.146a.5.5 0 0 0 .708.708l4-4a.5.5 0 0 0 0-.708z"
      fill="#CED0D6"
    />
  </svg>
);

export const ReferenceTo: React.FC<ReferenceToProps> = ({
  size = 'md',
  mode = 'light',
  className,
  'aria-label': ariaLabel,
  title,
  ...props
}) => {
  const SvgComponent = mode === 'light' ? ReferenceToLight : ReferenceToDark;

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
