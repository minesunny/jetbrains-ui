import type { FC } from 'react';
import { cn } from '@/lib/utils';
import { type IconProps, type SvgProps, sizeMap } from '../types';

export type ProjectionProps = IconProps;

const ProjectionLight: FC<SvgProps> = ({
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
      d="M3 2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h5v-1H6V6h4v2h1V6h3v2h1V4a2 2 0 0 0-2-2zm7 1H6v2h4zM3 3h2v2H2V4a1 1 0 0 1 1-1m-1 9V6h3v7H3a1 1 0 0 1-1-1m12-8v1h-3V3h2a1 1 0 0 1 1 1"
      fill="#6C707E"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M9 9h1v1H9zm3 1h-1V9h1zm2 0h-1V9h1zm1 0V9h1v1zm-5 1v1H9v-1zm5 1v-1h1v1zm-5 1v1H9v-1zm5 1v-1h1v1zm-6 1h1v1H9zm2 0h1v1h-1zm2 0h1v1h-1zm2 0h1v1h-1z"
      fill="#3574F0"
    />
  </svg>
);

const ProjectionDark: FC<SvgProps> = ({
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
      d="M3 2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h5v-1H6V6h4v2h1V6h3v2h1V4a2 2 0 0 0-2-2zm7 1H6v2h4zM3 3h2v2H2V4a1 1 0 0 1 1-1m-1 9V6h3v7H3a1 1 0 0 1-1-1m12-8v1h-3V3h2a1 1 0 0 1 1 1"
      fill="#CED0D6"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M9 9h1v1H9zm3 1h-1V9h1zm2 0h-1V9h1zm1 0V9h1v1zm-5 1v1H9v-1zm5 1v-1h1v1zm-5 1v1H9v-1zm5 1v-1h1v1zm-6 1h1v1H9zm2 0h1v1h-1zm2 0h1v1h-1zm2 0h1v1h-1z"
      fill="#548AF7"
    />
  </svg>
);

export const Projection: FC<ProjectionProps> = ({
  size = 'md',
  mode = 'light',
  className,
  'aria-label': ariaLabel,
  title,
  ...props
}) => {
  const SvgComponent = mode === 'light' ? ProjectionLight : ProjectionDark;

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
