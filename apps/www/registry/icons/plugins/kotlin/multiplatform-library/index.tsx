import React from 'react';
import { cn } from '@/lib/utils';
import { type IconProps, type SvgProps, sizeMap } from '../../types';

export type MultiplatformLibraryProps = IconProps;

const MultiplatformLibraryLight: React.FC<SvgProps> = ({
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
    <path d="M12 10h1v5h-1zM10 11h1v4h-1zM15 12h-1v3h1z" fill="#EDF3FF" />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M11 10a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1v1h1a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-5a1 1 0 0 1-1-1v-4a1 1 0 0 1 1-1zm1 0h1v5h-1zm-1 1h-1v4h1zm3 4h1v-3h-1z"
      fill="#3574F0"
    />
    <path
      d="M3 1a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h4v-1H3a1 1 0 0 1-1-1v-1h5V9H2V3a1 1 0 0 1 1-1h7a1 1 0 0 1 1 1v1h1V3a2 2 0 0 0-2-2z"
      fill="#6C707E"
    />
    <path
      d="M10 5a2 2 0 0 0-2 2v4a2 2 0 0 1 1-1.732V7a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1v1.268A2 2 0 0 1 15 10V7a2 2 0 0 0-2-2z"
      fill="#6C707E"
    />
  </svg>
);

const MultiplatformLibraryDark: React.FC<SvgProps> = ({
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
    <path d="M12 10h1v5h-1zM10 11h1v4h-1zM15 12h-1v3h1z" fill="#25324D" />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M11 10a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1v1h1a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-5a1 1 0 0 1-1-1v-4a1 1 0 0 1 1-1zm1 0h1v5h-1zm-1 1h-1v4h1zm3 4h1v-3h-1z"
      fill="#548AF7"
    />
    <path
      d="M3 1a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h4v-1H3a1 1 0 0 1-1-1v-1h5V9H2V3a1 1 0 0 1 1-1h7a1 1 0 0 1 1 1v1h1V3a2 2 0 0 0-2-2z"
      fill="#CED0D6"
    />
    <path
      d="M10 5a2 2 0 0 0-2 2v4a2 2 0 0 1 1-1.732V7a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1v1.268A2 2 0 0 1 15 10V7a2 2 0 0 0-2-2z"
      fill="#CED0D6"
    />
  </svg>
);

export const MultiplatformLibrary: React.FC<MultiplatformLibraryProps> = ({
  size = 'md',
  mode = 'light',
  className,
  'aria-label': ariaLabel,
  title,
  ...props
}) => {
  const SvgComponent =
    mode === 'light' ? MultiplatformLibraryLight : MultiplatformLibraryDark;

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
