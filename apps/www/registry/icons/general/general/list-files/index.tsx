/**
 * Copyright 2000-2024 JetBrains s.r.o. and contributors.
 * Use of this source code is governed by the Apache 2.0 license.
 */
import type { ComponentProps, FC } from 'react';
import { cn } from '@/lib/utils';

export type ListFilesProps = Omit<ComponentProps<'svg'>, 'size'> & {
  size?: 12 | 14 | 16 | 20 | 24;
  mode?: 'light' | 'dark';
};

const ListFilesLight: FC<
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
    <rect x={2.5} y={1.5} width={11} height={13} rx={1.5} stroke="#6C707E" />
    <rect x={5} y={5} width={6} height={1} rx={0.5} fill="#6C707E" />
    <rect x={5} y={7.5} width={6} height={1} rx={0.5} fill="#6C707E" />
    <rect x={5} y={10} width={6} height={1} rx={0.5} fill="#6C707E" />
  </svg>
);

const ListFilesDark: FC<
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
    <rect x={2.5} y={1.5} width={11} height={13} rx={1.5} stroke="#CED0D6" />
    <rect x={5} y={5} width={6} height={1} rx={0.5} fill="#CED0D6" />
    <rect x={5} y={7.5} width={6} height={1} rx={0.5} fill="#CED0D6" />
    <rect x={5} y={10} width={6} height={1} rx={0.5} fill="#CED0D6" />
  </svg>
);

export const ListFiles: FC<ListFilesProps> = ({
  size = 16,
  mode = 'light',
  className,
  'aria-label': ariaLabel,
  ...props
}) => {
  const SvgComponent = mode === 'light' ? ListFilesLight : ListFilesDark;

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

export default ListFiles;
