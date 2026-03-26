import type { FC } from 'react';
import { cn } from '@/lib/utils';
import { type IconProps, type SvgProps, sizeMap } from '../types';

export type GoogleCloudDataprocProps = IconProps;

const GoogleCloudDataprocLight: FC<SvgProps> = ({
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
      d="m.284 8.496 3.428 6A1 1 0 0 0 4.58 15h6.84a1 1 0 0 0 .868-.504l3.428-6a1 1 0 0 0 0-.992l-3.428-6A1 1 0 0 0 11.42 1H4.58a1 1 0 0 0-.868.504l-3.428 6a1 1 0 0 0 0 .992"
      fill="#4485F9"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M8.668 6.686A1.5 1.5 0 1 0 6.25 5.5v2.585a1.5 1.5 0 1 0 .356 2.647l2.147-1.328-.003.096a1.5 1.5 0 1 0 2.322-1.255zM7.75 6a.5.5 0 1 0-.325-.12l.112.072q.098.046.213.048m-.5.958v2.2l1.737-1.074zM6.05 9.9a.5.5 0 1 0-.077.048zm4.2.1a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1"
      fill="#fff"
    />
    <path
      opacity=".5"
      d="m14.682 10.307-5.94-5.94-.002.006a1.497 1.497 0 0 1-.071 2.313l2.403 1.56A1.499 1.499 0 0 1 10.25 11a1.5 1.5 0 0 1-1.497-1.596l-2.147 1.328a1.495 1.495 0 0 1-1.901-.156L9.13 15h2.29a1 1 0 0 0 .869-.504z"
      fill="#417BDC"
    />
  </svg>
);

const GoogleCloudDataprocDark: FC<SvgProps> = ({
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
      d="m.284 8.496 3.428 6A1 1 0 0 0 4.58 15h6.84a1 1 0 0 0 .868-.504l3.428-6a1 1 0 0 0 0-.992l-3.428-6A1 1 0 0 0 11.42 1H4.58a1 1 0 0 0-.868.504l-3.428 6a1 1 0 0 0 0 .992"
      fill="#4485F9"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M8.668 6.686A1.5 1.5 0 1 0 6.25 5.5v2.585a1.5 1.5 0 1 0 .356 2.647l2.147-1.328-.003.096a1.5 1.5 0 1 0 2.322-1.255zM7.75 6a.5.5 0 1 0-.325-.12l.112.072q.098.046.213.048m-.5.958v2.2l1.737-1.074zM6.05 9.9a.5.5 0 1 0-.077.048zm4.2.1a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1"
      fill="#fff"
    />
    <path
      opacity=".5"
      d="m14.682 10.307-5.94-5.94-.002.006a1.497 1.497 0 0 1-.071 2.313l2.403 1.56A1.499 1.499 0 0 1 10.25 11a1.5 1.5 0 0 1-1.497-1.596l-2.147 1.328a1.495 1.495 0 0 1-1.901-.156L9.13 15h2.29a1 1 0 0 0 .869-.504z"
      fill="#417BDC"
    />
  </svg>
);

export const GoogleCloudDataproc: FC<GoogleCloudDataprocProps> = ({
  size = 'md',
  mode = 'light',
  className,
  'aria-label': ariaLabel,
  title,
  ...props
}) => {
  const SvgComponent =
    mode === 'light' ? GoogleCloudDataprocLight : GoogleCloudDataprocDark;

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
