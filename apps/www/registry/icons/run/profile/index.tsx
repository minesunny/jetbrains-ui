import type { FC } from 'react';
import { cn } from '@/lib/utils';
import { type IconProps, type SvgProps, sizeMap } from '../types';

export type ProfileProps = IconProps;

const ProfileLight: FC<SvgProps> = ({
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
      d="M9 9.502a1.5 1.5 0 0 1 2.294-1.272l4.002 2.497a1.5 1.5 0 0 1 0 2.546l-4.002 2.497A1.5 1.5 0 0 1 9 14.498zm1.765-.424a.5.5 0 0 0-.765.424v4.996a.5.5 0 0 0 .765.424l4.002-2.498a.5.5 0 0 0 0-.848z"
      fill="#208A3C"
    />
    <path
      d="M10 9.502a.5.5 0 0 1 .765-.424l4.002 2.498a.5.5 0 0 1 0 .848l-4.002 2.498a.5.5 0 0 1-.765-.424z"
      fill="#F2FCF3"
    />
    <path
      d="M1.5 9a6.5 6.5 0 1 1 13 .052l.965.602A7 7 0 0 0 15.5 9a7.5 7.5 0 0 0-15 0c0 1.16.377 2.68.866 3.73.079.168.25.27.435.27H8v-1H2.14c-.37-.913-.64-2.11-.64-3"
      fill="#6C707E"
    />
    <path
      d="M8 10.6v-1a.8.8 0 1 1 .415-1.484c.192-.286.44-.527.723-.71-.159-.13-.34-.234-.538-.304V4a.6.6 0 0 0-1.2 0v3.103A1.8 1.8 0 0 0 8 10.6"
      fill="#6C707E"
    />
  </svg>
);

const ProfileDark: FC<SvgProps> = ({
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
      d="M9 9.502a1.5 1.5 0 0 1 2.294-1.272l4.002 2.497a1.5 1.5 0 0 1 0 2.546l-4.002 2.497A1.5 1.5 0 0 1 9 14.498zm1.765-.424a.5.5 0 0 0-.765.424v4.996a.5.5 0 0 0 .765.424l4.002-2.498a.5.5 0 0 0 0-.848z"
      fill="#57965C"
    />
    <path
      d="M10 9.502a.5.5 0 0 1 .765-.424l4.002 2.498a.5.5 0 0 1 0 .848l-4.002 2.498a.5.5 0 0 1-.765-.424z"
      fill="#253627"
    />
    <path
      d="M1.5 9a6.5 6.5 0 1 1 13 .052l.965.602A7 7 0 0 0 15.5 9a7.5 7.5 0 0 0-15 0c0 1.16.377 2.68.866 3.73.079.168.25.27.435.27H8v-1H2.14c-.37-.913-.64-2.11-.64-3"
      fill="#CED0D6"
    />
    <path
      d="M8 10.6v-1a.8.8 0 1 1 .415-1.484c.192-.286.44-.527.723-.71-.159-.13-.34-.234-.538-.304V4a.6.6 0 0 0-1.2 0v3.103A1.8 1.8 0 0 0 8 10.6"
      fill="#CED0D6"
    />
  </svg>
);

export const Profile: FC<ProfileProps> = ({
  size = 'md',
  mode = 'light',
  className,
  'aria-label': ariaLabel,
  title,
  ...props
}) => {
  const SvgComponent = mode === 'light' ? ProfileLight : ProfileDark;

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
