import type { FC } from 'react';
import { cn } from '@/lib/utils';
import { type IconProps, type SvgProps, sizeMap } from '../types';

export type ColumnFilterProps = IconProps;

const ColumnFilterLight: FC<SvgProps> = ({
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
      d="M7.046 8.291A.5.5 0 0 1 7.5 8h8a.5.5 0 0 1 .38.825L13 12.185V15.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-3.315l-2.88-3.36a.5.5 0 0 1-.074-.534M8.587 9l2.293 2.675A.5.5 0 0 1 11 12v3h1v-3a.5.5 0 0 1 .12-.325L14.413 9z"
      fill="#3574F0"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M3 2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h6v-1H6V3h7a1 1 0 0 1 1 1v3h1V4a2 2 0 0 0-2-2zm2 1H3a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h2z"
      fill="#6C707E"
    />
  </svg>
);

const ColumnFilterDark: FC<SvgProps> = ({
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
      d="M7.046 8.291A.5.5 0 0 1 7.5 8h8a.5.5 0 0 1 .38.825L13 12.185V15.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-3.315l-2.88-3.36a.5.5 0 0 1-.074-.534M8.587 9l2.293 2.675A.5.5 0 0 1 11 12v3h1v-3a.5.5 0 0 1 .12-.325L14.413 9z"
      fill="#548AF7"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M3 2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h6v-1H6V3h7a1 1 0 0 1 1 1v3h1V4a2 2 0 0 0-2-2zm2 1H3a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h2z"
      fill="#CED0D6"
    />
  </svg>
);

export const ColumnFilter: FC<ColumnFilterProps> = ({
  size = 'md',
  mode = 'light',
  className,
  'aria-label': ariaLabel,
  title,
  ...props
}) => {
  const SvgComponent = mode === 'light' ? ColumnFilterLight : ColumnFilterDark;

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
