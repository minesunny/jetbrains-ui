import React from 'react';
import { cn } from '@/lib/utils';
import { type IconProps, type SvgProps, sizeMap } from '../../types';

export type DebugWithTelepresenceProps = IconProps;

const DebugWithTelepresenceLight: React.FC<SvgProps> = ({
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
      d="M10.69 4.435q.01-.117.01-.235a2.7 2.7 0 1 0-5.39.234c-.47.26-.876.626-1.183 1.066l-2.11-1.14a.5.5 0 1 0-.475.88l2.136 1.154c-.115.348-.178.72-.178 1.106v1H1a.5.5 0 0 0 0 1h2.5v.5c0 .49.078.96.222 1.401L1.53 12.667a.5.5 0 0 0 .5.866l2.11-1.218A4.5 4.5 0 0 0 8 14.5v-1A3.5 3.5 0 0 1 4.5 10V7.5A2.5 2.5 0 0 1 7 5h2a2.5 2.5 0 0 1 2.5 2.5V8h1v-.5c0-.386-.063-.758-.178-1.106l2.133-1.154a.5.5 0 1 0-.476-.88L11.873 5.5a3.5 3.5 0 0 0-1.182-1.065m-4.384-.366Q6.643 4 7 4h2q.357 0 .696.07a1.7 1.7 0 0 0-3.39-.001"
      fill="#6C707E"
    />
    <path
      d="M9 9.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-.793l2.147 2.147A.5.5 0 0 1 13 12.5v3a.5.5 0 1 1-1 0v-2.793l-2-2v.793a.5.5 0 0 1-1 0zM13 9.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-.793l-1.146 1.147a.5.5 0 0 1-.708-.707L14.293 10H13.5a.5.5 0 0 1-.5-.5"
      fill="#3574F0"
    />
  </svg>
);

const DebugWithTelepresenceDark: React.FC<SvgProps> = ({
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
      d="M10.69 4.435q.01-.117.01-.235a2.7 2.7 0 1 0-5.39.234c-.47.26-.876.626-1.183 1.066l-2.11-1.14a.5.5 0 1 0-.475.88l2.136 1.154c-.115.348-.178.72-.178 1.106v1H1a.5.5 0 0 0 0 1h2.5v.5c0 .49.078.96.222 1.401L1.53 12.667a.5.5 0 0 0 .5.866l2.11-1.218A4.5 4.5 0 0 0 8 14.5v-1A3.5 3.5 0 0 1 4.5 10V7.5A2.5 2.5 0 0 1 7 5h2a2.5 2.5 0 0 1 2.5 2.5V8h1v-.5c0-.386-.063-.758-.178-1.106l2.133-1.154a.5.5 0 1 0-.476-.88L11.873 5.5a3.5 3.5 0 0 0-1.182-1.065m-4.384-.366Q6.643 4 7 4h2q.357 0 .696.07a1.7 1.7 0 0 0-3.39-.001"
      fill="#CED0D6"
    />
    <path
      d="M9 9.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-.793l2.147 2.147A.5.5 0 0 1 13 12.5v3a.5.5 0 1 1-1 0v-2.793l-2-2v.793a.5.5 0 0 1-1 0zM13 9.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-.793l-1.146 1.147a.5.5 0 0 1-.708-.707L14.293 10H13.5a.5.5 0 0 1-.5-.5"
      fill="#548AF7"
    />
  </svg>
);

export const DebugWithTelepresence: React.FC<DebugWithTelepresenceProps> = ({
  size = 'md',
  mode = 'light',
  className,
  'aria-label': ariaLabel,
  title,
  ...props
}) => {
  const SvgComponent =
    mode === 'light' ? DebugWithTelepresenceLight : DebugWithTelepresenceDark;

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
