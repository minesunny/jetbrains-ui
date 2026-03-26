import type { FC } from 'react';
import { cn } from '@/lib/utils';
import { type IconProps, type SvgProps, sizeMap } from '../../types';

export type BookmarksListProps = IconProps;

const BookmarksListLight: FC<SvgProps> = ({
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
    <rect x="2" y="12" width="6" height="1" rx=".5" fill="#6C707E" />
    <rect x="2" y="6" width="12" height="1" rx=".5" fill="#6C707E" />
    <rect x="2" y="9" width="6" height="1" rx=".5" fill="#6C707E" />
    <rect x="2" y="3" width="12" height="1" rx=".5" fill="#6C707E" />
    <path
      d="M10 10.001A1 1 0 0 1 11 9h3a1 1 0 0 1 1 1.001v5.748a.25.25 0 0 1-.407.195L12.5 14.233l-2.094 1.713a.25.25 0 0 1-.406-.196z"
      fill="#FFAF0F"
    />
  </svg>
);

const BookmarksListDark: FC<SvgProps> = ({
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
    <rect x="2" y="12" width="6" height="1" rx=".5" fill="#CED0D6" />
    <rect x="2" y="6" width="12" height="1" rx=".5" fill="#CED0D6" />
    <rect x="2" y="9" width="6" height="1" rx=".5" fill="#CED0D6" />
    <rect x="2" y="3" width="12" height="1" rx=".5" fill="#CED0D6" />
    <path
      d="M10 10.001A1 1 0 0 1 11 9h3a1 1 0 0 1 1 1.001v5.748a.25.25 0 0 1-.407.195L12.5 14.233l-2.094 1.713a.25.25 0 0 1-.406-.196z"
      fill="#F2C55C"
    />
  </svg>
);

export const BookmarksList: FC<BookmarksListProps> = ({
  size = 'md',
  mode = 'light',
  className,
  'aria-label': ariaLabel,
  title,
  ...props
}) => {
  const SvgComponent =
    mode === 'light' ? BookmarksListLight : BookmarksListDark;

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
