/**
 * Copyright 2000-2024 JetBrains s.r.o. and contributors.
 * Use of this source code is governed by the Apache 2.0 license.
 */
import type { ComponentProps, FC } from 'react';
import { cn } from '@/lib/utils';

export type FilterdupsProps = Omit<ComponentProps<'svg'>, 'size'> & {
  size?: 12 | 14 | 16 | 20 | 24;
  mode?: 'light' | 'dark';
};

const FilterdupsLight: FC<
  Omit<ComponentProps<'svg'>, 'size'> & { size: number }
> = ({
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
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M4.646 7.854a.5.5 0 1 1 .708-.708L7.5 9.293V2.5a.5.5 0 0 1 1 0v6.793l2.146-2.147a.5.5 0 0 1 .708.708l-3 3-.354.353-.354-.353z"
      fill="#6C707E"
    />
    <rect x={1} y={2} width={5} height={1} rx={0.5} fill="#6C707E" />
    <rect x={10} y={2} width={5} height={1} rx={0.5} fill="#6C707E" />
    <rect x={1} y={4} width={5} height={1} rx={0.5} fill="#6C707E" />
    <rect x={1} y={13} width={14} height={1} rx={0.5} fill="#6C707E" />
    <rect x={10} y={4} width={5} height={1} rx={0.5} fill="#6C707E" />
  </svg>
);

const FilterdupsDark: FC<
  Omit<ComponentProps<'svg'>, 'size'> & { size: number }
> = ({
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
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M4.646 7.854a.5.5 0 1 1 .708-.708L7.5 9.293V2.5a.5.5 0 0 1 1 0v6.793l2.146-2.147a.5.5 0 0 1 .708.708l-3 3-.354.353-.354-.353z"
      fill="#CED0D6"
    />
    <rect x={1} y={2} width={5} height={1} rx={0.5} fill="#CED0D6" />
    <rect x={10} y={2} width={5} height={1} rx={0.5} fill="#CED0D6" />
    <rect x={1} y={4} width={5} height={1} rx={0.5} fill="#CED0D6" />
    <rect x={1} y={13} width={14} height={1} rx={0.5} fill="#CED0D6" />
    <rect x={10} y={4} width={5} height={1} rx={0.5} fill="#CED0D6" />
  </svg>
);

export const Filterdups: FC<FilterdupsProps> = ({
  size = 16,
  mode = 'light',
  className,
  'aria-label': ariaLabel,
  ...props
}) => {
  const SvgComponent = mode === 'light' ? FilterdupsLight : FilterdupsDark;

  return (
    <SvgComponent
      size={size}
      className={cn('inline-block shrink-0', className)}
      role={ariaLabel ? 'img' : 'presentation'}
      aria-label={ariaLabel}
      aria-hidden={!ariaLabel}
      {...props}
    />
  );
};

export default Filterdups;
