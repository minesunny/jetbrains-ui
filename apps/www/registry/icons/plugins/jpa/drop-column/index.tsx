import React from 'react';
import { cn } from '@/lib/utils';
import { type IconProps, type SvgProps, sizeMap } from '../../types';

export type DropColumnProps = IconProps;

const DropColumnLight: React.FC<SvgProps> = ({
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
    <path d="M2 4a1 1 0 0 1 1-1h2v10H3a1 1 0 0 1-1-1z" fill="#EBECF0" />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M3 2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h6.879l1-1H6V3h7a1 1 0 0 1 1 1v5.879l1-1V4a2 2 0 0 0-2-2zm2 1H3a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h2z"
      fill="#6C707E"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M10.146 10.146a.5.5 0 0 1 .708 0L13 12.293l2.146-2.147a.5.5 0 0 1 .708.708L13.707 13l2.147 2.146a.5.5 0 0 1-.708.708L13 13.707l-2.146 2.147a.5.5 0 0 1-.708-.708L12.293 13l-2.147-2.146a.5.5 0 0 1 0-.708"
      fill="#DB3B4B"
    />
  </svg>
);

const DropColumnDark: React.FC<SvgProps> = ({
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
    <g clipPath="url(#a)">
      <path d="M2 4a1 1 0 0 1 1-1h2v10H3a1 1 0 0 1-1-1z" fill="#43454A" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3 2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h6.879l1-1H6V3h7a1 1 0 0 1 1 1v5.879l1-1V4a2 2 0 0 0-2-2zm2 1H3a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h2z"
        fill="#CED0D6"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10.146 10.146a.5.5 0 0 1 .708 0L13 12.293l2.146-2.147a.5.5 0 0 1 .708.708L13.707 13l2.147 2.146a.5.5 0 0 1-.708.708L13 13.707l-2.146 2.147a.5.5 0 0 1-.708-.708L12.293 13l-2.147-2.146a.5.5 0 0 1 0-.708"
        fill="#DB5C5C"
      />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M0 0H16V16H0z" />
      </clipPath>
    </defs>
  </svg>
);

export const DropColumn: React.FC<DropColumnProps> = ({
  size = 'md',
  mode = 'light',
  className,
  'aria-label': ariaLabel,
  title,
  ...props
}) => {
  const SvgComponent = mode === 'light' ? DropColumnLight : DropColumnDark;

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
