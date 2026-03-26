import React from 'react';
import { cn } from '@/lib/utils';
import { type IconProps, type SvgProps, sizeMap } from '../../types';

export type MesonReloadProps = IconProps;

const MesonReloadLight: React.FC<SvgProps> = ({
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
      d="M8.5 8a.5.5 0 0 1 .5.5v.826l.181-.164A4 4 0 0 1 12.001 8a4.005 4.005 0 0 1 3.96 3.43.5.5 0 1 1-.991.14 2.97 2.97 0 0 0-.849-1.691A3 3 0 0 0 12.002 9c-.83 0-1.579.335-2.122.879l-.009.009-.124.112h.754a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5v-2a.5.5 0 0 1 .5-.5M8.465 12.005a.5.5 0 0 1 .566.424c.093.656.4 1.244.848 1.692A3 3 0 0 0 12 15c.829 0 1.578-.335 2.122-.879l.008-.009.119-.112H13.5a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-.834l-.176.167A4 4 0 0 1 12 16a4 4 0 0 1-2.828-1.172 4 4 0 0 1-1.131-2.257.5.5 0 0 1 .424-.566"
      fill="#3574F0"
    />
    <path
      d="M8.056 1C3.717 3.476 1.025 8.115 1 13.153A14.74 14.74 0 0 0 8 15a5 5 0 0 1-.591-1.018 13.7 13.7 0 0 1-5.392-1.425C2.23 8.303 4.487 4.424 8.05 2.17a12.97 12.97 0 0 1 4.434 4.853q.657.064 1.254.288A13.97 13.97 0 0 0 8.056 1"
      fill="#39207C"
    />
    <path
      d="M10.99 7.102q.01-.154.01-.31C9.055 5.72 6.77 5.756 5 6.78v.016a6.04 6.04 0 0 0 2.35 4.784l.05-.06A1.5 1.5 0 0 1 7 10.5v-.688a5.05 5.05 0 0 1-.965-2.43 5 5 0 0 1 2.273-.37 1.5 1.5 0 0 1 .807.12q.427.097.845.268l-.005.036q.493-.222 1.036-.334"
      fill="#39207C"
    />
  </svg>
);

const MesonReloadDark: React.FC<SvgProps> = ({
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
      d="M8.5 8a.5.5 0 0 1 .5.5v.826l.181-.164A4 4 0 0 1 12.001 8a4.005 4.005 0 0 1 3.96 3.43.5.5 0 1 1-.991.14 2.97 2.97 0 0 0-.849-1.691A3 3 0 0 0 12.002 9c-.83 0-1.579.335-2.122.879l-.009.009-.124.112h.754a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5v-2a.5.5 0 0 1 .5-.5M8.465 12.005a.5.5 0 0 1 .566.424c.093.656.4 1.244.848 1.692A3 3 0 0 0 12 15c.829 0 1.578-.335 2.122-.879l.008-.009.119-.112H13.5a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-.834l-.176.167A4 4 0 0 1 12 16a4 4 0 0 1-2.828-1.172 4 4 0 0 1-1.131-2.257.5.5 0 0 1 .424-.566"
      fill="#548AF7"
    />
    <path
      d="M8.056 1C3.717 3.476 1.025 8.115 1 13.153A14.74 14.74 0 0 0 8 15a5 5 0 0 1-.591-1.018 13.7 13.7 0 0 1-5.392-1.425C2.23 8.303 4.487 4.424 8.05 2.17a12.97 12.97 0 0 1 4.434 4.853q.657.064 1.254.288A13.97 13.97 0 0 0 8.056 1"
      fill="#fff"
    />
    <path
      d="M10.99 7.102q.01-.154.01-.31C9.055 5.72 6.77 5.756 5 6.78v.016a6.04 6.04 0 0 0 2.35 4.784l.05-.06A1.5 1.5 0 0 1 7 10.5v-.688a5.05 5.05 0 0 1-.965-2.43 5 5 0 0 1 2.273-.37 1.5 1.5 0 0 1 .807.12q.427.097.845.268l-.005.036q.493-.222 1.036-.334"
      fill="#fff"
    />
  </svg>
);

export const MesonReload: React.FC<MesonReloadProps> = ({
  size = 'md',
  mode = 'light',
  className,
  'aria-label': ariaLabel,
  title,
  ...props
}) => {
  const SvgComponent = mode === 'light' ? MesonReloadLight : MesonReloadDark;

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
