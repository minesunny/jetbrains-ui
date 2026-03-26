import React from 'react';
import { cn } from '@/lib/utils';
import { type IconProps, type SvgProps, sizeMap } from '../../types';

export type FileSetProps = IconProps;

const FileSetLight: React.FC<SvgProps> = ({
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
      d="M3 5.828V11a2 2 0 0 0 2 2h5a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2H7.828a2 2 0 0 0-1.414.586L3.586 4.414A2 2 0 0 0 3 5.828"
      fill="#EBECF0"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M3 11V5.828a2 2 0 0 1 .586-1.414l2.828-2.828A2 2 0 0 1 7.828 1H10a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2m1-5v5a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1H8v2.5A1.5 1.5 0 0 1 6.5 6zm.414-1L7 2.414V4.5a.5.5 0 0 1-.5.5z"
      fill="#6C707E"
    />
    <path
      d="M14 3.5a.5.5 0 0 0-1 0V13a1 1 0 0 1-1 1H5.5a.5.5 0 0 0 0 1H12a2 2 0 0 0 2-2z"
      fill="#6C707E"
    />
  </svg>
);

const FileSetDark: React.FC<SvgProps> = ({
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
      d="M3 5.828V11a2 2 0 0 0 2 2h5a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2H7.828a2 2 0 0 0-1.414.586L3.586 4.414A2 2 0 0 0 3 5.828"
      fill="#43454A"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M3 11V5.828a2 2 0 0 1 .586-1.414l2.828-2.828A2 2 0 0 1 7.828 1H10a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2m1-5v5a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1H8v2.5A1.5 1.5 0 0 1 6.5 6zm.414-1L7 2.414V4.5a.5.5 0 0 1-.5.5z"
      fill="#CED0D6"
    />
    <path
      d="M14 3.5a.5.5 0 0 0-1 0V13a1 1 0 0 1-1 1H5.5a.5.5 0 0 0 0 1H12a2 2 0 0 0 2-2z"
      fill="#CED0D6"
    />
  </svg>
);

export const FileSet: React.FC<FileSetProps> = ({
  size = 'md',
  mode = 'light',
  className,
  'aria-label': ariaLabel,
  title,
  ...props
}) => {
  const SvgComponent = mode === 'light' ? FileSetLight : FileSetDark;

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
