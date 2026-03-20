import type { FC } from 'react';
import { cn } from '@/lib/utils';
import { type IconProps, type SvgProps, sizeMap } from '../types';

export type DatabricksProps = IconProps;

const DatabricksLight: FC<SvgProps> = ({
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
      d="M7.79.046a.5.5 0 0 1 .42 0l3.5 1.615a.5.5 0 1 1-.42.908L8 1.051 2.693 3.5 8 5.95l6.29-2.904A.5.5 0 0 1 15 3.5v3a.5.5 0 0 1-.29.454l-6.5 3a.5.5 0 0 1-.42 0L2 7.281v1.9l6 2.768 6.29-2.903A.5.5 0 0 1 15 9.5v3a.5.5 0 0 1-.29.454l-6.5 3a.5.5 0 0 1-.42 0l-6.5-3a.5.5 0 0 1 .42-.908L8 14.949l6-2.769v-1.899l-5.79 2.673a.5.5 0 0 1-.42 0l-6.5-3A.5.5 0 0 1 1 9.5v-3a.5.5 0 0 1 .71-.454L8 8.949l6-2.769V4.281L8.21 6.954a.5.5 0 0 1-.42 0l-6.5-3a.5.5 0 0 1 0-.908z"
      fill="#DB3B4B"
    />
  </svg>
);

const DatabricksDark: FC<SvgProps> = ({
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
      d="M7.79.046a.5.5 0 0 1 .42 0l3.5 1.615a.5.5 0 1 1-.42.908L8 1.051 2.693 3.5 8 5.95l6.29-2.904A.5.5 0 0 1 15 3.5v3a.5.5 0 0 1-.29.454l-6.5 3a.5.5 0 0 1-.42 0L2 7.281v1.9l6 2.768 6.29-2.903A.5.5 0 0 1 15 9.5v3a.5.5 0 0 1-.29.454l-6.5 3a.5.5 0 0 1-.42 0l-6.5-3a.5.5 0 0 1 .42-.908L8 14.949l6-2.769v-1.899l-5.79 2.673a.5.5 0 0 1-.42 0l-6.5-3A.5.5 0 0 1 1 9.5v-3a.5.5 0 0 1 .71-.454L8 8.949l6-2.769V4.281L8.21 6.954a.5.5 0 0 1-.42 0l-6.5-3a.5.5 0 0 1 0-.908z"
      fill="#DB5C5C"
    />
  </svg>
);

export const Databricks: FC<DatabricksProps> = ({
  size = 'md',
  mode = 'light',
  className,
  'aria-label': ariaLabel,
  title,
  ...props
}) => {
  const SvgComponent = mode === 'light' ? DatabricksLight : DatabricksDark;

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
