import type { FC } from 'react';
import { cn } from '@/lib/utils';
import { type IconProps, type SvgProps, sizeMap } from '../types';

export type ColumnGoldKeyDotProps = IconProps;

const ColumnGoldKeyDotLight: FC<SvgProps> = ({
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
      d="M3 3h2v8.05c.619.632 1 1.496 1 2.45v.5h6v-1H6V3h7a1 1 0 0 1 1 1v2.035c.353.051.69.154 1 .302V4a2 2 0 0 0-2-2H3a2 2 0 0 0-2 2v6.337c.31-.148.647-.251 1-.302V4a1 1 0 0 1 1-1"
      fill="#6C707E"
    />
    <path
      d="M3 3a1 1 0 0 0-1 1v6.035Q2.245 10 2.5 10c.98 0 1.865.402 2.5 1.05V3z"
      fill="#EBECF0"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M14 11.95a2.5 2.5 0 1 0-1 0V16h1v-1h2v-1h-2zm1-2.45a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0"
      fill="#E66D17"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M5 13.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0m-1 0a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0"
      fill="#6C707E"
    />
  </svg>
);

const ColumnGoldKeyDotDark: FC<SvgProps> = ({
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
      d="M3 3h2v8.05c.619.632 1 1.496 1 2.45v.5h6v-1H6V3h7a1 1 0 0 1 1 1v2.035c.353.051.69.154 1 .302V4a2 2 0 0 0-2-2H3a2 2 0 0 0-2 2v6.337c.31-.148.647-.251 1-.302V4a1 1 0 0 1 1-1"
      fill="#CED0D6"
    />
    <path
      d="M3 3a1 1 0 0 0-1 1v6.035Q2.245 10 2.5 10c.98 0 1.865.402 2.5 1.05V3z"
      fill="#43454A"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M14 11.95a2.5 2.5 0 1 0-1 0V16h1v-1h2v-1h-2zm1-2.45a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0"
      fill="#F2C55C"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M5 13.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0m-1 0a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0"
      fill="#CED0D6"
    />
  </svg>
);

export const ColumnGoldKeyDot: FC<ColumnGoldKeyDotProps> = ({
  size = 'md',
  mode = 'light',
  className,
  'aria-label': ariaLabel,
  title,
  ...props
}) => {
  const SvgComponent =
    mode === 'light' ? ColumnGoldKeyDotLight : ColumnGoldKeyDotDark;

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
