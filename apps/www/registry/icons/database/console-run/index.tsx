/**
 * Copyright 2000-2024 JetBrains s.r.o. and contributors.
 * Use of this source code is governed by the Apache 2.0 license.
 */
import type { FC } from 'react';
import { cn } from '@/lib/utils';
import { type SvgProps, sizeMap } from '../../utils';

export type ConsoleRunProps = SvgProps;

const ConsoleRunLight: FC<SvgProps> = ({
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
    <rect x={1.5} y={2.5} width={13} height={11} rx={1.5} stroke="#6C707E" />
    <path
      d="M7.95 9.327a.2.2 0 0 1 0 .346l-3.15 1.82a.2.2 0 0 1-.3-.175V7.682a.2.2 0 0 1 .3-.174z"
      stroke="#6C707E"
    />
    <path stroke="#6C707E" strokeWidth={0.5} d="M1.25 5.25H14.75V5.75H1.25z" />
  </svg>
);

const ConsoleRunDark: FC<SvgProps> = ({
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
    <rect x={1.5} y={2.5} width={13} height={11} rx={1.5} stroke="#CED0D6" />
    <path
      d="M7.95 9.327a.2.2 0 0 1 0 .346l-3.15 1.82a.2.2 0 0 1-.3-.175V7.682a.2.2 0 0 1 .3-.174z"
      stroke="#CED0D6"
    />
    <path stroke="#CED0D6" strokeWidth={0.5} d="M1.25 5.25H14.75V5.75H1.25z" />
  </svg>
);

export const ConsoleRun: FC<ConsoleRunProps> = ({
  size = 'md',
  mode = 'light',
  className,
  'aria-label': ariaLabel,
  ...props
}) => {
  const SvgComponent = mode === 'light' ? ConsoleRunLight : ConsoleRunDark;

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

export default ConsoleRun;
