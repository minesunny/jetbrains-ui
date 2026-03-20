import type { FC } from 'react';
import { cn } from '@/lib/utils';
import { type IconProps, type SvgProps, sizeMap } from '../../types';

export type DarkThemeSelectedProps = IconProps;

const DarkThemeSelectedLight: FC<SvgProps> = ({
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
      d="M6.158 1.765a6 6 0 0 0 8.075 8.076A6.501 6.501 0 0 1 1.5 8c0-2.95 1.966-5.44 4.658-6.235Z"
      fill="#EDF3FF"
      stroke="#3574F0"
    />
  </svg>
);

const DarkThemeSelectedDark: FC<SvgProps> = ({
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
      d="M6.158 1.765a6 6 0 0 0 8.075 8.076A6.501 6.501 0 0 1 1.5 8c0-2.95 1.966-5.44 4.658-6.235Z"
      fill="#25324D"
      stroke="#548AF7"
    />
  </svg>
);

export const DarkThemeSelected: FC<DarkThemeSelectedProps> = ({
  size = 'md',
  mode = 'light',
  className,
  'aria-label': ariaLabel,
  title,
  ...props
}) => {
  const SvgComponent =
    mode === 'light' ? DarkThemeSelectedLight : DarkThemeSelectedDark;

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
