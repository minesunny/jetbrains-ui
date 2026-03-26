import type { FC } from 'react';
import { cn } from '@/lib/utils';
import { type IconProps, type SvgProps, sizeMap } from '../types';

export type ElasticsearchProps = IconProps;

const ElasticsearchLight: FC<SvgProps> = ({
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
      d="M15 8.333a2.77 2.77 0 0 0-1.817-2.605 4 4 0 0 0 .068-.758A3.964 3.964 0 0 0 9.297 1a3.92 3.92 0 0 0-3.2 1.652 2.06 2.06 0 0 0-1.28-.436 2.11 2.11 0 0 0-2.103 2.112c0 .252.046.505.126.734A2.76 2.76 0 0 0 1 7.667c0 1.182.731 2.215 1.829 2.617a4 4 0 0 0-.069.757C2.76 13.221 4.531 15 6.703 15c1.28 0 2.457-.62 3.2-1.652a2.1 2.1 0 0 0 1.291.447 2.11 2.11 0 0 0 2.103-2.111c0-.253-.046-.505-.126-.735A2.81 2.81 0 0 0 15 8.333"
      fill="#fff"
    />
    <path
      d="m6.474 7.013 3.12 1.435 3.154-2.778a3.529 3.529 0 0 0-3.451-4.234 3.5 3.5 0 0 0-2.903 1.538l-.526 2.73z"
      fill="#F4BD19"
    />
    <path
      d="M3.24 10.33c-.045.229-.068.47-.068.711 0 1.95 1.588 3.546 3.531 3.546a3.55 3.55 0 0 0 2.926-1.55l.514-2.73-.697-1.332-3.131-1.434z"
      fill="#3CBEB1"
    />
    <path
      d="m3.217 4.902 2.137.504.48-2.444a1.698 1.698 0 0 0-2.617 1.94"
      fill="#E9478C"
    />
    <path
      d="M3.034 5.418c-.96.31-1.623 1.24-1.623 2.25 0 .986.606 1.87 1.52 2.214L5.937 7.15l-.549-1.182z"
      fill="#2C458F"
    />
    <path
      d="M10.177 13.026c.297.23.651.356 1.017.356a1.698 1.698 0 0 0 1.588-2.284l-2.137-.505z"
      fill="#95C63D"
    />
    <path
      d="m10.611 10.031 2.354.55a2.39 2.39 0 0 0 1.623-2.248c0-.987-.606-1.86-1.52-2.215L9.982 8.826z"
      fill="#176655"
    />
  </svg>
);

const ElasticsearchDark: FC<SvgProps> = ({
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
      d="M15 8.333a2.77 2.77 0 0 0-1.817-2.605 4 4 0 0 0 .068-.758A3.964 3.964 0 0 0 9.297 1a3.92 3.92 0 0 0-3.2 1.652 2.06 2.06 0 0 0-1.28-.436 2.11 2.11 0 0 0-2.103 2.112c0 .252.046.505.126.734A2.76 2.76 0 0 0 1 7.667c0 1.182.731 2.215 1.829 2.617a4 4 0 0 0-.069.757C2.76 13.221 4.531 15 6.703 15c1.28 0 2.457-.62 3.2-1.652a2.1 2.1 0 0 0 1.291.447 2.11 2.11 0 0 0 2.103-2.111c0-.253-.046-.505-.126-.735A2.81 2.81 0 0 0 15 8.333"
      fill="#6F737A"
    />
    <path
      d="m6.474 7.013 3.12 1.435 3.154-2.778a3.529 3.529 0 0 0-3.451-4.234 3.5 3.5 0 0 0-2.903 1.538l-.526 2.73z"
      fill="#F4BD19"
    />
    <path
      d="M3.24 10.33c-.045.229-.068.47-.068.711 0 1.95 1.588 3.546 3.531 3.546a3.55 3.55 0 0 0 2.926-1.55l.514-2.73-.697-1.332-3.131-1.434z"
      fill="#3CBEB1"
    />
    <path
      d="m3.217 4.902 2.137.504.48-2.444a1.698 1.698 0 0 0-2.617 1.94"
      fill="#E9478C"
    />
    <path
      d="M3.034 5.418c-.96.31-1.623 1.24-1.623 2.25 0 .986.606 1.87 1.52 2.214L5.937 7.15l-.549-1.182z"
      fill="#2C458F"
    />
    <path
      d="M10.177 13.026c.297.23.651.356 1.017.356a1.698 1.698 0 0 0 1.588-2.284l-2.137-.505z"
      fill="#95C63D"
    />
    <path
      d="m10.611 10.031 2.354.55a2.39 2.39 0 0 0 1.623-2.248c0-.987-.606-1.86-1.52-2.215L9.982 8.826z"
      fill="#176655"
    />
  </svg>
);

export const Elasticsearch: FC<ElasticsearchProps> = ({
  size = 'md',
  mode = 'light',
  className,
  'aria-label': ariaLabel,
  title,
  ...props
}) => {
  const SvgComponent =
    mode === 'light' ? ElasticsearchLight : ElasticsearchDark;

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
