import type { FC } from 'react';
import { cn } from '@/lib/utils';
import { type IconProps, type SvgProps, sizeMap } from '../types';

export type TableMappingProps = IconProps;

const TableMappingLight: FC<SvgProps> = ({
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
      d="M11.562 10.148a.5.5 0 1 1-.707-.708l.677-.677a2.615 2.615 0 0 1 3.699.006 2.615 2.615 0 0 1 .006 3.699l-.677.677a.5.5 0 1 1-.708-.707l.678-.677a1.615 1.615 0 0 0-.006-2.285 1.615 1.615 0 0 0-2.285-.006zM10.148 10.855a.5.5 0 0 1 0 .707l-.678.677a1.615 1.615 0 0 0 .006 2.285 1.615 1.615 0 0 0 2.285.006l.677-.678a.5.5 0 0 1 .707.707l-.677.678a2.615 2.615 0 0 1-3.699-.006 2.615 2.615 0 0 1-.006-3.699l.677-.677a.5.5 0 0 1 .708 0"
      fill="#3574F0"
    />
    <path
      d="M13.854 10.854a.5.5 0 0 0-.708-.708l-3 3a.5.5 0 0 0 .708.708z"
      fill="#3574F0"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M3 2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h4.054a3.6 3.6 0 0 1-.035-1H6V6h4v2.905q.066-.09.148-.172l.677-.677A4 4 0 0 1 11 7.892V6h3v1.054c.344.06.681.17 1 .33V4a2 2 0 0 0-2-2zm7 1H6v2h4zM3 3h2v2H2V4a1 1 0 0 1 1-1m-1 9V6h3v7H3a1 1 0 0 1-1-1m12-8v1h-3V3h2a1 1 0 0 1 1 1"
      fill="#6C707E"
    />
  </svg>
);

const TableMappingDark: FC<SvgProps> = ({
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
      d="M11.562 10.148a.5.5 0 1 1-.707-.708l.677-.677a2.615 2.615 0 0 1 3.699.006 2.615 2.615 0 0 1 .006 3.699l-.677.677a.5.5 0 1 1-.708-.707l.678-.677a1.615 1.615 0 0 0-.006-2.285 1.615 1.615 0 0 0-2.285-.006zM10.148 10.855a.5.5 0 0 1 0 .707l-.678.677a1.615 1.615 0 0 0 .006 2.285 1.615 1.615 0 0 0 2.285.006l.677-.678a.5.5 0 0 1 .707.707l-.677.678a2.615 2.615 0 0 1-3.699-.006 2.615 2.615 0 0 1-.006-3.699l.677-.677a.5.5 0 0 1 .708 0"
      fill="#548AF7"
    />
    <path
      d="M13.854 10.854a.5.5 0 0 0-.708-.708l-3 3a.5.5 0 0 0 .708.708z"
      fill="#548AF7"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M3 2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h4.054a3.6 3.6 0 0 1-.035-1H6V6h4v2.905q.066-.09.148-.172l.677-.677A4 4 0 0 1 11 7.892V6h3v1.054c.344.06.681.17 1 .33V4a2 2 0 0 0-2-2zm7 1H6v2h4zM3 3h2v2H2V4a1 1 0 0 1 1-1m-1 9V6h3v7H3a1 1 0 0 1-1-1m12-8v1h-3V3h2a1 1 0 0 1 1 1"
      fill="#CED0D6"
    />
  </svg>
);

export const TableMapping: FC<TableMappingProps> = ({
  size = 'md',
  mode = 'light',
  className,
  'aria-label': ariaLabel,
  title,
  ...props
}) => {
  const SvgComponent = mode === 'light' ? TableMappingLight : TableMappingDark;

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
