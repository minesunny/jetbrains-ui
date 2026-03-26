import type { FC } from 'react';
import { cn } from '@/lib/utils';
import { type IconProps, type SvgProps, sizeMap } from '../types';

export type ColumnGoldBlueKeyDotProps = IconProps;

const ColumnGoldBlueKeyDotLight: FC<SvgProps> = ({
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
      d="M5 3H3a1 1 0 0 0-1 1v6.035c-.353.05-.69.154-1 .302V4a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v2.337a3.5 3.5 0 0 0-1-.302V4a1 1 0 0 0-1-1H6v3.337c-.375.178-.713.42-1 .714z"
      fill="#6C707E"
    />
    <path
      d="M2 4a1 1 0 0 1 1-1h2v4.05a3.49 3.49 0 0 0-.885 3.344A3.5 3.5 0 0 0 2 10.035z"
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
      d="M8 11.95a2.5 2.5 0 1 0-1 0V16h1v-1h2v-1H8zM9 9.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0"
      fill="#3574F0"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M5 13.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0m-1 0a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0"
      fill="#6C707E"
    />
  </svg>
);

const ColumnGoldBlueKeyDotDark: FC<SvgProps> = ({
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
      d="M5 3H3a1 1 0 0 0-1 1v6.035c-.353.05-.69.154-1 .302V4a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v2.337a3.5 3.5 0 0 0-1-.302V4a1 1 0 0 0-1-1H6v3.337c-.375.178-.713.42-1 .714z"
      fill="#CED0D6"
    />
    <path
      d="M2 4a1 1 0 0 1 1-1h2v4.05a3.49 3.49 0 0 0-.885 3.344A3.5 3.5 0 0 0 2 10.035z"
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
      d="M8 11.95a2.5 2.5 0 1 0-1 0V16h1v-1h2v-1H8zM9 9.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0"
      fill="#548AF7"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M5 13.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0m-1 0a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0"
      fill="#CED0D6"
    />
  </svg>
);

export const ColumnGoldBlueKeyDot: FC<ColumnGoldBlueKeyDotProps> = ({
  size = 'md',
  mode = 'light',
  className,
  'aria-label': ariaLabel,
  title,
  ...props
}) => {
  const SvgComponent =
    mode === 'light' ? ColumnGoldBlueKeyDotLight : ColumnGoldBlueKeyDotDark;

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
