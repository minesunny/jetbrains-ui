import React from 'react';
import { cn } from '@/lib/utils';
import { type IconProps, type SvgProps, sizeMap } from '../../types';

export type IngressProps = IconProps;

const IngressLight: React.FC<SvgProps> = ({
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
      d="m12.293 11-1.646-1.647a.5.5 0 0 1 .707-.707l2.5 2.5a.5.5 0 0 1 0 .707l-2.5 2.5a.5.5 0 1 1-.707-.707L12.293 12H9.5a.5.5 0 0 1-.393-.191L3.757 5H2.5a.5.5 0 0 1 0-1H4a.5.5 0 0 1 .393.191L9.743 11z"
      fill="#6C707E"
    />
    <path
      d="M10.647 6.646 12.293 5h-2.55L8.022 7.19l-.636-.809 1.72-2.19A.5.5 0 0 1 9.5 4h2.793l-1.646-1.646a.5.5 0 0 1 .707-.708l2.5 2.5a.5.5 0 0 1 0 .708l-2.5 2.5a.5.5 0 1 1-.707-.708M5.478 8.81 3.757 11H2.5a.5.5 0 0 0 0 1H4a.5.5 0 0 0 .393-.191l1.721-2.19z"
      fill="#3574F0"
    />
  </svg>
);

const IngressDark: React.FC<SvgProps> = ({
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
      d="m12.293 11-1.646-1.647a.5.5 0 0 1 .707-.707l2.5 2.5a.5.5 0 0 1 0 .707l-2.5 2.5a.5.5 0 1 1-.707-.707L12.293 12H9.5a.5.5 0 0 1-.393-.191L3.757 5H2.5a.5.5 0 0 1 0-1H4a.5.5 0 0 1 .393.191L9.743 11z"
      fill="#CED0D6"
    />
    <path
      d="M10.647 6.646 12.293 5h-2.55L8.022 7.19l-.636-.809 1.72-2.19A.5.5 0 0 1 9.5 4h2.793l-1.646-1.646a.5.5 0 0 1 .707-.708l2.5 2.5a.5.5 0 0 1 0 .708l-2.5 2.5a.5.5 0 1 1-.707-.708M5.478 8.81 3.757 11H2.5a.5.5 0 0 0 0 1H4a.5.5 0 0 0 .393-.191l1.721-2.19z"
      fill="#548AF7"
    />
  </svg>
);

export const Ingress: React.FC<IngressProps> = ({
  size = 'md',
  mode = 'light',
  className,
  'aria-label': ariaLabel,
  title,
  ...props
}) => {
  const SvgComponent = mode === 'light' ? IngressLight : IngressDark;

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
