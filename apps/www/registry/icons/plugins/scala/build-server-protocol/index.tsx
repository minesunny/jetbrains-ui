import React from 'react';
import { cn } from '@/lib/utils';
import { type IconProps, type SvgProps, sizeMap } from '../../types';

export type BuildServerProtocolProps = IconProps;

const BuildServerProtocolLight: React.FC<SvgProps> = ({
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
      d="M7.146 2.146a.5.5 0 0 0 0 .708L8.293 4H3.5a.5.5 0 0 0 0 1h4.793L7.146 6.146a.5.5 0 1 0 .708.708l2-2a.5.5 0 0 0 0-.708l-2-2a.5.5 0 0 0-.708 0M8.854 9.146a.5.5 0 0 0-.708 0l-2 2a.5.5 0 0 0 0 .708l2 2a.5.5 0 0 0 .708-.708L7.707 12H12.5a.5.5 0 0 0 0-1H7.707l1.147-1.146a.5.5 0 0 0 0-.708"
      fill="#6C707E"
    />
    <path
      d="M14.5 14.5v-13M1.5 14.5v-13"
      stroke="#3574F0"
      strokeLinecap="round"
    />
  </svg>
);

const BuildServerProtocolDark: React.FC<SvgProps> = ({
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
      d="M7.146 2.146a.5.5 0 0 0 0 .708L8.293 4H3.5a.5.5 0 0 0 0 1h4.793L7.146 6.146a.5.5 0 1 0 .708.708l2-2a.5.5 0 0 0 0-.708l-2-2a.5.5 0 0 0-.708 0M8.854 9.146a.5.5 0 0 0-.708 0l-2 2a.5.5 0 0 0 0 .708l2 2a.5.5 0 0 0 .708-.708L7.707 12H12.5a.5.5 0 0 0 0-1H7.707l1.147-1.146a.5.5 0 0 0 0-.708"
      fill="#CED0D6"
    />
    <path
      d="M14.5 14.5v-13M1.5 14.5v-13"
      stroke="#548AF7"
      strokeLinecap="round"
    />
  </svg>
);

export const BuildServerProtocol: React.FC<BuildServerProtocolProps> = ({
  size = 'md',
  mode = 'light',
  className,
  'aria-label': ariaLabel,
  title,
  ...props
}) => {
  const SvgComponent =
    mode === 'light' ? BuildServerProtocolLight : BuildServerProtocolDark;

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
