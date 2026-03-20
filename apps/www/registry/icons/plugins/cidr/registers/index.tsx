import React from 'react';
import { cn } from '@/lib/utils';
import { type IconProps, type SvgProps, sizeMap } from '../../types';

export type RegistersProps = IconProps;

const RegistersLight: React.FC<SvgProps> = ({
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
      d="M15 10.5a.5.5 0 0 0-.658-.474l-1.5.5a.5.5 0 1 0 .316.948l.842-.28V15h-.5a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1H15z"
      fill="#6C707E"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M10 10c-.749 0-1.264.48-1.566 1.046C8.134 11.606 8 12.319 8 13s.135 1.393.434 1.954C8.736 15.52 9.25 16 10 16s1.265-.48 1.566-1.046c.3-.56.434-1.273.434-1.954s-.135-1.393-.434-1.954C11.264 10.48 10.75 10 10 10m0 5c-.251 0-.486-.145-.684-.517C9.116 14.108 9 13.569 9 13s.115-1.107.316-1.483C9.514 11.145 9.75 11 10 11s.486.145.684.517c.2.376.316.915.316 1.483s-.115 1.107-.316 1.483c-.198.372-.433.517-.684.517"
      fill="#6C707E"
    />
    <path
      d="M3 4V2a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1M3 7v2a1 1 0 0 0 1 1h3.937C8.389 9.455 9.068 9 10 9c.875 0 1.527.402 1.978.902.152-.142.337-.255.548-.325l.364-.122A1 1 0 0 0 13 9V7a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1M7.356 11C7.103 11.643 7 12.352 7 13s.103 1.357.356 2H4a1 1 0 0 1-1-1v-2a1 1 0 0 1 1-1z"
      fill="#FFFAEB"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M3 2v2a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1m1 2V2h8v2zM3 9V7a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v2c0 .164-.04.319-.11.455l-.364.122c-.21.07-.396.183-.548.325C11.528 9.402 10.875 9 10 9c-.932 0-1.61.455-2.063 1H4a1 1 0 0 1-1-1m1-2v2h8V7z"
      fill="#C27D04"
    />
    <path
      d="M7.356 11H4a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h3.356a5 5 0 0 1-.273-1H4v-2h3.083c.057-.34.146-.678.273-1"
      fill="#C27D04"
    />
  </svg>
);

const RegistersDark: React.FC<SvgProps> = ({
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
      d="M15 10.5a.5.5 0 0 0-.658-.474l-1.5.5a.5.5 0 1 0 .316.948l.842-.28V15h-.5a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1H15z"
      fill="#CED0D6"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M10 10c-.749 0-1.264.48-1.566 1.046C8.134 11.606 8 12.319 8 13s.135 1.393.434 1.954C8.736 15.52 9.25 16 10 16s1.265-.48 1.566-1.046c.3-.56.434-1.273.434-1.954s-.135-1.393-.434-1.954C11.264 10.48 10.75 10 10 10m0 5c-.251 0-.486-.145-.684-.517C9.116 14.108 9 13.569 9 13s.115-1.107.316-1.483C9.514 11.145 9.75 11 10 11s.486.145.684.517c.2.376.316.915.316 1.483s-.115 1.107-.316 1.483c-.198.372-.433.517-.684.517"
      fill="#CED0D6"
    />
    <path
      d="M3 4V2a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1M3 7v2a1 1 0 0 0 1 1h3.937C8.389 9.455 9.068 9 10 9c.875 0 1.527.402 1.978.902.152-.142.337-.255.548-.325l.364-.122A1 1 0 0 0 13 9V7a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1M7.356 11C7.103 11.643 7 12.352 7 13s.103 1.357.356 2H4a1 1 0 0 1-1-1v-2a1 1 0 0 1 1-1z"
      fill="#3D3223"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M3 2v2a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1m1 2V2h8v2zM3 9V7a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v2c0 .164-.04.319-.11.455l-.364.122c-.21.07-.396.183-.548.325C11.528 9.402 10.875 9 10 9c-.932 0-1.61.455-2.063 1H4a1 1 0 0 1-1-1m1-2v2h8V7z"
      fill="#D6AE58"
    />
    <path
      d="M7.356 11H4a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h3.356a5 5 0 0 1-.273-1H4v-2h3.083c.057-.34.146-.678.273-1"
      fill="#D6AE58"
    />
  </svg>
);

export const Registers: React.FC<RegistersProps> = ({
  size = 'md',
  mode = 'light',
  className,
  'aria-label': ariaLabel,
  title,
  ...props
}) => {
  const SvgComponent = mode === 'light' ? RegistersLight : RegistersDark;

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
