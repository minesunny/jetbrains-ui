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
      d="M12.5 15.5v-6M9.902 14l5.196-3m0 3-5.196-3"
      stroke="#3574F0"
      strokeLinecap="round"
    />
    <path
      d="M3 5.414V13a2 2 0 0 0 2 2h3.758A4.5 4.5 0 0 1 13 8.027V3a2 2 0 0 0-2-2H7.414a1 1 0 0 0-.707.293L3.293 4.707A1 1 0 0 0 3 5.414"
      fill="#EBECF0"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M3 5.414V13a2 2 0 0 0 2 2h3.758a4.5 4.5 0 0 1-.502-1H5a1 1 0 0 1-1-1V6h2a2 2 0 0 0 2-2V2h3a1 1 0 0 1 1 1v5.027a4.6 4.6 0 0 1 1 0V3a2 2 0 0 0-2-2H7.414a1 1 0 0 0-.707.293L3.293 4.707A1 1 0 0 0 3 5.414m4-3L4.414 5H6a1 1 0 0 0 1-1z"
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
      d="M12.5 15.5v-6M9.902 14l5.196-3m0 3-5.196-3"
      stroke="#548AF7"
      strokeLinecap="round"
    />
    <path
      d="M3 5.414V13a2 2 0 0 0 2 2h3.758A4.5 4.5 0 0 1 13 8.027V3a2 2 0 0 0-2-2H7.414a1 1 0 0 0-.707.293L3.293 4.707A1 1 0 0 0 3 5.414"
      fill="#43454A"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M3 5.414V13a2 2 0 0 0 2 2h3.758a4.5 4.5 0 0 1-.502-1H5a1 1 0 0 1-1-1V6h2a2 2 0 0 0 2-2V2h3a1 1 0 0 1 1 1v5.027a4.6 4.6 0 0 1 1 0V3a2 2 0 0 0-2-2H7.414a1 1 0 0 0-.707.293L3.293 4.707A1 1 0 0 0 3 5.414m4-3L4.414 5H6a1 1 0 0 0 1-1z"
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
