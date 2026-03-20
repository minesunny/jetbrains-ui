import type { FC } from 'react';
import { cn } from '@/lib/utils';
import { type IconProps, type SvgProps, sizeMap } from '../types';

export type UnshelveProps = IconProps;

const UnshelveLight: FC<SvgProps> = ({
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
      d="M11.354 4.854a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708 0l-3 3a.5.5 0 1 0 .708.708L7.5 2.707V8.5a.5.5 0 0 0 1 0V2.707l2.146 2.147a.5.5 0 0 0 .708 0"
      fill="#6C707E"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M4.776 8.553 5.5 10h5l.724-1.447A1 1 0 0 1 12.118 8H14a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1h1.882a1 1 0 0 1 .894.553m-.17 1.894A1 1 0 0 0 5.5 11h5a1 1 0 0 0 .894-.553L12.118 9H14v4H2V9h1.882z"
      fill="#6C707E"
    />
  </svg>
);

const UnshelveDark: FC<SvgProps> = ({
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
      d="M11.354 4.854a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708 0l-3 3a.5.5 0 1 0 .708.708L7.5 2.707V8.5a.5.5 0 0 0 1 0V2.707l2.146 2.147a.5.5 0 0 0 .708 0"
      fill="#CED0D6"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M4.776 8.553 5.5 10h5l.724-1.447A1 1 0 0 1 12.118 8H14a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1h1.882a1 1 0 0 1 .894.553m-.17 1.894A1 1 0 0 0 5.5 11h5a1 1 0 0 0 .894-.553L12.118 9H14v4H2V9h1.882z"
      fill="#CED0D6"
    />
  </svg>
);

export const Unshelve: FC<UnshelveProps> = ({
  size = 'md',
  mode = 'light',
  className,
  'aria-label': ariaLabel,
  title,
  ...props
}) => {
  const SvgComponent = mode === 'light' ? UnshelveLight : UnshelveDark;

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
