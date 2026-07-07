/**
 * Copyright 2000-2024 JetBrains s.r.o. and contributors.
 * Use of this source code is governed by the Apache 2.0 license.
 */
import type { FC } from 'react';
import { cn } from '@/lib/utils';
import { type SvgProps, sizeMap } from '../../utils';

export type InlayRenameInNoCodeFilesProps = SvgProps;

const InlayRenameInNoCodeFilesLight: FC<SvgProps> = ({
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

const InlayRenameInNoCodeFilesDark: FC<SvgProps> = ({
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
  size = 'md',
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
      size={sizeMap[size]}
      className={cn('inline-block flex-shrink-0', className)}
      role={ariaLabel ? 'img' : 'presentation'}
      aria-label={ariaLabel}
      aria-hidden={!ariaLabel}
      {...props}
    />
  );
};

export default InlayRenameInNoCodeFiles;
