import React from 'react';
import { cn } from '@/lib/utils';
import { type IconProps, type SvgProps, sizeMap } from '../../types';

export type ExtensionRunConfigurationProps = IconProps;

const ExtensionRunConfigurationLight: React.FC<SvgProps> = ({
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
    <rect
      x="1.5"
      y="1.5"
      width="13"
      height="13"
      rx="6.5"
      fill="#FFF4EB"
      stroke="#E66D17"
    />
    <path d="M5.5 11.5h5v-1h-4v-2H10v-1H6.5v-2h4v-1h-5z" fill="#E66D17" />
  </svg>
);

const ExtensionRunConfigurationDark: React.FC<SvgProps> = ({
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
    <rect
      x="1.5"
      y="1.5"
      width="13"
      height="13"
      rx="6.5"
      fill="#45322B"
      stroke="#C77D55"
    />
    <path d="M5.5 11.5h5v-1h-4v-2H10v-1H6.5v-2h4v-1h-5z" fill="#C77D55" />
  </svg>
);

export const ExtensionRunConfiguration: React.FC<
  ExtensionRunConfigurationProps
> = ({
  size = 'md',
  mode = 'light',
  className,
  'aria-label': ariaLabel,
  title,
  ...props
}) => {
  const SvgComponent =
    mode === 'light'
      ? ExtensionRunConfigurationLight
      : ExtensionRunConfigurationDark;

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
