import React from 'react';
import { cn } from '@/lib/utils';
import { type IconProps, type SvgProps, sizeMap } from '../../types';

export type SwiftPackageRunProps = IconProps;

const SwiftPackageRunLight: React.FC<SvgProps> = ({
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
      fillRule="evenodd"
      clipRule="evenodd"
      d="M7.79 1.046a.5.5 0 0 1 .42 0l6.5 3A.5.5 0 0 1 15 4.5v4.866l-1-.625v-3.46L8.5 7.82v7l-.292.134a.5.5 0 0 1-.416 0l-6.5-2.98A.5.5 0 0 1 1 11.52V4.5a.5.5 0 0 1 .29-.454zM8 2.051 2.693 4.5 8 6.95l5.307-2.45zm-.5 11.67V7.82L2 5.28V11.2z"
      fill="#E66D17"
    />
    <path
      d="M10.247 7.014a2.47 2.47 0 0 1 1.577.37l2.676 1.67-.5-.313v-3.46zM2.693 4.5 8 2.05l5.307 2.45L8 6.95zM7.5 7.82v5.9L2 11.2V5.28z"
      fill="#FFF4EB"
    />
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
  </svg>
);

const SwiftPackageRunDark: React.FC<SvgProps> = ({
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
      fillRule="evenodd"
      clipRule="evenodd"
      d="M7.79 1.046a.5.5 0 0 1 .42 0l6.5 3A.5.5 0 0 1 15 4.5v4.866l-1-.625v-3.46L8.5 7.82v7l-.292.134a.5.5 0 0 1-.416 0l-6.5-2.98A.5.5 0 0 1 1 11.52V4.5a.5.5 0 0 1 .29-.454zM8 2.051 2.693 4.5 8 6.95l5.307-2.45zm-.5 11.67V7.82L2 5.28V11.2z"
      fill="#C77D55"
    />
    <path
      d="M10.247 7.014a2.47 2.47 0 0 1 1.577.37l2.676 1.67-.5-.313v-3.46zM2.693 4.5 8 2.05l5.307 2.45L8 6.95zM7.5 7.82v5.9L2 11.2V5.28z"
      fill="#45322B"
    />
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
  </svg>
);

export const SwiftPackageRun: React.FC<SwiftPackageRunProps> = ({
  size = 'md',
  mode = 'light',
  className,
  'aria-label': ariaLabel,
  title,
  ...props
}) => {
  const SvgComponent =
    mode === 'light' ? SwiftPackageRunLight : SwiftPackageRunDark;

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
