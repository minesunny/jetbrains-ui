/**
 * Copyright 2000-2024 JetBrains s.r.o. and contributors.
 * Use of this source code is governed by the Apache 2.0 license.
 */
import type { ComponentProps, FC } from 'react';
import { cn } from '@/lib/utils';

export type InSelectionProps = Omit<ComponentProps<'svg'>, 'size'> & {
  size?: 12 | 14 | 16 | 20 | 24;
  mode?: 'light' | 'dark';
};

const InSelectionLight: FC<
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
      d="M2.5 3a.5.5 0 0 0 0 1h11a.5.5 0 0 0 0-1zm0 3a.5.5 0 0 0 0 1h7a.5.5 0 0 0 0-1zm0 6a.5.5 0 0 0 0 1h7a.5.5 0 0 0 0-1zM2 9.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5"
      fill="#6C707E"
    />
    <rect x={14} y={15} width={2} height={1} rx={0.5} fill="#6C707E" />
    <rect x={11} y={15} width={2} height={1} rx={0.5} fill="#6C707E" />
    <rect x={14} y={8} width={2} height={1} rx={0.5} fill="#6C707E" />
    <rect x={11} y={8} width={2} height={1} rx={0.5} fill="#6C707E" />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M13 9.5a.5.5 0 0 1 1 0v5a.5.5 0 0 1-1 0z"
      fill="#6C707E"
    />
  </svg>
);

const InSelectionDark: FC<
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
      d="M2.5 3a.5.5 0 0 0 0 1h11a.5.5 0 0 0 0-1zm0 3a.5.5 0 0 0 0 1h7a.5.5 0 0 0 0-1zm0 6a.5.5 0 0 0 0 1h7a.5.5 0 0 0 0-1zM2 9.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5"
      fill="#CED0D6"
    />
    <rect x={14} y={15} width={2} height={1} rx={0.5} fill="#CED0D6" />
    <rect x={11} y={15} width={2} height={1} rx={0.5} fill="#CED0D6" />
    <rect x={14} y={8} width={2} height={1} rx={0.5} fill="#CED0D6" />
    <rect x={11} y={8} width={2} height={1} rx={0.5} fill="#CED0D6" />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M13 9.5a.5.5 0 0 1 1 0v5a.5.5 0 0 1-1 0z"
      fill="#CED0D6"
    />
  </svg>
);

export const InSelection: FC<InSelectionProps> = ({
  size = 16,
  mode = 'light',
  className,
  'aria-label': ariaLabel,
  ...props
}) => {
  const SvgComponent = mode === 'light' ? InSelectionLight : InSelectionDark;

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

export default InSelection;
