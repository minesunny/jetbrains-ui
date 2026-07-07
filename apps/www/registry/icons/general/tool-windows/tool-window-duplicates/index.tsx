/**
 * Copyright 2000-2024 JetBrains s.r.o. and contributors.
 * Use of this source code is governed by the Apache 2.0 license.
 */
import type { ComponentProps, FC } from 'react';
import { cn } from '@/lib/utils';

export type ToolWindowDuplicatesProps = Omit<ComponentProps<'svg'>, 'size'> & {
  size?: 12 | 14 | 16 | 20 | 24;
  mode?: 'light' | 'dark';
};

const ToolWindowDuplicatesLight: FC<
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
    <rect x={1.5} y={5.5} width={9} height={9} rx={1.5} stroke="#6C707E" />
    <path
      d="M4.5 3.5H11A1.5 1.5 0 0 1 12.5 5v6.5"
      stroke="#6C707E"
      strokeLinecap="round"
    />
    <path
      d="M6.5 1.5H13A1.5 1.5 0 0 1 14.5 3v6.5"
      stroke="#6C707E"
      strokeLinecap="round"
    />
  </svg>
);

const ToolWindowDuplicatesDark: FC<
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
    <rect x={1.5} y={5.5} width={9} height={9} rx={1.5} stroke="#CED0D6" />
    <path
      d="M4.5 3.5H11A1.5 1.5 0 0 1 12.5 5v6.5"
      stroke="#CED0D6"
      strokeLinecap="round"
    />
    <path
      d="M6.5 1.5H13A1.5 1.5 0 0 1 14.5 3v6.5"
      stroke="#CED0D6"
      strokeLinecap="round"
    />
  </svg>
);

export const ToolWindowDuplicates: FC<ToolWindowDuplicatesProps> = ({
  size = 16,
  mode = 'light',
  className,
  'aria-label': ariaLabel,
  ...props
}) => {
  const SvgComponent =
    mode === 'light' ? ToolWindowDuplicatesLight : ToolWindowDuplicatesDark;

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

export default ToolWindowDuplicates;
