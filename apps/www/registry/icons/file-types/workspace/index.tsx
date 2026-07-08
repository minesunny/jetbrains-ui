/**
 * Copyright 2000-2024 JetBrains s.r.o. and contributors.
 * Use of this source code is governed by the Apache 2.0 license.
 */
import type { ComponentProps } from 'react';
import { cn } from '@/lib/utils';

export type WorkspaceProps = Omit<ComponentProps<'svg'>, 'size'> & {
  size?: 12 | 14 | 16 | 20 | 24;
  mode?: 'light' | 'dark';
};

export const Workspace = ({
  size = 16,
  mode: _mode,
  className,
  'aria-label': ariaLabel,
  ...props
}: WorkspaceProps) => (
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
      d="M2.75 4C1.784 4 1 4.836 1 5.867v6.266C1 13.164 1.784 14 2.75 14h8.5c.966 0 1.75-.836 1.75-1.867V8a2 2 0 0 0-2-2H8.5L6.736 4.283A1 1 0 0 0 6.038 4z"
      className="fill-[#EBECF0] dark:fill-[#43454A]"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M8.094 7 6.038 5H2.75c-.354 0-.75.326-.75.867v6.266c0 .54.396.867.75.867h8.5c.354 0 .75-.326.75-.867V8a1 1 0 0 0-1-1zM8.5 6H11a2 2 0 0 1 2 2v4.133C13 13.164 12.216 14 11.25 14h-8.5C1.784 14 1 13.164 1 12.133V5.867C1 4.836 1.784 4 2.75 4h3.288a1 1 0 0 1 .698.283z"
      className="fill-[#6C707E] dark:fill-[#CED0D6]"
    />
    <path
      d="M4 2.5a.5.5 0 0 0 .5.5h3.538l2.056 2H13a1 1 0 0 1 1 1v4.5a.5.5 0 0 0 1 0V6a2 2 0 0 0-2-2h-2.5L8.736 2.283A1 1 0 0 0 8.038 2H4.5a.5.5 0 0 0-.5.5"
      className="fill-[#6C707E] dark:fill-[#CED0D6]"
    />
  </svg>
);

export default Workspace;
