import type { FC } from 'react';
import { cn } from '@/lib/utils';
import { type IconProps, type SvgProps, sizeMap } from '../types';

export type MavenProfilesProps = IconProps;

const MavenProfilesLight: FC<SvgProps> = ({
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
      d="M15.827 11.176a.6.6 0 0 1 0 .848l-3.797 3.797a.6.6 0 0 1-.848 0l-2.006-2.006a.6.6 0 1 1 .848-.848l1.582 1.581 3.373-3.372a.6.6 0 0 1 .848 0"
      fill="#3574F0"
    />
    <path
      d="M2.75 2C1.784 2 1 2.836 1 3.867v8.266C1 13.164 1.784 14 2.75 14h5.373a1.6 1.6 0 0 1 2.612-1.739l.874.875L15 9.745V6a2 2 0 0 0-2-2H8.5L6.736 2.283A1 1 0 0 0 6.038 2z"
      fill="#EBECF0"
    />
    <path
      d="m6.038 3 2.056 2H13a1 1 0 0 1 1 1v4.745l1-1V6a2 2 0 0 0-2-2H8.5L6.736 2.283A1 1 0 0 0 6.038 2H2.75C1.784 2 1 2.836 1 3.867v8.266C1 13.164 1.784 14 2.75 14h5.373q-.03-.075-.054-.151A1.6 1.6 0 0 1 8.052 13H2.75c-.354 0-.75-.326-.75-.867V3.867c0-.54.396-.867.75-.867z"
      fill="#6C707E"
    />
  </svg>
);

const MavenProfilesDark: FC<SvgProps> = ({
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
      d="M15.827 11.176a.6.6 0 0 1 0 .848l-3.797 3.797a.6.6 0 0 1-.848 0l-2.006-2.006a.6.6 0 1 1 .848-.848l1.582 1.581 3.373-3.372a.6.6 0 0 1 .848 0"
      fill="#548AF7"
    />
    <path
      d="M2.75 2C1.784 2 1 2.836 1 3.867v8.266C1 13.164 1.784 14 2.75 14h5.373a1.6 1.6 0 0 1 2.612-1.739l.874.875L15 9.745V6a2 2 0 0 0-2-2H8.5L6.736 2.283A1 1 0 0 0 6.038 2z"
      fill="#43454A"
    />
    <path
      d="m6.038 3 2.056 2H13a1 1 0 0 1 1 1v4.745l1-1V6a2 2 0 0 0-2-2H8.5L6.736 2.283A1 1 0 0 0 6.038 2H2.75C1.784 2 1 2.836 1 3.867v8.266C1 13.164 1.784 14 2.75 14h5.373q-.03-.075-.054-.151A1.6 1.6 0 0 1 8.052 13H2.75c-.354 0-.75-.326-.75-.867V3.867c0-.54.396-.867.75-.867z"
      fill="#CED0D6"
    />
  </svg>
);

export const MavenProfiles: FC<MavenProfilesProps> = ({
  size = 'md',
  mode = 'light',
  className,
  'aria-label': ariaLabel,
  title,
  ...props
}) => {
  const SvgComponent =
    mode === 'light' ? MavenProfilesLight : MavenProfilesDark;

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
