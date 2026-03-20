import React from 'react';
import { cn } from '@/lib/utils';
import { type IconProps, type SvgProps, sizeMap } from '../../types';

export type RestoreFromIgnoreProps = IconProps;

const RestoreFromIgnoreLight: React.FC<SvgProps> = ({
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
      d="M16 12.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0m-1 0a2.5 2.5 0 0 1-3.879 2.086l3.465-3.465c.262.396.414.87.414 1.379m-4.586 1.379 3.465-3.465a2.5 2.5 0 0 0-3.465 3.465"
      fill="#6C707E"
    />
    <path
      d="M3 4v3.878l-1 1V4a2 2 0 0 1 2-2h.5a.5.5 0 0 1 0 1H4a1 1 0 0 0-1 1M7.555 11l-.055-.001H5.468A.5.5 0 0 1 5.5 10h3.258a4.5 4.5 0 0 0-.502 1zM11.5 3h.5a1 1 0 0 1 1 1v4.027q.522.06 1 .23V4a2 2 0 0 0-2-2h-.5a.5.5 0 0 0 0 1M10.907 8.29a5 5 0 0 0-.47.21H5.5a.5.5 0 0 1 0-1h5a.5.5 0 0 1 .407.79M5.5 5a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1z"
      fill="#6C707E"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M3.854 9.146a.5.5 0 0 0-.708 0l-3 3a.5.5 0 0 0 0 .708l3 3a.5.5 0 0 0 .708-.708L1.707 13H7.5a.5.5 0 0 0 0-1H1.707l2.147-2.146a.5.5 0 0 0 0-.708"
      fill="#3574F0"
    />
  </svg>
);

const RestoreFromIgnoreDark: React.FC<SvgProps> = ({
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
      d="M16 12.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0m-1 0a2.5 2.5 0 0 1-3.879 2.086l3.465-3.465c.262.396.414.87.414 1.379m-4.586 1.379 3.465-3.465a2.5 2.5 0 0 0-3.465 3.465"
      fill="#CED0D6"
    />
    <path
      d="M3 4v3.878l-1 1V4a2 2 0 0 1 2-2h.5a.5.5 0 0 1 0 1H4a1 1 0 0 0-1 1M7.555 11l-.055-.001H5.468A.5.5 0 0 1 5.5 10h3.258a4.5 4.5 0 0 0-.502 1zM11.5 3h.5a1 1 0 0 1 1 1v4.027q.522.06 1 .23V4a2 2 0 0 0-2-2h-.5a.5.5 0 0 0 0 1M10.907 8.29a5 5 0 0 0-.47.21H5.5a.5.5 0 0 1 0-1h5a.5.5 0 0 1 .407.79M5.5 5a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1z"
      fill="#CED0D6"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M3.854 9.146a.5.5 0 0 0-.708 0l-3 3a.5.5 0 0 0 0 .708l3 3a.5.5 0 0 0 .708-.708L1.707 13H7.5a.5.5 0 0 0 0-1H1.707l2.147-2.146a.5.5 0 0 0 0-.708"
      fill="#548AF7"
    />
  </svg>
);

export const RestoreFromIgnore: React.FC<RestoreFromIgnoreProps> = ({
  size = 'md',
  mode = 'light',
  className,
  'aria-label': ariaLabel,
  title,
  ...props
}) => {
  const SvgComponent =
    mode === 'light' ? RestoreFromIgnoreLight : RestoreFromIgnoreDark;

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
