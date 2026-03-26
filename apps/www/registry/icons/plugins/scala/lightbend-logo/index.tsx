import React from 'react';
import { cn } from '@/lib/utils';
import { type IconProps, type SvgProps, sizeMap } from '../../types';

export type LightbendLogoProps = IconProps;

const LightbendLogoLight: React.FC<SvgProps> = ({
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
      d="M15 9.963A24 24 0 0 1 8 11c-2.435 0-4.785-.363-7-1.037V4a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2zM1 11.007V12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-.993c-2.221.646-4.57.993-7 .993s-4.779-.347-7-.993"
      fill="#E66D17"
    />
  </svg>
);

const LightbendLogoDark: React.FC<SvgProps> = ({
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
      d="M15 9.963A24 24 0 0 1 8 11c-2.435 0-4.785-.363-7-1.037V4a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2zM1 11.007V12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-.993c-2.221.646-4.57.993-7 .993s-4.779-.347-7-.993"
      fill="#C77D55"
    />
  </svg>
);

export const LightbendLogo: React.FC<LightbendLogoProps> = ({
  size = 'md',
  mode = 'light',
  className,
  'aria-label': ariaLabel,
  title,
  ...props
}) => {
  const SvgComponent =
    mode === 'light' ? LightbendLogoLight : LightbendLogoDark;

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
