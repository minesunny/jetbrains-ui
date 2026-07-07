/**
 * Copyright 2000-2024 JetBrains s.r.o. and contributors.
 * Use of this source code is governed by the Apache 2.0 license.
 */
import type { ComponentProps, FC } from 'react';
import { cn } from '@/lib/utils';

export type RunToCursorProps = Omit<ComponentProps<'svg'>, 'size'> & {
  size?: 12 | 14 | 16 | 20 | 24;
  mode?: 'light' | 'dark';
};

const RunToCursorLight: FC<
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
      d="M3.261 9.004a.5.5 0 1 1 0-1h3.036L1.635 3.342a.5.5 0 1 1 .707-.707l4.662 4.662V4.26a.5.5 0 1 1 1 0v4.743H3.261"
      fill="#6C707E"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M1.146 2.146a.5.5 0 0 1 .708 0L7 7.293V3.5a.5.5 0 0 1 1 0V9H2.5a.5.5 0 0 1 0-1h3.793L1.146 2.854a.5.5 0 0 1 0-.708"
      fill="#6C707E"
    />
    <rect x={13} y={14} width={2} height={1} rx={0.5} fill="#3574F0" />
    <rect x={10} y={14} width={2} height={1} rx={0.5} fill="#3574F0" />
    <rect x={13} y={7} width={2} height={1} rx={0.5} fill="#3574F0" />
    <rect x={10} y={7} width={2} height={1} rx={0.5} fill="#3574F0" />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12 8.5a.5.5 0 0 1 1 0v5a.5.5 0 0 1-1 0z"
      fill="#3574F0"
    />
  </svg>
);

const RunToCursorDark: FC<
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
      d="M3.261 9.004a.5.5 0 1 1 0-1h3.036L1.635 3.342a.5.5 0 1 1 .707-.707l4.662 4.662V4.26a.5.5 0 1 1 1 0v4.743H3.261"
      fill="#CED0D6"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M1.146 2.146a.5.5 0 0 1 .708 0L7 7.293V3.5a.5.5 0 0 1 1 0V9H2.5a.5.5 0 0 1 0-1h3.793L1.146 2.854a.5.5 0 0 1 0-.708"
      fill="#CED0D6"
    />
    <rect x={13} y={14} width={2} height={1} rx={0.5} fill="#548AF7" />
    <rect x={10} y={14} width={2} height={1} rx={0.5} fill="#548AF7" />
    <rect x={13} y={7} width={2} height={1} rx={0.5} fill="#548AF7" />
    <rect x={10} y={7} width={2} height={1} rx={0.5} fill="#548AF7" />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12 8.5a.5.5 0 0 1 1 0v5a.5.5 0 0 1-1 0z"
      fill="#548AF7"
    />
  </svg>
);

export const RunToCursor: FC<RunToCursorProps> = ({
  size = 16,
  mode = 'light',
  className,
  'aria-label': ariaLabel,
  ...props
}) => {
  const SvgComponent = mode === 'light' ? RunToCursorLight : RunToCursorDark;

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

export default RunToCursor;
