import type { FC } from 'react';
import { cn } from '@/lib/utils';
import { type IconProps, type SvgProps, sizeMap } from '../types';

export type DataStructureProps = IconProps;

const DataStructureLight: FC<SvgProps> = ({
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
    {title ? <title>{title}</title> : null}
    <path
      d="M1.5 10.5v4h5v-4zM9.5 10.5v4h5v-4z"
      stroke="#6C707E"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M5.5 4.5v-4h5v4zM8 5v2M4.5 10V7.5h7V10"
      stroke="#6C707E"
      strokeLinejoin="round"
    />
    <path fill="#EBECF0" d="M2 11H6V14H2z" />
    <path fill="#EBECF0" d="M10 11H14V14H10z" />
    <path fill="#EBECF0" d="M6 1H10V4H6z" />
  </svg>
);

const DataStructureDark: FC<SvgProps> = ({
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
    {title ? <title>{title}</title> : null}
    <path
      d="M1.5 10.5v4h5v-4zM9.5 10.5v4h5v-4z"
      stroke="#CED0D6"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M5.5 4.5v-4h5v4zM8 5v2M4.5 10V7.5h7V10"
      stroke="#CED0D6"
      strokeLinejoin="round"
    />
    <path fill="#43454A" d="M2 11H6V14H2z" />
    <path fill="#43454A" d="M10 11H14V14H10z" />
    <path fill="#43454A" d="M6 1H10V4H6z" />
  </svg>
);

export const DataStructure: FC<DataStructureProps> = ({
  size = 'md',
  mode = 'light',
  className,
  'aria-label': ariaLabel,
  title,
  ...props
}) => {
  const SvgComponent =
    mode === 'light' ? DataStructureLight : DataStructureDark;

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
