import type { FC } from 'react';
import { cn } from '@/lib/utils';
import { type IconProps, type SvgProps, sizeMap } from '../types';

export type ColumnBlueKeyIndexProps = IconProps;

const ColumnBlueKeyIndexLight: FC<SvgProps> = ({
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
    <path d="M2 4a1 1 0 0 1 1-1h2v10H3a1 1 0 0 1-1-1z" fill="#EDF3FF" />
    <path
      d="M6 14h6v-1H6zM6 3h7a1 1 0 0 1 1 1v2.035c.353.051.69.154 1 .302V4a2 2 0 0 0-2-2H6z"
      fill="#6C707E"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M6 14H3a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h3zM5 3H3a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h2zM14 11.95a2.5 2.5 0 1 0-1 0V16h1v-1h2v-1h-2zm1-2.45a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0"
      fill="#3574F0"
    />
  </svg>
);

const ColumnBlueKeyIndexDark: FC<SvgProps> = ({
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
    <g clipPath="url(#a)">
      <path d="M2 4a1 1 0 0 1 1-1h2v10H3a1 1 0 0 1-1-1z" fill="#25324D" />
      <path
        d="M6 14h6v-1H6zM6 3h7a1 1 0 0 1 1 1v2.035c.353.051.69.154 1 .302V4a2 2 0 0 0-2-2H6z"
        fill="#CED0D6"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6 14H3a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h3zM5 3H3a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h2zM14 11.95a2.5 2.5 0 1 0-1 0V16h1v-1h2v-1h-2zm1-2.45a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0"
        fill="#548AF7"
      />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M0 0H16V16H0z" />
      </clipPath>
    </defs>
  </svg>
);

export const ColumnBlueKeyIndex: FC<ColumnBlueKeyIndexProps> = ({
  size = 'md',
  mode = 'light',
  className,
  'aria-label': ariaLabel,
  title,
  ...props
}) => {
  const SvgComponent =
    mode === 'light' ? ColumnBlueKeyIndexLight : ColumnBlueKeyIndexDark;

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
