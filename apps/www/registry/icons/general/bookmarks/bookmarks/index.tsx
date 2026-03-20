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
      d="M5.5 1a.5.5 0 0 0 0 1H12a1 1 0 0 1 1 1v9.5a.5.5 0 0 0 1 0V3a2 2 0 0 0-2-2z"
      fill="#6C707E"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M10.363 14.77 7 12l-3.364 2.77A1 1 0 0 1 2 13.998V5a2 2 0 0 1 2-2h5.999a2 2 0 0 1 2 2v8.998a1 1 0 0 1-1.636.772m-2.727-3.542a1 1 0 0 0-1.272 0L3 13.998V5a1 1 0 0 1 1-1h5.999a1 1 0 0 1 1 1v8.998z"
      fill="#6C707E"
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
      d="M5.5 1a.5.5 0 0 0 0 1H12a1 1 0 0 1 1 1v9.5a.5.5 0 0 0 1 0V3a2 2 0 0 0-2-2z"
      fill="#CED0D6"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M10.363 14.77 7 12l-3.364 2.77A1 1 0 0 1 2 13.998V5a2 2 0 0 1 2-2h5.999a2 2 0 0 1 2 2v8.998a1 1 0 0 1-1.636.772m-2.727-3.542a1 1 0 0 0-1.272 0L3 13.998V5a1 1 0 0 1 1-1h5.999a1 1 0 0 1 1 1v8.998z"
      fill="#CED0D6"
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
