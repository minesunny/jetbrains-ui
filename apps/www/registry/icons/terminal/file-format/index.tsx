import type { FC } from 'react';
import { cn } from '@/lib/utils';
import { type IconProps, type SvgProps, sizeMap } from '../types';

export type FileFormatProps = IconProps;

const FileFormatLight: FC<SvgProps> = ({
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
      d="M3 5.414V13a2 2 0 0 0 2 2h6a2 2 0 0 0 2-1.999V3a2 2 0 0 0-2-2H7.414a1 1 0 0 0-.707.293L3.293 4.707A1 1 0 0 0 3 5.414"
      fill="#EBECF0"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M3 13V5.414a1 1 0 0 1 .293-.707l3.414-3.414A1 1 0 0 1 7.414 1H11a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2m8 1a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1H8v2a2 2 0 0 1-2 2H4v7a1 1 0 0 0 1 1zM4.414 5 7 2.414V4a1 1 0 0 1-1 1z"
      fill="#6C707E"
    />
  </svg>
);

const FileFormatDark: FC<SvgProps> = ({
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
      d="M3 5.414V13a2 2 0 0 0 2 2h6a2 2 0 0 0 2-1.999V3a2 2 0 0 0-2-2H7.414a1 1 0 0 0-.707.293L3.293 4.707A1 1 0 0 0 3 5.414"
      fill="#43454A"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M3 13V5.414a1 1 0 0 1 .293-.707l3.414-3.414A1 1 0 0 1 7.414 1H11a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2m8 1a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1H8v2a2 2 0 0 1-2 2H4v7a1 1 0 0 0 1 1zM4.414 5 7 2.414V4a1 1 0 0 1-1 1z"
      fill="#CED0D6"
    />
  </svg>
);

export const FileFormat: FC<FileFormatProps> = ({
  size = 'md',
  mode = 'light',
  className,
  'aria-label': ariaLabel,
  title,
  ...props
}) => {
  const SvgComponent = mode === 'light' ? FileFormatLight : FileFormatDark;

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
