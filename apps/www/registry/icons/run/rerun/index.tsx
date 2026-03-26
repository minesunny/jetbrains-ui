import type { FC } from 'react';
import { cn } from '@/lib/utils';
import { type IconProps, type SvgProps, sizeMap } from '../types';

export type RerunProps = IconProps;

const RerunLight: FC<SvgProps> = ({
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
      d="M9 9.502a1.5 1.5 0 0 1 2.294-1.272l4.002 2.497a1.5 1.5 0 0 1 0 2.546l-4.002 2.497A1.5 1.5 0 0 1 9 14.498zm1.765-.424a.5.5 0 0 0-.765.424v4.996a.5.5 0 0 0 .765.424l4.002-2.498a.5.5 0 0 0 0-.848z"
      fill="#208A3C"
    />
    <path
      d="M10 9.502a.5.5 0 0 1 .765-.424l4.002 2.498a.5.5 0 0 1 0 .848l-4.002 2.498a.5.5 0 0 1-.765-.424z"
      fill="#F2FCF3"
    />
    <path
      d="M14 1.5a.5.5 0 0 0-1 0v3.182A6 6 0 1 0 8 14v-1a5 5 0 1 1 4-8H9.5a.5.5 0 0 0 0 1H14z"
      fill="#6C707E"
    />
  </svg>
);

const RerunDark: FC<SvgProps> = ({
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
      d="M9 9.502a1.5 1.5 0 0 1 2.294-1.272l4.002 2.497a1.5 1.5 0 0 1 0 2.546l-4.002 2.497A1.5 1.5 0 0 1 9 14.498zm1.765-.424a.5.5 0 0 0-.765.424v4.996a.5.5 0 0 0 .765.424l4.002-2.498a.5.5 0 0 0 0-.848z"
      fill="#57965C"
    />
    <path
      d="M10 9.502a.5.5 0 0 1 .765-.424l4.002 2.498a.5.5 0 0 1 0 .848l-4.002 2.498a.5.5 0 0 1-.765-.424z"
      fill="#253627"
    />
    <path
      d="M14 1.5a.5.5 0 0 0-1 0v3.182A6 6 0 1 0 8 14v-1a5 5 0 1 1 4-8H9.5a.5.5 0 0 0 0 1H14z"
      fill="#CED0D6"
    />
  </svg>
);

export const Rerun: FC<RerunProps> = ({
  size = 'md',
  mode = 'light',
  className,
  'aria-label': ariaLabel,
  title,
  ...props
}) => {
  const SvgComponent = mode === 'light' ? RerunLight : RerunDark;

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
