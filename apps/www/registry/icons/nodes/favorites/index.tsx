import type { FC } from 'react';
import { cn } from '@/lib/utils';
import { type IconProps, type SvgProps, sizeMap } from '../types';

export type FavoritesProps = IconProps;

const FavoritesLight: FC<SvgProps> = ({
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
      d="M8 2.073a.5.5 0 0 1 .461.308l1.47 3.534 3.815.306a.5.5 0 0 1 .285.878l-2.906 2.49.888 3.722a.5.5 0 0 1-.747.543L8 11.859l-3.266 1.995a.5.5 0 0 1-.747-.543l.888-3.723-2.907-2.49a.5.5 0 0 1 .286-.877l3.814-.306 1.47-3.534A.5.5 0 0 1 8 2.073"
      fill="#EBECF0"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M8 2.073a.5.5 0 0 1 .461.308l1.47 3.534 3.815.306a.5.5 0 0 1 .285.878l-2.906 2.49.888 3.722a.5.5 0 0 1-.747.543L8 11.859l-3.266 1.995a.5.5 0 0 1-.747-.543l.888-3.723-2.907-2.49a.5.5 0 0 1 .286-.877l3.814-.306 1.47-3.534A.5.5 0 0 1 8 2.073m0 1.802L6.874 6.581a.5.5 0 0 1-.421.306l-2.921.234 2.225 1.907a.5.5 0 0 1 .161.495l-.68 2.85 2.501-1.527a.5.5 0 0 1 .521 0l2.501 1.528-.68-2.85a.5.5 0 0 1 .161-.496l2.226-1.907-2.921-.234a.5.5 0 0 1-.422-.306z"
      fill="#6C707E"
    />
  </svg>
);

const FavoritesDark: FC<SvgProps> = ({
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
      d="M8 2.073a.5.5 0 0 1 .461.308l1.47 3.534 3.815.306a.5.5 0 0 1 .285.878l-2.906 2.49.888 3.722a.5.5 0 0 1-.747.543L8 11.859l-3.266 1.995a.5.5 0 0 1-.747-.543l.888-3.723-2.907-2.49a.5.5 0 0 1 .286-.877l3.814-.306 1.47-3.534A.5.5 0 0 1 8 2.073"
      fill="#43454A"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M8 2.073a.5.5 0 0 1 .461.308l1.47 3.534 3.815.306a.5.5 0 0 1 .285.878l-2.906 2.49.888 3.722a.5.5 0 0 1-.747.543L8 11.859l-3.266 1.995a.5.5 0 0 1-.747-.543l.888-3.723-2.907-2.49a.5.5 0 0 1 .286-.877l3.814-.306 1.47-3.534A.5.5 0 0 1 8 2.073m0 1.802L6.874 6.581a.5.5 0 0 1-.421.306l-2.921.234 2.225 1.907a.5.5 0 0 1 .161.495l-.68 2.85 2.501-1.527a.5.5 0 0 1 .521 0l2.501 1.528-.68-2.85a.5.5 0 0 1 .161-.496l2.226-1.907-2.921-.234a.5.5 0 0 1-.422-.306z"
      fill="#CED0D6"
    />
  </svg>
);

export const Favorites: FC<FavoritesProps> = ({
  size = 'md',
  mode = 'light',
  className,
  'aria-label': ariaLabel,
  title,
  ...props
}) => {
  const SvgComponent = mode === 'light' ? FavoritesLight : FavoritesDark;

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
