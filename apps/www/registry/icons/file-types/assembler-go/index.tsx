import type { FC } from 'react';
import { cn } from '@/lib/utils';
import { type IconProps, type SvgProps, sizeMap } from '../types';

export type AssemblerGoProps = IconProps;

const AssemblerGoLight: FC<SvgProps> = ({
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
    viewBox="0 0 14 14"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    role={role}
    aria-label={ariaLabel}
    aria-hidden={ariaHidden}
  >
    {title ? <title>{title}</title> : null}
    <path
      d="M3 3v8a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2"
      fill="#EDF3FF"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M4 3v8a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1m-1 8V3a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2"
      fill="#3574F0"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M0 3.5A.5.5 0 0 1 .5 3H3v1H.5a.5.5 0 0 1-.5-.5M11 3h2.5a.5.5 0 0 1 0 1H11zM0 7a.5.5 0 0 1 .5-.5H3v1H.5A.5.5 0 0 1 0 7m11-.5h2.5a.5.5 0 0 1 0 1H11zm-11 4a.5.5 0 0 1 .5-.5H3v1H.5a.5.5 0 0 1-.5-.5m11-.5h2.5a.5.5 0 0 1 0 1H11z"
      fill="#6C707E"
    />
  </svg>
);

const AssemblerGoDark: FC<SvgProps> = ({
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
    viewBox="0 0 14 14"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    role={role}
    aria-label={ariaLabel}
    aria-hidden={ariaHidden}
  >
    {title ? <title>{title}</title> : null}
    <path
      d="M3 3v8a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2"
      fill="#25324D"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M4 3v8a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1m-1 8V3a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2"
      fill="#548AF7"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M0 3.5A.5.5 0 0 1 .5 3H3v1H.5a.5.5 0 0 1-.5-.5M11 3h2.5a.5.5 0 0 1 0 1H11zM0 7a.5.5 0 0 1 .5-.5H3v1H.5A.5.5 0 0 1 0 7m11-.5h2.5a.5.5 0 0 1 0 1H11zm-11 4a.5.5 0 0 1 .5-.5H3v1H.5a.5.5 0 0 1-.5-.5m11-.5h2.5a.5.5 0 0 1 0 1H11z"
      fill="#CED0D6"
    />
  </svg>
);

export const AssemblerGo: FC<AssemblerGoProps> = ({
  size = 'md',
  mode = 'light',
  className,
  'aria-label': ariaLabel,
  title,
  ...props
}) => {
  const SvgComponent = mode === 'light' ? AssemblerGoLight : AssemblerGoDark;

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
