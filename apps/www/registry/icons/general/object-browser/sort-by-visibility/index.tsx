import type { FC } from 'react';
import { cn } from '@/lib/utils';
import { type IconProps, type SvgProps, sizeMap } from '../../types';

export type SortByVisibilityProps = IconProps;

const SortByVisibilityLight: FC<SvgProps> = ({
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
      d="M7.854 10.854a.5.5 0 0 0-.708-.708L5 12.293V2.5a.5.5 0 1 0-1 0v9.793l-2.146-2.147a.5.5 0 0 0-.708.708l3 3a.5.5 0 0 0 .708 0z"
      fill="#6C707E"
    />
    <path fill="#EBECF0" d="M10 6H14V9H10z" />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M14 5V4a2 2 0 1 0-4 0v1a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1m-3-1a1 1 0 1 1 2 0v1h-2zm-1 5V6h4v3z"
      fill="#6C707E"
    />
  </svg>
);

const SortByVisibilityDark: FC<SvgProps> = ({
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
      d="M7.854 10.854a.5.5 0 0 0-.708-.708L5 12.293V2.5a.5.5 0 1 0-1 0v9.793l-2.146-2.147a.5.5 0 0 0-.708.708l3 3a.5.5 0 0 0 .708 0z"
      fill="#CED0D6"
    />
    <path fill="#43454A" d="M10 6H14V9H10z" />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M14 5V4a2 2 0 1 0-4 0v1a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1m-3-1a1 1 0 1 1 2 0v1h-2zm-1 5V6h4v3z"
      fill="#CED0D6"
    />
  </svg>
);

export const SortByVisibility: FC<SortByVisibilityProps> = ({
  size = 'md',
  mode = 'light',
  className,
  'aria-label': ariaLabel,
  title,
  ...props
}) => {
  const SvgComponent =
    mode === 'light' ? SortByVisibilityLight : SortByVisibilityDark;

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
