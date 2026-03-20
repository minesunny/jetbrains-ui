import type { FC } from 'react';
import { cn } from '@/lib/utils';
import { type IconProps, type SvgProps, sizeMap } from '../../types';

export type SwapPanelsProps = IconProps;

const SwapPanelsLight: FC<SvgProps> = ({
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
      d="M3 7a5 5 0 0 1 5-5 .5.5 0 0 0 0-1 6 6 0 0 0-6 6v.293L.854 6.147a.5.5 0 0 0-.708.707l2 2a.5.5 0 0 0 .708 0l2-2a.5.5 0 0 0-.708-.707L3 7.293zM8 15a.5.5 0 0 1 0-1 5 5 0 0 0 5-5v-.293l-1.147 1.146a.5.5 0 1 1-.707-.707l2-2a.5.5 0 0 1 .707 0l2 2a.5.5 0 0 1-.707.707L14 8.707V9a6 6 0 0 1-6 6"
      fill="#6C707E"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M10 2a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-3a1 1 0 0 1-1-1zm1 0h3v3h-3zM1 11a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1zm1 0h3v3H2z"
      fill="#6C707E"
    />
  </svg>
);

const SwapPanelsDark: FC<SvgProps> = ({
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
      d="M3 7a5 5 0 0 1 5-5 .5.5 0 0 0 0-1 6 6 0 0 0-6 6v.293L.854 6.147a.5.5 0 0 0-.708.707l2 2a.5.5 0 0 0 .708 0l2-2a.5.5 0 0 0-.708-.707L3 7.293zM8 15a.5.5 0 0 1 0-1 5 5 0 0 0 5-5v-.293l-1.147 1.146a.5.5 0 1 1-.707-.707l2-2a.5.5 0 0 1 .707 0l2 2a.5.5 0 0 1-.707.707L14 8.707V9a6 6 0 0 1-6 6"
      fill="#CED0D6"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M10 2a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-3a1 1 0 0 1-1-1zm1 0h3v3h-3zM1 11a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1zm1 0h3v3H2z"
      fill="#CED0D6"
    />
  </svg>
);

export const SwapPanels: FC<SwapPanelsProps> = ({
  size = 'md',
  mode = 'light',
  className,
  'aria-label': ariaLabel,
  title,
  ...props
}) => {
  const SvgComponent = mode === 'light' ? SwapPanelsLight : SwapPanelsDark;

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
