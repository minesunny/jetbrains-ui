import type { FC } from 'react';
import { cn } from '@/lib/utils';
import { type IconProps, type SvgProps, sizeMap } from '../types';

export type BinaryDataProps = IconProps;

const BinaryDataLight: FC<SvgProps> = ({
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
      d="M10.98 6.992c-1.496 0-2.48-1.256-2.48-2.88v-.016C8.5 2.472 9.508 1.2 10.996 1.2c1.48 0 2.48 1.256 2.48 2.88v.016c0 1.624-1 2.896-2.496 2.896m.022-1.112c.744 0 1.216-.752 1.216-1.768v-.016c0-1.016-.496-1.784-1.232-1.784S9.77 3.056 9.77 4.08v.016c0 1.024.488 1.784 1.232 1.784M4.98 14.792c-1.496 0-2.48-1.256-2.48-2.88v-.016C2.5 10.272 3.508 9 4.996 9c1.48 0 2.48 1.256 2.48 2.88v.016c0 1.624-1 2.896-2.496 2.896m.022-1.112c.744 0 1.216-.752 1.216-1.768v-.016c0-1.016-.496-1.784-1.232-1.784s-1.216.744-1.216 1.768v.016c0 1.024.488 1.784 1.232 1.784"
      fill="#6C707E"
    />
    <path
      d="M6.91 6.092H5.858v-4.74h-.84l-1.935.62.256.914 1.303-.381v3.587H3.41v.9h3.5zM11.862 13.74h1.052v.9h-3.5v-.9h1.232v-3.587l-1.303.381-.256-.913L11.022 9h.84z"
      fill="#6C707E"
    />
  </svg>
);

const BinaryDataDark: FC<SvgProps> = ({
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
      d="M10.98 6.992c-1.496 0-2.48-1.256-2.48-2.88v-.016C8.5 2.472 9.508 1.2 10.996 1.2c1.48 0 2.48 1.256 2.48 2.88v.016c0 1.624-1 2.896-2.496 2.896m.022-1.112c.744 0 1.216-.752 1.216-1.768v-.016c0-1.016-.496-1.784-1.232-1.784S9.77 3.056 9.77 4.08v.016c0 1.024.488 1.784 1.232 1.784M4.98 14.792c-1.496 0-2.48-1.256-2.48-2.88v-.016C2.5 10.272 3.508 9 4.996 9c1.48 0 2.48 1.256 2.48 2.88v.016c0 1.624-1 2.896-2.496 2.896m.022-1.112c.744 0 1.216-.752 1.216-1.768v-.016c0-1.016-.496-1.784-1.232-1.784s-1.216.744-1.216 1.768v.016c0 1.024.488 1.784 1.232 1.784"
      fill="#CED0D6"
    />
    <path
      d="M6.91 6.092H5.858v-4.74h-.84l-1.935.62.256.914 1.303-.381v3.587H3.41v.9h3.5zM11.862 13.74h1.052v.9h-3.5v-.9h1.232v-3.587l-1.303.381-.256-.913L11.022 9h.84z"
      fill="#CED0D6"
    />
  </svg>
);

export const BinaryData: FC<BinaryDataProps> = ({
  size = 'md',
  mode = 'light',
  className,
  'aria-label': ariaLabel,
  title,
  ...props
}) => {
  const SvgComponent = mode === 'light' ? BinaryDataLight : BinaryDataDark;

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
