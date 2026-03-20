import React from 'react';
import { cn } from '@/lib/utils';
import { type IconProps, type SvgProps, sizeMap } from '../../types';

export type CustomGdbRunConfigurationProps = IconProps;

const CustomGdbRunConfigurationLight: React.FC<SvgProps> = ({
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
      d="M4 4v8a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2"
      fill="#EBECF0"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M5 4v8a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1H6a1 1 0 0 0-1 1m-1 8V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2M1 4.5a.5.5 0 0 1 .5-.5H4v1H1.5a.5.5 0 0 1-.5-.5M12 4h2.5a.5.5 0 0 1 0 1H12zM1 8a.5.5 0 0 1 .5-.5H4v1H1.5A.5.5 0 0 1 1 8m11-.5h2.5a.5.5 0 0 1 0 1H12zm-11 4a.5.5 0 0 1 .5-.5H4v1H1.5a.5.5 0 0 1-.5-.5m11-.5h2.5a.5.5 0 0 1 0 1H12z"
      fill="#6C707E"
    />
  </svg>
);

const CustomGdbRunConfigurationDark: React.FC<SvgProps> = ({
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
      d="M4 4v8a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2"
      fill="#43454A"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M5 4v8a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1H6a1 1 0 0 0-1 1m-1 8V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2M1 4.5a.5.5 0 0 1 .5-.5H4v1H1.5a.5.5 0 0 1-.5-.5M12 4h2.5a.5.5 0 0 1 0 1H12zM1 8a.5.5 0 0 1 .5-.5H4v1H1.5A.5.5 0 0 1 1 8m11-.5h2.5a.5.5 0 0 1 0 1H12zm-11 4a.5.5 0 0 1 .5-.5H4v1H1.5a.5.5 0 0 1-.5-.5m11-.5h2.5a.5.5 0 0 1 0 1H12z"
      fill="#CED0D6"
    />
  </svg>
);

export const CustomGdbRunConfiguration: React.FC<
  CustomGdbRunConfigurationProps
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
      ? CustomGdbRunConfigurationLight
      : CustomGdbRunConfigurationDark;

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
