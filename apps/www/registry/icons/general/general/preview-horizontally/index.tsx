/**
 * Copyright 2000-2024 JetBrains s.r.o. and contributors.
 * Use of this source code is governed by the Apache 2.0 license.
 */
import type { ComponentProps } from 'react';
import { cn } from '@/lib/utils';

export type PreviewHorizontallyProps = Omit<ComponentProps<'svg'>, 'size'> & {
  size?: 12 | 14 | 16 | 20 | 24;
  mode?: 'light' | 'dark';
};

export const PreviewHorizontally = ({
  size = 16,
  mode: _mode,
  className,
  'aria-label': ariaLabel,
  ...props
}: PreviewHorizontallyProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={cn('inline-block shrink-0', className)}
    role={ariaLabel ? 'img' : 'presentation'}
    aria-label={ariaLabel}
    aria-hidden={!ariaLabel}
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M4 3h8a1 1 0 0 1 1 1v2H3V4a1 1 0 0 1 1-1M2 7v5a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v3m1 0h10v5a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1z"
      className="fill-[#6C707E] dark:fill-[#CED0D6]"
    />
    <rect
      x={5}
      y={8.5}
      width={6}
      height={1}
      rx={0.5}
      className="fill-[#6C707E] dark:fill-[#CED0D6]"
    />
    <rect
      x={5}
      y={10.5}
      width={6}
      height={1}
      rx={0.5}
      className="fill-[#6C707E] dark:fill-[#CED0D6]"
    />
  </svg>
);

export default PreviewHorizontally;
