import React from 'react';
import { cn } from '@/lib/utils';
import { type IconProps, type SvgProps, sizeMap } from '../../types';

export type SqlFileProps = IconProps;

const SqlFileLight: React.FC<SvgProps> = ({
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
      d="M8 1.5c-3.038 0-5.5.941-5.5 2.103v8.831c0 1.162 2.462 2.103 5.5 2.103s5.5-.941 5.5-2.103V3.603C13.5 2.44 11.038 1.5 8 1.5"
      fill="#FAF5FF"
    />
    <ellipse cx="8" cy="3.603" rx="5.5" ry="2.103" stroke="#834DF0" />
    <path
      d="M13.5 12.434c0 1.16-2.462 2.102-5.5 2.102s-5.5-.941-5.5-2.102M13.5 9.49c0 1.162-2.462 2.103-5.5 2.103s-5.5-.941-5.5-2.103M13.5 6.547c0 1.161-2.462 2.103-5.5 2.103s-5.5-.942-5.5-2.103M13.5 3.392v9.126M2.5 3.392v9.126"
      stroke="#834DF0"
    />
  </svg>
);

const SqlFileDark: React.FC<SvgProps> = ({
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
      d="M8 1.5c-3.038 0-5.5.941-5.5 2.103v8.831c0 1.162 2.462 2.103 5.5 2.103s5.5-.941 5.5-2.103V3.603C13.5 2.44 11.038 1.5 8 1.5"
      fill="#2F2936"
    />
    <ellipse cx="8" cy="3.603" rx="5.5" ry="2.103" stroke="#B589EC" />
    <path
      d="M13.5 12.434c0 1.16-2.462 2.102-5.5 2.102s-5.5-.941-5.5-2.102M13.5 9.49c0 1.162-2.462 2.103-5.5 2.103s-5.5-.941-5.5-2.103M13.5 6.547c0 1.161-2.462 2.103-5.5 2.103s-5.5-.942-5.5-2.103M13.5 3.392v9.126M2.5 3.392v9.126"
      stroke="#B589EC"
    />
  </svg>
);

export const SqlFile: React.FC<SqlFileProps> = ({
  size = 'md',
  mode = 'light',
  className,
  'aria-label': ariaLabel,
  title,
  ...props
}) => {
  const SvgComponent = mode === 'light' ? SqlFileLight : SqlFileDark;

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
