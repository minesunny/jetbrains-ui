/**
 * Copyright 2000-2024 JetBrains s.r.o. and contributors.
 * Use of this source code is governed by the Apache 2.0 license.
 */
import type { ComponentProps } from 'react';
import { cn } from '@/lib/utils';

export const DockerRegistry = ({
  size = 16,
  className,
  'aria-label': ariaLabel,
  ...props
}: Omit<ComponentProps<'svg'>, 'size'> & {
  size?: 12 | 14 | 16 | 20 | 24;
}) => (
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
      d="M4.168 13.22C5.02 13.664 6.312 14 8 14s2.98-.337 3.832-.78c.427-.221.729-.462.92-.686.19-.227.248-.411.248-.534h1c0 .43-.193.834-.486 1.18-.294.347-.71.662-1.221.928C11.27 14.639 9.813 15 8 15c-1.812 0-3.27-.36-4.293-.892-.51-.266-.927-.58-1.221-.928C2.193 12.834 2 12.43 2 12h1c0 .123.057.307.249.534.19.224.492.465.919.686"
      className="fill-[#6C707E] dark:fill-[#CED0D6]"
    />
    <path
      d="M11.707.88a1 1 0 0 0-1.414 0L8.879 2.292a1 1 0 0 0 0 1.414l1.414 1.415a1 1 0 0 0 1.414 0l1.414-1.414a1 1 0 0 0 0-1.415zM4 1a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zM4 7a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1V8a1 1 0 0 0-1-1zM9 8a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1z"
      className="fill-[#4682FA] dark:fill-[#548AF7]"
    />
  </svg>
);

export default DockerRegistry;
