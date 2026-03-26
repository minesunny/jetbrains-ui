import React from 'react';
import { cn } from '@/lib/utils';
import { type IconProps, type SvgProps, sizeMap } from '../../types';

export type NativeProps = IconProps;

const NativeLight: React.FC<SvgProps> = ({
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
      d="M4 3.99v8a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2v-8a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2"
      fill="#EBECF0"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M4 3.99v8a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2h2.5a.5.5 0 0 0 0-1H12v-2.5h2.5a.5.5 0 0 0 0-1H12v-2.5h2.5a.5.5 0 0 0 0-1H12a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2m2 9a1 1 0 0 1-1-1v-8a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1z"
      fill="#6C707E"
    />
    <path
      d="M1.5 3.99a.5.5 0 0 0 0 1H4v-1zM1.5 7.49a.5.5 0 0 0 0 1H4v-1zM1.5 10.99a.5.5 0 1 0 0 1H4v-1z"
      fill="#6C707E"
    />
  </svg>
);

const NativeDark: React.FC<SvgProps> = ({
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
      d="M4 3.99v8a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2v-8a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2"
      fill="#43454A"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M4 3.99v8a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2h2.5a.5.5 0 0 0 0-1H12v-2.5h2.5a.5.5 0 0 0 0-1H12v-2.5h2.5a.5.5 0 0 0 0-1H12a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2m2 9a1 1 0 0 1-1-1v-8a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1z"
      fill="#CED0D6"
    />
    <path
      d="M1.5 3.99a.5.5 0 0 0 0 1H4v-1zM1.5 7.49a.5.5 0 0 0 0 1H4v-1zM1.5 10.99a.5.5 0 1 0 0 1H4v-1z"
      fill="#CED0D6"
    />
  </svg>
);

export const Native: React.FC<NativeProps> = ({
  size = 'md',
  mode = 'light',
  className,
  'aria-label': ariaLabel,
  title,
  ...props
}) => {
  const SvgComponent = mode === 'light' ? NativeLight : NativeDark;

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
