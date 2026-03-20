import type { FC } from 'react';
import { cn } from '@/lib/utils';
import { type IconProps, type SvgProps, sizeMap } from '../types';

export type CurrentBranchFavoriteProps = IconProps;

const CurrentBranchFavoriteLight: FC<SvgProps> = ({
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
      d="M7.707 2.293 1.295 8.705a1 1 0 0 0 0 1.414l4.586 4.586a1 1 0 0 0 1.414 0l6.412-6.412A1 1 0 0 0 14 7.586V3a1 1 0 0 0-1-1H8.414a1 1 0 0 0-.707.293M10 8a2 2 0 1 0 0-4 2 2 0 0 0 0 4"
      fill="#FFAF0F"
    />
  </svg>
);

const CurrentBranchFavoriteDark: FC<SvgProps> = ({
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
      d="M7.707 2.293 1.295 8.705a1 1 0 0 0 0 1.414l4.586 4.586a1 1 0 0 0 1.414 0l6.412-6.412A1 1 0 0 0 14 7.586V3a1 1 0 0 0-1-1H8.414a1 1 0 0 0-.707.293M10 8a2 2 0 1 0 0-4 2 2 0 0 0 0 4"
      fill="#F2C55C"
    />
  </svg>
);

export const CurrentBranchFavorite: FC<CurrentBranchFavoriteProps> = ({
  size = 'md',
  mode = 'light',
  className,
  'aria-label': ariaLabel,
  title,
  ...props
}) => {
  const SvgComponent =
    mode === 'light' ? CurrentBranchFavoriteLight : CurrentBranchFavoriteDark;

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
