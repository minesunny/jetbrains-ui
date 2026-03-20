import React from 'react';
import { cn } from '@/lib/utils';
import { type IconProps, type SvgProps, sizeMap } from '../../types';

export type DeploymentsProps = IconProps;

const DeploymentsLight: React.FC<SvgProps> = ({
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
    {title && <title>{title}</title>}
    <path
      d="m9.5 10.5 3 3m0 0V11m0 2.5H10M9.5 7.5h6m0 0-2 2m2-2-2-2M9.5 4.5l3-3m0 0V4m0-2.5H10"
      stroke="#369650"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M8 1.093C6.162.772 4.302 1.267 2.769 2.8c-2.834 2.834-2.02 6.936.72 9.675 1.296 1.297 2.887 2.18 4.511 2.443z"
      fill="#FFF4EB"
    />
    <path
      d="M8 1.093C6.162.772 4.302 1.267 2.769 2.8c-2.834 2.834-2.02 6.936.72 9.675 1.296 1.297 2.887 2.18 4.511 2.443V13.9c-1.329-.255-2.672-1.003-3.802-2.133-1.236-1.235-2-2.743-2.163-4.205-.144-1.29.174-2.574 1.104-3.684L8 8.739V7.322L3.846 3.17c1.115-.943 2.372-1.273 3.63-1.138q.261.027.524.082z"
      fill="#E66D17"
    />
  </svg>
);

const DeploymentsDark: React.FC<SvgProps> = ({
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
    {title && <title>{title}</title>}
    <path
      d="m9.5 10.5 3 3m0 0V11m0 2.5H10M9.5 7.5h6m0 0-2 2m2-2-2-2M9.5 4.5l3-3m0 0V4m0-2.5H10"
      stroke="#57965C"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M8 1.093C6.162.772 4.302 1.267 2.769 2.8c-2.834 2.834-2.02 6.936.72 9.675 1.296 1.297 2.887 2.18 4.511 2.443z"
      fill="#45322B"
    />
    <path
      d="M8 1.093C6.162.772 4.302 1.267 2.769 2.8c-2.834 2.834-2.02 6.936.72 9.675 1.296 1.297 2.887 2.18 4.511 2.443V13.9c-1.329-.255-2.672-1.003-3.802-2.133-1.236-1.235-2-2.743-2.163-4.205-.144-1.29.174-2.574 1.104-3.684L8 8.739V7.322L3.846 3.17c1.115-.943 2.372-1.273 3.63-1.138q.261.027.524.082z"
      fill="#C77D55"
    />
  </svg>
);

export const Deployments: React.FC<DeploymentsProps> = ({
  size = 'md',
  mode = 'light',
  className,
  'aria-label': ariaLabel,
  title,
  ...props
}) => {
  const SvgComponent = mode === 'light' ? DeploymentsLight : DeploymentsDark;

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
