/**
 * Copyright 2000-2024 JetBrains s.r.o. and contributors.
 * Use of this source code is governed by the Apache 2.0 license.
 */
import type { ComponentProps } from 'react';
import { cn } from '@/lib/utils';

export type ShowAsTreeProps = Omit<ComponentProps<'svg'>, 'size'> & {
  size?: 12 | 14 | 16 | 20 | 24;
  mode?: 'light' | 'dark';
};

export const ShowAsTree = ({
  size = 16,
  mode: _mode,
  className,
  'aria-label': ariaLabel,
  ...props
}: ShowAsTreeProps) => (
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
      d="M8.934 2.49h1.989q.034.001.06.026l.926.99.146.154H14a.51.51 0 0 1 .51.51v2.737c0 .408-.268.603-.444.603H8.934c-.176 0-.444-.195-.444-.603V3.093c0-.408.268-.603.444-.603ZM8.934 10.49h1.989q.034.001.06.026l.926.99.146.154H14a.51.51 0 0 1 .51.51v2.737c0 .409-.268.603-.444.603H8.934c-.176 0-.444-.194-.444-.603v-3.814c0-.409.268-.603.444-.603Z"
      className="stroke-[#6C707E] dark:stroke-[#CED0D6]"
    />
    <path
      strokeLinecap="round"
      d="M1.5 1.5v3m0 0h5m-5 0V12a.5.5 0 0 0 .5.5h4.5"
      className="stroke-[#6C707E] dark:stroke-[#CED0D6]"
    />
  </svg>
);

export default ShowAsTree;
