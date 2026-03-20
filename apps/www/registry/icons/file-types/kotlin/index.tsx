import type { FC } from 'react';
import { cn } from '@/lib/utils';
import { type IconProps, type SvgProps, sizeMap } from '../types';

export type KotlinProps = IconProps;

const KotlinLight: FC<SvgProps> = ({
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
      d="M13.053 12.631a.5.5 0 0 1-.338.869H3a.5.5 0 0 1-.5-.5V3a.5.5 0 0 1 .5-.5h9.715a.5.5 0 0 1 .338.869L8.403 7.63a.5.5 0 0 0 0 .738z"
      fill="#FAF5FF"
      stroke="#834DF0"
    />
  </svg>
);

const KotlinDark: FC<SvgProps> = ({
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
      d="M13.053 12.631a.5.5 0 0 1-.338.869H3a.5.5 0 0 1-.5-.5V3a.5.5 0 0 1 .5-.5h9.715a.5.5 0 0 1 .338.869L8.403 7.63a.5.5 0 0 0 0 .738z"
      fill="#2F2936"
      stroke="#A571E6"
    />
  </svg>
);

export const Kotlin: FC<KotlinProps> = ({
  size = 'md',
  mode = 'light',
  className,
  'aria-label': ariaLabel,
  title,
  ...props
}) => {
  const SvgComponent = mode === 'light' ? KotlinLight : KotlinDark;

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
