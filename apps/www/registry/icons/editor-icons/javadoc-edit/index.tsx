import type { FC } from 'react';
import { cn } from '@/lib/utils';
import { type IconProps, type SvgProps, sizeMap } from '../types';

export type JavadocEditProps = IconProps;

const JavadocEditLight: FC<SvgProps> = ({
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
    viewBox="0 0 14 14"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    role={role}
    aria-label={ariaLabel}
    aria-hidden={ariaHidden}
  >
    {title ? <title>{title}</title> : null}
    <path
      d="m10.597 6.655 2.091-2.095a1.035 1.035 0 0 0 .007-1.474l-1.668-1.772-.005-.005a1.05 1.05 0 0 0-1.489.002L7.387 3.444m3.21 3.21-3.21-3.21m3.21 3.21L4.74 12.5H1.5V9.32l5.887-5.876"
      stroke="#6C707E"
      strokeMiterlimit="10"
    />
  </svg>
);

const JavadocEditDark: FC<SvgProps> = ({
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
    viewBox="0 0 14 14"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    role={role}
    aria-label={ariaLabel}
    aria-hidden={ariaHidden}
  >
    {title ? <title>{title}</title> : null}
    <path
      d="m10.597 6.655 2.091-2.095a1.035 1.035 0 0 0 .007-1.474l-1.668-1.772-.005-.005a1.05 1.05 0 0 0-1.489.002L7.387 3.444m3.21 3.21-3.21-3.21m3.21 3.21L4.74 12.5H1.5V9.32l5.887-5.876"
      stroke="#CED0D6"
      strokeMiterlimit="10"
    />
  </svg>
);

export const JavadocEdit: FC<JavadocEditProps> = ({
  size = 'md',
  mode = 'light',
  className,
  'aria-label': ariaLabel,
  title,
  ...props
}) => {
  const SvgComponent = mode === 'light' ? JavadocEditLight : JavadocEditDark;

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
