import type { FC } from 'react';
import { cn } from '@/lib/utils';
import { type IconProps, type SvgProps, sizeMap } from '../../types';

export type ShowMembersProps = IconProps;

const ShowMembersLight: FC<SvgProps> = ({
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
      d="M9.5 3h1.243A5.5 5.5 0 1 0 3 10.743V9.5A6.5 6.5 0 0 1 9.5 3"
      fill="#FFF7F7"
    />
    <circle cx="9.5" cy="9.5" r="5" fill="#FFF4EB" stroke="#E66D17" />
    <path d="M9.5 13V7.5a1 1 0 0 1 1-1h1M11.5 8.5H8" stroke="#E66D17" />
    <path
      d="M10.743 3H9.5q-.084 0-.169.002A4.5 4.5 0 0 0 3 9.33v1.414A5.5 5.5 0 1 1 10.743 3"
      fill="#DB3B4B"
    />
  </svg>
);

const ShowMembersDark: FC<SvgProps> = ({
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
      d="M9.5 3h1.243A5.5 5.5 0 1 0 3 10.743V9.5A6.5 6.5 0 0 1 9.5 3"
      fill="#402929"
    />
    <circle cx="9.5" cy="9.5" r="5" fill="#45322B" stroke="#C77D55" />
    <path d="M9.5 13V7.5a1 1 0 0 1 1-1h1M11.5 8.5H8" stroke="#C77D55" />
    <path
      d="M10.743 3H9.5q-.084 0-.169.002A4.5 4.5 0 0 0 3 9.33v1.414A5.5 5.5 0 1 1 10.743 3"
      fill="#DB5C5C"
    />
  </svg>
);

export const ShowMembers: FC<ShowMembersProps> = ({
  size = 'md',
  mode = 'light',
  className,
  'aria-label': ariaLabel,
  title,
  ...props
}) => {
  const SvgComponent = mode === 'light' ? ShowMembersLight : ShowMembersDark;

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
