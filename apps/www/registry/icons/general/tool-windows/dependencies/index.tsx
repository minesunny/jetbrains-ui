import type { FC } from 'react';
import { cn } from '@/lib/utils';
import { type IconProps, type SvgProps, sizeMap } from '../../types';

export type DependenciesProps = IconProps;

const DependenciesLight: FC<SvgProps> = ({
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
      d="M13.83 4.64a.5.5 0 0 1 0 .9L8.22 8.28a.5.5 0 0 1-.44 0L2.17 5.54a.5.5 0 0 1 0-.9l5.61-2.741a.5.5 0 0 1 .44 0z"
      stroke="#6C707E"
    />
    <path
      d="m14.276 8.317-5.84 2.836a1 1 0 0 1-.873 0L1.724 8.317M14.276 11.544l-5.84 2.836a1 1 0 0 1-.873 0l-5.839-2.836"
      stroke="#6C707E"
      strokeLinecap="round"
    />
  </svg>
);

const DependenciesDark: FC<SvgProps> = ({
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
      d="M13.83 4.64a.5.5 0 0 1 0 .9L8.22 8.28a.5.5 0 0 1-.44 0L2.17 5.54a.5.5 0 0 1 0-.9l5.61-2.741a.5.5 0 0 1 .44 0z"
      stroke="#CED0D6"
    />
    <path
      d="m14.276 8.317-5.84 2.836a1 1 0 0 1-.873 0L1.724 8.317M14.276 11.544l-5.84 2.836a1 1 0 0 1-.873 0l-5.839-2.836"
      stroke="#CED0D6"
      strokeLinecap="round"
    />
  </svg>
);

export const Dependencies: FC<DependenciesProps> = ({
  size = 'md',
  mode = 'light',
  className,
  'aria-label': ariaLabel,
  title,
  ...props
}) => {
  const SvgComponent = mode === 'light' ? DependenciesLight : DependenciesDark;

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
