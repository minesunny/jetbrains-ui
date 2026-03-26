import type { FC } from 'react';
import { cn } from '@/lib/utils';
import { type IconProps, type SvgProps, sizeMap } from '../types';

export type HaskellProps = IconProps;

const HaskellLight: FC<SvgProps> = ({
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
      d="M9.91 5.5H15V8h-3.818zM12.455 9.25H15v2.5h-1.273zM1 3h2.545l2.546 5H3.545zM6.09 8H3.546L1 13h2.545z"
      fill="#F07B3E"
    />
    <path
      d="M4.818 3h2.546l2.545 5H7.364zM7.364 8h2.545l2.546 5H9.909z"
      fill="#90623E"
    />
    <path d="M9.91 8H7.363l-2.546 5h2.546z" fill="#90623E" />
  </svg>
);

const HaskellDark: FC<SvgProps> = ({
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
      d="M9.91 5.5H15V8h-3.818zM12.455 9.25H15v2.5h-1.273zM1 3h2.545l2.546 5H3.545zM6.09 8H3.546L1 13h2.545z"
      fill="#F07B3E"
    />
    <path
      d="M4.818 3h2.546l2.545 5H7.364zM7.364 8h2.545l2.546 5H9.909z"
      fill="#90623E"
    />
    <path d="M9.91 8H7.363l-2.546 5h2.546z" fill="#90623E" />
  </svg>
);

export const Haskell: FC<HaskellProps> = ({
  size = 'md',
  mode = 'light',
  className,
  'aria-label': ariaLabel,
  title,
  ...props
}) => {
  const SvgComponent = mode === 'light' ? HaskellLight : HaskellDark;

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
