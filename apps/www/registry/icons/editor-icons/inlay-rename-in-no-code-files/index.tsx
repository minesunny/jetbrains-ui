/**
 * Copyright 2000-2024 JetBrains s.r.o. and contributors.
 * Use of this source code is governed by the Apache 2.0 license.
 */
import type { ComponentProps, FC } from 'react';
import { cn } from '@/lib/utils';

export type InlayRenameInNoCodeFilesProps = Omit<
  ComponentProps<'svg'>,
  'size'
> & {
  size?: 12 | 14 | 16 | 20 | 24;
  mode?: 'light' | 'dark';
};

const InlayRenameInNoCodeFilesLight: FC<
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
    viewBox="0 0 12 12"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    role={role}
    aria-label={ariaLabel}
    aria-hidden={ariaHidden}
  >
    <rect x={1} y={5} width={10} height={1.5} rx={0.75} fill="#818594" />
    <rect x={1} y={9} width={6} height={1.5} rx={0.75} fill="#818594" />
    <rect x={1} y={1} width={10} height={1.5} rx={0.75} fill="#818594" />
  </svg>
);

const InlayRenameInNoCodeFilesDark: FC<
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
    viewBox="0 0 12 12"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    role={role}
    aria-label={ariaLabel}
    aria-hidden={ariaHidden}
  >
    <rect x={1} y={5} width={10} height={1.5} rx={0.75} fill="#9DA0A8" />
    <rect x={1} y={9} width={6} height={1.5} rx={0.75} fill="#9DA0A8" />
    <rect x={1} y={1} width={10} height={1.5} rx={0.75} fill="#9DA0A8" />
  </svg>
);

export const InlayRenameInNoCodeFiles: FC<InlayRenameInNoCodeFilesProps> = ({
  size = 16,
  mode = 'light',
  className,
  'aria-label': ariaLabel,
  ...props
}) => {
  const SvgComponent =
    mode === 'light'
      ? InlayRenameInNoCodeFilesLight
      : InlayRenameInNoCodeFilesDark;

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

export default InlayRenameInNoCodeFiles;
