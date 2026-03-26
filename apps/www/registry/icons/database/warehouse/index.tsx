import type { FC } from 'react';
import { cn } from '@/lib/utils';
import { type IconProps, type SvgProps, sizeMap } from '../types';

export type WarehouseProps = IconProps;

const WarehouseLight: FC<SvgProps> = ({
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
      d="M8.268 1.078a.5.5 0 0 0-.536 0l-5.5 3.5A.5.5 0 0 0 2 5v9h1V5.274l5-3.181 5 3.181V14h1V5a.5.5 0 0 0-.232-.422zM7 8V6h2v2zm0 3V9h2v2zm-1 1H4v2h2zm1 2v-2h2v2zm3-2h2v2h-2zM6 9H4v2h2z"
      fill="#6C707E"
    />
  </svg>
);

const WarehouseDark: FC<SvgProps> = ({
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
      d="M8.268 1.078a.5.5 0 0 0-.536 0l-5.5 3.5A.5.5 0 0 0 2 5v9h1V5.274l5-3.181 5 3.181V14h1V5a.5.5 0 0 0-.232-.422zM7 8V6h2v2zm0 3V9h2v2zm-1 1H4v2h2zm1 2v-2h2v2zm3-2h2v2h-2zM6 9H4v2h2z"
      fill="#CED0D6"
    />
  </svg>
);

export const Warehouse: FC<WarehouseProps> = ({
  size = 'md',
  mode = 'light',
  className,
  'aria-label': ariaLabel,
  title,
  ...props
}) => {
  const SvgComponent = mode === 'light' ? WarehouseLight : WarehouseDark;

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
