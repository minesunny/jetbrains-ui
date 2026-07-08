/**
 * Copyright 2000-2024 JetBrains s.r.o. and contributors.
 * Use of this source code is governed by the Apache 2.0 license.
 */
import type { ComponentProps } from 'react';
import { cn } from '@/lib/utils';

export type DataprocToolWindowProps = Omit<ComponentProps<'svg'>, 'size'> & {
  size?: 12 | 14 | 16 | 20 | 24;
  mode?: 'light' | 'dark';
};

export const DataprocToolWindow = ({
  size = 16,
  mode: _mode,
  className,
  'aria-label': ariaLabel,
  ...props
}: DataprocToolWindowProps) => (
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
      d="M9.248 5.5c0 .482-.228.912-.581 1.186l2.403 1.56A1.499 1.499 0 0 1 10.248 11a1.5 1.5 0 0 1-1.497-1.596l-2.147 1.328a1.5 1.5 0 1 1-.356-2.647V5.5a1.5 1.5 0 1 1 3 0m-1 0a.5.5 0 0 1-.713.452l-.112-.072A.499.499 0 0 1 7.748 5a.5.5 0 0 1 .5.5m-1 3.658v-2.2l1.737 1.126zm-1 .342a.5.5 0 0 1-.2.4l-.077.048a.5.5 0 1 1 .277-.448m4.5 0a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0"
      className="fill-[#6C707E] dark:fill-[#CED0D6]"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M11.417 1a1 1 0 0 1 .869.504l3.428 6a1 1 0 0 1 0 .992l-3.428 6a1 1 0 0 1-.869.504H4.578a1 1 0 0 1-.868-.504l-3.429-6a1 1 0 0 1 0-.992l3.429-6A1 1 0 0 1 4.578 1zM4.578 14 1.149 8l3.429-6h6.84l3.428 6-3.429 6z"
      className="fill-[#6C707E] dark:fill-[#CED0D6]"
    />
  </svg>
);

export default DataprocToolWindow;
