import React from 'react';
import { cn } from '@/lib/utils';
import { type IconProps, type SvgProps, sizeMap } from '../../types';

export type SoftwareFrameworkProps = IconProps;

const SoftwareFrameworkLight: React.FC<SvgProps> = ({
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
      d="M10.854 10.146a.5.5 0 0 1 0 .708L8.707 13l2.147 2.146a.5.5 0 0 1-.708.708l-2.5-2.5a.5.5 0 0 1 0-.708l2.5-2.5a.5.5 0 0 1 .708 0m1.292 0a.5.5 0 0 1 .708 0l2.5 2.5a.5.5 0 0 1 0 .708l-2.5 2.5a.5.5 0 0 1-.708-.708L14.293 13l-2.147-2.146a.5.5 0 0 1 0-.708"
      fill="#6C707E"
    />
    <path
      d="M3 3h10a1 1 0 0 1 1 1v1H2V4a1 1 0 0 1 1-1M6.5 13c0-.384.146-.768.44-1.06l2.5-2.5c.292-.294.676-.44 1.06-.44h2c.384 0 .768.147 1.06.44l.44.439V6H2v6a1 1 0 0 0 1 1z"
      fill="#EBECF0"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M3 2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h3.882a1.5 1.5 0 0 1-.382-1H3a1 1 0 0 1-1-1V6h12v3.879l1 1V4a2 2 0 0 0-2-2zm10 1H3a1 1 0 0 0-1 1v1h12V4a1 1 0 0 0-1-1"
      fill="#6C707E"
    />
  </svg>
);

const SoftwareFrameworkDark: React.FC<SvgProps> = ({
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
      d="M10.854 10.146a.5.5 0 0 1 0 .708L8.707 13l2.147 2.146a.5.5 0 0 1-.708.708l-2.5-2.5a.5.5 0 0 1 0-.708l2.5-2.5a.5.5 0 0 1 .708 0m1.292 0a.5.5 0 0 1 .708 0l2.5 2.5a.5.5 0 0 1 0 .708l-2.5 2.5a.5.5 0 0 1-.708-.708L14.293 13l-2.147-2.146a.5.5 0 0 1 0-.708"
      fill="#CED0D6"
    />
    <path
      d="M3 3h10a1 1 0 0 1 1 1v1H2V4a1 1 0 0 1 1-1M6.5 13c0-.384.146-.768.44-1.06l2.5-2.5c.292-.294.676-.44 1.06-.44h2c.384 0 .768.147 1.06.44l.44.439V6H2v6a1 1 0 0 0 1 1z"
      fill="#43454A"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M3 2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h3.882a1.5 1.5 0 0 1-.382-1H3a1 1 0 0 1-1-1V6h12v3.879l1 1V4a2 2 0 0 0-2-2zm10 1H3a1 1 0 0 0-1 1v1h12V4a1 1 0 0 0-1-1"
      fill="#CED0D6"
    />
  </svg>
);

export const SoftwareFramework: React.FC<SoftwareFrameworkProps> = ({
  size = 'md',
  mode = 'light',
  className,
  'aria-label': ariaLabel,
  title,
  ...props
}) => {
  const SvgComponent =
    mode === 'light' ? SoftwareFrameworkLight : SoftwareFrameworkDark;

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
