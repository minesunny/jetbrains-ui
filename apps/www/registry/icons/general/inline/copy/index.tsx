/**
 * Copyright 2000-2024 JetBrains s.r.o. and contributors.
 * Use of this source code is governed by the Apache 2.0 license.
 */
import type { ComponentProps, FC } from 'react';
import { cn } from '@/lib/utils';

export type CopyProps = Omit<ComponentProps<'svg'>, 'size'> & {
  size?: 12 | 14 | 16 | 20 | 24;
  mode?: 'light' | 'dark';
};

const CopyLight: FC<Omit<ComponentProps<'svg'>, 'size'> & { size: number }> = ({
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
    <rect x={2.5} y={3.5} width={9} height={10} rx={1.5} stroke="#A8ADBD" />
    <rect x={5} y={10} width={4} height={1} rx={0.5} fill="#A8ADBD" />
    <rect x={5} y={8} width={4} height={1} rx={0.5} fill="#A8ADBD" />
    <rect x={5} y={6} width={4} height={1} rx={0.5} fill="#A8ADBD" />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M11.002 2h.598A1.4 1.4 0 0 1 13 3.4v.51l.002.09v7.548A2.4 2.4 0 0 0 14 9.6V3.4A2.4 2.4 0 0 0 11.6 1H6.4c-.803 0-1.514.394-1.95 1h6.552"
      fill="#A8ADBD"
    />
  </svg>
);

const CopyDark: FC<Omit<ComponentProps<'svg'>, 'size'> & { size: number }> = ({
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
    <rect x={2.5} y={3.5} width={9} height={10} rx={1.5} stroke="#868A91" />
    <rect x={5} y={10} width={4} height={1} rx={0.5} fill="#868A91" />
    <rect x={5} y={8} width={4} height={1} rx={0.5} fill="#868A91" />
    <rect x={5} y={6} width={4} height={1} rx={0.5} fill="#868A91" />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M11.002 2h.598A1.4 1.4 0 0 1 13 3.4v.51l.002.09v7.548A2.4 2.4 0 0 0 14 9.6V3.4A2.4 2.4 0 0 0 11.6 1H6.4c-.803 0-1.514.394-1.95 1h6.552"
      fill="#868A91"
    />
  </svg>
);

export const Copy: FC<CopyProps> = ({
  size = 16,
  mode = 'light',
  className,
  'aria-label': ariaLabel,
  ...props
}) => {
  const SvgComponent = mode === 'light' ? CopyLight : CopyDark;

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

export default Copy;
