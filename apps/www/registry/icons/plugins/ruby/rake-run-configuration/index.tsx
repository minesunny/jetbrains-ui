import React from 'react';
import { cn } from '@/lib/utils';
import { type IconProps, type SvgProps, sizeMap } from '../../types';

export type RakeRunConfigurationProps = IconProps;

const RakeRunConfigurationLight: React.FC<SvgProps> = ({
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
      d="M15 3a2 2 0 0 1-3.016 1.723L8.207 8.5l1.586 1.586a2 2 0 0 1 0 2.828l-1.94 1.94a.5.5 0 0 1-.707-.708L8.293 13 7 11.707l-1.146 1.147a.5.5 0 0 1-.708-.708L6.293 11 5 9.707l-1.146 1.147a.5.5 0 0 1-.708-.708L4.293 9 3 7.707 1.854 8.854a.5.5 0 0 1-.708-.708l1.94-1.939a2 2 0 0 1 2.828 0L7.5 7.793l3.777-3.777A2 2 0 1 1 15 3m-1 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0m-4.914 9.207L9 12.293 3.707 7l.086-.086a1 1 0 0 1 1.414 0l3.879 3.879a1 1 0 0 1 0 1.414"
      fill="#DB3B4B"
    />
  </svg>
);

const RakeRunConfigurationDark: React.FC<SvgProps> = ({
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
      d="M15 3a2 2 0 0 1-3.016 1.723L8.207 8.5l1.586 1.586a2 2 0 0 1 0 2.828l-1.94 1.94a.5.5 0 0 1-.707-.708L8.293 13 7 11.707l-1.146 1.147a.5.5 0 0 1-.708-.708L6.293 11 5 9.707l-1.146 1.147a.5.5 0 0 1-.708-.708L4.293 9 3 7.707 1.854 8.854a.5.5 0 0 1-.708-.708l1.94-1.939a2 2 0 0 1 2.828 0L7.5 7.793l3.777-3.777A2 2 0 1 1 15 3m-1 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0m-4.914 9.207L9 12.293 3.707 7l.086-.086a1 1 0 0 1 1.414 0l3.879 3.879a1 1 0 0 1 0 1.414"
      fill="#DB5C5C"
    />
  </svg>
);

export const RakeRunConfiguration: React.FC<RakeRunConfigurationProps> = ({
  size = 'md',
  mode = 'light',
  className,
  'aria-label': ariaLabel,
  title,
  ...props
}) => {
  const SvgComponent =
    mode === 'light' ? RakeRunConfigurationLight : RakeRunConfigurationDark;

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
