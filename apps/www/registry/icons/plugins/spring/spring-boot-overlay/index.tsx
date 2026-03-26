import React from 'react';
import { cn } from '@/lib/utils';
import { type IconProps, type SvgProps, sizeMap } from '../../types';

export type SpringBootOverlayProps = IconProps;

const SpringBootOverlayLight: React.FC<SvgProps> = ({
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
    <circle cx="12.5" cy="12.5" r="3.5" fill="#EBECF0" />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M11.433 9.651a.5.5 0 0 1-.183.683c-.334.194-.62.463-.834.784a2.5 2.5 0 1 0 3.333-.784.5.5 0 1 1 .501-.865c.469.27.868.646 1.166 1.095a3.5 3.5 0 1 1-4.667-1.096.5.5 0 0 1 .684.183"
      fill="#6C707E"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12.5 8a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0v-3a.5.5 0 0 1 .5-.5"
      fill="#6C707E"
    />
  </svg>
);

const SpringBootOverlayDark: React.FC<SvgProps> = ({
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
    <circle cx="12.5" cy="12.5" r="3.5" fill="#43454A" />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M11.433 9.651a.5.5 0 0 1-.183.683c-.334.194-.62.463-.834.784a2.5 2.5 0 1 0 3.333-.784.5.5 0 1 1 .501-.865c.469.27.868.646 1.166 1.095a3.5 3.5 0 1 1-4.667-1.096.5.5 0 0 1 .684.183"
      fill="#CED0D6"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12.5 8a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0v-3a.5.5 0 0 1 .5-.5"
      fill="#CED0D6"
    />
  </svg>
);

export const SpringBootOverlay: React.FC<SpringBootOverlayProps> = ({
  size = 'md',
  mode = 'light',
  className,
  'aria-label': ariaLabel,
  title,
  ...props
}) => {
  const SvgComponent =
    mode === 'light' ? SpringBootOverlayLight : SpringBootOverlayDark;

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
