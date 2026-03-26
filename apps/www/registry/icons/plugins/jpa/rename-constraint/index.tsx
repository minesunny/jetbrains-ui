import React from 'react';
import { cn } from '@/lib/utils';
import { type IconProps, type SvgProps, sizeMap } from '../../types';

export type RenameConstraintProps = IconProps;

const RenameConstraintLight: React.FC<SvgProps> = ({
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
      d="M14.412 8.295a1 1 0 0 0-1.414 0l-1.351 1.351L8 13.293V16h2.707l4.998-4.998a1 1 0 0 0 0-1.414zM14 11.293l.998-.998-1.293-1.293-.998.998zm-2-.586L13.293 12l-3 3H9v-1.293z"
      fill="#3574F0"
    />
    <path
      d="M14.98 7.46A7 7 0 1 0 7 14.93v-1.013A6.002 6.002 0 0 1 8 2a6 6 0 0 1 5.92 5.013c.379.041.749.19 1.06.447"
      fill="#6C707E"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M11 8.879V8a1 1 0 0 0-1-1V6a2 2 0 1 0-4 0v1a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h1.879l1-1H6V8h4v1.879zM7 6a1 1 0 0 1 2 0v1H7z"
      fill="#6C707E"
    />
  </svg>
);

const RenameConstraintDark: React.FC<SvgProps> = ({
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
      d="M14.412 8.295a1 1 0 0 0-1.414 0l-1.351 1.351L8 13.293V16h2.707l4.998-4.998a1 1 0 0 0 0-1.414zM14 11.293l.998-.998-1.293-1.293-.998.998zm-2-.586L13.293 12l-3 3H9v-1.293z"
      fill="#548AF7"
    />
    <path
      d="M14.98 7.46A7 7 0 1 0 7 14.93v-1.013A6.002 6.002 0 0 1 8 2a6 6 0 0 1 5.92 5.013c.379.041.749.19 1.06.447"
      fill="#CED0D6"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M11 8.879V8a1 1 0 0 0-1-1V6a2 2 0 1 0-4 0v1a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h1.879l1-1H6V8h4v1.879zM7 6a1 1 0 0 1 2 0v1H7z"
      fill="#CED0D6"
    />
  </svg>
);

export const RenameConstraint: React.FC<RenameConstraintProps> = ({
  size = 'md',
  mode = 'light',
  className,
  'aria-label': ariaLabel,
  title,
  ...props
}) => {
  const SvgComponent =
    mode === 'light' ? RenameConstraintLight : RenameConstraintDark;

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
