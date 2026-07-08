/**
 * Copyright 2000-2024 JetBrains s.r.o. and contributors.
 * Use of this source code is governed by the Apache 2.0 license.
 */
import type { ComponentProps } from 'react';
import { cn } from '@/lib/utils';

export type HeaderLevelUpProps = Omit<ComponentProps<'svg'>, 'size'> & {
  size?: 12 | 14 | 16 | 20 | 24;
  mode?: 'light' | 'dark';
};

export const HeaderLevelUp = ({
  size = 16,
  mode: _mode,
  className,
  'aria-label': ariaLabel,
  ...props
}: HeaderLevelUpProps) => (
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
      d="M3 4.5a.5.5 0 0 0-1 0v7a.5.5 0 0 0 1 0V8h4v3.5a.5.5 0 0 0 1 0v-7a.5.5 0 0 0-1 0V7H3zM12.854 4.146a.5.5 0 0 0-.708 0l-2 2a.5.5 0 0 0 .708.708L12 5.707V11.5a.5.5 0 0 0 1 0V5.707l1.146 1.147a.5.5 0 0 0 .708-.708z"
      className="fill-[#6C707E] dark:fill-[#CED0D6]"
    />
  </svg>
);

export default HeaderLevelUp;
