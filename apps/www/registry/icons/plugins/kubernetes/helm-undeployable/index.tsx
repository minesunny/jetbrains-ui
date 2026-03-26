import React from 'react';
import { cn } from '@/lib/utils';
import { type IconProps, type SvgProps, sizeMap } from '../../types';

export type HelmUndeployableProps = IconProps;

const HelmUndeployableLight: React.FC<SvgProps> = ({
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
      d="M7.5 0a.5.5 0 0 1 .5.5v2.025c1.006.1 1.924.497 2.664 1.104l1.432-1.432a.5.5 0 1 1 .707.707l-1.432 1.432A4.98 4.98 0 0 1 12.476 7H14.5a.5.5 0 0 1 0 1h-2.025a4.98 4.98 0 0 1-1.104 2.664l1.432 1.432a.5.5 0 1 1-.707.707l-1.432-1.432A4.98 4.98 0 0 1 8 12.476V14.5a.5.5 0 1 1-1 0v-2.025a4.98 4.98 0 0 1-2.664-1.104l-1.432 1.432a.5.5 0 1 1-.707-.707l1.432-1.432A4.98 4.98 0 0 1 2.525 8H.5a.5.5 0 0 1 0-1h2.025a4.98 4.98 0 0 1 1.104-2.664L2.197 2.904a.5.5 0 0 1 .707-.707l1.432 1.432A4.98 4.98 0 0 1 7 2.525V.5a.5.5 0 0 1 .5-.5m0 3.5a4 4 0 1 0 0 8 4 4 0 0 0 0-8"
      fill="#6C707E"
    />
  </svg>
);

const HelmUndeployableDark: React.FC<SvgProps> = ({
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
      d="M7.5 0a.5.5 0 0 1 .5.5v2.025c1.006.1 1.924.497 2.664 1.104l1.432-1.432a.5.5 0 1 1 .707.707l-1.432 1.432A4.98 4.98 0 0 1 12.476 7H14.5a.5.5 0 0 1 0 1h-2.025a4.98 4.98 0 0 1-1.104 2.664l1.432 1.432a.5.5 0 1 1-.707.707l-1.432-1.432A4.98 4.98 0 0 1 8 12.476V14.5a.5.5 0 1 1-1 0v-2.025a4.98 4.98 0 0 1-2.664-1.104l-1.432 1.432a.5.5 0 1 1-.707-.707l1.432-1.432A4.98 4.98 0 0 1 2.525 8H.5a.5.5 0 0 1 0-1h2.025a4.98 4.98 0 0 1 1.104-2.664L2.197 2.904a.5.5 0 0 1 .707-.707l1.432 1.432A4.98 4.98 0 0 1 7 2.525V.5a.5.5 0 0 1 .5-.5m0 3.5a4 4 0 1 0 0 8 4 4 0 0 0 0-8"
      fill="#CED0D6"
    />
  </svg>
);

export const HelmUndeployable: React.FC<HelmUndeployableProps> = ({
  size = 'md',
  mode = 'light',
  className,
  'aria-label': ariaLabel,
  title,
  ...props
}) => {
  const SvgComponent =
    mode === 'light' ? HelmUndeployableLight : HelmUndeployableDark;

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
