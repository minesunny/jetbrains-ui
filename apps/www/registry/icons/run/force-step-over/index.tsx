/**
 * Copyright 2000-2024 JetBrains s.r.o. and contributors.
 * Use of this source code is governed by the Apache 2.0 license.
 */
import type { ComponentProps } from 'react';
import { cn } from '@/lib/utils';

export type ForceStepOverProps = Omit<ComponentProps<'svg'>, 'size'> & {
  size?: 12 | 14 | 16 | 20 | 24;
  mode?: 'light' | 'dark';
};

export const ForceStepOver = ({
  size = 16,
  mode: _mode,
  className,
  'aria-label': ariaLabel,
  ...props
}: ForceStepOverProps) => (
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
    <rect
      x={2}
      y={13}
      width={12}
      height={1}
      rx={0.5}
      className="fill-[#6C707E] dark:fill-[#CED0D6]"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M13.48 4.728a.5.5 0 0 1 .502.498L14 9.47l.002.5-.5.002-4.243.017a.5.5 0 1 1-.004-1l1.11-.004-2.742-2.312-2.775 2.686a.5.5 0 0 1-.696-.719l3.1-3 .325-.314.345.291 3.938 3.32q.024.02.043.041l1.095-.004-.005-1.195L7.516 2.79 2.854 7.452a.5.5 0 0 1-.707-.707l5-5 .337-.337.353.32 5.15 4.693-.005-1.19a.5.5 0 0 1 .498-.503"
      className="fill-[#DB3B4B] dark:fill-[#DB5C5C]"
    />
  </svg>
);

export default ForceStepOver;
