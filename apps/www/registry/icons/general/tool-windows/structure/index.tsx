import type { FC } from 'react';
import { cn } from '@/lib/utils';
import { type SvgProps, sizeMap } from '../../types';

export type StructureProps = SvgProps;

const StructureLight: FC<SvgProps> = ({
  size,
  className,
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
    <rect x="8.5" y="8.5" width="5" height="5" rx=".5" stroke="#6C707E" />
    <rect x="1.5" y="8.5" width="5" height="5" rx=".5" stroke="#6C707E" />
    <rect x="1.5" y="1.5" width="5" height="5" rx=".5" stroke="#6C707E" />
  </svg>
);

const StructureDark: FC<SvgProps> = ({
  size,
  className,
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
    <rect x="8.5" y="8.5" width="5" height="5" rx=".5" stroke="#CED0D6" />
    <rect x="1.5" y="8.5" width="5" height="5" rx=".5" stroke="#CED0D6" />
    <rect x="1.5" y="1.5" width="5" height="5" rx=".5" stroke="#CED0D6" />
  </svg>
);

export const Structure: FC<StructureProps> = ({
  size = 'md',
  mode = 'light',
  className,
  'aria-label': ariaLabel,
  ...props
}) => {
  const SvgComponent = mode === 'light' ? StructureLight : StructureDark;

  return (
    <SvgComponent
      size={sizeMap[size]}
      className={cn('inline-block flex-shrink-0', className)}
      role={ariaLabel ? 'img' : 'presentation'}
      aria-label={ariaLabel}
      aria-hidden={!ariaLabel}
      {...props}
    />
  );
};
