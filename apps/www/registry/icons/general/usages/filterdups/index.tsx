import type { FC } from 'react';
import { cn } from '@/lib/utils';
import { type IconProps, type SvgProps, sizeMap } from '../../types';

export type FilterdupsProps = IconProps;

const FilterdupsLight: FC<SvgProps> = ({
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
      d="M4.646 7.854a.5.5 0 1 1 .708-.708L7.5 9.293V2.5a.5.5 0 0 1 1 0v6.793l2.146-2.147a.5.5 0 0 1 .708.708l-3 3-.354.353-.354-.353z"
      fill="#6C707E"
    />
    <rect x="1" y="2" width="5" height="1" rx=".5" fill="#6C707E" />
    <rect x="10" y="2" width="5" height="1" rx=".5" fill="#6C707E" />
    <rect x="1" y="4" width="5" height="1" rx=".5" fill="#6C707E" />
    <rect x="1" y="13" width="14" height="1" rx=".5" fill="#6C707E" />
    <rect x="10" y="4" width="5" height="1" rx=".5" fill="#6C707E" />
  </svg>
);

const FilterdupsDark: FC<SvgProps> = ({
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
      d="M4.646 7.854a.5.5 0 1 1 .708-.708L7.5 9.293V2.5a.5.5 0 0 1 1 0v6.793l2.146-2.147a.5.5 0 0 1 .708.708l-3 3-.354.353-.354-.353z"
      fill="#CED0D6"
    />
    <rect x="1" y="2" width="5" height="1" rx=".5" fill="#CED0D6" />
    <rect x="10" y="2" width="5" height="1" rx=".5" fill="#CED0D6" />
    <rect x="1" y="4" width="5" height="1" rx=".5" fill="#CED0D6" />
    <rect x="1" y="13" width="14" height="1" rx=".5" fill="#CED0D6" />
    <rect x="10" y="4" width="5" height="1" rx=".5" fill="#CED0D6" />
  </svg>
);

export const Filterdups: FC<FilterdupsProps> = ({
  size = 'md',
  mode = 'light',
  className,
  'aria-label': ariaLabel,
  title,
  ...props
}) => {
  const SvgComponent = mode === 'light' ? FilterdupsLight : FilterdupsDark;

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
