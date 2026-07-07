/**
 * Copyright 2000-2024 JetBrains s.r.o. and contributors.
 * Use of this source code is governed by the Apache 2.0 license.
 */
import type { ComponentProps, FC } from 'react';
import { cn } from '@/lib/utils';

export type PreviewHorizontallyProps = Omit<ComponentProps<'svg'>, 'size'> & {
  size?: 12 | 14 | 16 | 20 | 24;
  mode?: 'light' | 'dark';
};

const PreviewHorizontallyLight: FC<
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
      d="M4 3h8a1 1 0 0 1 1 1v2H3V4a1 1 0 0 1 1-1M2 7v5a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v3m1 0h10v5a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1z"
      fill="#6C707E"
    />
    <rect x={5} y={8.5} width={6} height={1} rx={0.5} fill="#6C707E" />
    <rect x={5} y={10.5} width={6} height={1} rx={0.5} fill="#6C707E" />
  </svg>
);

const PreviewHorizontallyDark: FC<
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
      d="M4 3h8a1 1 0 0 1 1 1v2H3V4a1 1 0 0 1 1-1M2 7v5a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v3m1 0h10v5a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1z"
      fill="#CED0D6"
    />
    <rect x={5} y={8.5} width={6} height={1} rx={0.5} fill="#CED0D6" />
    <rect x={5} y={10.5} width={6} height={1} rx={0.5} fill="#CED0D6" />
  </svg>
);

export const PreviewHorizontally: FC<PreviewHorizontallyProps> = ({
  size = 16,
  mode = 'light',
  className,
  'aria-label': ariaLabel,
  ...props
}) => {
  const SvgComponent =
    mode === 'light' ? PreviewHorizontallyLight : PreviewHorizontallyDark;

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

export default PreviewHorizontally;
