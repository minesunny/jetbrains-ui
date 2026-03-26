import type { FC } from 'react';
import { cn } from '@/lib/utils';
import { type IconProps, type SvgProps, sizeMap } from '../../types';

export type BookmarksProps = IconProps;

const BookmarksLight: FC<SvgProps> = ({
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
      d="M5 2h5.999a1.5 1.5 0 0 1 1.5 1.5v10.377a.5.5 0 0 1-.812.39l-3.374-2.704-.314-.252-.312.252-3.375 2.704a.5.5 0 0 1-.812-.39V3.5A1.5 1.5 0 0 1 5 2Z"
      stroke="#6C707E"
    />
  </svg>
);

const BookmarksDark: FC<SvgProps> = ({
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
      d="M5 2h5.999a1.5 1.5 0 0 1 1.5 1.5v10.377a.5.5 0 0 1-.812.39l-3.374-2.704-.314-.252-.312.252-3.375 2.704a.5.5 0 0 1-.812-.39V3.5A1.5 1.5 0 0 1 5 2Z"
      stroke="#CED0D6"
    />
  </svg>
);

export const Bookmarks: FC<BookmarksProps> = ({
  size = 'md',
  mode = 'light',
  className,
  'aria-label': ariaLabel,
  title,
  ...props
}) => {
  const SvgComponent = mode === 'light' ? BookmarksLight : BookmarksDark;

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
