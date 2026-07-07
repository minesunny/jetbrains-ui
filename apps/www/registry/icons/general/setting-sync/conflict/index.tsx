/**
 * Copyright 2000-2024 JetBrains s.r.o. and contributors.
 * Use of this source code is governed by the Apache 2.0 license.
 */
import type { ComponentProps, FC } from 'react';
import { cn } from '@/lib/utils';

export type ConflictProps = Omit<ComponentProps<'svg'>, 'size'> & {
  size?: 12 | 14 | 16 | 20 | 24;
  mode?: 'light' | 'dark';
};

const ConflictLight: FC<
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
    <circle cx={7.5} cy={7.5} r={7.5} fill="#F7F8FA" />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M10.846 10.102a.526.526 0 1 1-.744.744L7.5 8.244l-2.602 2.602a.526.526 0 0 1-.744-.744L6.756 7.5 4.154 4.897a.526.526 0 0 1 .744-.743L7.5 6.756l2.602-2.602a.526.526 0 0 1 .744.743L8.244 7.5z"
      fill="#6C707E"
    />
  </svg>
);

const ConflictDark: FC<
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
    <circle cx={7.5} cy={7.5} r={7.5} fill="#2B2D30" />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M10.846 10.102a.526.526 0 1 1-.744.744L7.5 8.244l-2.602 2.602a.526.526 0 0 1-.744-.744L6.756 7.5 4.154 4.897a.526.526 0 0 1 .744-.743L7.5 6.756l2.602-2.602a.526.526 0 0 1 .744.743L8.244 7.5z"
      fill="#6F737A"
    />
  </svg>
);

export const Conflict: FC<ConflictProps> = ({
  size = 16,
  mode = 'light',
  className,
  'aria-label': ariaLabel,
  ...props
}) => {
  const SvgComponent = mode === 'light' ? ConflictLight : ConflictDark;

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

export default Conflict;
