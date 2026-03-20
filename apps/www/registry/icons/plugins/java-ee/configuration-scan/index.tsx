import React from 'react';
import { cn } from '@/lib/utils';
import { type IconProps, type SvgProps, sizeMap } from '../../types';

export type ConfigurationScanProps = IconProps;

const ConfigurationScanLight: React.FC<SvgProps> = ({
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
    <circle cx="12" cy="12" r="2" fill="#EBECF0" />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M13.738 14.445a3 3 0 1 1 .707-.707l1.409 1.408a.5.5 0 0 1-.708.708zM14 12a2 2 0 1 1-4 0 2 2 0 0 1 4 0"
      fill="#6C707E"
    />
    <path
      d="M14.992 9.345c.108-2.014-.862-4.093-2.57-5.802C9.555.678 5.601-.034 2.768 2.8s-2.02 6.936.72 9.675c1.653 1.654 3.786 2.634 5.854 2.515a4 4 0 1 1 5.649-5.645"
      fill="#FFF4EB"
    />
    <path
      d="M14.992 9.345c.108-2.014-.862-4.093-2.57-5.802C9.555.678 5.601-.034 2.768 2.8s-2.02 6.936.72 9.675c1.653 1.654 3.786 2.634 5.854 2.515a4 4 0 0 1-.822-1.015l-.127-.014c-1.455-.172-2.955-.953-4.196-2.194-1.236-1.235-2-2.743-2.163-4.205-.144-1.29.174-2.574 1.104-3.684l5.687 5.687q.307-.4.705-.712L3.846 3.169c1.115-.943 2.372-1.273 3.63-1.138 1.429.153 2.93.915 4.237 2.22 1.312 1.313 2.09 2.807 2.253 4.228l.004.039c.385.218.73.498 1.022.827"
      fill="#E66D17"
    />
  </svg>
);

const ConfigurationScanDark: React.FC<SvgProps> = ({
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
    <circle cx="12" cy="12" r="2" fill="#43454A" />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M13.738 14.445a3 3 0 1 1 .707-.707l1.409 1.408a.5.5 0 0 1-.708.708zM14 12a2 2 0 1 1-4 0 2 2 0 0 1 4 0"
      fill="#CED0D6"
    />
    <path
      d="M14.992 9.345c.108-2.014-.862-4.093-2.57-5.802C9.555.678 5.601-.034 2.768 2.8s-2.02 6.936.72 9.675c1.653 1.654 3.786 2.634 5.854 2.515a4 4 0 1 1 5.649-5.645"
      fill="#45322B"
    />
    <path
      d="M14.992 9.345c.108-2.014-.862-4.093-2.57-5.802C9.555.678 5.601-.034 2.768 2.8s-2.02 6.936.72 9.675c1.653 1.654 3.786 2.634 5.854 2.515a4 4 0 0 1-.822-1.015l-.127-.014c-1.455-.172-2.955-.953-4.196-2.194-1.236-1.235-2-2.743-2.163-4.205-.144-1.29.174-2.574 1.104-3.684l5.687 5.687q.307-.4.705-.712L3.846 3.169c1.115-.943 2.372-1.273 3.63-1.138 1.429.153 2.93.915 4.237 2.22 1.312 1.313 2.09 2.807 2.253 4.228l.004.039c.385.218.73.498 1.022.827"
      fill="#C77D55"
    />
  </svg>
);

export const ConfigurationScan: React.FC<ConfigurationScanProps> = ({
  size = 'md',
  mode = 'light',
  className,
  'aria-label': ariaLabel,
  title,
  ...props
}) => {
  const SvgComponent =
    mode === 'light' ? ConfigurationScanLight : ConfigurationScanDark;

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
