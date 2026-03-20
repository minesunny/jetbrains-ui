import React from 'react';
import { cn } from '@/lib/utils';
import { type IconProps, type SvgProps, sizeMap } from '../../types';

export type CMakeTargetExecutableProps = IconProps;

const CMakeTargetExecutableLight: React.FC<SvgProps> = ({
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
    <rect x="1.5" y="2.5" width="13" height="11" rx="1.5" stroke="#6C707E" />
    <path d="M4.5 10.5 7 8 4.48 5.52" stroke="#6C707E" strokeLinecap="round" />
  </svg>
);

const CMakeTargetExecutableDark: React.FC<SvgProps> = ({
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
    <rect x="1.5" y="2.5" width="13" height="11" rx="1.5" stroke="#CED0D6" />
    <path d="M4.5 10.5 7 8 4.48 5.52" stroke="#CED0D6" strokeLinecap="round" />
  </svg>
);

export const CMakeTargetExecutable: React.FC<CMakeTargetExecutableProps> = ({
  size = 'md',
  mode = 'light',
  className,
  'aria-label': ariaLabel,
  title,
  ...props
}) => {
  const SvgComponent =
    mode === 'light' ? CMakeTargetExecutableLight : CMakeTargetExecutableDark;

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
