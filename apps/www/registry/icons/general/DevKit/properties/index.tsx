import type { FC } from 'react';
import { cn } from '@/lib/utils';
import { type SvgProps, sizeMap } from '../../types';

export type PropertiesProps = SvgProps;

const PropertiesLight: FC<SvgProps> = ({
  size,
  className,
  role,
  'aria-label': ariaLabel,
  'aria-hidden': ariaHidden,
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 14 14"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    role={role}
    aria-label={ariaLabel}
    aria-hidden={ariaHidden}
  >
    <path
      d="M2.793 4.207a1 1 0 0 0-.293.707V12.5a1 1 0 0 0 1 1H5V12a2 2 0 0 1 2-2h1a2 2 0 0 1 2-2h1c0-.507.189-.97.5-1.323V1.5a1 1 0 0 0-1-1H6.914a1 1 0 0 0-.707.293z"
      fill="#EBECF0"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M5.854.44A1.5 1.5 0 0 1 6.914 0H10.5A1.5 1.5 0 0 1 12 1.5v4.768A2 2 0 0 0 11 8V1.5a.5.5 0 0 0-.5-.5H7v2.5A1.5 1.5 0 0 1 5.5 5H3v7.5a.5.5 0 0 0 .5.5H5v1H3.5A1.5 1.5 0 0 1 2 12.5V4.914c0-.398.158-.78.44-1.06zM3.707 4 6 1.707V3.5a.5.5 0 0 1-.5.5z"
      fill="#6C707E"
    />
    <rect x={12} y={7} width={2} height={7} rx={1} fill="#55A76A" />
    <rect x={9} y={9} width={2} height={5} rx={1} fill="#FFAF0F" />
    <rect x={6} y={11} width={2} height={3} rx={1} fill="#E55765" />
  </svg>
);

const PropertiesDark: FC<SvgProps> = ({
  size,
  className,
  role,
  'aria-label': ariaLabel,
  'aria-hidden': ariaHidden,
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 14 14"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    role={role}
    aria-label={ariaLabel}
    aria-hidden={ariaHidden}
  >
    <path
      d="M2.793 4.207a1 1 0 0 0-.293.707V12.5a1 1 0 0 0 1 1H5V12a2 2 0 0 1 2-2h1a2 2 0 0 1 2-2h1c0-.507.189-.97.5-1.323V1.5a1 1 0 0 0-1-1H6.914a1 1 0 0 0-.707.293z"
      fill="#43454A"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M5.854.44A1.5 1.5 0 0 1 6.914 0H10.5A1.5 1.5 0 0 1 12 1.5v4.768A2 2 0 0 0 11 8V1.5a.5.5 0 0 0-.5-.5H7v2.5A1.5 1.5 0 0 1 5.5 5H3v7.5a.5.5 0 0 0 .5.5H5v1H3.5A1.5 1.5 0 0 1 2 12.5V4.914c0-.398.158-.78.44-1.06zM3.707 4 6 1.707V3.5a.5.5 0 0 1-.5.5z"
      fill="#CED0D6"
    />
    <rect x={12} y={7} width={2} height={7} rx={1} fill="#57965C" />
    <rect x={9} y={9} width={2} height={5} rx={1} fill="#F2C55C" />
    <rect x={6} y={11} width={2} height={3} rx={1} fill="#DB5C5C" />
  </svg>
);

export const Properties: FC<PropertiesProps> = ({
  size = 'md',
  mode = 'light',
  className,
  'aria-label': ariaLabel,
  ...props
}) => {
  const SvgComponent = mode === 'light' ? PropertiesLight : PropertiesDark;

  return (
    <SvgComponent
      size={sizeMap[size]}
      className={cn('inline-block flex-shrink-0', className)}
      role={ariaLabel ? 'img' : 'presentation'}
      aria-label={ariaLabel}
      aria-hidden={!ariaLabel}
      {...props}
    />
  );
};
