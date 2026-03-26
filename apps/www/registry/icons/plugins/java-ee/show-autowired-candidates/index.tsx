import React from 'react';
import { cn } from '@/lib/utils';
import { type IconProps, type SvgProps, sizeMap } from '../../types';

export type ShowAutowiredCandidatesProps = IconProps;

const ShowAutowiredCandidatesLight: React.FC<SvgProps> = ({
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
      d="M4.854 8.146a.5.5 0 0 0-.708 0l-3 3a.5.5 0 0 0 0 .708l3 3a.5.5 0 0 0 .708-.708L2.707 12H8.5a.5.5 0 0 0 0-1H2.707l2.147-2.146a.5.5 0 0 0 0-.708"
      fill="#6C707E"
    />
    <path
      d="M13.18 13.211c2.897-2.896 2.106-6.802-.759-9.668S5.603-.034 2.77 2.8C.87 4.698.609 7.166 1.467 9.41L3.44 7.44a1.5 1.5 0 1 1 2.122 2.122L5.12 10H8.5a1.5 1.5 0 0 1 0 3H5.121l.44.44c.234.233.374.525.421.83 2.379 1.15 5.094 1.045 7.199-1.059"
      fill="#FFF4EB"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M13.18 13.211c2.897-2.896 2.106-6.802-.759-9.668S5.603-.034 2.77 2.8C.87 4.698.609 7.166 1.467 9.41l.789-.788a6 6 0 0 1-.221-1.06c-.144-1.291.174-2.575 1.104-3.685l8.964 8.964c-1.137.958-2.425 1.272-3.71 1.12-.887-.106-1.791-.437-2.644-.962h-.628l.44.44c.234.233.374.525.421.83 2.379 1.15 5.094 1.045 7.199-1.059m.786-4.732c-.162-1.421-.941-2.915-2.253-4.227-1.306-1.306-2.808-2.068-4.236-2.221-1.26-.135-2.516.195-3.63 1.138l8.965 8.965c.972-1.141 1.297-2.402 1.154-3.655"
      fill="#E66D17"
    />
  </svg>
);

const ShowAutowiredCandidatesDark: React.FC<SvgProps> = ({
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
      d="M4.854 8.146a.5.5 0 0 0-.708 0l-3 3a.5.5 0 0 0 0 .708l3 3a.5.5 0 0 0 .708-.708L2.707 12H8.5a.5.5 0 0 0 0-1H2.707l2.147-2.146a.5.5 0 0 0 0-.708"
      fill="#CED0D6"
    />
    <path
      d="M13.18 13.211c2.897-2.896 2.106-6.802-.759-9.668S5.603-.034 2.77 2.8C.87 4.698.609 7.166 1.467 9.41L3.44 7.44a1.5 1.5 0 1 1 2.122 2.122L5.12 10H8.5a1.5 1.5 0 0 1 0 3H5.121l.44.44c.234.233.374.525.421.83 2.379 1.15 5.094 1.045 7.199-1.059"
      fill="#45322B"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M13.18 13.211c2.897-2.896 2.106-6.802-.759-9.668S5.603-.034 2.77 2.8C.87 4.698.609 7.166 1.467 9.41l.789-.788a6 6 0 0 1-.221-1.06c-.144-1.291.174-2.575 1.104-3.685l8.964 8.964c-1.137.958-2.425 1.272-3.71 1.12-.887-.106-1.791-.437-2.644-.962h-.628l.44.44c.234.233.374.525.421.83 2.379 1.15 5.094 1.045 7.199-1.059m.786-4.732c-.162-1.421-.941-2.915-2.253-4.227-1.306-1.306-2.808-2.068-4.236-2.221-1.26-.135-2.516.195-3.63 1.138l8.965 8.965c.972-1.141 1.297-2.402 1.154-3.655"
      fill="#C77D55"
    />
  </svg>
);

export const ShowAutowiredCandidates: React.FC<
  ShowAutowiredCandidatesProps
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
      ? ShowAutowiredCandidatesLight
      : ShowAutowiredCandidatesDark;

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
