import type { FC } from 'react';
import { cn } from '@/lib/utils';
import { type IconProps, type SvgProps, sizeMap } from '../types';

export type NetezzaProps = IconProps;

const NetezzaLight: FC<SvgProps> = ({
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
      d="M8 14.214A6.214 6.214 0 1 0 8 1.785a6.214 6.214 0 0 0 0 12.428M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14"
      fill="#B7C003"
    />
    <path
      d="M7.049 4.459H4.815v7.076H6.87V7.69l2.206 3.844h2.11V4.459h-2.04v3.814z"
      fill="#166671"
    />
  </svg>
);

const NetezzaDark: FC<SvgProps> = ({
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
      d="M8 14.214A6.214 6.214 0 1 0 8 1.785a6.214 6.214 0 0 0 0 12.428M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14"
      fill="#B7C003"
    />
    <path
      d="M7.049 4.459H4.815v7.076H6.87V7.69l2.206 3.844h2.11V4.459h-2.04v3.814z"
      fill="#248996"
    />
  </svg>
);

export const Netezza: FC<NetezzaProps> = ({
  size = 'md',
  mode = 'light',
  className,
  'aria-label': ariaLabel,
  title,
  ...props
}) => {
  const SvgComponent = mode === 'light' ? NetezzaLight : NetezzaDark;

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
