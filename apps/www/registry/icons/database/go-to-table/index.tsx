import type { FC } from 'react';
import { cn } from '@/lib/utils';
import { type IconProps, type SvgProps, sizeMap } from '../types';

export type GoToTableProps = IconProps;

const GoToTableLight: FC<SvgProps> = ({
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
      d="M1 4a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v6.05a3.5 3.5 0 0 0-1-.713V6h-3v3.337c-.375.178-.713.42-1 .713V6H6v7h2v1H3a2 2 0 0 1-2-2zm5-1h4v2H6zM5 3H3a1 1 0 0 0-1 1v1h3zM2 6v6a1 1 0 0 0 1 1h2V6zm12-1V4a1 1 0 0 0-1-1h-2v2z"
      fill="#6C707E"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M13 9.5a.5.5 0 0 0-1 0v.55c-.98.199-1.751.97-1.95 1.95H9.5a.5.5 0 0 0 0 1h.55c.199.98.97 1.751 1.95 1.95v.55a.5.5 0 0 0 1 0v-.55A2.5 2.5 0 0 0 14.95 13h.55a.5.5 0 0 0 0-1h-.55A2.5 2.5 0 0 0 13 10.05zm1 3a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0"
      fill="#3574F0"
    />
  </svg>
);

const GoToTableDark: FC<SvgProps> = ({
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
      d="M1 4a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v6.05a3.5 3.5 0 0 0-1-.713V6h-3v3.337c-.375.178-.713.42-1 .713V6H6v7h2v1H3a2 2 0 0 1-2-2zm5-1h4v2H6zM5 3H3a1 1 0 0 0-1 1v1h3zM2 6v6a1 1 0 0 0 1 1h2V6zm12-1V4a1 1 0 0 0-1-1h-2v2z"
      fill="#CED0D6"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M13 9.5a.5.5 0 0 0-1 0v.55c-.98.199-1.751.97-1.95 1.95H9.5a.5.5 0 0 0 0 1h.55c.199.98.97 1.751 1.95 1.95v.55a.5.5 0 0 0 1 0v-.55A2.5 2.5 0 0 0 14.95 13h.55a.5.5 0 0 0 0-1h-.55A2.5 2.5 0 0 0 13 10.05zm1 3a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0"
      fill="#548AF7"
    />
  </svg>
);

export const GoToTable: FC<GoToTableProps> = ({
  size = 'md',
  mode = 'light',
  className,
  'aria-label': ariaLabel,
  title,
  ...props
}) => {
  const SvgComponent = mode === 'light' ? GoToTableLight : GoToTableDark;

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
