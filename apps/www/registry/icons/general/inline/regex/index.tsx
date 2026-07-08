/**
 * Copyright 2000-2024 JetBrains s.r.o. and contributors.
 * Use of this source code is governed by the Apache 2.0 license.
 */
import type { ComponentProps } from 'react';
import { cn } from '@/lib/utils';

export type RegexProps = Omit<ComponentProps<'svg'>, 'size'> & {
  size?: 12 | 14 | 16 | 20 | 24;
  mode?: 'light' | 'dark';
};

export const Regex = ({
  size = 16,
  mode: _mode,
  className,
  'aria-label': ariaLabel,
  ...props
}: RegexProps) => (
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
      d="M4.618 12.35V14h-1.65v-1.65zM9.709 6.687l.68-.561 2.032 2.278-.808.688zM7.516 8.404l2.031-2.278.68.561-1.904 2.405zm-.765-2.55.28-1.029 2.933.876-.23.859zm3.222.757a.46.46 0 0 1-.324-.128.46.46 0 0 1-.127-.323q0-.188.127-.314a.46.46 0 0 1 .324-.128q.186 0 .314.128.127.128.127.314a.46.46 0 0 1-.127.323.43.43 0 0 1-.315.128M9.437 3.1H10.5l-.085 3.06h-.893zm.536 2.601 2.932-.875.28 1.028-2.983.705z"
      className="fill-[#6C707E] dark:fill-[#CED0D6]"
    />
  </svg>
);

export default Regex;
