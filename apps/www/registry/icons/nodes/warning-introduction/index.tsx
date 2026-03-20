import type { FC } from 'react';
import { cn } from '@/lib/utils';
import { type IconProps, type SvgProps, sizeMap } from '../types';

export type WarningIntroductionProps = IconProps;

const WarningIntroductionLight: FC<SvgProps> = ({
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
      d="M7.566 1.768a.5.5 0 0 1 .869 0l6.276 10.984a.5.5 0 0 1-.435.748H1.724a.5.5 0 0 1-.435-.748z"
      fill="#FFFAEB"
      stroke="#C27D04"
    />
    <path
      d="M8 5.001a.6.6 0 0 1 .6.6V9a.6.6 0 0 1-1.2 0V5.6a.6.6 0 0 1 .6-.6M8.8 11.2a.8.8 0 1 1-1.6 0 .8.8 0 0 1 1.6 0"
      fill="#C27D04"
    />
  </svg>
);

const WarningIntroductionDark: FC<SvgProps> = ({
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
      d="M7.566 1.768a.5.5 0 0 1 .869 0l6.276 10.984a.5.5 0 0 1-.435.748H1.724a.5.5 0 0 1-.435-.748z"
      fill="#3D3223"
      stroke="#D6AE58"
    />
    <path
      d="M8 5.001a.6.6 0 0 1 .6.6V9a.6.6 0 0 1-1.2 0V5.6a.6.6 0 0 1 .6-.6M8.8 11.2a.8.8 0 1 1-1.6 0 .8.8 0 0 1 1.6 0"
      fill="#D6AE58"
    />
  </svg>
);

export const WarningIntroduction: FC<WarningIntroductionProps> = ({
  size = 'md',
  mode = 'light',
  className,
  'aria-label': ariaLabel,
  title,
  ...props
}) => {
  const SvgComponent =
    mode === 'light' ? WarningIntroductionLight : WarningIntroductionDark;

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
