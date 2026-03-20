import type { FC } from 'react';
import { cn } from '@/lib/utils';
import { type IconProps, type SvgProps, sizeMap } from '../../types';

export type DownloadProps = IconProps;

const DownloadLight: FC<SvgProps> = ({
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
      d="M10.854 8.354a.5.5 0 1 0-.707-.707L8.5 9.293V2.5a.5.5 0 0 0-1 0v6.793L5.853 7.646a.5.5 0 0 0-.707.708l2.5 2.5a.5.5 0 0 0 .708 0z"
      fill="#6C707E"
    />
    <rect
      width="12"
      height="1"
      rx=".5"
      transform="matrix(1 0 0 -1 2 14)"
      fill="#6C707E"
    />
    <rect x="2" y="10" width="1" height="4" rx=".5" fill="#6C707E" />
    <rect x="13" y="10" width="1" height="4" rx=".5" fill="#6C707E" />
  </svg>
);

const DownloadDark: FC<SvgProps> = ({
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
      d="M10.854 8.354a.5.5 0 1 0-.707-.707L8.5 9.293V2.5a.5.5 0 0 0-1 0v6.793L5.853 7.646a.5.5 0 0 0-.707.708l2.5 2.5a.5.5 0 0 0 .708 0z"
      fill="#CED0D6"
    />
    <rect
      width="12"
      height="1"
      rx=".5"
      transform="matrix(1 0 0 -1 2 14)"
      fill="#CED0D6"
    />
    <rect x="2" y="10" width="1" height="4" rx=".5" fill="#CED0D6" />
    <rect x="13" y="10" width="1" height="4" rx=".5" fill="#CED0D6" />
  </svg>
);

export const Download: FC<DownloadProps> = ({
  size = 'md',
  mode = 'light',
  className,
  'aria-label': ariaLabel,
  title,
  ...props
}) => {
  const SvgComponent = mode === 'light' ? DownloadLight : DownloadDark;

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
