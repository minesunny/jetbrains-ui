import type { FC } from 'react';
import { cn } from '@/lib/utils';
import { type IconProps, type SvgProps, sizeMap } from '../types';

export type FitContentProps = IconProps;

const FitContentLight: FC<SvgProps> = ({
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
    <rect x="11" y="7" width="1" height="4" rx=".5" fill="#6C707E" />
    <rect
      x="12"
      y="10"
      width="1"
      height="4"
      rx=".5"
      transform="rotate(90 12 10)"
      fill="#6C707E"
    />
    <rect x="4" y="5" width="1" height="4" rx=".5" fill="#6C707E" />
    <rect
      x="8"
      y="5"
      width="1"
      height="4"
      rx=".5"
      transform="rotate(90 8 5)"
      fill="#6C707E"
    />
    <rect x="1.5" y="2.5" width="13" height="11" rx="1.5" stroke="#6C707E" />
  </svg>
);

const FitContentDark: FC<SvgProps> = ({
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
    <rect x="11" y="7" width="1" height="4" rx=".5" fill="#CED0D6" />
    <rect
      x="12"
      y="10"
      width="1"
      height="4"
      rx=".5"
      transform="rotate(90 12 10)"
      fill="#CED0D6"
    />
    <rect x="4" y="5" width="1" height="4" rx=".5" fill="#CED0D6" />
    <rect
      x="8"
      y="5"
      width="1"
      height="4"
      rx=".5"
      transform="rotate(90 8 5)"
      fill="#CED0D6"
    />
    <rect x="1.5" y="2.5" width="13" height="11" rx="1.5" stroke="#CED0D6" />
  </svg>
);

export const FitContent: FC<FitContentProps> = ({
  size = 'md',
  mode = 'light',
  className,
  'aria-label': ariaLabel,
  title,
  ...props
}) => {
  const SvgComponent = mode === 'light' ? FitContentLight : FitContentDark;

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
