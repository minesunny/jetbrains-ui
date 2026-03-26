import type { FC } from 'react';
import { cn } from '@/lib/utils';
import { type IconProps, type SvgProps, sizeMap } from '../types';

export type DataFileProps = IconProps;

const DataFileLight: FC<SvgProps> = ({
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
      fillRule="evenodd"
      clipRule="evenodd"
      d="M10 9a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1v-5a1 1 0 0 0-1-1zm0 2v-1h2v1zm0 1v3h2v-3zm3 3h2v-3h-2zm2-4v-1h-2v1z"
      fill="#3574F0"
    />
    <path
      d="M3 13V5.414a1 1 0 0 1 .293-.707l3.414-3.414A1 1 0 0 1 7.414 1H11a2 2 0 0 1 2 2v5h-3a2 2 0 0 0-2 2v5H5a2 2 0 0 1-2-2"
      fill="#EBECF0"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M3 13V5.414a1 1 0 0 1 .293-.707l3.414-3.414A1 1 0 0 1 7.414 1H11a2 2 0 0 1 2 2v5h-1V3a1 1 0 0 0-1-1H8v2a2 2 0 0 1-2 2H4v7a1 1 0 0 0 1 1h3v1H5a2 2 0 0 1-2-2m1.414-8L7 2.414V4a1 1 0 0 1-1 1z"
      fill="#6C707E"
    />
  </svg>
);

const DataFileDark: FC<SvgProps> = ({
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
      fillRule="evenodd"
      clipRule="evenodd"
      d="M10 9a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1v-5a1 1 0 0 0-1-1zm0 2v-1h2v1zm0 1v3h2v-3zm3 3h2v-3h-2zm2-4v-1h-2v1z"
      fill="#548AF7"
    />
    <path
      d="M3 13V5.414a1 1 0 0 1 .293-.707l3.414-3.414A1 1 0 0 1 7.414 1H11a2 2 0 0 1 2 2v5h-3a2 2 0 0 0-2 2v5H5a2 2 0 0 1-2-2"
      fill="#43454A"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M3 13V5.414a1 1 0 0 1 .293-.707l3.414-3.414A1 1 0 0 1 7.414 1H11a2 2 0 0 1 2 2v5h-1V3a1 1 0 0 0-1-1H8v2a2 2 0 0 1-2 2H4v7a1 1 0 0 0 1 1h3v1H5a2 2 0 0 1-2-2m1.414-8L7 2.414V4a1 1 0 0 1-1 1z"
      fill="#CED0D6"
    />
  </svg>
);

export const DataFile: FC<DataFileProps> = ({
  size = 'md',
  mode = 'light',
  className,
  'aria-label': ariaLabel,
  title,
  ...props
}) => {
  const SvgComponent = mode === 'light' ? DataFileLight : DataFileDark;

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
