import React from 'react';
import { cn } from '@/lib/utils';
import { type IconProps, type SvgProps, sizeMap } from '../../types';

export type ElectronicBoardProps = IconProps;

const ElectronicBoardLight: React.FC<SvgProps> = ({
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
    <rect x="4" y="4" width="8" height="8" rx="1" fill="#EBECF0" />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M6 7v2a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1m1 2V7h2v2z"
      fill="#6C707E"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M6.5 1a.5.5 0 0 1 .5.5V3h2V1.5a.5.5 0 0 1 1 0V3h1a2 2 0 0 1 2 2v1h1.5a.5.5 0 0 1 0 1H13v2h1.5a.5.5 0 0 1 0 1H13v1a2 2 0 0 1-2 2h-1v1.5a.5.5 0 0 1-1 0V13H7v1.5a.5.5 0 0 1-1 0V13H5a2 2 0 0 1-2-2v-1H1.5a.5.5 0 0 1 0-1H3V7H1.5a.5.5 0 0 1 0-1H3V5a2 2 0 0 1 2-2h1V1.5a.5.5 0 0 1 .5-.5M4 5v6a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1"
      fill="#6C707E"
    />
  </svg>
);

const ElectronicBoardDark: React.FC<SvgProps> = ({
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
    <rect x="4" y="4" width="8" height="8" rx="1" fill="#43454A" />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M6 7v2a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1m1 2V7h2v2z"
      fill="#CED0D6"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M6.5 1a.5.5 0 0 1 .5.5V3h2V1.5a.5.5 0 0 1 1 0V3h1a2 2 0 0 1 2 2v1h1.5a.5.5 0 0 1 0 1H13v2h1.5a.5.5 0 0 1 0 1H13v1a2 2 0 0 1-2 2h-1v1.5a.5.5 0 0 1-1 0V13H7v1.5a.5.5 0 0 1-1 0V13H5a2 2 0 0 1-2-2v-1H1.5a.5.5 0 0 1 0-1H3V7H1.5a.5.5 0 0 1 0-1H3V5a2 2 0 0 1 2-2h1V1.5a.5.5 0 0 1 .5-.5M4 5v6a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1"
      fill="#CED0D6"
    />
  </svg>
);

export const ElectronicBoard: React.FC<ElectronicBoardProps> = ({
  size = 'md',
  mode = 'light',
  className,
  'aria-label': ariaLabel,
  title,
  ...props
}) => {
  const SvgComponent =
    mode === 'light' ? ElectronicBoardLight : ElectronicBoardDark;

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
