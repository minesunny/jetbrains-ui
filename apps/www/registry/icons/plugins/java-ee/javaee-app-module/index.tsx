import React from 'react';
import { cn } from '@/lib/utils';
import { type IconProps, type SvgProps, sizeMap } from '../../types';

export type JavaeeAppModuleProps = IconProps;

const JavaeeAppModuleLight: React.FC<SvgProps> = ({
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
      d="M11 9H7v7h4v-1H8v-2h2.5v-1H8v-2h3zM16 9h-4v7h4v-1h-3v-2h2.5v-1H13v-2h3z"
      fill="#6C707E"
    />
    <path
      d="M4 2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h2V8h8V4a2 2 0 0 0-2-2z"
      fill="#EDF3FF"
    />
    <path
      d="M2 4a2 2 0 0 1 2-2h8q.208 0 .403.04A2 2 0 0 1 14 4v4h-1V4a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h2v1H4q-.103 0-.204-.01A2 2 0 0 1 2 12z"
      fill="#3574F0"
    />
  </svg>
);

const JavaeeAppModuleDark: React.FC<SvgProps> = ({
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
      d="M11 9H7v7h4v-1H8v-2h2.5v-1H8v-2h3zM16 9h-4v7h4v-1h-3v-2h2.5v-1H13v-2h3z"
      fill="#CED0D6"
    />
    <path
      d="M4 2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h2V8h8V4a2 2 0 0 0-2-2z"
      fill="#25324D"
    />
    <path
      d="M2 4a2 2 0 0 1 2-2h8q.208 0 .403.04A2 2 0 0 1 14 4v4h-1V4a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h2v1H4q-.103 0-.204-.01A2 2 0 0 1 2 12z"
      fill="#548AF7"
    />
  </svg>
);

export const JavaeeAppModule: React.FC<JavaeeAppModuleProps> = ({
  size = 'md',
  mode = 'light',
  className,
  'aria-label': ariaLabel,
  title,
  ...props
}) => {
  const SvgComponent =
    mode === 'light' ? JavaeeAppModuleLight : JavaeeAppModuleDark;

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
