/**
 * Copyright 2000-2024 JetBrains s.r.o. and contributors.
 * Use of this source code is governed by the Apache 2.0 license.
 */
import type { ComponentProps, FC } from 'react';
import { cn } from '@/lib/utils';

export type RoutineProps = Omit<ComponentProps<'svg'>, 'size'> & {
  size?: 12 | 14 | 16 | 20 | 24;
  mode?: 'light' | 'dark';
};

const RoutineLight: FC<
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
    <circle cx={8} cy={8} r={6.5} fill="#E7EFFD" stroke="#3574F0" />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M7 8.00003V6.00003H8.537C9.303 6.00003 10 6.31263 10 6.95363C10 7.59463 9.285 8.00003 8.547 8.00003H7ZM9.36 8.82763C10.175 8.58963 11 8.1095 11 6.91263C11 5.71577 9.94885 4.99963 8.622 4.99963H6V10.9996H7V9.00003H8.328L9.773 10.9996H11L9.36 8.82763Z"
      fill="#3574F0"
    />
  </svg>
);

const RoutineDark: FC<
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
    <circle cx={8} cy={8} r={6.5} fill="#25324D" stroke="#548AF7" />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M7 8.00003V6.00003H8.537C9.303 6.00003 10 6.31263 10 6.95363C10 7.59463 9.285 8.00003 8.547 8.00003H7ZM9.36 8.82763C10.175 8.58963 11 8.1095 11 6.91263C11 5.71577 9.94885 4.99963 8.622 4.99963H6V10.9996H7V9.00003H8.328L9.773 10.9996H11L9.36 8.82763Z"
      fill="#548AF7"
    />
  </svg>
);

export const Routine: FC<RoutineProps> = ({
  size = 16,
  mode = 'light',
  className,
  'aria-label': ariaLabel,
  ...props
}) => {
  const SvgComponent = mode === 'light' ? RoutineLight : RoutineDark;

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

export default Routine;
