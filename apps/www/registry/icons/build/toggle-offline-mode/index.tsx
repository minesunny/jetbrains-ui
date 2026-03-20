import type { FC } from 'react';
import { cn } from '@/lib/utils';
import { type IconProps, type SvgProps, sizeMap } from '../types';

export type ToggleOfflineModeProps = IconProps;

const ToggleOfflineModeLight: FC<SvgProps> = ({
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
      d="M2.697 4.818q-.134.24-.244.492A4.001 4.001 0 0 0 4 13h6.879l-1-1H4a3 3 0 0 1-1.16-5.768l.37-.155.16-.368.068-.15zM5.56 3.438l-.742-.741a5.502 5.502 0 0 1 7.978 3.315 3.5 3.5 0 0 1 1.7 6.363l-.723-.723a2.499 2.499 0 0 0-1.06-4.643l-.692-.058-.187-.669A4.502 4.502 0 0 0 5.56 3.438M1.283 1.99l.707-.708L14.718 14.01l-.707.707z"
      fill="#6C707E"
    />
  </svg>
);

const ToggleOfflineModeDark: FC<SvgProps> = ({
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
      d="M2.697 4.818q-.134.24-.244.492A4.001 4.001 0 0 0 4 13h6.879l-1-1H4a3 3 0 0 1-1.16-5.768l.37-.155.16-.368.068-.15zM5.56 3.438l-.742-.741a5.502 5.502 0 0 1 7.978 3.315 3.5 3.5 0 0 1 1.7 6.363l-.723-.723a2.499 2.499 0 0 0-1.06-4.643l-.692-.058-.187-.669A4.502 4.502 0 0 0 5.56 3.438M1.283 1.99l.707-.708L14.718 14.01l-.707.707z"
      fill="#CED0D6"
    />
  </svg>
);

export const ToggleOfflineMode: FC<ToggleOfflineModeProps> = ({
  size = 'md',
  mode = 'light',
  className,
  'aria-label': ariaLabel,
  title,
  ...props
}) => {
  const SvgComponent =
    mode === 'light' ? ToggleOfflineModeLight : ToggleOfflineModeDark;

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
