import React from 'react';
import { cn } from '@/lib/utils';
import { type IconProps, type SvgProps, sizeMap } from '../../types';

export type MainChangelogProps = IconProps;

const MainChangelogLight: React.FC<SvgProps> = ({
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
    <path d="M16 13.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0" fill="#4682FA" />
    <path
      d="M4 2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h6.035a3.5 3.5 0 0 1 0-1H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v6.035a3.5 3.5 0 0 1 1 0V4a2 2 0 0 0-2-2z"
      fill="#6C707E"
    />
    <path
      d="M5 5.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5M5.5 7.5a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1zM5.5 10a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1z"
      fill="#6C707E"
    />
  </svg>
);

const MainChangelogDark: React.FC<SvgProps> = ({
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
    <path d="M16 13.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0" fill="#548AF7" />
    <path
      d="M4 2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h6.035a3.5 3.5 0 0 1 0-1H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v6.035a3.5 3.5 0 0 1 1 0V4a2 2 0 0 0-2-2z"
      fill="#CED0D6"
    />
    <path
      d="M5 5.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5M5.5 7.5a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1zM5.5 10a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1z"
      fill="#CED0D6"
    />
  </svg>
);

export const MainChangelog: React.FC<MainChangelogProps> = ({
  size = 'md',
  mode = 'light',
  className,
  'aria-label': ariaLabel,
  title,
  ...props
}) => {
  const SvgComponent =
    mode === 'light' ? MainChangelogLight : MainChangelogDark;

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
