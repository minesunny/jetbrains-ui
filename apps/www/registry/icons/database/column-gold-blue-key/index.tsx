import type { FC } from 'react';
import { cn } from '@/lib/utils';
import { type IconProps, type SvgProps, sizeMap } from '../types';

export type ColumnGoldBlueKeyProps = IconProps;

const ColumnGoldBlueKeyLight: FC<SvgProps> = ({
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
      d="M3 2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h3v-1.337a3.5 3.5 0 0 1-1-.714V13H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h2v4.05a3.5 3.5 0 0 1 1-.713V3h7a1 1 0 0 1 1 1v2.035c.353.051.69.154 1 .302V4a2 2 0 0 0-2-2z"
      fill="#6C707E"
    />
    <path
      d="M3 3a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h2v-1.05A3.49 3.49 0 0 1 4 9.5c0-.954.381-1.818 1-2.45V3z"
      fill="#EBECF0"
    />
  </svg>
);

const ColumnGoldBlueKeyDark: FC<SvgProps> = ({
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
      d="M3 2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h3v-1.337a3.5 3.5 0 0 1-1-.714V13H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h2v4.05a3.5 3.5 0 0 1 1-.713V3h7a1 1 0 0 1 1 1v2.035c.353.051.69.154 1 .302V4a2 2 0 0 0-2-2z"
      fill="#CED0D6"
    />
    <path
      d="M3 3a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h2v-1.05A3.49 3.49 0 0 1 4 9.5c0-.954.381-1.818 1-2.45V3z"
      fill="#43454A"
    />
  </svg>
);

export const ColumnGoldBlueKey: FC<ColumnGoldBlueKeyProps> = ({
  size = 'md',
  mode = 'light',
  className,
  'aria-label': ariaLabel,
  title,
  ...props
}) => {
  const SvgComponent =
    mode === 'light' ? ColumnGoldBlueKeyLight : ColumnGoldBlueKeyDark;

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
