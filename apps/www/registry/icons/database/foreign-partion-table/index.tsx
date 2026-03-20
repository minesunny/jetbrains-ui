import type { FC } from 'react';
import { cn } from '@/lib/utils';
import { type IconProps, type SvgProps, sizeMap } from '../types';

export type ForeignPartionTableProps = IconProps;

const ForeignPartionTableLight: FC<SvgProps> = ({
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
      d="M10 6H6v2H5V6H2v2H1V4a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v4h-1V6h-3v2h-1zM5 3H3a1 1 0 0 0-1 1v1h3zm1 2h4V3H6zm5 0h3V4a1 1 0 0 0-1-1h-2z"
      fill="#6C707E"
    />
    <path
      d="M5 9h1v4h1v1H3a2 2 0 0 1-2-2V9h1v3a1 1 0 0 0 1 1h2z"
      fill="#3574F0"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M11 10.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-1 0v-2.793l-4.146 4.147a.5.5 0 0 1-.708-.708L14.293 11H11.5a.5.5 0 0 1-.5-.5M3 2a2 2 0 0 0-2 2v4h1V6h3v2h1V6h4v2h1V6h3v2h1V4a2 2 0 0 0-2-2zm7 1H6v2h4zM3 3h2v2H2V4a1 1 0 0 1 1-1m11 1v1h-3V3h2a1 1 0 0 1 1 1"
      fill="#6C707E"
    />
    <path
      d="M11 9h-1v4H6V9H5v4H3a1 1 0 0 1-1-1V9H1v3a2 2 0 0 0 2 2h6.879L11 12.879v-.964a1.5 1.5 0 0 1 0-2.83z"
      fill="#3574F0"
    />
  </svg>
);

const ForeignPartionTableDark: FC<SvgProps> = ({
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
      d="M10 6H6v2H5V6H2v2H1V4a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v4h-1V6h-3v2h-1zM5 3H3a1 1 0 0 0-1 1v1h3zm1 2h4V3H6zm5 0h3V4a1 1 0 0 0-1-1h-2z"
      fill="#CED0D6"
    />
    <path
      d="M5 9h1v4h1v1H3a2 2 0 0 1-2-2V9h1v3a1 1 0 0 0 1 1h2z"
      fill="#548AF7"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M11 10.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-1 0v-2.793l-4.146 4.147a.5.5 0 0 1-.708-.708L14.293 11H11.5a.5.5 0 0 1-.5-.5M3 2a2 2 0 0 0-2 2v4h1V6h3v2h1V6h4v2h1V6h3v2h1V4a2 2 0 0 0-2-2zm7 1H6v2h4zM3 3h2v2H2V4a1 1 0 0 1 1-1m11 1v1h-3V3h2a1 1 0 0 1 1 1"
      fill="#CED0D6"
    />
    <path
      d="M11 9h-1v4H6V9H5v4H3a1 1 0 0 1-1-1V9H1v3a2 2 0 0 0 2 2h6.879L11 12.879v-.964a1.5 1.5 0 0 1 0-2.83z"
      fill="#548AF7"
    />
  </svg>
);

export const ForeignPartionTable: FC<ForeignPartionTableProps> = ({
  size = 'md',
  mode = 'light',
  className,
  'aria-label': ariaLabel,
  title,
  ...props
}) => {
  const SvgComponent =
    mode === 'light' ? ForeignPartionTableLight : ForeignPartionTableDark;

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
