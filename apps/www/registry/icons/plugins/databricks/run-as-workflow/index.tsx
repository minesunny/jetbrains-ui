import React from 'react';
import { cn } from '@/lib/utils';
import { type IconProps, type SvgProps, sizeMap } from '../../types';

export type RunAsWorkflowProps = IconProps;

const RunAsWorkflowLight: React.FC<SvgProps> = ({
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
    <g clipPath="url(#a)">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9 9.502a1.5 1.5 0 0 1 2.294-1.272l4.002 2.497a1.5 1.5 0 0 1 0 2.546l-4.002 2.497A1.5 1.5 0 0 1 9 14.498zm1.765-.424a.5.5 0 0 0-.765.424v4.996a.5.5 0 0 0 .765.424l4.002-2.498a.5.5 0 0 0 0-.848z"
        fill="#208A3C"
      />
      <path
        d="M10 9.502a.5.5 0 0 1 .765-.424l4.002 2.498a.5.5 0 0 1 0 .848l-4.002 2.498a.5.5 0 0 1-.765-.424z"
        fill="#F2FCF3"
      />
      <path
        d="M7.79.046a.5.5 0 0 1 .42 0l3.5 1.615a.5.5 0 1 1-.42.908L8 1.051 2.693 3.5 8 5.95l6.29-2.904A.5.5 0 0 1 15 3.5v3a.5.5 0 0 1-.29.454l-2.053.947-.833-.52a3 3 0 0 0-.191-.108L14 6.18V4.281L8.21 6.954a.5.5 0 0 1-.42 0l-6.5-3a.5.5 0 0 1 0-.908zM7.79 9.954A.5.5 0 0 0 8 10V8.95L1.71 6.045A.5.5 0 0 0 1 6.5v3a.5.5 0 0 0 .29.454l6.5 3A.5.5 0 0 0 8 13v-1.05L2 9.18V7.281zM8 14.95l-6.29-2.904a.5.5 0 1 0-.42.908l6.5 3A.5.5 0 0 0 8 16z"
        fill="#DB3B4B"
      />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M0 0H16V16H0z" />
      </clipPath>
    </defs>
  </svg>
);

const RunAsWorkflowDark: React.FC<SvgProps> = ({
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
    <g clipPath="url(#a)">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9 9.502a1.5 1.5 0 0 1 2.294-1.272l4.002 2.497a1.5 1.5 0 0 1 0 2.546l-4.002 2.497A1.5 1.5 0 0 1 9 14.498zm1.765-.424a.5.5 0 0 0-.765.424v4.996a.5.5 0 0 0 .765.424l4.002-2.498a.5.5 0 0 0 0-.848z"
        fill="#57965C"
      />
      <path
        d="M10 9.502a.5.5 0 0 1 .765-.424l4.002 2.498a.5.5 0 0 1 0 .848l-4.002 2.498a.5.5 0 0 1-.765-.424z"
        fill="#253627"
      />
      <path
        d="M7.79.046a.5.5 0 0 1 .42 0l3.5 1.615a.5.5 0 1 1-.42.908L8 1.051 2.693 3.5 8 5.95l6.29-2.904A.5.5 0 0 1 15 3.5v3a.5.5 0 0 1-.29.454l-2.053.947-.833-.52a3 3 0 0 0-.191-.108L14 6.18V4.281L8.21 6.954a.5.5 0 0 1-.42 0l-6.5-3a.5.5 0 0 1 0-.908zM7.79 9.954A.5.5 0 0 0 8 10V8.95L1.71 6.045A.5.5 0 0 0 1 6.5v3a.5.5 0 0 0 .29.454l6.5 3A.5.5 0 0 0 8 13v-1.05L2 9.18V7.281zM8 14.95l-6.29-2.904a.5.5 0 1 0-.42.908l6.5 3A.5.5 0 0 0 8 16z"
        fill="#DB5C5C"
      />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M0 0H16V16H0z" />
      </clipPath>
    </defs>
  </svg>
);

export const RunAsWorkflow: React.FC<RunAsWorkflowProps> = ({
  size = 'md',
  mode = 'light',
  className,
  'aria-label': ariaLabel,
  title,
  ...props
}) => {
  const SvgComponent =
    mode === 'light' ? RunAsWorkflowLight : RunAsWorkflowDark;

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
