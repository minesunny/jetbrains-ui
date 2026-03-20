import type { FC } from 'react';
import { cn } from '@/lib/utils';
import { type IconProps, type SvgProps, sizeMap } from '../types';

export type ColumnIndexProps = IconProps;

const ColumnIndexLight: FC<SvgProps> = ({
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
      d="M6 14h7a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H6v1h7a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H6z"
      fill="#6C707E"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M6 2H3a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h3zM5 3H3a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h2z"
      fill="#3574F0"
    />
  </svg>
);

const ColumnIndexDark: FC<SvgProps> = ({
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
        d="M6 14h7a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H6v1h7a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H6z"
        fill="#CED0D6"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6 2H3a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h3zM5 3H3a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h2z"
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

export const ColumnIndex: FC<ColumnIndexProps> = ({
  size = 'md',
  mode = 'light',
  className,
  'aria-label': ariaLabel,
  title,
  ...props
}) => {
  const SvgComponent = mode === 'light' ? ColumnIndexLight : ColumnIndexDark;

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
