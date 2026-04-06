import type { FC } from 'react';
import { cn } from '@/lib/utils';
import { type SvgProps, sizeMap } from '../types';

export type ArchiveProps = SvgProps;

const ArchiveLight: FC<SvgProps> = ({
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
    <rect
      x={2.5}
      y={2.5}
      width={11}
      height={11}
      rx={1.5}
      fill="#EDF3FF"
      stroke="#3574F0"
    />
    <rect x={6} y={4} width={2} height={2} rx={0.5} fill="#3574F0" />
    <rect x={6} y={8} width={2} height={2} rx={0.5} fill="#3574F0" />
    <rect x={8} y={10} width={2} height={2} rx={0.5} fill="#3574F0" />
    <rect x={8} y={6} width={2} height={2} rx={0.5} fill="#3574F0" />
  </svg>
);

const ArchiveDark: FC<SvgProps> = ({
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
    <rect
      x={2.5}
      y={2.5}
      width={11}
      height={11}
      rx={1.5}
      fill="#25324D"
      stroke="#548AF7"
    />
    <rect x={6} y={4} width={2} height={2} rx={0.5} fill="#548AF7" />
    <rect x={6} y={8} width={2} height={2} rx={0.5} fill="#548AF7" />
    <rect x={8} y={10} width={2} height={2} rx={0.5} fill="#548AF7" />
    <rect x={8} y={6} width={2} height={2} rx={0.5} fill="#548AF7" />
  </svg>
);

export const Archive: FC<ArchiveProps> = ({
  size = 'md',
  mode = 'light',
  className,
  'aria-label': ariaLabel,
  ...props
}) => {
  const SvgComponent = mode === 'light' ? ArchiveLight : ArchiveDark;

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
