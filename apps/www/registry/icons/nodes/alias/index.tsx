import type { FC } from 'react';
import { cn } from '@/lib/utils';
import { type IconProps, type SvgProps, sizeMap } from '../types';

export type AliasProps = IconProps;

const AliasLight: FC<SvgProps> = ({
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
      d="M2 12.498V3.502a.5.5 0 0 1 .833-.373l5.001 4.498a.5.5 0 0 1 0 .746L2.833 12.87A.5.5 0 0 1 2 12.498M9 12.498V3.502a.5.5 0 0 1 .833-.373l5.001 4.498a.5.5 0 0 1 0 .746L9.833 12.87A.5.5 0 0 1 9 12.498"
      fill="#EDF3FF"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M2.999 11.377 6.752 8 3 4.623zM2 12.498V3.502a.5.5 0 0 1 .833-.373l5.001 4.498a.5.5 0 0 1 0 .746L2.833 12.87A.5.5 0 0 1 2 12.498M9.999 11.377 13.753 8 10 4.623zM9 12.498V3.502a.5.5 0 0 1 .833-.373l5.001 4.498a.5.5 0 0 1 0 .746L9.833 12.87A.5.5 0 0 1 9 12.498"
      fill="#3574F0"
    />
  </svg>
);

const AliasDark: FC<SvgProps> = ({
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
      d="M2 12.498V3.502a.5.5 0 0 1 .833-.373l5.001 4.498a.5.5 0 0 1 0 .746L2.833 12.87A.5.5 0 0 1 2 12.498M9 12.498V3.502a.5.5 0 0 1 .833-.373l5.001 4.498a.5.5 0 0 1 0 .746L9.833 12.87A.5.5 0 0 1 9 12.498"
      fill="#25324D"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M2.999 11.377 6.752 8 3 4.623zM2 12.498V3.502a.5.5 0 0 1 .833-.373l5.001 4.498a.5.5 0 0 1 0 .746L2.833 12.87A.5.5 0 0 1 2 12.498M9.999 11.377 13.753 8 10 4.623zM9 12.498V3.502a.5.5 0 0 1 .833-.373l5.001 4.498a.5.5 0 0 1 0 .746L9.833 12.87A.5.5 0 0 1 9 12.498"
      fill="#548AF7"
    />
  </svg>
);

export const Alias: FC<AliasProps> = ({
  size = 'md',
  mode = 'light',
  className,
  'aria-label': ariaLabel,
  title,
  ...props
}) => {
  const SvgComponent = mode === 'light' ? AliasLight : AliasDark;

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
